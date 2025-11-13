import { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

interface MoodInputProps {
  onSubmit: (mood: string) => void;
  isAnalyzing: boolean;
}

export default function MoodInput({ onSubmit, isAnalyzing }: MoodInputProps) {
  const [mood, setMood] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mood.trim()) {
      onSubmit(mood);
    }
  };

  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl transform transition-all duration-500 hover:scale-[1.01]">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl mb-4 shadow-lg">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          How are you feeling?
        </h2>
        <p className="text-slate-400 text-lg">
          Tell me your mood and I'll find the perfect movie for you
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative group">
          <textarea
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="I'm feeling a bit sad today..."
            className="w-full px-6 py-5 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none h-32 group-hover:bg-slate-800/70"
            disabled={isAnalyzing}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>

        <button
          type="submit"
          disabled={!mood.trim() || isAnalyzing}
          className="w-full py-5 px-8 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
        >
          {isAnalyzing ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Analyzing your mood...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Find My Movie
            </>
          )}
        </button>
      </form>

      <div className="mt-8 flex flex-wrap gap-2 justify-center">
        {['Happy', 'Sad', 'Excited', 'Bored', 'Romantic', 'Motivated'].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => setMood(`I'm feeling ${suggestion.toLowerCase()}`)}
            disabled={isAnalyzing}
            className="px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 text-slate-300 rounded-xl text-sm transition-all duration-300 hover:scale-105 disabled:opacity-50"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
