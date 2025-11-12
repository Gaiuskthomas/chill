import { useState } from 'react';
import { Sparkles, Film } from 'lucide-react';
import MoodInput from './components/MoodInput';
import MovieDisplay from './components/MovieDisplay';
import { analyzeMood } from './utils/moodAnalyzer';
import type { MovieRecommendation } from './types';

function App() {
  const [recommendation, setRecommendation] = useState<MovieRecommendation | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleMoodSubmit = async (mood: string) => {
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    const result = analyzeMood(mood);
    setRecommendation(result);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="pt-12 pb-8 px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Film className="w-12 h-12 text-emerald-400" />
              <Sparkles className="w-5 h-5 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
            MoodFlix
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the perfect Malayalam movie or scene to match your mood
          </p>
        </header>

        <main className="flex-1 flex items-center justify-center px-6 pb-20">
          <div className="w-full max-w-4xl">
            {!recommendation ? (
              <MoodInput onSubmit={handleMoodSubmit} isAnalyzing={isAnalyzing} />
            ) : (
              <MovieDisplay
                recommendation={recommendation}
                onReset={() => setRecommendation(null)}
              />
            )}
          </div>
        </main>

        <div className="fixed bottom-4 left-4 text-slate-600 text-xs font-medium tracking-wide opacity-40 hover:opacity-60 transition-opacity">
          Gaius
        </div>
      </div>
    </div>
  );
}

export default App;
