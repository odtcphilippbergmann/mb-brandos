import React from 'react';
import { Target, Globe, Users, Zap, Copy, Image as ImageIcon } from 'lucide-react';

const Campaigns: React.FC = () => {
  const features = [
    'Centralized campaign library',
    'Version control & adaptation workflows', 
    'Automated regional rollout (formats, sizes, channels)',
    'Cross-team collaboration (Team X model)'
  ];

  const aiPrompts = [
    {
      type: 'copy',
      icon: Copy,
      title: 'Luxury Campaign Copy',
      prompt: 'Write a luxury campaign tagline for the [model] that emphasizes innovation, elegance, and aspiration.'
    },
    {
      type: 'copy',
      icon: Copy,
      title: 'TikTok Generation',
      prompt: 'Generate a 20-word TikTok caption targeting Gen Z audiences for [model] in [market]. Tone: bold, energetic.'
    },
    {
      type: 'visual',
      icon: ImageIcon,
      title: 'Cinematic Studio',
      prompt: 'Create cinematic studio photography of a Mercedes EQS in matte black with neon accents, luxury editorial style.'
    },
    {
      type: 'visual',
      icon: ImageIcon,
      title: 'Lifestyle Imagery',
      prompt: 'Lifestyle image: a young professional driving a GLC through Shanghai at night, minimalistic elegance.'
    }
  ];

  const automationCases = [
    'Automatically adapt a global S-Class campaign kit into: Instagram stories, TikTok reels, YouTube pre-roll, dealership screens',
    'A/B test variants (luxury lifestyle vs. performance-driven) across regions'
  ];

  return (
    <div className="p-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div 
          className="relative h-96 bg-cover bg-center rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('https://www.mercedes-benz.de/content/dam/hq/passengercars/the-brand/revamp/stage/12-2024/images/mercedes-benz-brand-stage-3840x3840-12-2024.jpg/1746786837402.jpg?im=Crop,rect=(0,1068,3840,1704);Resize=(2730,1211)')`
          }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
            <div className="text-center max-w-4xl">
              <h1 className="text-5xl font-extralight mb-6 tracking-tight text-gray-900">
                Unify every campaign. 
                <span className="block text-gray-700">One voice, everywhere.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Orchestrate global campaigns with local precision. From S-Class hero launches to TikTok challenges, 
                manage assets, approvals, and adaptation in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide text-gray-900">Core Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-gray-900 bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Target size={20} className="text-gray-900" />
              </div>
              <p className="text-gray-700 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Prompt Templates */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide text-gray-900">AI Prompt Templates</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {aiPrompts.map((prompt, index) => {
            const Icon = prompt.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon size={20} className="text-gray-900" />
                  <h3 className="text-xl font-medium text-gray-900">{prompt.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded ${
                    prompt.type === 'copy' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {prompt.type}
                  </span>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{prompt.prompt}"</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Automation Use Cases */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide text-gray-900">Automation Use Cases</h2>
        <div className="space-y-4">
          {automationCases.map((useCase, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm flex items-start space-x-4">
              <Zap size={20} className="text-yellow-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed">{useCase}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual/UX Notes */}
      <section>
        <h2 className="text-3xl font-light mb-8 tracking-wide text-gray-900">Visual & UX Design</h2>
        <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">Design Elements</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Hero video banner (black background, slow-motion EQS shot)</li>
                <li>• Grid layout with campaign cards</li>
                <li>• Hover states with subtle animations</li>
                <li>• Clean typography hierarchy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">Interaction Patterns</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Click-through campaign workflow</li>
                <li>• Drag-and-drop asset management</li>
                <li>• Real-time collaboration indicators</li>
                <li>• Progressive disclosure for complex features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campaigns;