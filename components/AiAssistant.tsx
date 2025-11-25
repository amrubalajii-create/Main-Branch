import React, { useState, useRef, useEffect } from 'react';
import { streamBiotechResponse } from '../services/gemini';
import { ChatMessage } from '../types';
import { IconSearch, IconBrain, IconUser, IconSparkles, IconSend } from './Icons';

const AiAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hello, I'm Hyprova AI. I can assist with research summarization, molecular data interpretation, or general biotech queries. How can I help today?",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: query, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setIsLoading(true);

    // Create a placeholder for the model response
    const modelMsgId = new Date().getTime();
    setMessages(prev => [...prev, { role: 'model', text: '', timestamp: new Date() }]);

    let accumulatedText = '';

    await streamBiotechResponse(userMsg.text, (chunk) => {
      accumulatedText += chunk;
      setMessages(prev => {
        const newMessages = [...prev];
        const lastMsg = newMessages[newMessages.length - 1];
        if (lastMsg.role === 'model') {
          lastMsg.text = accumulatedText;
        }
        return newMessages;
      });
    });

    setIsLoading(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
      setQuery(suggestion);
      // Optional: Auto submit
      // setTimeout(() => handleSubmit({ preventDefault: () => {} } as React.FormEvent), 100);
  };

  return (
    <section id="ai-assistant" className="pt-40 pb-24 bg-[#092529] relative overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Abstract background for AI section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
             {/* Glowing Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
             {/* Grid overlay */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Chat Container - Glassmorphism */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[750px] transition-all duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-700/50 flex items-center gap-4 bg-slate-900/40">
            <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-teal-500/20">
                    <IconBrain className="w-7 h-7 text-white" />
                </div>
                {/* Status Dot */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
            </div>
            <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    Hyprova Assistant 
                    <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[10px] uppercase tracking-wider font-semibold border border-teal-500/20">Beta</span>
                </h3>
                <p className="text-sm text-slate-400">Powered by Gemini 2.5 • Specialized in Biotech Research</p>
            </div>
          </div>

          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start animate-fade-in`}>
                
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex shrink-0 items-center justify-center mt-1 shadow-md ${
                    msg.role === 'user' 
                    ? 'bg-slate-700 text-slate-200' 
                    : 'bg-teal-900/50 text-teal-400 border border-teal-500/30'
                }`}>
                    {msg.role === 'user' ? <IconUser className="w-5 h-5" /> : <IconSparkles className="w-5 h-5" />}
                </div>

                {/* Bubble */}
                <div className={`max-w-[80%] rounded-2xl px-6 py-4 shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-br from-[#14b8a6] to-[#0d9488] text-white rounded-tr-sm' 
                    : 'bg-slate-800/80 text-slate-200 rounded-tl-sm border border-slate-700'
                }`}>
                  <p className="text-[15px] leading-7 whitespace-pre-wrap font-light">{msg.text}</p>
                </div>
              </div>
            ))}
            
            {/* Loading Indicator */}
            {isLoading && (
                 <div className="flex gap-4 flex-row items-start animate-fade-in">
                    <div className="w-10 h-10 rounded-full flex shrink-0 items-center justify-center mt-1 bg-teal-900/50 text-teal-400 border border-teal-500/30">
                        <IconSparkles className="w-5 h-5" />
                    </div>
                    <div className="bg-slate-800/80 rounded-2xl rounded-tl-sm px-6 py-5 border border-slate-700">
                        <div className="flex space-x-1.5">
                            <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                            <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                        </div>
                    </div>
                 </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-5 bg-slate-900/40 border-t border-slate-700/50 backdrop-blur-md">
            
            {/* Quick Suggestions */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                 <button onClick={() => handleSuggestionClick("Explain CRISPR-Cas9 mechanism")} className="text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-teal-500/50 hover:text-teal-400 px-4 py-2 rounded-full whitespace-nowrap transition-all hover:scale-105 active:scale-95">
                    🧬 CRISPR-Cas9
                 </button>
                 <button onClick={() => handleSuggestionClick("Summarize recent breakthroughs in mRNA")} className="text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-teal-500/50 hover:text-teal-400 px-4 py-2 rounded-full whitespace-nowrap transition-all hover:scale-105 active:scale-95">
                    💉 mRNA Breakthroughs
                 </button>
                 <button onClick={() => handleSuggestionClick("How does Hyprova use AI?")} className="text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-teal-500/50 hover:text-teal-400 px-4 py-2 rounded-full whitespace-nowrap transition-all hover:scale-105 active:scale-95">
                    🤖 Hyprova AI Tech
                 </button>
            </div>

            <form onSubmit={handleSubmit} className="relative flex items-center gap-3">
              <div className="relative flex-1 group">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask a research question..."
                    className="w-full bg-slate-950/60 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl py-4 pl-5 pr-12 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all shadow-inner"
                    disabled={isLoading}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-teal-500 transition-colors pointer-events-none">
                     <IconSearch className="w-5 h-5" />
                  </div>
              </div>
              
              <button 
                type="submit" 
                className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all shadow-lg ${
                    isLoading || !query.trim() 
                    ? 'bg-slate-800 text-slate-600 cursor-not-allowed' 
                    : 'bg-[#14b8a6] text-white hover:bg-[#0d9488] hover:shadow-teal-500/20 hover:-translate-y-0.5 active:scale-95'
                }`}
                disabled={isLoading || !query.trim()}
              >
                {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                    <IconSend className="w-6 h-6 ml-0.5" />
                )}
              </button>
            </form>
            
            <div className="mt-3 text-center">
                <p className="text-[10px] text-slate-600">
                    AI can make mistakes. Verify important medical or scientific information.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;