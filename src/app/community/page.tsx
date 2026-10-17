'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Share2, 
  Bookmark, 
  PlusCircle, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Send, 
  Award, 
  Filter, 
  Code, 
  Globe,
  Search
} from 'lucide-react';
import { COMMUNITY_POSTS, INITIAL_USERS } from '@/data/mockData';
import { CommunityPost } from '@/types';

export default function CommunityPage() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<CommunityPost[]>(COMMUNITY_POSTS);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Create post modal state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [postCategory, setPostCategory] = useState<'Project' | 'Achievement' | 'Question' | 'Hackathon'>('Project');
  const [postTags, setPostTags] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [githubLink, setGithubLink] = useState('');

  // Comment state per post
  const [commentInputs, setCommentInputs] = useState<{ [key: string]: string }>({});
  const [commentsList, setCommentsList] = useState<{ [key: string]: string[] }>({
    'post-1': ['Awesome project! Which model weights did you use for the drone camera?', 'Congratulations on the 1st prize!'],
    'post-2': ['Would love to join the OS study room tonight!'],
  });

  const handleLike = (id: string) => {
    setPosts(prev => prev.map(p => {
      if (p.id === id) {
        return {
          ...p,
          isLiked: !p.isLiked,
          likesCount: p.isLiked ? p.likesCount - 1 : p.likesCount + 1,
        };
      }
      return p;
    }));
  };

  const handleAddComment = (postId: string) => {
    const text = commentInputs[postId]?.trim();
    if (!text) return;

    setCommentsList(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), `${user?.name || 'Student'}: ${text}`],
    }));

    setPosts(prev => prev.map(p => (p.id === postId ? { ...p, commentsCount: p.commentsCount + 1 } : p)));
    setCommentInputs(prev => ({ ...prev, [postId]: '' }));
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postContent.trim()) return;

    const newPost: CommunityPost = {
      id: 'post-' + Date.now(),
      author: {
        id: user?.id || 'usr_temp',
        name: user?.name || 'Student Builder',
        avatar: user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
        college: user?.college || 'VTU Engineering Institute',
        branch: user?.branch || 'Computer Science',
        role: user?.role || 'student',
        verifiedBadge: true,
      },
      timestamp: 'Just now',
      category: postCategory,
      content: postContent,
      tags: postTags ? postTags.split(',').map(t => t.trim()) : ['Engineering', 'Karnataka'],
      likesCount: 1,
      commentsCount: 0,
      sharesCount: 0,
      isLiked: true,
      projectLink: projectLink || undefined,
      githubLink: githubLink || undefined,
    };

    setPosts([newPost, ...posts]);
    setPostContent('');
    setPostTags('');
    setProjectLink('');
    setGithubLink('');
    setShowCreateModal(false);
  };

  const filteredPosts = posts.filter(p => {
    if (activeCategory !== 'ALL' && p.category !== activeCategory) return false;
    if (searchQuery.trim()) {
      const tokens = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
      const fullSearchable = `${p.author.name} ${p.author.college} ${p.content} ${p.tags.join(' ')} ${p.category}`.toLowerCase();
      const allMatch = tokens.every(tok => fullSearchable.includes(tok));
      if (!allMatch) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Student Profile Summary Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={user?.avatar || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80'}
                alt={user?.name || 'User'}
                className="w-14 h-14 rounded-2xl object-cover shadow-md"
              />
              <div>
                <div className="flex items-center gap-1.5 font-extrabold text-sm text-slate-900 dark:text-white">
                  <span>{user?.name || 'Guest Student'}</span>
                  {user?.isVerified && <CheckCircle2 className="w-4 h-4 text-blue-500" />}
                </div>
                <div className="text-xs text-slate-500">
                  {user?.college || 'RV College of Engineering'}
                </div>
                <div className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                  {user?.branch || 'CSE'} • {user?.year || '3rd Year'}
                </div>
              </div>
            </div>

            {user?.bio && (
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                {user.bio}
              </p>
            )}

            {/* Reputation & Connections */}
            <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-100 dark:border-slate-800 text-center text-xs">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Reputation</div>
                <div className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                  {user?.reputationScore || 88} / 100
                </div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Followers</div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">340</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Following</div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">182</div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold text-slate-400">Endorsed Skills:</span>
              <div className="flex flex-wrap gap-1">
                {(user?.skills || ['React', 'Next.js', 'Python', 'VTU SGPA', 'DSA']).map((s, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2 text-slate-500">
              {user?.githubUrl && (
                <a href={user.githubUrl} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white flex items-center gap-1 text-[11px]">
                  <Code className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {user?.linkedinUrl && (
                <a href={user.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-blue-600 flex items-center gap-1 text-[11px]">
                  <Globe className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              )}
              {user?.portfolioUrl && (
                <a href={user.portfolioUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-500 flex items-center gap-1 text-xs">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-[10px]">Portfolio</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Center & Right Column: Community Feed & Create Post */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Create Post Bar */}
          <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <img
                src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'}
                alt="user"
                className="w-9 h-9 rounded-full object-cover shrink-0"
              />
              <button
                onClick={() => setShowCreateModal(true)}
                className="w-full text-left px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-850 hover:bg-slate-200 text-xs text-slate-500 transition-colors"
              >
                Share a project, achievement, question, or hackathon experience...
              </button>
            </div>

            <button
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 shrink-0"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post</span>
            </button>
          </div>

          {/* Filter Tabs & Search Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold">
              {['ALL', 'Project', 'Achievement', 'Question', 'Hackathon'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl transition-colors whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {cat === 'ALL' ? 'All Posts' : `${cat}s`}
                </button>
              ))}
            </div>

            <div className="relative max-w-xs w-full">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts, topics, tags..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Posts List */}
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm"
              >
                {/* Author row */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900 dark:text-white">
                        <span>{post.author.name}</span>
                        {post.author.verifiedBadge && (
                          <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        )}
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold">
                          {post.category}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {post.author.college} • {post.author.branch}
                      </div>
                      <div className="text-[10px] text-slate-400">{post.timestamp}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                  {post.content}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                {(post.projectLink || post.githubLink) && (
                  <div className="flex flex-wrap gap-2 pt-1 text-xs">
                    {post.projectLink && (
                      <a
                        href={post.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {post.githubLink && (
                      <a
                        href={post.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold"
                      >
                        <Code className="w-3.5 h-3.5" />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                )}

                {/* Optional Image */}
                {post.imageUrl && (
                  <div className="rounded-2xl overflow-hidden bg-slate-900 h-64 w-full">
                    <img src={post.imageUrl} alt="post visual" className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Interactions Row: Like, Comment, Share */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-1.5 font-bold transition-colors ${
                      post.isLiked ? 'text-rose-500' : 'hover:text-rose-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-rose-500' : ''}`} />
                    <span>{post.likesCount} Likes</span>
                  </button>

                  <div className="flex items-center gap-1.5 font-semibold">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.commentsCount} Comments</span>
                  </div>

                  <button className="flex items-center gap-1.5 hover:text-blue-500 font-semibold">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>

                {/* Comments Section */}
                <div className="pt-2 space-y-2 border-t border-slate-100 dark:border-slate-800/50">
                  {commentsList[post.id]?.map((c, i) => (
                    <div key={i} className="text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-850 text-slate-700 dark:text-slate-300">
                      {c}
                    </div>
                  ))}

                  <div className="flex gap-2 pt-1">
                    <input
                      type="text"
                      value={commentInputs[post.id] || ''}
                      onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                      placeholder="Add a comment or endorsement..."
                      className="flex-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => handleAddComment(post.id)}
                      className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
                    >
                      Reply
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Create Post Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="glass-card rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Create a Community Post</h3>
              <button onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-slate-600">
                ✕
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Post Category</label>
                <select
                  value={postCategory}
                  onChange={(e: any) => setPostCategory(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold"
                >
                  <option value="Project">Project Showcase</option>
                  <option value="Achievement">Achievement / Placement</option>
                  <option value="Question">Academic / Viva Doubt</option>
                  <option value="Hackathon">Hackathon Teammate Search</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">What would you like to share?</label>
                <textarea
                  rows={4}
                  required
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="Describe your project, findings, or questions for fellow Karnataka students..."
                  className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Tags (comma separated)</label>
                <input
                  type="text"
                  value={postTags}
                  onChange={(e) => setPostTags(e.target.value)}
                  placeholder="e.g. Nextjs, VTU, YOLOv8, Hackathon"
                  className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">GitHub URL (optional)</label>
                  <input
                    type="url"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Live URL (optional)</label>
                  <input
                    type="url"
                    value={projectLink}
                    onChange={(e) => setProjectLink(e.target.value)}
                    placeholder="https://..."
                    className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 dark:text-slate-400 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                  Publish Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
