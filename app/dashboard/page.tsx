"use client"
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Github, User, ArrowDown, ArrowUp } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import Link from "next/link";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const radarData = [
    { subject: 'Reliability', A: 4.5, B: 3.8, fullMark: 5 },
    { subject: 'Security', A: 4.2, B: 4.0, fullMark: 5 },
    { subject: 'Maintainability', A: 4.1, B: 3.5, fullMark: 5 },
    { subject: 'Contribution', A: 3.8, B: 4.2, fullMark: 5 },
    { subject: 'Uniqueness', A: 4.4, B: 3.9, fullMark: 5 },
    { subject: 'Influence', A: 3.7, B: 3.6, fullMark: 5 },
  ];

  const chartConfig = {
    A: { label: "Score", color: "#00FFFF" },
    B: { label: "Average", color: "#6B7280" },
  };

  const tabs = [
    { key: "overview", label: "Overview", icon: <User className="w-4 h-4" /> },
    { key: "languages", label: "Languages", icon: <Github className="w-4 h-4" /> },
    { key: "tech-stacks", label: "Tech Stacks", icon: <Github className="w-4 h-4" /> },
    { key: "tech-roadmap", label: "Tech Roadmap", icon: <Github className="w-4 h-4" /> },
    { key: "repositories", label: "Repositories", icon: <Github className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] text-[#EDEDED]">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-white/10 p-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
            CodeInsight AI
          </Link>
          <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-center sm:justify-end ">
            <Button variant="outline" className="border-cyan-400/50 text-cyan-400 w-full sm:w-auto mb-2 sm:mb-0 bg-transparent hover:bg-transparent hover:text-white">
              Share
            </Button>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 w-full sm:w-auto">
              Login with GitHub
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-2 sm:p-4 grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 mb-4 lg:mb-0">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-4 sm:p-6">
            <div className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-sm sm:text-base ${
                    activeTab === tab.key 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30' 
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600">
                <Github className="w-4 h-4 mr-2" />
                Login with GitHub
              </Button>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-4 sm:space-y-6">
          {/* Profile Header */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-4 sm:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-cyan-400">Tushar Mishra</h1>
                  <p className="text-gray-400">Mid-level AI/ML Developer</p>
                  <Badge className="mt-2 bg-cyan-500/20 text-cyan-400 border-cyan-400/30">
                    Open-source contributor
                  </Badge>
                </div>
              </div>
              <div className="text-right md:text-right">
                <div className="flex items-center space-x-2 mb-2 justify-end">
                  <span className="text-3xl font-bold text-cyan-400">A</span>
                  <span className="text-lg text-gray-400">7.33</span>
                </div>
                <div className="text-sm text-gray-500">Above 78% of people</div>
              </div>
            </div>
          </Card>

          {/* Overview Section */}
          {activeTab === "overview" && (
            <>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-4 sm:p-6">
                <h2 className="text-xl font-semibold mb-4 text-cyan-400">CURISMC Overview</h2>
                <p className="text-gray-400 mb-6">
                  Tushar Mishra can write reliable, secure and clean code. In addition, 
                  Tushar Mishra has made notable contributions to the open-source community.
                </p>
                <div className="h-74 w-full overflow-x-auto">
                  <ChartContainer config={chartConfig}>
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={90} domain={[0, 5]} />
                        <Radar name="Score" dataKey="A" stroke="#00FFFF" fill="#00FFFF" fillOpacity={0.2} />
                        <Radar name="Average" dataKey="B" stroke="#6B7280" fill="#6B7280" fillOpacity={0.1} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </Card>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-4 sm:p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Reliability</h3>
                  <div className="text-2xl font-bold mb-1">4.48</div>
                  <p className="text-sm text-gray-400">Display good logical thinking, may produce minor errors that affect project progress.</p>
                </Card>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-4 sm:p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Security</h3>
                  <div className="text-2xl font-bold mb-1">4.66</div>
                  <p className="text-sm text-gray-400">Demonstrates poor coding practices that could result in system damage.</p>
                </Card>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-4 sm:p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Maintainability</h3>
                  <div className="text-2xl font-bold mb-1">4.12</div>
                  <p className="text-sm text-gray-400">Produce unstructured code that is challenging to understand.</p>
                </Card>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-4 sm:p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Contribution</h3>
                  <div className="text-2xl font-bold mb-1">1.77</div>
                  <p className="text-sm text-gray-400">Has actively contributed to large-scale projects, receiving acknowledgment from peers.</p>
                </Card>
              </div>
            </>
          )}

          {/* About Section */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-4 sm:p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-cyan-400">About</h2>
                <p className="text-gray-400 mb-4">
                  Data Science | ML | Python | UI/UX | Web designer
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span>🎯</span>
                    <span>3 years on GitHub</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>👥</span>
                    <span>27 followers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🏠</span>
                    <span>Ranchib</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto mt-4 md:mt-0">
                <h3 className="font-semibold text-cyan-400 mb-2">Contribution</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">python-pandas/automation-script:</span>
                    <span className="text-cyan-400">0.1148</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">PyQt5text/BudgetTrail:</span>
                    <span className="text-cyan-400">0.154</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">PyQt5text/QuikMiss:</span>
                    <span className="text-cyan-400">0.119</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Last Scanned */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-semibold text-cyan-400">Last Scanned</h3>
              <p className="text-sm text-gray-400">7/4/2024 (4 minutes ago)</p>
              <p className="text-sm text-gray-400">Re-scan available in 12 hours</p>
            </div>
            <Button variant="outline" className="border-cyan-400/50 text-cyan-400 w-full sm:w-auto mt-2 sm:mt-0">
              Scan My GitHub
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
