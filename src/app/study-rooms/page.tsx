'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  Share2, 
  MessageSquare, 
  PenTool, 
  Users, 
  Plus, 
  Sparkles, 
  X, 
  Send,
  Code,
  FileText,
  Monitor
} from 'lucide-react';
import { STUDY_ROOMS } from '@/data/mockData';
import { StudyRoom } from '@/types';

export default function StudyRoomsPage() {
  const { user } = useAuth();
  const [rooms, setRooms] = useState<StudyRoom[]>(STUDY_ROOMS);
  const [activeRoom, setActiveRoom] = useState<StudyRoom | null>(STUDY_ROOMS[0]);

  // Meeting controls
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [activeToolTab, setActiveToolTab] = useState<'whiteboard' | 'code' | 'chat'>('whiteboard');

  // Whiteboard Canvas State
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState('#3b82f6');
  const [penWidth, setPenWidth] = useState(3);

  // Collaborative Code Pad State
  const [codeContent, setCodeContent] = useState(`// VTU 4th Sem Algorithms Lab - Dijkstra Algorithm in C++
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

const int INF = 1e9;

void dijkstra(int start, vector<vector<pair<int, int>>>& adj) {
    int n = adj.size();
    vector<int> dist(n, INF);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    
    dist[start] = 0;
    pq.push({0, start});
    
    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();
        if (d > dist[u]) continue;
        
        for (auto& edge : adj[u]) {
            int v = edge.first;
            int weight = edge.second;
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }
}`);

  // Room Chat State
  const [chatMessages, setChatMessages] = useState<{ sender: string; text: string; time: string }[]>([
    { sender: 'Darshan Gowda', text: 'Hey everyone, let us trace Dijkstra on the graph on the whiteboard!', time: '10:04 AM' },
    { sender: 'Pooja (BMSCE)', text: 'Is this the 2022 Scheme VTU syllabus code?', time: '10:05 AM' },
  ]);
  const [chatInput, setChatInput] = useState('');

  // Setup canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, [activeToolTab]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.strokeStyle = penColor;
    ctx.lineWidth = penWidth;
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatMessages([
      ...chatMessages,
      {
        sender: user?.name || 'You',
        text: chatInput,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setChatInput('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-wider mb-1">
            <Video className="w-4 h-4" />
            <span>Virtual Collaborative Campus Rooms</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Free Virtual Study Rooms & Whiteboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Combine live audio/video, real-time shared whiteboard canvas, and code editor.
          </p>
        </div>

        {/* Room Switcher Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {rooms.map(room => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeRoom?.id === room.id
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <span>{room.name.split(' ')[0]} Room</span>
              <span className="ml-1 text-[10px] opacity-75">({room.activeParticipants})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Room Viewport */}
      {activeRoom && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left / Center 8 Cols: Video Grid & Collaborative Canvas / Code Editor */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Simulated Video Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="relative aspect-video rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-md flex items-center justify-center">
                {isCamOn ? (
                  <img
                    src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80'}
                    alt="you"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <VideoOff className="w-6 h-6 text-slate-600" />
                )}
                <div className="absolute bottom-1.5 left-2 text-[10px] text-white font-bold bg-black/60 px-1.5 py-0.5 rounded">
                  You ({user?.name ? user.name.split(' ')[0] : 'Student'})
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
                  alt="participant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1.5 left-2 text-[10px] text-white font-bold bg-black/60 px-1.5 py-0.5 rounded">
                  Darshan Gowda (Host)
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
                  alt="participant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1.5 left-2 text-[10px] text-white font-bold bg-black/60 px-1.5 py-0.5 rounded">
                  Pooja (BMSCE)
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-md flex flex-col items-center justify-center text-slate-400">
                <Users className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-bold">+{activeRoom.activeParticipants - 3} others</span>
              </div>
            </div>

            {/* Room Meeting Controls Bar */}
            <div className="glass-card rounded-2xl p-3 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMicOn(!isMicOn)}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-colors ${
                    isMicOn ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200' : 'bg-rose-600 text-white'
                  }`}
                  title={isMicOn ? 'Mute Mic' : 'Unmute Mic'}
                >
                  {isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setIsCamOn(!isCamOn)}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-colors ${
                    isCamOn ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200' : 'bg-rose-600 text-white'
                  }`}
                  title={isCamOn ? 'Stop Camera' : 'Start Camera'}
                >
                  {isCamOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setIsScreenSharing(!isScreenSharing)}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-colors ${
                    isScreenSharing ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                  }`}
                  title="Screen Share"
                >
                  <Monitor className="w-4 h-4" />
                </button>
              </div>

              {/* View mode toggle */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
                <button
                  onClick={() => setActiveToolTab('whiteboard')}
                  className={`px-3 py-1 rounded-lg flex items-center gap-1.5 ${
                    activeToolTab === 'whiteboard' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Whiteboard</span>
                </button>

                <button
                  onClick={() => setActiveToolTab('code')}
                  className={`px-3 py-1 rounded-lg flex items-center gap-1.5 ${
                    activeToolTab === 'code' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>Code Pad</span>
                </button>
              </div>
            </div>

            {/* WHITEBOARD TOOL */}
            {activeToolTab === 'whiteboard' && (
              <div className="glass-card rounded-3xl p-4 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Whiteboard Tools:</span>
                    <div className="flex items-center gap-1">
                      {['#3b82f6', '#10b981', '#f43f5e', '#f59e0b', '#8b5cf6', '#ffffff'].map(c => (
                        <button
                          key={c}
                          onClick={() => setPenColor(c)}
                          className={`w-5 h-5 rounded-full border border-slate-300 dark:border-slate-700 transition-transform ${
                            penColor === c ? 'scale-125 ring-2 ring-blue-500' : ''
                          }`}
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={clearCanvas}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-rose-500 hover:text-white text-[11px] font-bold text-slate-600 dark:text-slate-400 transition-colors"
                  >
                    Clear Board
                  </button>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden cursor-crosshair">
                  <canvas
                    ref={canvasRef}
                    width={700}
                    height={380}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    className="w-full h-[380px] touch-none"
                  />
                </div>
              </div>
            )}

            {/* COLLABORATIVE CODE PAD TOOL */}
            {activeToolTab === 'code' && (
              <div className="glass-card rounded-3xl p-4 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Collaborative Code & Scratchpad</span>
                  <span className="text-emerald-500 font-mono">Syncing live...</span>
                </div>
                <textarea
                  value={codeContent}
                  onChange={(e) => setCodeContent(e.target.value)}
                  rows={16}
                  className="w-full p-4 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs leading-relaxed focus:outline-none border border-slate-800"
                />
              </div>
            )}

          </div>

          {/* Right 4 Cols: Live Room Chat & Participants */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Room Info Card */}
            <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold">
                  {activeRoom.category}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  {activeRoom.activeParticipants} / {activeRoom.maxParticipants} online
                </span>
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">{activeRoom.name}</h3>
              <p className="text-xs text-slate-500">{activeRoom.topic}</p>
            </div>

            {/* Live Chat Card */}
            <div className="glass-card rounded-3xl p-4 border border-slate-200 dark:border-slate-800 h-[480px] flex flex-col justify-between">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center justify-between text-xs font-bold">
                <div className="flex items-center gap-1.5 text-slate-900 dark:text-white">
                  <MessageSquare className="w-4 h-4 text-blue-500" />
                  <span>Room Discussion Chat</span>
                </div>
              </div>

              {/* Chat list */}
              <div className="flex-1 overflow-y-auto py-3 space-y-3 text-xs pr-1">
                {chatMessages.map((msg, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-[11px]">{msg.sender}</span>
                      <span className="text-[9px] text-slate-400">{msg.time}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-xs leading-relaxed">
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendChat} className="flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type to room..."
                  className="flex-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
