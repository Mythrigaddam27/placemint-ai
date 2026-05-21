'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Upload, CheckCircle, AlertCircle, FileText } from 'lucide-react';

interface ResumeAnalysis {
  category: string;
  score: number;
  feedback: string[];
  color: string;
}

const mockAnalysis: ResumeAnalysis[] = [
  {
    category: 'Structure & Formatting',
    score: 85,
    feedback: [
      '✓ Clear hierarchical structure',
      '✓ Good use of whitespace',
      '⚠ Consider using consistent date formats',
    ],
    color: 'from-primary to-blue-500',
  },
  {
    category: 'Content & Grammar',
    score: 78,
    feedback: [
      '✓ No spelling errors detected',
      '⚠ Some passive voice detected - use active voice',
      '⚠ Add more quantifiable metrics to achievements',
    ],
    color: 'from-secondary to-pink-500',
  },
  {
    category: 'ATS Compatibility',
    score: 92,
    feedback: [
      '✓ Excellent ATS score',
      '✓ Compatible with all systems',
      '✓ No unusual formatting detected',
    ],
    color: 'from-accent to-purple-500',
  },
  {
    category: 'Keywords & Skills',
    score: 80,
    feedback: [
      '✓ Good keyword coverage',
      '⚠ Add more technical skills relevant to target roles',
      '✓ Skills well-distributed throughout',
    ],
    color: 'from-primary to-indigo-500',
  },
];

const resumeText = `JOHN DOE
San Francisco, CA | (555) 123-4567 | john@example.com | linkedin.com/in/johndoe

PROFESSIONAL SUMMARY
Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications. Proficient in React, Node.js, and cloud technologies with a track record of delivering high-quality solutions.

EXPERIENCE
Senior Software Engineer | TechCorp Inc. | Jan 2021 - Present
• Led development of microservices architecture serving 2M+ users, improving system performance by 40%
• Mentored team of 5 junior developers and conducted code reviews
• Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes

Full Stack Developer | StartupXYZ | Jun 2019 - Dec 2020
• Built responsive web applications using React and Node.js
• Reduced database query time by 60% through optimization
• Collaborated with product team to deliver features ahead of schedule

EDUCATION
Bachelor of Science in Computer Science | University of Tech | 2019
Relevant Coursework: Data Structures, Algorithms, Database Systems

SKILLS
Languages: JavaScript, Python, Java, SQL
Frontend: React, Vue.js, Tailwind CSS
Backend: Node.js, Express, Django
Databases: PostgreSQL, MongoDB, Redis
Tools: Git, Docker, AWS, Jenkins`;

