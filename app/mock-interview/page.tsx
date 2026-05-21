'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Mic, RotateCcw } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const mockQuestions = [
  "Tell me about yourself and your background.",
  "What are your strengths and weaknesses?",
  "Explain how you would design a URL shortening service.",
  "Describe your experience with project management.",
  "How do you handle disagreements with team members?",
];

export default function MockInterviewPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      content: "Welcome to your AI Mock Interview! I'm your interview coach. Let's start with the first question: Tell me about yourself and your background.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string[]>([]);
  const [interviewActive, setInterviewActive] = useState(true);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great response! I liked your clarity. Let's move on to the next question: What are your strengths and weaknesses?",
        "Good answer! You showed good communication skills. Now, can you explain how you would approach this technical problem: Design a parking lot system?",
        "Excellent! Your problem-solving approach is solid. Let's dive deeper: How would you handle a conflict in a team environment?",
        "I appreciate your perspective. That shows good judgment. Next question: Tell me about a challenging project you've worked on.",
        "Great technical knowledge demonstrated! One final question: Where do you see yourself in 5 years?",
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const newScore = Math.min(score + Math.floor(Math.random() * 15) + 5, 100);
      const newFeedback = [
        `✓ Clear communication and articulation`,
        `✓ Good structure in answering`,
        `✓ Relevant examples provided`,
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: randomResponse,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setScore(newScore);
      setFeedback(newFeedback);
      setIsLoading(false);

      if (newScore >= 85) {
        setTimeout(() => {
          setInterviewActive(false);
        }, 2000);
      }
    }, 1500);
  };

  const handleReset = () => {
    setMessages([
      {
        id: '1',
        role: 'ai',
        content: "Welcome to your AI Mock Interview! I'm your interview coach. Let's start with the first question: Tell me about yourself and your background.",
        timestamp: new Date(),
      },
    ]);
    setInputValue('');
    setScore(0);
    setFeedback([]);
    setInterviewActive(true);
  };

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-200px)]">
          {/* Chat Interface */}
          <div className="lg:col-span-2 glass glow-accent border border-white/10 rounded-xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-white/10 p-6">
              <h2 className="text-2xl font-bold mb-1">AI Mock Interview</h2>
              <p className="text-foreground/70 text-sm">Practice your interview skills with AI</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-4 ${message.role === 'ai' ? 'justify-start' : 'justify-end'}`}
                >
                  {message.role === 'ai' && (
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">AI</span>
                    </div>
                  )}

                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      message.role === 'ai'
                        ? 'glass border border-white/20 bg-white/5'
                        : 'bg-gradient-to-r from-primary to-secondary text-white'
                    }`}
                  >
                    <p className="text-sm md:text-base">{message.content}</p>
                    <p className={`text-xs mt-2 ${message.role === 'ai' ? 'text-foreground/50' : 'text-white/70'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>

                  {message.role === 'user' && (
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">U</span>
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-4 justify-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <div className="glass border border-white/20 bg-white/5 px-4 py-3 rounded-lg">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            {interviewActive && (
              <div className="border-t border-white/10 p-6 bg-white/5">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                    placeholder="Type your answer..."
                    className="bg-white/10 border-white/20 text-foreground placeholder:text-foreground/50"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {!interviewActive && (
              <div className="border-t border-white/10 p-6 bg-white/5 text-center">
                <p className="text-foreground/80 mb-4">Interview completed! Great job! 🎉</p>
                <Button
                  onClick={handleReset}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Start New Interview
                </Button>
              </div>
            )}
          </div>

          {/* Score and Feedback */}
          <div className="space-y-6">
            {/* Score Card */}
            <div className="glass glow-accent border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Interview Score</h3>
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-full h-full" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeDasharray={`${(score / 100) * 314} 314`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-3xl font-bold gradient-text">{score}</p>
                </div>
              </div>
              <p className="text-center text-foreground/70">Performance Rating</p>
            </div>

            {/* Feedback Card */}
            {feedback.length > 0 && (
              <div className="glass glow-accent-purple border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Feedback</h3>
                <div className="space-y-3">
                  {feedback.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-primary text-lg flex-shrink-0">✓</span>
                      <p className="text-sm text-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tips Card */}
            <div className="glass glow-accent border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Interview Tips</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Take a moment to think before answering</li>
                <li>• Use the STAR method for examples</li>
                <li>• Maintain clear and confident tone</li>
                <li>• Ask clarifying questions when needed</li>
                <li>• Provide specific examples and metrics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
