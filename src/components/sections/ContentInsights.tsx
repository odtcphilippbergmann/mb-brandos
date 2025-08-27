import React from 'react';
import { BookOpen, TrendingUp, Users, Brain, Zap, Eye } from 'lucide-react';

const ContentInsights: React.FC = () => {
  const features = [
    'AI-driven trend analysis',
    'Audience sentiment insights', 
    'Cross-market creative benchmarking'
  ];

  const promptTemplates = [
    {
      title: 'Tone Resonance Analysis',
      prompt: 'Analyze which copy tone resonates most with Gen Z audiences in North America.',
      category: 'Audience'
    },
    {
      title: 'Visual Performance Comparison',
      prompt: 'Compare performance of AMG visuals in EU vs. APAC.',
      category: 'Creative'
    },
    {
      title: 'Trend Prediction',
      prompt: 'Predict upcoming content trends in luxury automotive based on social media signals.',
      category: 'Strategy'
    },
    {
      title: 'Content Gap Analysis',
      prompt: 'Identify content gaps in our EV messaging compared to competitor benchmarks.',
      category: 'Competitive'
    }
  ];

  const automationCases = [
    'Auto-recommend new visuals if TikTok trends shift',
    'Predict engagement lift if tone/style is adapted',
    'Surface emerging themes from social listening across markets'
  ];

  const mockInsights = [
    {
      title: 'Trending: Sustainability Focus',
      description: 'EV content with sustainability messaging performing 34% better in Europe',
      impact: 'High',
      icon: TrendingUp
    },
    {
      title: 'Audience Shift: Gen Z Engagement',
      description: 'TikTok content with behind-the-scenes themes driving highest engagement',
      impact: 'Medium',
      icon: Users
    },
    {
      title: 'Creative Performance: Minimalist Wins',
      description: 'Black and white lifestyle imagery outperforming colorful variants by 28%',
      impact: 'High',
      icon: Eye
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-red-900 text-red-200';
      case 'Medium': return 'bg-yellow-900 text-yellow-200';
      case 'Low': return 'bg-green-900 text-green-200';
      default: return 'bg-gray-700 text-gray-200';
    }
  };

  return (
    <div className="p-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-lg">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-extralight mb-6 tracking-tight">
              Every asset, 
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> a learning.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              AI surfaces insights on what resonates. From TikTok trends to email click-throughs, 
              know what works - and create more of it.
            </p>
            <div className="flex items-center space-x-4">
              <Brain className="text-green-400" size={24} />
              <span className="text-gray-400">Intelligent insights from millions of content interactions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Current Insights */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">Current Insights</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {mockInsights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <Icon size={24} className="text-green-400" />
                  <span className={`px-2 py-1 text-xs rounded-full ${getImpactColor(insight.impact)}`}>
                    {insight.impact} Impact
                  </span>
                </div>
                <h3 className="text-lg font-medium mb-3">{insight.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{insight.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 bg-green-600 bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={20} className="text-green-400" />
              </div>
              <p className="text-gray-300 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Prompt Templates */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">AI Analysis Prompts</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {promptTemplates.map((template, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium group-hover:text-green-400 transition-colors">{template.title}</h3>
                <span className="px-3 py-1 text-xs bg-green-900 text-green-200 rounded-full">
                  {template.category}
                </span>
              </div>
              <p className="text-gray-300 italic leading-relaxed mb-4">"{template.prompt}"</p>
              <button className="text-green-400 hover:text-green-300 transition-colors text-sm flex items-center space-x-1">
                <Brain size={16} />
                <span>Run Analysis</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Automation Use Cases */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">Automation Use Cases</h2>
        <div className="space-y-4">
          {automationCases.map((useCase, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg flex items-start space-x-4">
              <Zap size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
              <p className="text-gray-300 leading-relaxed">{useCase}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual/UX Notes */}
      <section>
        <h2 className="text-3xl font-light mb-8 tracking-wide">Interface Design</h2>
        <div className="bg-gray-900 p-8 rounded-lg">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Content Thumbnails Grid</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Campaign thumbnails overlaid with performance tags</li>
                <li>• Color-coded performance indicators (High CTR in APAC)</li>
                <li>• Hover states revealing detailed metrics</li>
                <li>• Filter and sort by region, performance, content type</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Insight Cards</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Dynamic insight cards with actionable recommendations</li>
                <li>• Trend visualization with prediction confidence</li>
                <li>• One-click deep-dive into underlying data</li>
                <li>• Share insights across team members</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentInsights;