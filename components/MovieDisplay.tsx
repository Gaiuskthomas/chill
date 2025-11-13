import { Film, Calendar, User, Clapperboard, RotateCcw, Quote } from 'lucide-react';
import type { MovieRecommendation } from '../types';

interface MovieDisplayProps {
  recommendation: MovieRecommendation;
  onReset: () => void;
}

export default function MovieDisplay({ recommendation, onReset }: MovieDisplayProps) {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-4">
            <Film className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">
              {recommendation.type === 'movie' ? 'Movie Recommendation' : 'Scene Recommendation'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {recommendation.title}
          </h2>
          <p className="text-2xl text-slate-300 mb-2">
            {recommendation.malayalamTitle}
          </p>
        </div>
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 text-white rounded-xl transition-all duration-300 hover:scale-105"
        >
          <RotateCcw className="w-4 h-4" />
          Try Again
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="flex items-center gap-3 px-5 py-4 bg-slate-800/30 rounded-2xl border border-slate-700/30">
          <Calendar className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <div>
            <p className="text-slate-500 text-sm">Year</p>
            <p className="text-white font-semibold">{recommendation.year}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 px-5 py-4 bg-slate-800/30 rounded-2xl border border-slate-700/30">
          <Clapperboard className="w-5 h-5 text-teal-400 flex-shrink-0" />
          <div>
            <p className="text-slate-500 text-sm">Genre</p>
            <p className="text-white font-semibold">{recommendation.mood}</p>
          </div>
        </div>

        {recommendation.director && (
          <div className="flex items-center gap-3 px-5 py-4 bg-slate-800/30 rounded-2xl border border-slate-700/30">
            <User className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <div>
              <p className="text-slate-500 text-sm">Director</p>
              <p className="text-white font-semibold">{recommendation.director}</p>
            </div>
          </div>
        )}

        {recommendation.cast && recommendation.cast.length > 0 && (
          <div className="flex items-center gap-3 px-5 py-4 bg-slate-800/30 rounded-2xl border border-slate-700/30 md:col-span-1">
            <User className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <div>
              <p className="text-slate-500 text-sm">Cast</p>
              <p className="text-white font-semibold text-sm">{recommendation.cast.slice(0, 2).join(', ')}</p>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl">
          <div className="flex items-start gap-3">
            <Quote className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-emerald-400 font-semibold mb-2 text-lg">Why This?</h3>
              <p className="text-slate-200 leading-relaxed text-lg">{recommendation.reason}</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/30 rounded-2xl">
          <h3 className="text-white font-semibold mb-2 text-lg">About</h3>
          <p className="text-slate-300 leading-relaxed">{recommendation.description}</p>
        </div>

        {recommendation.sceneDescription && (
          <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl">
            <h3 className="text-blue-400 font-semibold mb-2 text-lg">Scene Highlight</h3>
            <p className="text-slate-300 leading-relaxed">{recommendation.sceneDescription}</p>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-700/50">
        <p className="text-slate-400 text-center text-sm">
          Grab some popcorn and enjoy the show! 🍿
        </p>
      </div>
    </div>
  );
}
