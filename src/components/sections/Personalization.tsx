import React from 'react';
import { Users, Target, Heart, MessageCircle, Zap, User } from 'lucide-react';

const Personalization: React.FC = () => {
  const features = [
    'Audience segments (EV buyers, AMG fans, family luxury)',
    'Dynamic content assembly',
    'Integration with CRM & sales'
  ];

  const promptTemplates = [
    {
      title: 'EV Customer Email',
      prompt: 'Generate 3 personalized email intros for customers browsing EV models.',
      category: 'Email'
    },
    {
      title: 'AMG Track Day Invitation',
      prompt: 'Write a WhatsApp message inviting AMG fans to a track day in Dubai.',
      category: 'WhatsApp'
    },
    {
      title: 'Family Luxury Messaging',
      prompt: 'Create personalized web banner copy for families considering luxury SUVs.',
      category: 'Web'
    },
    {
      title: 'Performance Enthusiast',
      prompt: 'Generate social media ad copy targeting performance car enthusiasts in Germany.',
      category: 'Social'
    }
  ];

  const automationCases = [
    'Auto-generate localized CRM campaigns per segment',
    'Personalized video ads (dynamic copy & imagery)',
    'Behavioral trigger campaigns based on website interactions'
  ];

  const audienceSegments = [
    {
      name: 'EV Pioneers',
      size: '2.3M',
      description: 'Environmentally conscious buyers interested in electric luxury',
      icon: Target,
      color: 'text-green-400'
    },
    {
      name: 'AMG Performance',
      size: '1.8M', 
      description: 'Performance enthusiasts seeking driving excellence',
      icon: Heart,
      color: 'text-red-400'
    },
    {
      name: 'Family Luxury',
      size: '4.1M',
      description: 'Families prioritizing safety, comfort, and prestige',
      icon: Users,
      color: 'text-blue-400'
    },
    {
      name: 'Tech Innovators',
      size: '1.5M',
      description: 'Early adopters attracted to cutting-edge technology',
      icon: MessageCircle,
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="p-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-lg">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-extralight mb-6 tracking-tight">
              Luxury, 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> made for one.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Deliver content tailored to each customer - powered by AI, personalization scales without losing elegance.
            </p>
            <div className="flex items-center space-x-4">
              <User className="text-blue-400" size={24} />
              <span className="text-gray-400">Personalization across 9.7M+ customer profiles globally</span>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Segments */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">Audience Segments</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {audienceSegments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon size={24} className={segment.color} />
                    <div>
                      <h3 className="text-lg font-medium">{segment.name}</h3>
                      <p className="text-sm text-gray-400">{segment.size} profiles</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{segment.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                    View segment details →
                  </button>
                </div>
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
              <div className="w-12 h-12 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <Users size={20} className="text-blue-400" />
              </div>
              <p className="text-gray-300 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Prompt Templates */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">AI Personalization Prompts</h2>
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
                <Users size={16} />
                <span>Generate Personalized Content</span>
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
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">Split-Screen Campaign Adaptation</h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Visual interface showing one campaign adapting across different personas in real-time. 
              Left side shows the base campaign, right side displays personalized variations for each audience segment, 
              with smooth transitions demonstrating how content transforms while maintaining brand consistency.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Personalization;