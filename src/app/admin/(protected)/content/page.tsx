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
        <div className="w-8 h-8 border-4 border-[#ef0d11] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-headline font-bold text-[#0302cb]">Content Management</h1>
        <p className="text-slate-500">Manage blog posts, team members, and other content.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-headline font-bold text-[#0302cb]">Blog Posts</h2>
            <Link href="/admin/content/blog/new" className="px-3 py-1.5 bg-[#ef0d11] text-white rounded-lg text-sm font-medium hover:bg-[#b90000] transition-all flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">add</span>
              Add Post
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {blogPosts.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <span className="material-symbols-outlined text-slate-300 text-4xl">article</span>
                <p className="text-slate-500 mt-2">No blog posts yet</p>
              </div>
            ) : (
              blogPosts.slice(0, 5).map((post) => (
                <div key={post.id} className="px-6 py-4 hover:bg-slate-50 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{post.title}</p>
                      <p className="text-sm text-slate-500">{post.category || 'Uncategorized'}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {post.status}
                      </span>
                      <Link href={`/admin/content/blog/${post.id}`} className="p-1.5 text-slate-400 hover:text-[#ef0d11] hover:bg-[#ef0d11]/10 rounded transition-all">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {blogPosts.length > 5 ? (
            <div className="px-6 py-3 border-t border-slate-100 text-center">
              <Link href="/admin/content/blog" className="text-sm text-[#ef0d11] hover:underline">View all {blogPosts.length} posts</Link>
            </div>
          ) : blogPosts.length > 0 ? (
            <div className="px-6 py-3 border-t border-slate-100 text-center">
              <Link href="/admin/content/blog" className="text-sm text-[#ef0d11] hover:underline">Manage all posts</Link>
            </div>
          ) : null}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-headline font-bold text-[#0302cb]">Team Members</h2>
            <Link href="/admin/content/team/new" className="px-3 py-1.5 bg-[#ef0d11] text-white rounded-lg text-sm font-medium hover:bg-[#b90000] transition-all flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">add</span>
              Add Member
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {teamMembers.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <span className="material-symbols-outlined text-slate-300 text-4xl">groups</span>
                <p className="text-slate-500 mt-2">No team members yet</p>
              </div>
            ) : (
              teamMembers.slice(0, 5).map((member) => (
                <div key={member.id} className="px-6 py-4 hover:bg-slate-50 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0302cb] rounded-full flex items-center justify-center text-white font-medium">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{member.name}</p>
                        <p className="text-sm text-slate-500">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        member.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {member.status}
                      </span>
                      <Link href={`/admin/content/team/${member.id}`} className="p-1.5 text-slate-400 hover:text-[#ef0d11] hover:bg-[#ef0d11]/10 rounded transition-all">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {teamMembers.length > 5 ? (
            <div className="px-6 py-3 border-t border-slate-100 text-center">
              <Link href="/admin/content/team" className="text-sm text-[#ef0d11] hover:underline">View all {teamMembers.length} members</Link>
            </div>
          ) : teamMembers.length > 0 ? (
            <div className="px-6 py-3 border-t border-slate-100 text-center">
              <Link href="/admin/content/team" className="text-sm text-[#ef0d11] hover:underline">Manage all members</Link>
            </div>
          ) : null}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="font-headline font-bold text-[#0302cb]">Quick Actions</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/admin/content/blog/new" className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all text-left">
            <span className="material-symbols-outlined text-[#ef0d11]">article</span>
            <div>
              <p className="font-medium text-slate-900">Write Blog Post</p>
              <p className="text-sm text-slate-500">Create new content</p>
            </div>
          </Link>
          <Link href="/admin/content/team/new" className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all text-left">
            <span className="material-symbols-outlined text-[#ef0d11]">person_add</span>
            <div>
              <p className="font-medium text-slate-900">Add Team Member</p>
              <p className="text-sm text-slate-500">Update team page</p>
            </div>
          </Link>
          <Link href="/admin/jobs/new" className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all text-left">
            <span className="material-symbols-outlined text-[#ef0d11]">work</span>
            <div>
              <p className="font-medium text-slate-900">Post Job Listing</p>
              <p className="text-sm text-slate-500">Add career opportunity</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
