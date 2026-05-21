'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Upload, TrendingUp, Target, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const progressData = [
  { week: 'Week 1', score: 45 },
  { week: 'Week 2', score: 52 },
  { week: 'Week 3', score: 58 },
  { week: 'Week 4', score: 68 },
  { week: 'Week 5', score: 75 },
  { week: 'Week 6', score: 82 },
];

const skillData = [
  { skill: 'DSA', score: 75, target: 90 },
  { skill: 'System Design', score: 65, target: 85 },
  { skill: 'Aptitude', score: 72, target: 88 },
  { skill: 'Communication', score: 80, target: 90 },
];

const tasks = [
  { title: 'Complete Array Algorithms Module', priority: 'high', daysLeft: 2 },
  { title: 'Practice Mock Interview Round 3', priority: 'high', daysLeft: 1 },
  { title: 'Optimize Resume for Tech Roles', priority: 'medium', daysLeft: 5 },
  { title: 'Study System Design Patterns', priority: 'medium', daysLeft: 7 },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Student Dashboard</h1>
          <p className="text-foreground/70">Track your placement preparation progress</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass glow-accent border border-white/10 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-foreground/80 text-sm font-medium">Overall Score</h3>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <p className="text-4xl font-bold gradient-text">82%</p>
            <p className="text-xs text-foreground/60 mt-2">+12% from last week</p>
          </div>

          <div className="glass glow-accent-purple border border-white/10 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-foreground/80 text-sm font-medium">Mock Interviews</h3>
              <Target className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-4xl font-bold">12</p>
            <p className="text-xs text-foreground/60 mt-2">Completed this month</p>
          </div>

          <div className="glass glow-accent border border-white/10 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-foreground/80 text-sm font-medium">Streak</h3>
              <Zap className="w-5 h-5 text-accent" />
            </div>
            <p className="text-4xl font-bold">18</p>
            <p className="text-xs text-foreground/60 mt-2">Days consistent</p>
          </div>

          <div className="glass glow-accent-purple border border-white/10 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-foreground/80 text-sm font-medium">Placement Ready</h3>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <p className="text-4xl font-bold">68%</p>
            <p className="text-xs text-foreground/60 mt-2">95% target</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Resume Upload */}
          <div className="lg:col-span-1 glass glow-accent border border-white/10 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload Resume</h3>
            <p className="text-foreground/70 text-sm mb-6">
              Get AI-powered feedback and optimization suggestions
            </p>
            <Button className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90">
              Upload File
            </Button>
          </div>

          {/* Progress Chart */}
          <div className="lg:col-span-2 glass glow-accent border border-white/10 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Progress Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#151d3a', border: '1px solid rgba(255,255,255,0.2)' }}
                  labelStyle={{ color: '#f5f5f5' }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#6366f1"
                  dot={{ fill: '#6366f1', r: 5 }}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Skill Analysis */}
          <div className="lg:col-span-2 glass glow-accent border border-white/10 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Skill Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="skill" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#151d3a', border: '1px solid rgba(255,255,255,0.2)' }}
                  labelStyle={{ color: '#f5f5f5' }}
                />
                <Legend />
                <Bar dataKey="score" fill="#6366f1" name="Current Score" />
                <Bar dataKey="target" fill="#8b5cf6" name="Target Score" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* AI Recommendations */}
          <div className="glass glow-accent-purple border border-white/10 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">AI Recommendations</h3>
            <div className="space-y-4">
              <div className="p-3 bg-white/5 border border-primary/30 rounded-lg">
                <p className="text-sm text-foreground/90">
                  🎯 Focus on System Design concepts to boost score by 15%
                </p>
              </div>
              <div className="p-3 bg-white/5 border border-secondary/30 rounded-lg">
                <p className="text-sm text-foreground/90">
                  💡 Practice communication in mock interviews
                </p>
              </div>
              <div className="p-3 bg-white/5 border border-accent/30 rounded-lg">
                <p className="text-sm text-foreground/90">
                  📚 Review Array & String algorithms section
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="glass glow-accent border border-white/10 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-6">Upcoming Interview Prep Tasks</h3>
          <div className="space-y-3">
            {tasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg hover:border-primary/30 transition">
                <div>
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-foreground/60">Due in {task.daysLeft} days</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  task.priority === 'high'
                    ? 'bg-red-500/20 text-red-300'
                    : 'bg-yellow-500/20 text-yellow-300'
                }`}>
                  {task.priority === 'high' ? 'High' : 'Medium'} Priority
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12 glass glow-accent border border-white/10 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-4 pb-4 border-b border-white/10">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium">Completed Mock Interview Round 12</p>
                <p className="text-sm text-foreground/60">2 hours ago • Score: 84%</p>
              </div>
            </div>
            <div className="flex items-start gap-4 pb-4 border-b border-white/10">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium">Resumed Arrays & Strings Module</p>
                <p className="text-sm text-foreground/60">Yesterday • Completed 8/15 problems</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium">Updated Resume</p>
                <p className="text-sm text-foreground/60">3 days ago • AI Score: 82/100</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
