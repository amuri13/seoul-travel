import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Send, MapPin, Utensils, ShoppingBag, ArrowRight, Loader2, HelpCircle } from 'lucide-react';
import { askSeoulGuide, GuideAnswerPayload } from '../services/apiService';
import { SUGGESTED_QUERIES } from '../services/searchService';
import { Place, Shop, Neighbourhood } from '../types';

interface AiGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  onSelectPlace: (place: Place) => void;
  onSelectShop: (shop: Shop) => void;
  onSelectNeighbourhood: (neighbourhood: Neighbourhood) => void;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  matchedPlaces?: Place[];
  matchedNeighbourhoods?: Neighbourhood[];
  matchedShops?: Shop[];
  suggestedFollowUps?: string[];
  sourceNote?: string;
}

export const AiGuideModal: React.FC<AiGuideModalProps> = ({
  isOpen,
  onClose,
  initialQuery,
  onSelectPlace,
  onSelectShop,
  onSelectNeighbourhood,
}) => {
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (initialQuery && initialQuery.trim()) {
        handleSend(initialQuery.trim());
      } else if (messages.length === 0) {
        setMessages([
          {
            id: 'welcome',
            role: 'assistant',
            text: 'Hello! I am your interactive Seoul travel guide curator. Ask me anything about where to eat authentic food, find skincare flagships, explore trending neighbourhoods like Seongsu or Euljiro, or master subway and transit logistics.',
            suggestedFollowUps: SUGGESTED_QUERIES.slice(0, 4),
            sourceNote: 'Seoul Travel Guide Knowledge Engine',
          },
        ]);
      }
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, initialQuery]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (qToSend?: string) => {
    const q = (qToSend || inputQuery).trim();
    if (!q || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: q,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsLoading(true);

    try {
      const result: GuideAnswerPayload = await askSeoulGuide(q);

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: result.answer,
        matchedPlaces: result.matchedPlaces,
        matchedNeighbourhoods: result.matchedNeighbourhoods,
        matchedShops: result.matchedShops,
        suggestedFollowUps: result.suggestedFollowUps,
        sourceNote: result.sourceNote,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          text: 'We encountered an error processing your query. Please browse the verified guide sections directly or try again.',
          sourceNote: 'System notice',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-stone-200 overflow-hidden flex flex-col h-[85vh] sm:h-[80vh]">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-stone-900 text-rose-300 flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-stone-900">
                Seoul AI Travel Guide
              </h3>
              <p className="text-[11px] text-stone-500 font-sans">
                Grounded in verified local directory data · Ask questions in natural English
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-stone-50/30">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.role === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[90%] sm:max-w-[85%] rounded-2xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-800 shadow-2xs space-y-4'
                }`}
              >
                {/* Render markdown-style bold and bullet text cleanly */}
                <div className="whitespace-pre-line space-y-2">
                  {msg.text.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      {paragraph.split('**').map((chunk, cIdx) =>
                        cIdx % 2 === 1 ? (
                          <strong key={cIdx} className="font-semibold text-stone-950">
                            {chunk}
                          </strong>
                        ) : (
                          chunk
                        )
                      )}
                    </p>
                  ))}
                </div>

                {/* Attached Place Cards if matched */}
                {msg.matchedPlaces && msg.matchedPlaces.length > 0 && (
                  <div className="pt-3 border-t border-stone-100 space-y-2">
                    <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-1">
                      <Utensils className="w-3 h-3 text-stone-400" />
                      <span>Recommended Food Spots:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {msg.matchedPlaces.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => {
                            onSelectPlace(p);
                            onClose();
                          }}
                          className="p-2.5 text-left border border-stone-200 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer group"
                        >
                          <div className="font-semibold text-xs text-stone-900 group-hover:text-rose-950">
                            {p.name}
                          </div>
                          <div className="text-[11px] text-stone-500">
                            {p.neighbourhood} · {p.category}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Attached Shop Cards if matched */}
                {msg.matchedShops && msg.matchedShops.length > 0 && (
                  <div className="pt-3 border-t border-stone-100 space-y-2">
                    <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-1">
                      <ShoppingBag className="w-3 h-3 text-stone-400" />
                      <span>Recommended Shopping:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {msg.matchedShops.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => {
                            onSelectShop(s);
                            onClose();
                          }}
                          className="p-2.5 text-left border border-stone-200 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer group"
                        >
                          <div className="font-semibold text-xs text-stone-900 group-hover:text-rose-950">
                            {s.name}
                          </div>
                          <div className="text-[11px] text-stone-500">
                            {s.neighbourhood} · {s.category}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Attached Neighbourhood Cards if matched */}
                {msg.matchedNeighbourhoods && msg.matchedNeighbourhoods.length > 0 && (
                  <div className="pt-3 border-t border-stone-100 space-y-2">
                    <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      <span>Relevant Neighbourhoods:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {msg.matchedNeighbourhoods.map((n) => (
                        <button
                          key={n.id}
                          onClick={() => {
                            onSelectNeighbourhood(n);
                            onClose();
                          }}
                          className="p-2.5 text-left border border-stone-200 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer group"
                        >
                          <div className="font-semibold text-xs text-stone-900 group-hover:text-rose-950">
                            {n.name} ({n.koreanName})
                          </div>
                          <div className="text-[11px] text-stone-500 line-clamp-1">
                            {n.character}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggested Follow-Ups */}
                {msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                  <div className="pt-3 border-t border-stone-100 space-y-1.5">
                    <div className="text-[11px] font-semibold text-stone-500">Related Questions:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.suggestedFollowUps.map((fu, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(fu)}
                          className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs transition-colors cursor-pointer text-left"
                        >
                          "{fu}"
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Source attribution note */}
                {msg.sourceNote && (
                  <div className="text-[10px] text-stone-400 font-sans italic pt-1">
                    Source: {msg.sourceNote}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-stone-500 p-4 bg-white border border-stone-200 rounded-xl w-fit">
              <Loader2 className="w-4 h-4 animate-spin text-stone-800" />
              <span>Synthesizing travel advice from Seoul curated knowledge base...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 border-t border-stone-200 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask a question (e.g. 'What is the best way to get to Myeongdong from Incheon?')..."
              className="flex-1 text-xs sm:text-sm px-4 py-2.5 border border-stone-200 rounded-xl focus:outline-none focus:border-stone-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputQuery.trim()}
              className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>
          <div className="text-[10px] text-stone-400 text-center mt-2">
            AI answers synthesize verified guide directory data. Always verify hours and policies before travel.
          </div>
        </div>
      </div>
    </div>
  );
};
