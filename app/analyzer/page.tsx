"use client"
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Search } from "lucide-react";
import Link from "next/link";

const Analyzer = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] text-[#EDEDED] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Welcome to CodeInsight AI
          </h1>
          <p className="text-xl text-gray-400">
            First, what would you like to analyze?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card 
            className={`bg-white/5 backdrop-blur-sm border-white/10 p-8 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 ${
              selectedOption === 'github' ? 'border-cyan-400 bg-cyan-500/10' : ''
            }`}
            onClick={() => setSelectedOption('github')}
          >
            <div className="text-center">
              <Github className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">GitHub Analyzer</h2>
              <p className="text-gray-400 mb-4">
                <span className="font-semibold">Full assessment</span> result, includes code quality, issues, ranks and more...
              </p>
            </div>
          </Card>

          <Card 
            className={`bg-white/5 backdrop-blur-sm border-white/10 p-8 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 ${
              selectedOption === 'dsa' ? 'border-cyan-400 bg-cyan-500/10' : ''
            }`}
            onClick={() => setSelectedOption('dsa')}
          >
            <div className="text-center">
              <Search className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">DSA Analyzer</h2>
              <p className="text-gray-400 mb-4">
                <span className="font-semibold">Simplified assessment</span> result to learn other developers&apos; ability
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <input type="checkbox" className="rounded" />
            <span>Notify me when the next scan finished</span>
          </div>
        </div>

        <div className="text-center">
          {selectedOption && (
            <Link href="/scanning">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                Continue with {selectedOption === 'github' ? 'GitHub' : 'DSA'} Analysis
              </Button>
            </Link>
          )}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Currently supported stacks: HTML, CSS, JavaScript, TypeScript, Front-end</p>
          <p>Libraries (React, Vue etc.), Kotlin, C/C++, Java and Python</p>
        </div>
      </div>
    </div>
  );
};

export default Analyzer;
