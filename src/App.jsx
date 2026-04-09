import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, Store, Truck, Users, TrendingUp, ShieldCheck, 
  Globe, Zap, ArrowRight, ChevronRight, LayoutGrid, 
  ShoppingBag, Clock, CircleDollarSign, CheckCircle2,
  PieChart, Rocket, BarChart3, Layers, Flame, Star,
  Network, Sparkles, Send, Loader2, MessageSquare, X
} from 'lucide-react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  
  // 智能分析狀態
  const [regionInput, setRegionInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const [analysisLoading, setAnalysisLoading] = useState(false);

  const apiKey = ""; // 執行環境會自動提供

  const callGemini = async (prompt, systemInstruction = "") => {
    let retryCount = 0;
    const maxRetries = 5;
    
    while (retryCount <= maxRetries) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] }
          })
        });

        if (!response.ok) throw new Error('API request failed');

        const result = await response.json();
        return result.candidates?.[0]?.content?.parts?.[0]?.text || "抱歉，我暫時無法回答這個問題。";
      } catch (error) {
        if (retryCount === maxRetries) return "系統繁忙中，請稍後再試。";
        const delay = Math.pow(2, retryCount) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
        retryCount++;
      }
    }
  };
    const handleAskAi = async () => {
    setAiResponse('AI 功能暫未啟用');
  };

    const handleRegionAnalysis = async () => {
    setAnalysisResult('區域分析功能暫未啟用');
  };
  //const handleAskAi = async () => {
    //if (!aiQuery.trim()) return;
    //setAiLoading(true);
    //setAiResponse('');
    
    //const systemPrompt = `你是一位「泡麵研究所 2.0」的資深創業顧問。
    //你的目標是說服潛在加盟主加入。
    //核心知識：
   // 1. 商業模式：無人門店 x 供應鏈 x 系統平台。
   // 2. 共享員工系統：每月5萬固定費用，總部負責清潔、補貨、維修。
   // 3. 雙引擎獲利：實體門市（6k-15k/日）+ 線上團購。
   // 4. 回本週期：8-12個月。
   // 請用專業、充滿熱情且具有說服力的繁體中文回答。`;

   // const response = await callGemini(aiQuery, systemPrompt);
   // setAiResponse(response);
   // setAiLoading(false);
 // };

  //const handleRegionAnalysis = async () => {
  //  if (!regionInput.trim()) return;
  //  setAnalysisLoading(true);
    
  //  const prompt = `請針對「${regionInput}」這個區域，分析如果開設一家「泡麵研究所 2.0」無人店，會有什麼樣的優勢與營銷策略？
  //  請包含：
  //  1. 目標客群分析
  //  2. 建議的主力產品（哪種泡麵或甜點）
  //  3. 針對當地的行銷建議（如：學區適合宵夜、辦公區適合下午茶等）
  //  4. 預估獲利潛力。
  //  請用精簡的項目符號回答。`;

    //const response = await callGemini(prompt, "你是一位專業的商業分析師，精通台灣零售市場。");
    //setAnalysisResult(response);
    //setAnalysisLoading(false);
  //};

  const slides = [
    {
      title: "核心定位",
      subtitle: "這不是開店，是建立一個零售網路",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="inline-block px-4 py-1 border border-blue-400 text-blue-400 rounded-full text-sm font-medium tracking-widest uppercase mb-4">
            New Retail Revolution 2.0
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight">
            泡麵研究所 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">2.0</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-3xl border-y border-white/10 py-6 italic">
            「門市只是入口，真正賺錢是系統＋供應鏈＋流量」
          </p>
          <div className="flex gap-4">
             <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10 text-gray-400">無人門店</div>
             <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10 text-gray-400">供應鏈</div>
             <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10 text-gray-400">系統平台</div>
          </div>
        </div>
      )
    },
    {
      title: "三層架構",
      subtitle: "全方位的營收護城河",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-center">
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all group h-full">
            <Store className="text-blue-400 w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">第一層｜門市</h3>
            <p className="text-gray-400 leading-relaxed">
              流量入口：無人泡麵 + 甜點。<br/>功能：吸客、穩定現金流、實體商品展示中心。
            </p>
          </div>
          <div className="p-8 bg-gradient-to-b from-blue-600/20 to-transparent rounded-3xl border border-blue-500/30 scale-105 shadow-2xl h-full">
            <Cpu className="text-blue-400 w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">第二層｜系統</h3>
            <p className="text-gray-200 leading-relaxed font-medium">
              平台核心：加盟主管理系統。<br/>核心：「讓加盟主變成小電商老闆」，一鍵開團與機器人接單。
            </p>
          </div>
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all group h-full">
            <Truck className="text-emerald-400 w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">第三層｜流量</h3>
            <p className="text-gray-400 leading-relaxed">
              供應鏈：總部直播 + 團購。<br/>功能：導流門市變「自取點」，實現「線上成交，線下取貨」。
            </p>
          </div>
        </div>
      )
    },
    {
      title: "✨ AI 獲利策略師",
      subtitle: "輸入區域，立即生成專屬獲利分析",
      content: (
        <div className="flex flex-col h-full space-y-6">
          <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
            <input 
              type="text" 
              value={regionInput}
              onChange={(e) => setRegionInput(e.target.value)}
              placeholder="輸入預計開店區域 (例如：台北信義區、台中逢甲...)"
              className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-gray-600"
            />
            <button 
              onClick={handleRegionAnalysis}
              disabled={analysisLoading}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2"
            >
              {analysisLoading ? <Loader2 className="animate-spin" /> : <Sparkles />} 智能分析
            </button>
          </div>
          <div className="flex-1 bg-white/5 rounded-3xl p-8 border border-white/10 overflow-y-auto custom-scrollbar">
            {analysisLoading ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <Loader2 className="animate-spin text-blue-500 w-10 h-10" />
                <p className="text-gray-400">✨ Gemini 正在分析該區域零售大數據...</p>
              </div>
            ) : analysisResult ? (
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
                {analysisResult.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <Globe className="text-gray-700 w-16 h-16" />
                <p className="text-gray-600">請在上方輸入區域名稱，我們將為您生成專屬的商業計畫藍圖。</p>
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      title: "殺手級賣點",
      subtitle: "共享員工系統：人力成本變固定費用",
      content: (
        <div className="flex flex-col md:flex-row gap-10 items-center h-full">
          <div className="flex-1 space-y-6">
            <div className="p-8 bg-blue-500/10 rounded-2xl border-l-4 border-blue-500">
              <h4 className="text-white text-2xl font-bold mb-4">每月固定 $50,000</h4>
              <p className="text-gray-300">總部提供 24H 巡店、清潔、補貨、基本維修。</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white/5 rounded-xl flex items-center gap-3">
                 <CheckCircle2 className="text-blue-400" /> <span className="text-gray-300 text-sm">無須煩惱請人</span>
               </div>
               <div className="p-4 bg-white/5 rounded-xl flex items-center gap-3">
                 <CheckCircle2 className="text-blue-400" /> <span className="text-gray-300 text-sm">無勞資爭議風險</span>
               </div>
               <div className="p-4 bg-white/5 rounded-xl flex items-center gap-3">
                 <CheckCircle2 className="text-blue-400" /> <span className="text-gray-300 text-sm">專業標準化作業</span>
               </div>
               <div className="p-4 bg-white/5 rounded-xl flex items-center gap-3">
                 <CheckCircle2 className="text-blue-400" /> <span className="text-gray-300 text-sm">設備壽命延長</span>
               </div>
            </div>
          </div>
          <div className="flex-1 p-8 bg-white/5 rounded-3xl border border-white/10 text-center">
            <h4 className="text-gray-500 uppercase tracking-widest text-sm mb-4">傳統 vs 研究所 2.0</h4>
            <div className="space-y-4">
               <div className="flex justify-between items-center p-4 bg-red-500/5 rounded-xl border border-red-500/20 text-red-400">
                 <span>傳統：自己請人</span><span>不穩 + 難管</span>
               </div>
               <div className="flex justify-between items-center p-6 bg-blue-600 rounded-xl font-bold text-white shadow-lg">
                 <span>我們：總部幫你養人</span><span>省心 + 高效</span>
               </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "營收模型",
      subtitle: "雙引擎驅動：8-12 個月快速回本",
      content: (
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
               <div className="flex justify-between items-end mb-6">
                 <h4 className="text-gray-400">門市引擎</h4>
                 <p className="text-2xl font-bold text-white">$6,000 - $15,000 <span className="text-sm font-normal text-gray-500">/ 日</span></p>
               </div>
               <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                 <div className="bg-blue-500 h-full w-[60%]"></div>
               </div>
            </div>
            <div className="p-8 bg-blue-600/10 rounded-3xl border border-blue-500/30">
               <div className="flex justify-between items-end mb-6">
                 <h4 className="text-gray-400">電商+團購引擎</h4>
                 <p className="text-2xl font-bold text-white">潛力無上限</p>
               </div>
               <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                 <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-full w-[90%]"></div>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {[
               { label: "加盟整套", val: "120萬" },
               { label: "代營運", val: "5萬/月" },
               { label: "供應鏈", val: "長期毛利" },
               { label: "系統費", val: "低成本" },
             ].map((item, i) => (
               <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                 <p className="text-gray-500 text-xs mb-1">{item.label}</p>
                 <p className="text-white font-bold">{item.val}</p>
               </div>
             ))}
          </div>
        </div>
      )
    },
    {
      title: "結論",
      subtitle: "加入我們，不只是加盟，是共享未來",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-12 animate-in slide-in-from-bottom duration-1000">
          <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] text-center space-y-6 max-w-2xl relative">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-600 rounded-full font-bold text-sm shadow-lg">最強一句話</div>
             <p className="text-4xl md:text-5xl font-black text-white italic">
               「你不是加盟，<br/>是加入一個平台」
             </p>
             <p className="text-gray-400 text-lg">
               這不是開店，是建立一個零售網路。
             </p>
          </div>
          <button className="px-12 py-5 bg-white text-black rounded-full font-black text-xl hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 shadow-2xl">
            立即預約招商說明會
          </button>
        </div>
      )
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans overflow-hidden relative">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl">R</div>
          <span className="font-bold tracking-tighter text-xl">RAMEN LAB <span className="text-blue-500 font-normal">2.0</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
          {slides.map((s, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className={`hover:text-white transition-colors ${currentSlide === i ? 'text-blue-500' : ''}`}
            >
              {s.title.replace('✨ ', '')}
            </button>
          ))}
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full text-xs font-bold transition-all">
          聯絡我們
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-10 max-w-7xl mx-auto w-full relative">
        {/* Progress Bar */}
        <div className="absolute top-10 w-full px-10 flex gap-2">
           {slides.map((_, i) => (
             <div 
               key={i} 
               className={`h-1 flex-1 rounded-full transition-all duration-700 ${currentSlide >= i ? 'bg-blue-500' : 'bg-white/10'}`}
             />
           ))}
        </div>

        <div className="w-full h-full flex flex-col">
          <div className="mb-10 text-center md:text-left">
             <h2 className="text-blue-500 font-bold tracking-[0.2em] text-sm uppercase mb-3 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-blue-500 hidden md:block"></span>
                {slides[currentSlide].title}
             </h2>
             <p className="text-3xl md:text-4xl font-bold text-white">{slides[currentSlide].subtitle}</p>
          </div>

          <div className="flex-1 overflow-hidden">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center gap-6">
          <button 
            onClick={prevSlide}
            className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-all group"
          >
            <ChevronRight className="rotate-180 text-gray-500 group-hover:text-white" />
          </button>
          <div className="text-gray-600 font-mono text-sm tracking-widest">
            0{currentSlide + 1} / 0{slides.length}
          </div>
          <button 
            onClick={nextSlide}
            className="p-4 rounded-full bg-white text-black hover:bg-blue-500 hover:text-white transition-all group"
          >
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </main>

      {/* ✨ AI 創業助手懸浮按鈕與面板 */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <button 
          onClick={() => setIsAiOpen(!isAiOpen)}
          className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${isAiOpen ? 'bg-red-500 rotate-90' : 'bg-blue-600 hover:scale-110 active:scale-95'}`}
        >
          {isAiOpen ? <X className="text-white" /> : <MessageSquare className="text-white" />}
        </button>

        {isAiOpen && (
          <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-[#0A0A0A] border border-white/10 rounded-[32px] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-blue-600/10 to-transparent">
              <div className="flex items-center gap-3">
                <Sparkles className="text-blue-400" size={20} />
                <h4 className="font-bold">✨ AI 創業顧問</h4>
              </div>
              <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full uppercase tracking-tighter">Powered by Gemini</span>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-4">
              {aiResponse ? (
                <div className="bg-white/5 rounded-2xl p-4 text-sm text-gray-300 leading-relaxed">
                  {aiResponse}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-600 text-sm">想了解加盟細節？<br/>儘管問我吧！</p>
                </div>
              )}
              {aiLoading && (
                <div className="flex items-center gap-2 text-blue-500 animate-pulse">
                  <Loader2 className="animate-spin" size={16} />
                  <span className="text-xs">顧問思考中...</span>
                </div>
              )}
            </div>

            <div className="p-4 bg-black/40 border-t border-white/5 flex gap-2">
              <input 
                type="text" 
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAskAi()}
                placeholder="輸入問題..."
                className="flex-1 bg-white/5 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500"
              />
              <button 
                onClick={handleAskAi}
                disabled={aiLoading}
                className="p-3 bg-blue-600 rounded-xl hover:bg-blue-500 disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </div>
  );
};

export default App;
