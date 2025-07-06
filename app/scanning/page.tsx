"use client"
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

const Scanning = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    "Created user-scan",
    "Executing user-scan", 
    "Analyzing repositories",
    "Processing code quality",
    "Generating insights",
    "Finalizing report"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true);
          return 100;
        }
        return prev + 1;
      });
    }, 80);

    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1300);

    return () => {
      clearInterval(timer);
      clearInterval(stepTimer);
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] text-[#F5F5F5] overflow-hidden">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center text-center relative z-10">
        <div className="w-full">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {isComplete ? 'Analysis Complete!' : 'Scanning...'}
        </h1>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 mb-8 relative overflow-hidden">
            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-400">tusharmishra069</h3>
                <p className="text-gray-400 text-sm">Analyzing GitHub profile</p>
              </div>
            </div>
            <Progress value={progress} className="mb-4 bg-slate-800 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-purple-500" />
            <p className="text-gray-400 text-sm">{progress}% Complete</p>
          </Card>
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-8 relative overflow-hidden">
            <div className="text-left space-y-2 font-mono text-sm relative z-10">
              {steps.map((step, index) => (
                <div key={index} className={`flex items-center space-x-2 ${index <= currentStep ? 'text-blue-400' : 'text-gray-600'}`}>
                  <span>{index <= currentStep ? '>>>' : '   '}</span>
                  <span>{step}</span>
                  <span className="text-gray-500">tusharmishra069</span>
                </div>
              ))}
            </div>
          </div>
          {/* Dashboard Button (reserve space) */}
          <div className="relative flex justify-center min-h-[64px]">
            {isComplete ? (
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 relative z-10">
                  View Dashboard
                </Button>
              </Link>
            ) : (
              <div className="invisible">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 text-lg rounded-full">
                  View Dashboard
                </Button>
            </div>
          )}
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 relative z-10 mt-4">
          <p>Currently supported stacks: HTML, CSS, JavaScript, TypeScript, Front-end</p>
          <p>Libraries (React, Vue etc.), Kotlin, C/C++, Java and Python</p>
          <br />
          <p>Scanning usually takes 30 minutes for a large number of repos, and during</p>
          <p>high load it may take up to 2 hours. Feel free to leave this page and return</p>
          <p>later. If it hangs for more than 12 hours, please contact us and attach your</p>
          <p>GitHub username.</p>
        </div>
      </div>
    </div>
  );
};

export default Scanning;