export default function ResumeAnalyzerPage() {
  const [uploadedResume, setUploadedResume] = useState(false);
  const [overallScore, setOverallScore] = useState(0);
  const [analysisResults, setAnalysisResults] = useState<ResumeAnalysis[]>([]);

  const handleUpload = () => {
    // Simulate file upload and analysis
    setUploadedResume(true);
    const avgScore = Math.round(
      mockAnalysis.reduce((sum, item) => sum + item.score, 0) / mockAnalysis.length
    );
    setOverallScore(avgScore);
    setAnalysisResults(mockAnalysis);
  };

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Resume Analyzer</h1>
          <p className="text-foreground/70">Get AI-powered insights to optimize your resume</p>
        </div>

        {!uploadedResume ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upload Section */}
            <div className="lg:col-span-2">
              <div className="glass glow-accent border border-white/20 p-12 rounded-xl text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-2xl font-bold mb-4">Upload Your Resume</h2>
                <p className="text-foreground/70 mb-8 max-w-md mx-auto">
                  Upload your resume in PDF or Word format to get instant AI-powered analysis and improvement suggestions
                </p>

                <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 mb-6 hover:border-primary/50 transition cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={() => handleUpload()}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <div className="flex items-center justify-center gap-2">
                      <FileText className="w-6 h-6 text-primary" />
                      <p className="text-foreground">Drop your resume here or click to browse</p>
                    </div>
                  </label>
                </div>

                <Button
                  onClick={handleUpload}
                  className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-semibold"
                >
                  Analyze Resume
                </Button>

                <p className="text-foreground/50 text-sm mt-6">
                  Supported formats: PDF, DOC, DOCX • Max file size: 5MB
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="glass glow-accent-purple border border-white/10 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Analysis Includes</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">ATS Compatibility</p>
                    <p className="text-sm text-foreground/60">Check if your resume passes through automated systems</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Grammar & Style</p>
                    <p className="text-sm text-foreground/60">Get suggestions for better writing and tone</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Keyword Analysis</p>
                    <p className="text-sm text-foreground/60">Identify missing skills and keywords</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            {/* Overall Score */}
            <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 glass glow-accent border border-white/10 p-8 rounded-xl text-center">
                <p className="text-foreground/70 text-sm font-medium mb-4">Overall Resume Score</p>
                <div className="relative w-40 h-40 mx-auto mb-6">
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
                      strokeDasharray={`${(overallScore / 100) * 314} 314`}
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
                    <p className="text-4xl font-bold gradient-text">{overallScore}</p>
                  </div>
                </div>
                <p className="text-foreground/70 text-sm">
                  {overallScore >= 85 ? '🎉 Excellent Resume!' : overallScore >= 70 ? '👍 Good Resume' : '⚠ Room for Improvement'}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="md:col-span-2 glass glow-accent-purple border border-white/10 p-8 rounded-xl">
                <h3 className="text-lg font-semibold mb-6">Analysis Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-primary/30 rounded-lg">
                    <p className="text-2xl font-bold text-primary">45</p>
                    <p className="text-sm text-foreground/60">Keywords Found</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-secondary/30 rounded-lg">
                    <p className="text-2xl font-bold text-secondary">0</p>
                    <p className="text-sm text-foreground/60">Errors Detected</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-accent/30 rounded-lg">
                    <p className="text-2xl font-bold text-accent">92%</p>
                    <p className="text-sm text-foreground/60">ATS Compatible</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-primary/30 rounded-lg">
                    <p className="text-2xl font-bold text-primary">5 min</p>
                    <p className="text-sm text-foreground/60">Read Time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Detailed Analysis</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {analysisResults.map((result, index) => (
                  <div key={index} className="glass glow-accent border border-white/10 rounded-xl overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${result.color}`} />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">{result.category}</h3>
                        <span className="text-2xl font-bold gradient-text">{result.score}%</span>
                      </div>

                      <div className="w-full bg-white/10 rounded-full h-2 mb-6">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${result.color}`}
                          style={{ width: `${result.score}%` }}
                        />
                      </div>

                      <ul className="space-y-2">
                        {result.feedback.map((item, i) => (
                          <li key={i} className="flex gap-2 text-sm">
                            {item.startsWith('✓') ? (
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                            )}
                            <span className="text-foreground/80">{item.replace('✓ ', '').replace('⚠ ', '')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Preview */}
            <div className="glass glow-accent border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Resume Preview</h2>
              <div className="bg-white text-black p-8 rounded-lg font-mono text-sm space-y-4 max-h-96 overflow-y-auto">
                {resumeText.split('\n').map((line, index) => (
                  <div key={index} className={line.includes('•') ? 'ml-4' : ''}>
                    {line}
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="mt-12 glass glow-accent-purple border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">AI Recommendations</h2>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 border-l-4 border-primary rounded">
                  <p className="font-medium mb-1">Add More Metrics</p>
                  <p className="text-sm text-foreground/70">Include percentages, time saved, and revenue impact in your achievements</p>
                </div>
                <div className="p-4 bg-white/5 border-l-4 border-secondary rounded">
                  <p className="font-medium mb-1">Use Action Verbs</p>
                  <p className="text-sm text-foreground/70">Replace passive language with strong action verbs like Developed, Implemented, Led</p>
                </div>
                <div className="p-4 bg-white/5 border-l-4 border-accent rounded">
                  <p className="font-medium mb-1">Add Certifications</p>
                  <p className="text-sm text-foreground/70">Include relevant certifications and online courses to boost your profile</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  setUploadedResume(false);
                  setOverallScore(0);
                  setAnalysisResults([]);
                }}
                className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
              >
                Analyze Another Resume
              </Button>
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                Download Report
              </Button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </main>
  );
}
