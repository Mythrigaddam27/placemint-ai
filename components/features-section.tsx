'use client';

import { Brain, MessageSquare, Map, BarChart3, Users, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Resume Analyzer',
    description: 'Get instant feedback on your resume with AI-powered insights and optimization suggestions',
    color: 'from-primary to-blue-500',
  },
  {
    icon: MessageSquare,
    title: 'Mock Interview Assistant',
    description: 'Practice with realistic technical and HR questions from our AI interview assistant',
    color: 'from-secondary to-pink-500',
  },
  {
    icon: Map,
    title: 'Personalized Career Roadmaps',
    description: 'Get customized learning paths based on your skills and career goals',
    color: 'from-accent to-purple-500',
  },
  {
    icon: BarChart3,
    title: 'Placement Readiness Score',
    description: 'Track your progress with comprehensive metrics and readiness indicators',
    color: 'from-primary to-indigo-500',
  },
  {
    icon: Users,
    title: 'AI Career Mentor',
    description: 'Get 24/7 guidance and personalized advice from our intelligent mentor',
    color: 'from-secondary to-violet-500',
  },
  {
    icon: BookOpen,
    title: 'DSA & Aptitude Prep',
    description: 'Master data structures, algorithms, and aptitude with curated resources',
    color: 'from-accent to-fuchsia-500',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">AI-Powered</span> Features
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Everything you need to excel in your placement journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group glass glow-accent border border-white/10 hover:border-primary/50 transition-all duration-300 p-6 rounded-xl hover:shadow-xl hover:shadow-primary/20"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
