import React from 'react';
import { Sparkles, MessageSquare, Globe, Zap } from 'lucide-react';

const AICopy: React.FC = () => {
  const features = [
    'AI copy trained on MB tone (premium, concise, aspirational)',
    'Multi-language copy generation & transcreation',
    'Modular content blocks for personalization'
  ];

  const promptTemplates = [
    {
      title: 'Product Introduction Variants',
      prompt: 'Write a product introduction for the [model] in 3 variations: emotional, technical, lifestyle.',
      category: 'Product Launch'
    },
    {
      title: 'Social Headlines',
      prompt: 'Generate 5 social headlines for the EQE SUV launch in [language].',
      category: 'Social Media'
    },
    {
      title: 'Luxury Campaign Tagline',
      prompt: 'Create a luxury campaign tagline for the [model] that emphasizes innovation, elegance, and aspiration.',
      category: 'Campaign'
    },
    {
      title: 'CRM Personalization',
      prompt: 'Write a personalized email subject line for customers who viewed the [model] but haven\'t scheduled a test drive.',
      category: 'CRM'
    }
  ];

  const automationCases = [
    'Create campaign taglines in 30+ languages instantly',
    'Generate personalized CRM copy (e.g., "Recommend EQS SUV for customers browsing luxury EVs")',
    'Auto-adapt global copy to regional preferences while maintaining brand voice'
  ];

  return (
    <div className="p-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-lg">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-extralight mb-6 tracking-tight">
              Every word,
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"> unmistakably Mercedes.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Generate luxury-grade copy, tailored to each audience. From bold headlines to personalized CRM messages, 
              AI ensures a consistent Mercedes voice across channels.
            </p>
            <div className="flex items-center space-x-4">
              <Sparkles className="text-blue-400" size={24} />
              <span className="text-gray-400">Powered by advanced AI trained on Mercedes-Benz brand guidelines</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <MessageSquare size={20} className="text-blue-400" />
              </div>
              <p className="text-gray-300 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Prompt Templates */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">AI Prompt Templates</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {promptTemplates.map((template, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium group-hover:text-blue-400 transition-colors">{template.title}</h3>
                <span className="px-3 py-1 text-xs bg-blue-900 text-blue-200 rounded-full">
                  {template.category}
                </span>
              </div>
              <p className="text-gray-300 italic leading-relaxed mb-4">"{template.prompt}"</p>
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center space-x-1">
                <Sparkles size={16} />
                <span>Generate Copy</span>
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
              <h3 className="text-xl font-medium mb-4">Text Editor UI</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Clean, distraction-free writing environment</li>
                <li>• Real-time tone analysis and brand compliance checking</li>
                <li>• Suggested improvements and alternatives</li>
                <li>• Version history and collaborative editing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Preview Pane</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Live preview across multiple formats (billboard, social, email)</li>
                <li>• Character count and optimization suggestions</li>
                <li>• A/B testing setup interface</li>
                <li>• Export options for different channels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICopy;