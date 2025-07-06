"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Github, Search, Users, ArrowDown, ArrowUp, CircleCheck, User, Star, Quote, TrendingUp, Code, Brain, BarChart3, Shield } from "lucide-react";
import Link from "next/link";
import Particles from "@/components/Particles";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Github className="w-8 h-8 text-blue-400" />,
      title: "GitHub Code Analysis",
      description: "Deep dive into your repositories with AI-powered insights on code quality, structure, and best practices",
      metrics: "98% accuracy rate"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />, 
      title: "DSA Performance Review",
      description: "Comprehensive analysis of your problem-solving skills across LeetCode, HackerRank, and GeeksforGeeks",
      metrics: "500+ algorithms covered"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      title: "Performance Analytics",
      description: "Track your coding journey with detailed metrics, trends, and personalized improvement recommendations",
      metrics: "Real-time insights"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: "Code Security Audit",
      description: "Identify potential security vulnerabilities and get actionable recommendations for safer code",
      metrics: "Enterprise-grade security"
    }
  ];

  const stats = [
    { number: "50K+", label: "Developers Trust Us", icon: <Users className="w-6 h-6" />, color: "text-blue-400" },
    { number: "15M+", label: "Lines of Code Analyzed", icon: <Code className="w-6 h-6" />, color: "text-purple-400" },
    { number: "99.2%", label: "Analysis Accuracy", icon: <CircleCheck className="w-6 h-6" />, color: "text-emerald-400" },
    { number: "2.5hrs", label: "Average Time Saved", icon: <TrendingUp className="w-6 h-6" />, color: "text-orange-400" },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      company: "Stripe",
      content: "CodeInsight AI transformed how I approach code reviews. The GitHub analysis caught issues I completely missed and helped me improve my coding standards significantly.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Full Stack Engineer", 
      company: "Vercel",
      content: "The DSA analysis feature is incredible. It's like having a personal coding mentor that understands exactly where I need to improve. My interview prep became so much more focused.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Priya Patel",
      role: "Software Engineer",
      company: "Google",
      content: "Finally found a tool that provides actionable insights instead of just generic feedback. The security audit feature alone saved our team countless hours.",
      rating: 5,
      avatar: "PP"
    }
  ];

  const platformsSupported = [
    "GitHub", "LeetCode", "HackerRank", "GeeksforGeeks", "CodeChef", "Codeforces"
  ];

  const dashboardTabs = [
    { name: "Code Quality", data: { score: 8.6, trend: "+12%" }, color: "text-blue-400" },
    { name: "Languages", data: { top: "TypeScript", usage: "67%" }, color: "text-purple-400" },
    { name: "DSA Skills", data: { level: "Advanced", solved: 324 }, color: "text-emerald-400" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] text-[#F5F5F5]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              CodeInsight AI
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="hover:text-blue-400 transition-colors">Features</Link>
              <Link href="#how-it-works" className="hover:text-blue-400 transition-colors">How it Works</Link>
              <Link href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
              <Button variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10 hover:text-white bg-transparent">
                Sign In
              </Button>
            </div>
            {/* Hamburger for Mobile */}
            <button
              className="md:hidden flex items-center px-2 py-1 text-blue-400 focus:outline-none"
              onClick={() => setMobileNavOpen((open) => !open)}
              aria-label="Toggle navigation menu"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Nav Menu */}
        {mobileNavOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-b border-white/10 px-4 pb-4 pt-2">
            <div className="flex flex-col space-y-4">
              <Link href="#features" className="hover:text-blue-400 transition-colors" onClick={() => setMobileNavOpen(false)}>Features</Link>
              <Link href="#how-it-works" className="hover:text-blue-400 transition-colors" onClick={() => setMobileNavOpen(false)}>How it Works</Link>
              <Link href="#pricing" className="hover:text-blue-400 transition-colors" onClick={() => setMobileNavOpen(false)}>Pricing</Link>
              <Button variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10 hover:text-white bg-transparent w-full" onClick={() => setMobileNavOpen(false)}>
                Sign In
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6">
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-400/30 px-4 py-2 text-sm font-medium">
                Trusted by 50,000+ developers worldwide
              </Badge>
            </div>
            
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#F5F5F5] via-blue-400 to-[#F5F5F5] bg-clip-text text-transparent">
                One Platform,
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Endless Possibilities
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your coding journey with AI-powered insights. Analyze GitHub repositories, 
              master DSA challenges, and accelerate your growth with personalized feedback.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/analyzer">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                  Start Free Analysis
                </Button>
              </Link>
            </div>
          
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`flex items-center justify-center mb-3 ${stat.color} group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your All-in-One Intelligence Hub */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Your All-in-One
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Coding Intelligence Hub
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to analyze, understand, and improve your coding skills in one powerful platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <Particles
                    particleCount={20}
                    particleSpread={5}
                    speed={0.3}
                    particleColors={["#60A5FA"]}
                    alphaParticles={true}
                    particleBaseSize={30}
                    disableRotation={true}
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                      {feature.icon}
                    </div>
                    <Badge variant="outline" className="border-blue-400/30 text-blue-400 text-xs">
                      {feature.metrics}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              The Story of Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Growth & Progress
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Beautiful dashboards that tell the story of your coding journey with actionable insights
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden">
            <Particles
              particleCount={40}
              particleSpread={8}
              speed={0.05}
              particleColors={["#60A5FA", "#A78BFA"]}
              alphaParticles={true}
              particleBaseSize={40}
              className="opacity-20"
            />
            
            <div className="flex flex-wrap gap-4 mb-8 border-b border-white/10 pb-4 relative z-10">
              {dashboardTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-lg transition-all font-medium ${
                    activeTab === index 
                      ? `bg-gradient-to-r from-blue-500/20 to-purple-500/20 ${tab.color} border border-blue-400/30` 
                      : 'text-gray-400 hover:text-blue-400 hover:bg-white/5'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            
            <div className="h-80 flex items-center justify-center relative z-10">
              <div className="text-center">
                <div className={`text-7xl font-bold mb-4 ${dashboardTabs[activeTab].color}`}>
                  {activeTab === 0 && dashboardTabs[0].data.score}
                  {activeTab === 1 && dashboardTabs[1].data.usage}
                  {activeTab === 2 && dashboardTabs[2].data.solved}
                </div>
                <div className="text-gray-400 text-lg mb-6">
                  {activeTab === 0 && `Overall Score ${dashboardTabs[0].data.trend}`}
                  {activeTab === 1 && `${dashboardTabs[1].data.top} Usage`}
                  {activeTab === 2 && `${dashboardTabs[2].data.level} Level`}
                </div>
                <Progress value={progress} className="w-80 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              All-in-One Financial Toolkit for
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Modern Developers
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From code analysis to career growth - everything you need in one place
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Connect Your Profiles", 
                desc: "Link your GitHub, LeetCode, and other coding platforms in seconds",
                icon: <Github className="w-8 h-8" />
              },
              { 
                step: "02", 
                title: "AI-Powered Analysis", 
                desc: "Our advanced AI analyzes your code, commits, and problem-solving patterns",
                icon: <Brain className="w-8 h-8" />
              },
              { 
                step: "03", 
                title: "Actionable Insights", 
                desc: "Get personalized recommendations and track your progress over time",
                icon: <BarChart3 className="w-8 h-8" />
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-blue-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Hear it from Those
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Who Matter Most
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of developers who've transformed their coding journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 p-8 hover:bg-white/8 transition-all duration-300 relative">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-blue-400 font-medium">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
                <Quote className="w-8 h-8 text-blue-400/20 absolute top-6 right-6" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Works with Your Favorite Platforms
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Seamlessly integrate with all major coding platforms
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {platformsSupported.map((platform, index) => (
              <Badge key={index} variant="outline" className="border-blue-400/30 text-blue-400 px-6 py-3 text-lg hover:bg-blue-400/10 transition-colors">
                {platform}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Coding Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join 50,000+ developers who are already using CodeInsight AI to level up their skills
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/analyzer">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                Start Your Free Analysis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                CodeInsight AI
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering developers worldwide with AI-powered code analysis and personalized growth insights.
              </p>
              <div className="flex space-x-4">
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">Product</h4>
              <div className="space-y-3">
                <Link href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Features</Link>
                <Link href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Pricing</Link>
                <Link href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">API</Link>
                <Link href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Changelog</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">Company</h4>
              <div className="space-y-3">
                <Link href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">About</Link>
                <Link href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Blog</Link>
                <Link href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Careers</Link>
                <Link href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Contact</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">Support</h4>
              <div className="space-y-3">
                <Link href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Help Center</Link>
                <Link href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Documentation</Link>
                <Link href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Community</Link>
                <Link href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Status</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2024 CodeInsight AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;