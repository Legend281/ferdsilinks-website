'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogPost, TeamMember } from '@/types/database';

export default function ContentPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, membersRes] = await Promise.all([
          fetch('/api/admin/blog'),
          fetch('/api/admin/team'),
        ]);
        
        if (postsRes.ok) {
          const postsData = await postsRes.json();
          setBlogPosts(postsData);
        }
        if (membersRes.ok) {
          const membersData = await membersRes.json();
          setTeamMembers(membersData);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-[#cf7000] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-headline font-bold text-[#002147]">Content Management</h1>
        <p className="text-gray-500">Manage blog posts, team members, and other content.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-headline font-bold text-[#002147]">Blog Posts</h2>
            <Link href="/admin/content/blog/new" className="px-3 py-1.5 bg-[#cf7000] text-white rounded-lg text-sm font-medium hover:bg-[#b86300] transition-all flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">add</span>
              Add Post
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {blogPosts.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <span className="material-symbols-outlined text-gray-300 text-4xl">article</span>
                <p className="text-gray-500 mt-2">No blog posts yet</p>
              </div>
            ) : (
              blogPosts.slice(0, 5).map((post) => (
                <div key={post.id} className="px-6 py-4 hover:bg-gray-50 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{post.title}</p>
                      <p className="text-sm text-gray-500">{post.category || 'Uncategorized'}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {post.status}
                      </span>
                      <Link href={`/admin/content/blog/${post.id}`} className="p-1.5 text-gray-400 hover:text-[#cf7000] hover:bg-[#cf7000]/10 rounded transition-all">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {blogPosts.length > 5 ? (
            <div className="px-6 py-3 border-t border-gray-100 text-center">
              <Link href="/admin/content/blog" className="text-sm text-[#cf7000] hover:underline">View all {blogPosts.length} posts</Link>
            </div>
          ) : blogPosts.length > 0 ? (
            <div className="px-6 py-3 border-t border-gray-100 text-center">
              <Link href="/admin/content/blog" className="text-sm text-[#cf7000] hover:underline">Manage all posts</Link>
            </div>
          ) : null}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-headline font-bold text-[#002147]">Team Members</h2>
            <Link href="/admin/content/team/new" className="px-3 py-1.5 bg-[#cf7000] text-white rounded-lg text-sm font-medium hover:bg-[#b86300] transition-all flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">add</span>
              Add Member
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {teamMembers.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <span className="material-symbols-outlined text-gray-300 text-4xl">groups</span>
                <p className="text-gray-500 mt-2">No team members yet</p>
              </div>
            ) : (
              teamMembers.slice(0, 5).map((member) => (
                <div key={member.id} className="px-6 py-4 hover:bg-gray-50 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-medium">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        member.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {member.status}
                      </span>
                      <Link href={`/admin/content/team/${member.id}`} className="p-1.5 text-gray-400 hover:text-[#cf7000] hover:bg-[#cf7000]/10 rounded transition-all">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {teamMembers.length > 5 ? (
            <div className="px-6 py-3 border-t border-gray-100 text-center">
              <Link href="/admin/content/team" className="text-sm text-[#cf7000] hover:underline">View all {teamMembers.length} members</Link>
            </div>
          ) : teamMembers.length > 0 ? (
            <div className="px-6 py-3 border-t border-gray-100 text-center">
              <Link href="/admin/content/team" className="text-sm text-[#cf7000] hover:underline">Manage all members</Link>
            </div>
          ) : null}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-headline font-bold text-[#002147]">Quick Actions</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/admin/content/blog/new" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all text-left">
            <span className="material-symbols-outlined text-[#cf7000]">article</span>
            <div>
              <p className="font-medium text-gray-900">Write Blog Post</p>
              <p className="text-sm text-gray-500">Create new content</p>
            </div>
          </Link>
          <Link href="/admin/content/team/new" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all text-left">
            <span className="material-symbols-outlined text-[#cf7000]">person_add</span>
            <div>
              <p className="font-medium text-gray-900">Add Team Member</p>
              <p className="text-sm text-gray-500">Update team page</p>
            </div>
          </Link>
          <Link href="/admin/jobs/new" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all text-left">
            <span className="material-symbols-outlined text-[#cf7000]">work</span>
            <div>
              <p className="font-medium text-gray-900">Post Job Listing</p>
              <p className="text-sm text-gray-500">Add career opportunity</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
