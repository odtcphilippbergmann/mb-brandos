import React from 'react';
import { Image as ImageIcon, Zap, Globe, Camera, Palette, Monitor } from 'lucide-react';

const AIVisual: React.FC = () => {
  const features = [
    'AI-assisted car photography (studio & lifestyle)',
    'Auto-resizing & format adaptation',
    'Localization filters (e.g., cityscapes in Beijing vs. Berlin)'
  ];

  const visualPrompts = [
    {
      title: 'Cinematic S-Class Paris',
      prompt: 'Generate cinematic image of the Mercedes S-Class in Paris at dusk, luxury editorial style, black/white minimal.',
      category: 'Lifestyle',
      icon: Camera
    },
    {
      title: 'AMG GT Tokyo Motion',
      prompt: 'Instagram Reel frame: AMG GT in motion, neon-lit Tokyo streets, sleek premium look.',
      category: 'Social',
      icon: Monitor
    },
    {
      title: 'EQS Studio Premium',
      prompt: 'Studio photography of Mercedes EQS in matte black with subtle lighting, minimalist luxury aesthetic.',
      category: 'Product',
      icon: Palette
    },
    {
      title: 'GLE Family Journey',
      prompt: 'Lifestyle image: family with GLE SUV at golden hour, mountainous backdrop, warmth and adventure.',
      category: 'Lifestyle',
      icon: Camera
    }
  ];

  const automationCases = [
    'Adapt one hero visual into 50+ formats (billboards, YouTube thumbnails, TikTok covers)',
    'Localize visuals with backgrounds relevant to regional culture while preserving brand consistency',
    'Auto-generate social media variants with optimal dimensions and compositions'
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Lifestyle': return 'bg-green-900 text-green-200';
      case 'Social': return 'bg-purple-900 text-purple-200';
      case 'Product': return 'bg-blue-900 text-blue-200';
      default: return 'bg-gray-700 text-gray-200';
    }
  };

  return (
    <div className="p-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div 
          className="relative h-96 bg-cover bg-center rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('https://www.mercedes-benz.de/content/dam/germany/passengercars/Buy/storefront-stages/7011905_5645253_20230215_GLE_RANGE_V%20C167_FL_ProductStill_SMA_04c.jpg/1754297584950.jpg?im=Crop,rect=(0,387,7309,3247);Resize=(2730,1213)')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="text-center max-w-4xl">
              <h1 className="text-5xl font-extralight mb-6 tracking-tight">
                Imagery that 
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"> travels the world.
                </span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                From hero shots to social-first visuals, generate and adapt imagery aligned with Mercedes-Benz brand design, 
                ready for global rollout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 bg-purple-600 bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <ImageIcon size={20} className="text-purple-400" />
              </div>
              <p className="text-gray-300 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Visual Prompts */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">AI Visual Prompts</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {visualPrompts.map((prompt, index) => {
            const Icon = prompt.icon;
            return (
              <div key={index} className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon size={20} className="text-purple-400" />
                    <h3 className="text-xl font-medium group-hover:text-purple-400 transition-colors">{prompt.title}</h3>
                  </div>
                  <span className={`px-3 py-1 text-xs rounded-full ${getCategoryColor(prompt.category)}`}>
                    {prompt.category}
                  </span>
                </div>
                <p className="text-gray-300 italic leading-relaxed mb-4">"{prompt.prompt}"</p>
                <div className="flex items-center justify-between">
                  <button className="text-purple-400 hover:text-purple-300 transition-colors text-sm flex items-center space-x-1">
                    <ImageIcon size={16} />
                    <span>Generate Image</span>
                  </button>
                  <div className="text-xs text-gray-500">
                    Estimated: 30s
                  </div>
                </div>
              </div>
            );
          })}
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
              <h3 className="text-xl font-medium mb-4">Full-Bleed Hero Imagery</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Immersive visual generation interface</li>
                <li>• Real-time preview with brand guideline compliance</li>
                <li>• Interactive prompt refinement tools</li>
                <li>• Style transfer and brand consistency checking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Interactive Grid</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Visual variations gallery with hover previews</li>
                <li>• Batch processing for multiple formats</li>
                <li>• Regional localization preview</li>
                <li>• One-click adaptation to channel requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVisual;