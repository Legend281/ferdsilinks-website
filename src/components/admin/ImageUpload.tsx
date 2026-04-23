'use client';

import { useState, useCallback } from 'react';
import { createClient } from '@/lib/supabase/supabase-browser-client';
import toast from 'react-hot-toast';

interface ImageUploadProps {
  bucket: 'blog-covers' | 'team-photos';
  value?: string;
  onChange: (url: string) => void;
  folder?: string;
  className?: string;
}

export default function ImageUpload({
  bucket,
  value,
  onChange,
  folder = '',
  className = '',
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const uploadFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      toast.error('Image must be smaller than 5MB');
      return;
    }

    setUploading(true);

    try {
      const supabase = createClient();
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = folder ? `${folder}/${fileName}` : fileName;

      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) {
        throw error;
      }

      const { data: urlData } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      onChange(urlData.publicUrl);
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
    }
  }, [bucket, folder, onChange]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      uploadFile(file);
    }
  }, [uploadFile]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadFile(file);
    }
  }, [uploadFile]);

  const handleRemove = useCallback(async () => {
    if (!value) return;

    try {
      const supabase = createClient();
      const filePath = value.split(`${bucket}/`)[1];
      
      if (filePath) {
        await supabase.storage.from(bucket).remove([filePath]);
      }
      
      onChange('');
      toast.success('Image removed');
    } catch (error) {
      console.error('Remove error:', error);
      onChange('');
    }
  }, [bucket, value, onChange]);

  return (
    <div className={`space-y-2 ${className}`}>
      {value ? (
        <div className="relative group">
          <div className="rounded-lg overflow-hidden bg-slate-100 border-2 border-slate-200">
            <img
              src={value}
              alt="Preview"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 rounded-lg">
            <label className="px-3 py-2 bg-white text-slate-700 rounded-lg cursor-pointer text-sm font-medium hover:bg-slate-100 transition-colors">
              Change
              <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
                disabled={uploading}
              />
            </label>
            <button
              type="button"
              onClick={handleRemove}
              className="px-3 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          </div>
          {uploading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      ) : (
        <div
          className={`relative border-2 border-dashed rounded-lg transition-colors ${
            dragOver
              ? 'border-[#ef0d11] bg-[#ef0d11]/5'
              : 'border-slate-300 hover:border-slate-400'
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          <div className="p-8 text-center">
            <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">
              cloud_upload
            </span>
            <p className="text-sm text-slate-600 mb-2">
              Drag and drop an image here, or
            </p>
            <label className="px-4 py-2 bg-[#0302cb] text-white rounded-lg cursor-pointer text-sm font-medium hover:bg-[#001a3a] transition-colors inline-flex items-center gap-2">
              {uploading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Uploading...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-lg">upload</span>
                  Choose File
                </>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
                disabled={uploading}
              />
            </label>
            <p className="text-xs text-slate-500 mt-2">
              PNG, JPG, GIF up to 5MB
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
