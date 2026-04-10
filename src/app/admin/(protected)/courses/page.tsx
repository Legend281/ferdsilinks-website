'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Course } from '@/types/database';
import toast from 'react-hot-toast';
import { Pagination } from '@/components/admin/Pagination';

const ITEMS_PER_PAGE = 10;

export default function CoursesManagementPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'published' | 'draft' | 'archived'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/admin/courses');
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        toast.error('Failed to fetch courses');
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
      toast.error('Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this course? This action cannot be undone.')) return;
    
    try {
      const response = await fetch(`/api/admin/courses/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setCourses(courses.filter(c => c.id !== id));
        toast.success('Course deleted');
      } else {
        toast.error('Failed to delete course');
      }
    } catch (error) {
      console.error('Error deleting course:', error);
      toast.error('Failed to delete course');
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'published' | 'draft' | 'archived') => {
    try {
      const response = await fetch(`/api/admin/courses/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (response.ok) {
        setCourses(courses.map(c => 
          c.id === id ? { ...c, status: newStatus } : c
        ));
        toast.success(`Course ${newStatus}`);
      } else {
        toast.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const handleFeaturedChange = async (id: string, featured: boolean) => {
    try {
      const response = await fetch(`/api/admin/courses/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featured }),
      });
      
      if (response.ok) {
        setCourses(courses.map(c => 
          c.id === id ? { ...c, featured } : c
        ));
        toast.success(featured ? 'Course featured' : 'Course unfeatured');
      } else {
        toast.error('Failed to update');
      }
    } catch (error) {
      console.error('Error updating:', error);
      toast.error('Failed to update');
    }
  };

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesFilter = filter === 'all' || course.status === filter;
      const matchesSearch = 
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        (course.category && course.category.toLowerCase().includes(search.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [courses, filter, search]);

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

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

  const formatPrice = (price: number, currency: string) => {
    if (price === 0) return 'Free';
    return `${currency} ${price.toLocaleString()}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-700';
      case 'draft': return 'bg-yellow-100 text-yellow-700';
      case 'archived': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-[#cf7000] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-headline font-bold text-[#002147]">Courses</h1>
          <p className="text-gray-500">Manage Ferdsilinks Academy courses</p>
        </div>
        <Link
          href="/admin/courses/new"
          className="px-4 py-2 bg-[#cf7000] text-white rounded-lg font-medium hover:bg-[#b86300] transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          Add Course
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'all' ? 'bg-[#002147] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All ({courses.length})
            </button>
            <button
              onClick={() => handleFilterChange('published')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'published' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Published ({courses.filter(c => c.status === 'published').length})
            </button>
            <button
              onClick={() => handleFilterChange('draft')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'draft' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Drafts ({courses.filter(c => c.status === 'draft').length})
            </button>
          </div>
          
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none w-full md:w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedCourses.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <span className="material-symbols-outlined text-gray-300 text-4xl">school</span>
                    <p className="text-gray-500 mt-2">No courses found</p>
                    <Link
                      href="/admin/courses/new"
                      className="text-[#cf7000] hover:underline text-sm mt-1 inline-block"
                    >
                      Create your first course
                    </Link>
                  </td>
                </tr>
              ) : (
                paginatedCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50 transition-all">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-10 bg-[#002147] rounded-lg flex items-center justify-center overflow-hidden">
                          {course.cover_image ? (
                            <img src={course.cover_image} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <span className="material-symbols-outlined text-white text-lg">school</span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 line-clamp-1">{course.title}</p>
                          <p className="text-sm text-gray-500 line-clamp-1">{course.short_description || course.description?.slice(0, 50)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                        {course.category || 'General'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-900">
                        {formatPrice(course.price, course.currency)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                        {course.level}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleFeaturedChange(course.id, !course.featured)}
                        className={`p-2 rounded-lg transition-all ${
                          course.featured ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-400 hover:bg-yellow-50'
                        }`}
                      >
                        <span className="material-symbols-outlined text-lg">star</span>
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${getStatusColor(course.status)}`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Link
                          href={`/admin/courses/${course.id}`}
                          className="p-2 text-gray-400 hover:text-[#cf7000] hover:bg-[#cf7000]/10 rounded-lg transition-all"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </Link>
                        {course.status === 'draft' && (
                          <button
                            onClick={() => handleStatusChange(course.id, 'published')}
                            className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                            title="Publish"
                          >
                            <span className="material-symbols-outlined text-lg">publish</span>
                          </button>
                        )}
                        {course.status === 'published' && (
                          <button
                            onClick={() => handleStatusChange(course.id, 'draft')}
                            className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-all"
                            title="Unpublish"
                          >
                            <span className="material-symbols-outlined text-lg">unpublished</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(course.id)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
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

        <Pagination
          currentPage={currentPage}
          totalItems={filteredCourses.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
