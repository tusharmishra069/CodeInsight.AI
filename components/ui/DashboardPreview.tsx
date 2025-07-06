"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  BarChart3,
  Eye,
  Zap,
  Sparkles,
  Target,
  Link2,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

const tabs = [
  {
    label: "Site Overview",
    icon: <Eye className="w-5 h-5" />,
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-white">10.15%</span>
          <span className="text-green-400 font-semibold">+5.6%</span>
        </div>
        <div className="text-gray-400">Visibility (last 7 days)</div>
        <div className="h-32 flex items-end">
          {/* Placeholder for animated chart */}
          <motion.div initial={{ height: 0 }} animate={{ height: 80 }} transition={{ duration: 1 }} className="w-full bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-xl flex items-end">
            <motion.div initial={{ height: 0 }} animate={{ height: 64 }} transition={{ duration: 1.2 }} className="w-1/6 bg-blue-400/60 mx-1 rounded-t" />
            <motion.div initial={{ height: 0 }} animate={{ height: 48 }} transition={{ duration: 1.1 }} className="w-1/6 bg-purple-400/60 mx-1 rounded-t" />
            <motion.div initial={{ height: 0 }} animate={{ height: 72 }} transition={{ duration: 1.3 }} className="w-1/6 bg-blue-400/60 mx-1 rounded-t" />
            <motion.div initial={{ height: 0 }} animate={{ height: 56 }} transition={{ duration: 1.2 }} className="w-1/6 bg-purple-400/60 mx-1 rounded-t" />
            <motion.div initial={{ height: 0 }} animate={{ height: 80 }} transition={{ duration: 1.4 }} className="w-1/6 bg-blue-400/60 mx-1 rounded-t" />
            <motion.div initial={{ height: 0 }} animate={{ height: 60 }} transition={{ duration: 1.2 }} className="w-1/6 bg-purple-400/60 mx-1 rounded-t" />
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    label: "One-click optimization",
    icon: <Zap className="w-5 h-5" />,
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-white">1.2s</span>
          <span className="text-green-400 font-semibold">-0.3s</span>
        </div>
        <div className="text-gray-400">Avg. Optimization Time</div>
        <div className="flex items-center gap-2 mt-2">
          <ShieldCheck className="w-5 h-5 text-blue-400" />
          <span className="text-sm text-gray-400">Security checks passed</span>
        </div>
      </div>
    ),
  },
  {
    label: "Smart keyword generator",
    icon: <Sparkles className="w-5 h-5" />,
    badge: "New",
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-white">+120</span>
          <span className="text-purple-400 font-semibold">keywords</span>
        </div>
        <div className="text-gray-400">Generated this week</div>
        <div className="flex items-center gap-2 mt-2">
          <TrendingUp className="w-5 h-5 text-purple-400" />
          <span className="text-sm text-gray-400">Top ranking suggestions</span>
        </div>
      </div>
    ),
  },
];

const sidebarLinks = [
  { label: "Site Overview", icon: <Eye className="w-5 h-5" /> },
  { label: "Analytics", icon: <BarChart3 className="w-5 h-5" /> },
  { label: "Smart Keyword Generator", icon: <Sparkles className="w-5 h-5" /> },
  { label: "Goals", icon: <Target className="w-5 h-5" /> },
  { label: "Content Evaluation", icon: <BarChart3 className="w-5 h-5" /> },
  { label: "Backlink Audit", icon: <Link2 className="w-5 h-5" /> },
  { label: "Link Optimization Wizard", icon: <Zap className="w-5 h-5" /> },
];

export default function DashboardPreview() {
    const [activeTab, setActiveTab] = useState(0);
  
    return (
      <Card className="bg-[#121212] border border-white/10 rounded-2xl p-0 overflow-hidden shadow-[0_0_40px_#00ffff15]">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-64 bg-[#0f0f0f] border-r border-white/10 p-6 flex flex-col gap-4 min-h-[400px] backdrop-blur-sm">
            {sidebarLinks.map((link, idx) => (
              <motion.button
                key={link.label}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all text-left font-medium ${
                  activeTab === idx
                    ? 'text-cyan-400 bg-white/5 border border-cyan-500/30 shadow-md'
                    : 'text-gray-400'
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {link.icon}
                <span>{link.label}</span>
                {tabs[idx]?.badge && (
                  <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-purple-600 text-white">
                    {tabs[idx].badge}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
  
          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="flex gap-4 mb-6 flex-wrap">
              {tabs.map((tab, idx) => (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  key={tab.label}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all font-medium text-sm border ${
                    activeTab === idx
                      ? 'text-cyan-400 bg-white/10 border-cyan-400/30'
                      : 'text-gray-400 border-white/10 hover:bg-white/5'
                  }`}
                  onClick={() => setActiveTab(idx)}
                >
                  {tab.icon}
                  {tab.label}
                  {tab.badge && (
                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-purple-600 text-white">
                      {tab.badge}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
  
            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {tabs[activeTab].content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Card>
    );
  }
  