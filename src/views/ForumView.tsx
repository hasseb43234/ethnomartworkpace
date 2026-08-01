import React, { useState } from 'react';
import { FORUM_POSTS } from '../data/mockData';

export const ForumView: React.FC = () => {
  const [posts, setPosts] = useState(FORUM_POSTS);
  const [newTitle, setNewTitle] = useState('');
  const [newTag, setNewTag] = useState('Crafts & Heritage');
  const [creating, setCreating] = useState(false);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newP = {
      id: `fp_${Date.now()}`,
      title: newTitle,
      author: 'You (Heritage Member)',
      community: 'Pakistan',
      timeAgo: 'Just now',
      replies: 0,
      likes: 1,
      tag: newTag,
    };
    setPosts([newP, ...posts]);
    setNewTitle('');
    setCreating(false);
  };

  const handleLike = (id: string) => {
    setPosts(
      posts.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-[#141b2b]">Cultural Forum</h1>
          <p className="text-sm text-[#3e4850] mt-1">
            Exchange stories, traditional recipes, and artisan wisdom across global hubs.
          </p>
        </div>

        <button
          onClick={() => setCreating(!creating)}
          className="px-6 py-2.5 bg-[#006591] text-white rounded-xl text-xs font-bold hover:bg-[#005b78] transition-all shadow-xs flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined text-sm">edit</span>
          <span>{creating ? 'Close Form' : 'Start Discussion'}</span>
        </button>
      </div>

      {creating && (
        <form onSubmit={handleCreatePost} className="bg-white p-6 rounded-3xl border border-[#0ea5e9]/30 shadow-md mb-8 flex flex-col gap-3">
          <h3 className="font-bold text-base text-[#141b2b]">New Discussion Topic</h3>
          <input
            type="text"
            required
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="e.g. Traditional weaving techniques in Sindh or authentic recipes..."
            className="w-full px-4 py-2.5 rounded-xl border border-[#bec8d2] focus:border-[#0ea5e9] text-sm"
          />
          <div className="flex gap-4 items-center">
            <select
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="px-3 py-2 rounded-xl border border-[#bec8d2] text-xs font-medium text-[#141b2b]"
            >
              <option value="Crafts & Heritage">Crafts & Heritage</option>
              <option value="Culinary Traditions">Culinary Traditions</option>
              <option value="Community Life">Community Life</option>
              <option value="Language & Music">Language & Music</option>
            </select>
            <button
              type="submit"
              className="px-6 py-2 bg-[#006591] text-white rounded-xl text-xs font-bold hover:bg-[#005b78]"
            >
              Post Topic
            </button>
          </div>
        </form>
      )}

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-2xl border border-[#bec8d2]/30 hover:border-[#0ea5e9]/50 transition-all shadow-2xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#c9e6ff] text-[#001e2f] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {post.tag}
                </span>
                <span className="text-xs text-[#3e4850]">• {post.community} Hub</span>
                <span className="text-xs text-[#3e4850]">• {post.timeAgo}</span>
              </div>

              <h3 className="text-base font-bold text-[#141b2b] mb-1">{post.title}</h3>
              <p className="text-xs text-[#3e4850]">Posted by <span className="font-semibold">{post.author}</span></p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={() => handleLike(post.id)}
                className="flex items-center gap-1 text-xs text-[#3e4850] hover:text-[#006591] bg-[#f1f3ff] px-3 py-1.5 rounded-xl transition-colors"
              >
                <span className="material-symbols-outlined text-sm">thumb_up</span>
                <span>{post.likes}</span>
              </button>

              <div className="flex items-center gap-1 text-xs text-[#3e4850] bg-[#f1f3ff] px-3 py-1.5 rounded-xl">
                <span className="material-symbols-outlined text-sm">forum</span>
                <span>{post.replies} replies</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
