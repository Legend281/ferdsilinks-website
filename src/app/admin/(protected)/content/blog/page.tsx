'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/types/database';
import toast from 'react-hot-toast';
import { Pagination } from '@/components/admin/Pagination';

const ITEMS_PER_PAGE = 10;

export default function BlogManagementPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/admin/blog');
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        toast.error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast.error('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) return;
    
    try {
      const response = await fetch(`/api/admin/blog/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setPosts(posts.filter(post => post.id !== id));
        toast.success('Post deleted successfully');
      } else {
        toast.error('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error('Failed to delete post');
    }
  };

  const handleFeaturedChange = async (id: string, featured: boolean) => {
    try {
      const response = await fetch(`/api/admin/blog/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featured }),
      });
      
      if (response.ok) {
        setPosts(posts.map(post => 
          post.id === id ? { ...post, featured } : { ...post, featured: false }
        ));
        toast.success(featured ? 'Featured post' : 'Removed from featured');
      } else {
        toast.error('Failed to update');
      }
    } catch (error) {
      console.error('Error updating:', error);
      toast.error('Failed to update');
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'published' | 'draft') => {
    try {
      const response = await fetch(`/api/admin/blog/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (response.ok) {
        setPosts(posts.map(post => 
          post.id === id ? { ...post, status: newStatus } : post
        ));
        toast.success(`Post ${newStatus === 'published' ? 'published' : 'unpublished'}`);
      } else {
        toast.error('Failed to update post status');
      }
    } catch (error) {
      console.error('Error updating post status:', error);
      toast.error('Failed to update post status');
    }
  };

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesFilter = filter === 'all' || post.status === filter;
      const matchesSearch = 
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        (post.category && post.category.toLowerCase().includes(search.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [posts, filter, search]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (newFilter: typeof filter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-[#ef0d11] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-headline font-bold text-[#0302cb]">Blog Posts</h1>
          <p className="text-slate-500">Create and manage blog posts</p>
        </div>
        <Link
          href="/admin/content/blog/new"
          className="px-4 py-2 bg-[#ef0d11] text-white rounded-lg font-medium hover:bg-[#b90000] transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          New Post
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="px-6 py-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'all' ? 'bg-[#0302cb] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All ({posts.length})
            </button>
            <button
              onClick={() => handleFilterChange('published')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'published' ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Published ({posts.filter(p => p.status === 'published').length})
            </button>
            <button
              onClick={() => handleFilterChange('draft')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'draft' ? 'bg-yellow-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Drafts ({posts.filter(p => p.status === 'draft').length})
            </button>
          </div>
          
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none w-full md:w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="overflow-x-auto w-full">
              <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Post</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Featured</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedPosts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <span className="material-symbols-outlined text-slate-300 text-4xl">article</span>
                    <p className="text-slate-500 mt-2">No posts found</p>
                    <Link
                      href="/admin/content/blog/new"
                      className="text-[#ef0d11] hover:underline text-sm mt-1 inline-block"
                    >
                      Create your first post
                    </Link>
                  </td>
                </tr>
              ) : (
                paginatedPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-50 transition-all">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#0302cb] rounded-lg flex items-center justify-center overflow-hidden">
                          {post.cover_image ? (
                            <img src={post.cover_image} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <span className="material-symbols-outlined text-white">article</span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-slate-900 line-clamp-1">{post.title}</p>
                          <p className="text-sm text-slate-500 line-clamp-1">{post.excerpt}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                        {post.category || 'Uncategorized'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleFeaturedChange(post.id, !post.featured)}
                        className={`p-2 rounded-lg transition-all ${
                          post.featured 
                            ? 'bg-yellow-100 text-yellow-600' 
                            : 'bg-slate-100 text-slate-400 hover:text-yellow-500 hover:bg-yellow-50'
                        }`}
                        title={post.featured ? 'Remove from featured' : 'Set as featured'}
                      >
                        <span className="material-symbols-outlined text-lg">star</span>
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                        post.status === 'published' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-500">
                        {formatDate(post.published_at || post.created_at)}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Link
                          href={`/admin/content/blog/${post.id}`}
                          className="p-2 text-slate-400 hover:text-[#ef0d11] hover:bg-[#ef0d11]/10 rounded-lg transition-all"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </Link>
                        {post.status === 'draft' ? (
                          <button
                            onClick={() => handleStatusChange(post.id, 'published')}
                            className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                            title="Publish"
                          >
                            <span className="material-symbols-outlined text-lg">publish</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleStatusChange(post.id, 'draft')}
                            className="p-2 text-slate-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-all"
                            title="Unpublish"
                          >
                            <span className="material-symbols-outlined text-lg">unpublished</span>
                          </button>
                        )}
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          title="View"
                        >
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
            </div>
        </div>

        <Pagination
          currentPage={currentPage}
          totalItems={filteredPosts.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
