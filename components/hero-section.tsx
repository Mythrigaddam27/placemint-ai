'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 w-fit">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/80">Powered by Gemini AI</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
              Your Personal <span className="gradient-text">AI Placement</span> Preparation Agent
            </h1>

            {/* Subheading */}
            <p className="text-xl text-foreground/70 max-w-lg">
              AI-powered resume analysis, interview preparation, personalized roadmaps, and career guidance for students
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold rounded-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 font-semibold rounded-lg"
              >
                Try Mock Interview
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold gradient-text">10K+</p>
                <p className="text-sm text-foreground/60">Students Trained</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">95%</p>
                <p className="text-sm text-foreground/60">Success Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">24/7</p>
                <p className="text-sm text-foreground/60">AI Support</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
            {/* Animated Background Orbs */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow" />

            {/* Feature Cards */}
            <div className="relative z-10 space-y-4">
              {/* Card 1 */}
              <div className="glass glow-accent border border-white/20 p-4 rounded-lg w-80 hover:border-primary/50 transition">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center">
                    <span className="text-white text-lg">📄</span>
                  </div>
                  <h4 className="font-semibold">Smart Resume Analysis</h4>
                </div>
                <p className="text-sm text-foreground/60">Get real-time feedback on your resume</p>
              </div>

              {/* Card 2 */}
              <div className="glass glow-accent-purple border border-white/20 p-4 rounded-lg w-80 hover:border-secondary/50 transition">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-secondary to-pink-500 flex items-center justify-center">
                    <span className="text-white text-lg">💬</span>
                  </div>
                  <h4 className="font-semibold">AI Interview Coach</h4>
                </div>
                <p className="text-sm text-foreground/60">Practice with intelligent questioning</p>
              </div>

              {/* Card 3 */}
              <div className="glass glow-accent border border-white/20 p-4 rounded-lg w-80 hover:border-accent/50 transition">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-accent to-purple-500 flex items-center justify-center">
                    <span className="text-white text-lg">🎯</span>
                  </div>
                  <h4 className="font-semibold">Personalized Roadmap</h4>
                </div>
                <p className="text-sm text-foreground/60">Tailored learning path for your goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
