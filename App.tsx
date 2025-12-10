import { useState, useMemo } from 'react';
import { QUESTIONS } from './data';
import { Scores, AppView, Category } from './types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts';
import LongevityGuide from './components/LongevityGuide';
import { ArrowRight, RotateCcw } from 'lucide-react';

const INITIAL_SCORES: Scores = {
  'Nutrition': 0,
  'Movement': 0,
  'Sleep': 0,
  'Social Connection': 0,
  'Purpose': 0
};

export default function App() {
  const [view, setView] = useState<AppView>(AppView.LANDING);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Scores>(INITIAL_SCORES);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleStart = () => {
    setScores(INITIAL_SCORES);
    setCurrentQuestionIndex(0);
    setView(AppView.QUIZ);
    window.scrollTo(0,0);
  };

  const handleAnswer = (value: number) => {
    const category = currentQuestion.category;
    
    setScores(prev => ({
      ...prev,
      [category]: prev[category] + value
    }));

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setView(AppView.RESULTS);
    window.scrollTo(0,0);
  };

  const totalScore = Object.values(scores).reduce((a: number, b: number) => a + b, 0);

  const chartData = useMemo(() => {
    return Object.keys(scores).map(key => ({
      subject: key.toUpperCase(),
      A: scores[key as Category],
      fullMark: 50,
    }));
  }, [scores]);

  // -- Render Views --

  if (view === AppView.LANDING) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-white">
        <div className="max-w-2xl w-full text-center space-y-12 animate-fade-in-up">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-neutral-900">
              The Boland Index
            </h1>
            <div className="w-16 h-1 bg-neutral-900 mx-auto"></div>
            <p className="text-lg md:text-xl text-neutral-600 max-w-lg mx-auto leading-relaxed">
              A theoretical framework evaluating the five pillars of health and longevity: Nutrition, Movement, Sleep, Social Connection, and Purpose.
            </p>
          </div>

          <button 
            onClick={handleStart}
            className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-neutral-900 border border-transparent rounded-full hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"
          >
            Begin Assessment
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <div className="pt-8 border-t border-neutral-100">
            <p className="text-xs text-neutral-400 uppercase tracking-widest">
              Unverified &bull; Educational Use Only
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (view === AppView.QUIZ) {
    const progress = ((currentQuestionIndex) / QUESTIONS.length) * 100;

    return (
      <div className="min-h-screen flex flex-col max-w-3xl mx-auto p-6 md:p-12">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-neutral-100 mb-12 rounded-full overflow-hidden">
          <div 
            className="h-full bg-neutral-900 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex-1 flex flex-col justify-center animate-fade-in">
          <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-6 block">
            Question {currentQuestionIndex + 1} / {QUESTIONS.length} &bull; {currentQuestion.category}
          </span>
          
          <h2 className="text-2xl md:text-3xl font-medium text-neutral-900 leading-tight mb-12 min-h-[4rem]">
            {currentQuestion.text}
          </h2>

          <div className="space-y-3 max-w-xl mx-auto w-full">
            {[
              { label: 'Strongly Disagree', score: 1 },
              { label: 'Disagree', score: 2 },
              { label: 'Neutral', score: 3 },
              { label: 'Agree', score: 4 },
              { label: 'Strongly Agree (Optimal)', score: 5 },
            ].map((option) => (
              <button
                key={option.score}
                onClick={() => handleAnswer(option.score)}
                className="w-full text-left flex justify-between items-center p-5 border border-neutral-200 rounded-lg hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-200 group"
              >
                <span className="text-neutral-600 font-medium group-hover:text-neutral-900">{option.label}</span>
                <span className="text-neutral-300 text-sm group-hover:text-neutral-500">{option.score}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (view === AppView.RESULTS) {
    return (
      <div className="min-h-screen bg-white py-16 px-6 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
              Total Boland Index
            </span>
            <div className="flex items-baseline justify-center gap-2 mt-4">
              <span className="text-7xl font-bold tracking-tighter text-neutral-900">{totalScore}</span>
              <span className="text-2xl text-neutral-400 font-light">/ 250</span>
            </div>
          </div>

          {/* Chart */}
          <div className="h-[400px] w-full max-w-2xl mx-auto mb-16 relative">
             <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
                <PolarGrid stroke="#e5e5e5" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#404040', fontSize: 11, fontWeight: 600, fontFamily: 'Inter' }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 50]} tick={false} axisLine={false} />
                <Radar
                  name="Boland Index"
                  dataKey="A"
                  stroke="#171717"
                  strokeWidth={2}
                  fill="#171717"
                  fillOpacity={0.05}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center mb-16">
            <button 
              onClick={handleStart}
              className="inline-flex items-center text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Assessment
            </button>
          </div>
          
          {/* The Content Guide requested by user */}
          <LongevityGuide />

        </div>
      </div>
    );
  }

  return null;
}