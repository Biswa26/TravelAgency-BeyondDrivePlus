import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  Send, 
  X, 
  Sparkles, 
  Bot, 
  User, 
  Phone, 
  MessageCircle, 
  Compass, 
  Car, 
  ChevronDown,
  RotateCcw
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome-1',
    role: 'assistant',
    text: "Namaskar! 🙏 Welcome to Beyond Drive+. I'm your AI Odisha Travel & Rental Concierge. Whether you need a self-drive car for Puri-Konark Marine Drive or want to explore our 7-Day Weekly Packages to Daringbadi, Chilika, or Deomali, I'm here to help. What's your travel plan?",
    timestamp: 'Just now',
  },
];

const SUGGESTED_QUERIES = [
  'Best car for Daringbadi hill ghats?',
  'Explain 7-Day Golden Triangle itinerary',
  'What are the KYC & deposit requirements?',
  'Can I pick up the car at Bhubaneswar Airport?',
];

export const GeminiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || inputValue).trim();
    if (!messageContent || isLoading) return;

    const userMessage: ChatMessage = {
      id: 'msg-' + Date.now(),
      role: 'user',
      text: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setInputValue('');
    setIsLoading(true);

    try {
      // Send multi-turn conversation history to server-side Gemini API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedHistory.map((m) => ({
            role: m.role,
            text: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();
      
      const assistantMessage: ChatMessage = {
        id: 'msg-bot-' + Date.now(),
        role: 'assistant',
        text: data.reply || "I'm happy to help you with your Odisha road trip! Feel free to ask about car availability or tour itineraries.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error('Chatbot error:', err);
      const errorMessage: ChatMessage = {
        id: 'msg-err-' + Date.now(),
        role: 'assistant',
        text: "I'm having a momentary connection issue. You can chat directly with our team on WhatsApp at +91 8978006427 or call us anytime for instant booking!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs shadow-2xl shadow-orange-500/40 backdrop-blur-md transition-all hover:scale-105 active:scale-95 border border-white/20"
        title="Chat with Beyond Drive+ AI Concierge"
        aria-label="Open AI Tour & Rental Concierge"
      >
        <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
        <span>Ask AI Guide</span>
        {!isOpen && (
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping ml-0.5" />
        )}
      </button>

      {/* Slide-over / Modal Chat Window */}
      {isOpen && (
        <aside 
          aria-label="AI Tour and Rental Concierge Chat"
          className="fixed bottom-16 left-4 z-50 w-[92vw] sm:w-[420px] h-[560px] max-h-[82vh] bg-slate-900/95 border border-slate-700/90 rounded-3xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-md shadow-orange-500/30">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white font-heading">
                    Beyond Drive+ AI Concierge
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span>Odisha Tour & Self-Drive Guide</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-orange-400">Gemini 3.5</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                title="Restart conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                aria-label="Close chat window"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Chat Thread */}
          <div 
            tabIndex={0} 
            aria-label="Conversation messages"
            className="flex-1 p-4 overflow-y-auto space-y-4 focus:outline-none focus:ring-1 focus:ring-orange-500/50"
          >
            {messages.map((msg) => {
              const isAssistant = msg.role === 'assistant';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl p-3 text-xs sm:text-[13px] leading-relaxed ${
                      isAssistant
                        ? 'bg-slate-800/90 text-slate-200 border border-slate-700/80 rounded-tl-sm'
                        : 'bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-tr-sm shadow-md shadow-orange-500/20'
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.text}</div>
                    <div
                      className={`text-[9px] mt-1.5 text-right font-mono ${
                        isAssistant ? 'text-slate-500' : 'text-orange-200'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {!isAssistant && (
                    <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl rounded-tl-sm p-3 text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-bounce" />
                  <span className="text-[11px] ml-1 text-slate-400 font-medium">Beyond Drive+ AI is planning your trip...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-950/60 overflow-x-auto scrollbar-none flex items-center gap-2">
            {SUGGESTED_QUERIES.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] whitespace-nowrap border border-slate-700/80 transition-colors shrink-0 disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input & Send Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 border-t border-slate-800 bg-slate-900 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about cars, Daringbadi, Puri packages..."
              disabled={isLoading}
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="p-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:bg-slate-800 disabled:text-slate-600 text-white transition-all shadow-md shadow-orange-500/20 shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Quick WhatsApp Assist Footer */}
          <div className="px-4 py-2 bg-[#08101a] border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
            <span>Direct Human Booking:</span>
            <a
              href="https://wa.me/918978006427?text=Hi%20Beyond%20Drive%2B%2C%20I%20have%20an%20inquiry%20regarding%20Odisha%20tour%20packages%20and%20car%20rentals"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 font-bold hover:underline flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp: 8978006427</span>
            </a>
          </div>
        </aside>
      )}
    </>
  );
};
