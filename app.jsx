import React, { useState } from 'react';
import { 
  Cpu, Store, Truck, Users, TrendingUp, ShieldCheck, 
  Globe, Zap, ArrowRight, ChevronRight, LayoutGrid, 
  ShoppingBag, Clock, CircleDollarSign, CheckCircle2,
  PieChart, Rocket, BarChart3, Layers, Flame, Star,
  Network // 修正：匯入了遺漏的 Network 圖標
} from 'lucide-react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      title: "產品設計",
      subtitle: "引流與利潤的完美動線",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full py-10">
          <div className="space-y-6">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white"><Flame /></div>
               <div>
                 <h4 className="text-2xl font-bold text-white">無人泡麵（引流）</h4>
                 <p className="text-gray-400">韓國泡麵 + 免費配料（豆芽/泡菜/火鍋料）</p>
               </div>
             </div>
             <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
               <span className="text-blue-400 font-bold">加價購獲利：</span>
               <div className="flex gap-3 text-sm">
                 <span className="bg-blue-500/20 px-3 py-1 rounded">蛋 +$15</span>
                 <span className="bg-blue-500/20 px-3 py-1 rounded">肉 +$35</span>
                 <span className="bg-blue-500/20 px-3 py-1 rounded">起司 +$20</span>
               </div>
             </div>
          </div>
          <div className="space-y-6">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white"><Star /></div>
               <div>
                 <h4 className="text-2xl font-bold text-white">無人甜點（高利潤）</h4>
                 <p className="text-gray-400">可麗露、千層蛋糕、起士蛋糕</p>
               </div>
             </div>
             <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
               <p className="text-emerald-400 font-medium italic leading-relaxed">
                 「利用用餐後的餘興消費，將客單價從 $100 提升至 $250 以上」
               </p>
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
      title: "未來想像",
      subtitle: "建立全台最強大的「取貨點網路」",
      content: (
        <div className="relative h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500 blur-[120px] opacity-10 rounded-full"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-blue-400"><Store size={40} /></div>
              <h4 className="text-2xl font-bold text-white">是餐飲店</h4>
              <p className="text-gray-500 text-sm">提供場景與現金流</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-blue-400"><Layers size={40} /></di
