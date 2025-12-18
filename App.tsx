
import React, { useState, useEffect, useMemo } from 'react';
import { QUESTIONS } from './data';
import { Scores, AppView, Category, User, SavedScore } from './types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts';
import LongevityGuide from './components/LongevityGuide';
import { 
  ArrowRight, 
  RotateCcw, 
  Share2, 
  Twitter, 
  Linkedin, 
  Link as LinkIcon, 
  Check, 
  ExternalLink, 
  Mail, 
  LogOut, 
  History, 
  User as UserIcon,
  ChevronLeft
} from 'lucide-react';

/**
 * CONFIGURATION: 
 * Replace this URL with your unique Webhook URL from Zapier or Make.com.
 * The current one is a placeholder for testing.
 */
const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/25753682/uar63c7/"; 

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
  const [copied, setCopied] = useState(false);
  
  // Auth State
  const [user, setUser] = useState<User | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('boland_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleStart = () => {
    setScores(INITIAL_SCORES);
    setCurrentQuestionIndex(0);
    setView(AppView.QUIZ);
    window.scrollTo(0, 0);
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

  const syncDataToWebhook = async (type: 'signup' | 'score_update', payload: any) => {
    if (!WEBHOOK_URL) return;
    
    // Only log in development
    if (!isProduction) {
      console.log(`[Webhook Debug] Sending ${type}:`, payload);
    }
    
    try {
      // Use 'no-cors' for simple webhook triggers to avoid pre-flight issues
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'Boland Index Web App',
          environment: isProduction ? 'production' : 'development',
          event_type: type,
          timestamp: new Date().toISOString(),
          ...payload
        })
      });
    } catch (err) {
      // Silent fail to ensure user experience isn't interrupted
      if (!isProduction) console.error('[Webhook Error]', err);
    }
  };

  const finishQuiz = async () => {
    const total = Object.values(scores).reduce((a: number, b: number) => a + b, 0);
    const rank = getRank(total);

    if (user) {
      const newScore: SavedScore = {
        id: crypto.randomUUID(),
        date: new Date().toLocaleDateString(),
        total: total,
        scores: { ...scores }
      };
      
      const updatedUser = {
        ...user,
        history: [newScore, ...user.history].slice(0, 10)
      };
      
      setUser(updatedUser);
      localStorage.setItem('boland_user', JSON.stringify(updatedUser));
      localStorage.setItem(`db_user_${user.email}`, JSON.stringify(updatedUser));

      await syncDataToWebhook('score_update', {
        email: user.email,
        total_score: total,
        rank: rank,
        nutrition: scores['Nutrition'],
        movement: scores['Movement'],
        sleep: scores['Sleep'],
        social: scores['Social Connection'],
        purpose: scores['Purpose']
      });
    }

    setView(AppView.RESULTS);
    window.scrollTo(0, 0);
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;

    setIsAuthLoading(true);
    
    const newUser: User = {
      email: emailInput,
      history: []
    };
    
    const existingData = localStorage.getItem(`db_user_${emailInput}`);
    const finalUser = existingData ? JSON.parse(existingData) : newUser;
    
    await syncDataToWebhook('signup', { email: emailInput });

    setUser(finalUser);
    localStorage.setItem('boland_user', JSON.stringify(finalUser));
    localStorage.setItem(`db_user_${emailInput}`, JSON.stringify(finalUser));
    
    setIsAuthLoading(false);
    setAuthSuccess(true);
    
    setTimeout(() => {
      setAuthSuccess(false);
      setView(AppView.LANDING);
    }, 1500);
  };

  const handleLogout = () => {
    localStorage.removeItem('boland_user');
    setUser(null);
    setView(AppView.LANDING);
  };

  const totalScore = Object.values(scores).reduce((a: number, b: number) => a + b, 0);
  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const chartData = useMemo(() => {
    return Object.keys(scores).map(key => ({
      subject: key.toUpperCase(),
      A: scores[key as Category],
      fullMark: 50,
    }));
  }, [scores]);

  function getRank(score: number) {
    if (score >= 225) return "Optimal";
    if (score >= 180) return "Excellent";
    if (score >= 130) return "Solid";
    return "Developing";
  };

  const shareData = {
    title: 'The Boland Index',
    text: `I just scored ${totalScore}/250 on The Boland Index. My longevity profile is ${getRank(totalScore)}. Check yours!`,
    url: window.location.href,
  };

  const handleNativeShare = async () => {
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareData.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`;

  if (view === AppView.AUTH) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white animate-fade-in">
        <button 
          onClick={() => setView(AppView.LANDING)}
          className="absolute top-8 left-8 flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>

        <div className="max-w-md w-full space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              {authSuccess ? "Welcome back" : "Access your Index"}
            </h2>
            <p className="text-neutral-500 text-sm">
              Enter your email to save your scores privately and track your longevity over time.
            </p>
          </div>

          {authSuccess ? (
            <div className="flex flex-col items-center gap-4 py-8 animate-fade-in">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <p className="text-neutral-900 font-medium">Redirecting to dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleAuthSubmit} className="space-y-4 animate-fade-in-up">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-300" />
                <input 
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-900 transition-all text-neutral-900 placeholder:text-neutral-400"
                />
              </div>
              <button 
                type="submit"
                disabled={isAuthLoading}
                className="w-full py-4 bg-neutral-900 text-white rounded-2xl font-semibold hover:bg-neutral-800 disabled:bg-neutral-200 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isAuthLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Continue with Email <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>
          )}

          <p className="text-[10px] text-neutral-400 uppercase tracking-widest pt-4">
            No password required. Secure & Private.
          </p>
        </div>
      </div>
    );
  }

  if (view === AppView.LANDING) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-white">
        {user && (
          <div className="absolute top-8 right-8 flex items-center gap-4">
            <span className="text-xs font-medium text-neutral-500 hidden sm:block">{user.email}</span>
            <button 
              onClick={handleLogout}
              className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        )}

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

          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={handleStart}
              className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-neutral-900 border border-transparent rounded-full hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"
            >
              Begin Assessment
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {!user && (
              <button 
                onClick={() => setView(AppView.AUTH)}
                className="text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-2"
              >
                <UserIcon className="w-4 h-4" />
                Sign in to save progress
              </button>
            )}
          </div>

          <div className="pt-8 border-t border-neutral-100 flex flex-col items-center gap-4">
            <p className="text-xs text-neutral-400 uppercase tracking-widest">
              Unverified &bull; Educational Use Only
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://twitter.com/wes_boland" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 flex items-center gap-1.5 transition-colors uppercase tracking-wider"
              >
                <Twitter className="w-3.5 h-3.5" />
                @wes-boland
              </a>
              <a 
                href="https://residentreport.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 flex items-center gap-1.5 transition-colors uppercase tracking-wider"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Resident Report
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === AppView.QUIZ) {
    const progress = ((currentQuestionIndex) / QUESTIONS.length) * 100;

    return (
      <div className="min-h-screen flex flex-col max-w-3xl mx-auto p-6 md:p-12">
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
          <div className="mb-8">
            <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
              Total Boland Index
            </span>
            <div className="flex items-baseline justify-center gap-2 mt-4">
              <span className="text-7xl font-bold tracking-tighter text-neutral-900">{totalScore}</span>
              <span className="text-2xl text-neutral-400 font-light">/ 250</span>
            </div>
            <p className="mt-4 text-sm font-semibold text-neutral-500 uppercase tracking-widest">
              Status: <span className="text-neutral-900">{getRank(totalScore)}</span>
            </p>
          </div>

          <div className="h-[400px] w-full max-w-2xl mx-auto mb-12 relative">
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

          {user && user.history.length > 1 && (
            <div className="max-w-xl mx-auto mb-16 p-8 bg-neutral-50 rounded-3xl text-left">
              <div className="flex items-center gap-2 mb-6">
                <History className="w-5 h-5 text-neutral-900" />
                <h3 className="font-bold text-neutral-900">Your Progress History</h3>
              </div>
              <div className="space-y-4">
                {user.history.map((h) => (
                  <div key={h.id} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-0">
                    <span className="text-sm text-neutral-500">{h.date}</span>
                    <span className="text-sm font-bold text-neutral-900">{h.total} / 250</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col items-center gap-6 mb-12">
            <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Share Your Profile</p>
            <div className="flex flex-wrap justify-center gap-3">
              {navigator.share && (
                <button 
                  onClick={handleNativeShare}
                  className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share Results
                </button>
              )}
              <a 
                href={tweetUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 border border-neutral-200 rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-all text-neutral-500"
                aria-label="Share on X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 border border-neutral-200 rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-all text-neutral-500"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button 
                onClick={handleCopyLink}
                className="flex items-center gap-2 p-2.5 border border-neutral-200 rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-all text-neutral-500 min-w-[44px] justify-center"
                aria-label="Copy Link"
              >
                {copied ? <Check className="w-5 h-5 text-green-600" /> : <LinkIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex justify-center mb-16 gap-8">
            <button 
              onClick={handleStart}
              className="inline-flex items-center text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Assessment
            </button>
            {user && (
              <button 
                onClick={handleLogout}
                className="inline-flex items-center text-sm font-semibold text-neutral-400 hover:text-red-500 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </button>
            )}
          </div>
          
          <LongevityGuide />
        </div>
      </div>
    );
  }

  return null;
}
