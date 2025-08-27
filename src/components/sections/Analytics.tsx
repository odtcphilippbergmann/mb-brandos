import React from 'react';
import { BarChart3, TrendingUp, Globe, AlertTriangle, Target, DollarSign } from 'lucide-react';

const Analytics: React.FC = () => {
  const features = [
    'Multi-channel performance dashboards',
    'Regional insights (APAC vs. EU vs. US)',
    'Creative performance heatmaps (visuals, headlines)'
  ];

  const promptTemplates = [
    {
      title: 'Performance Summary',
      prompt: 'Summarize the top 3 performing assets for the EQE SUV campaign in [region].',
      category: 'Reporting'
    },
    {
      title: 'Executive Insights',
      prompt: 'Generate a weekly executive insight report on global campaign engagement.',
      category: 'Leadership'
    },
    {
      title: 'Trend Analysis',
      prompt: 'Analyze which content themes are driving the highest engagement in [market] this month.',
      category: 'Strategy'
    }
  ];

  const automationCases = [
    'Automatic alert when a campaign underperforms in a region',
    'Auto-recommend reallocating budget toward high-performing creatives',
    'Predictive insights on optimal posting times by region and channel'
  ];

  const mockMetrics = [
    { label: 'Global Reach', value: '45.2M', trend: '+12%', icon: Globe },
    { label: 'Engagement Rate', value: '3.8%', trend: '+8%', icon: TrendingUp },
    { label: 'Campaign ROI', value: '4.2x', trend: '+15%', icon: DollarSign },
    { label: 'Brand Sentiment', value: '92%', trend: '+3%', icon: Target }
  ];

  return (
    <div className="p-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-lg">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-extralight mb-6 tracking-tight">
              Luxury 
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> meets data.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Measure what matters. Track campaign reach, engagement, and personalization success across channels - 
              all in one dashboard.
            </p>
            <div className="flex items-center space-x-4">
              <BarChart3 className="text-yellow-400" size={24} />
              <span className="text-gray-400">Real-time insights from 40+ global markets</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">Key Performance Metrics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <Icon size={24} className="text-yellow-400" />
                  <span className="text-green-400 text-sm font-medium">{metric.trend}</span>
                </div>
                <div className="text-3xl font-light mb-2">{metric.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{metric.label}</div>
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
              <div className="w-12 h-12 bg-yellow-600 bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <BarChart3 size={20} className="text-yellow-400" />
              </div>
              <p className="text-gray-300 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Prompt Templates */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">AI Analytics Prompts</h2>
        <div className="space-y-4">
          {promptTemplates.map((template, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium group-hover:text-yellow-400 transition-colors">{template.title}</h3>
                <span className="px-3 py-1 text-xs bg-yellow-900 text-yellow-200 rounded-full">
                  {template.category}
                </span>
              </div>
              <p className="text-gray-300 italic leading-relaxed">"{template.prompt}"</p>
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
              <AlertTriangle size={20} className="text-orange-400 mt-1 flex-shrink-0" />
              <p className="text-gray-300 leading-relaxed">{useCase}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual/UX Notes */}
      <section>
        <h2 className="text-3xl font-light mb-8 tracking-wide">Dashboard Design</h2>
        <div className="bg-gray-900 p-8 rounded-lg">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Black Dashboard UI</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Gold data highlights for key metrics</li>
                <li>• Interactive charts with hover details</li>
                <li>• Real-time data streaming indicators</li>
                <li>• Customizable widget layout</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Interactive Elements</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Drill-down capabilities (reach → ROI → sentiment)</li>
                <li>• Regional comparison toggles</li>
                <li>• Time range selectors with smooth transitions</li>
                <li>• Export options for executive reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;