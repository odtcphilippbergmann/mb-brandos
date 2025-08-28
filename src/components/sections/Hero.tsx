import React from 'react';
import { ArrowRight, Globe, Zap, Target, BarChart3 } from 'lucide-react';
import Button from '@components/ui/Button/Button';
import Card from '@components/ui/Card/Card';

const Hero: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Unified campaigns across 40+ markets with local precision'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Intelligent content generation and optimization at scale'
    },
    {
      icon: Target,
      title: 'Personalization',
      description: 'Tailored experiences for every customer segment'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven',
      description: 'Real-time insights and performance optimization'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://www.mercedes-benz.de/content/dam/hq/passengercars/the-brand/revamp/history/12-2024/images/mercedes-benz-brand-history-1440x720-12-2024.jpg/1746786838199.jpg?im=Crop,rect=(0,0,1440,720);Resize=(1680,840)')`
          }}
          role="img"
          aria-label="Mercedes-Benz luxury vehicle in premium setting"
        >
          <div className="absolute inset-0 bg-white bg-opacity-60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 text-gray-900">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 leading-tight">
            One Brand.
            <br />
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Every Channel.
            </span>
            <br />
            Seamlessly.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            The integrated content platform that powers Mercedes-Benz marketing excellence across all touchpoints worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" className="group">
              <span className="font-medium tracking-wide">Explore Platform</span>
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">
              <span className="font-medium tracking-wide">View Demo</span>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide text-gray-900">
              Luxury meets efficiency
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Every feature designed to maintain Mercedes-Benz's premium standards while maximizing global marketing impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center group" hover={true}>
                  <div className="w-16 h-16 bg-gray-900 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                    <Icon size={24} className="text-gray-900" />
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extralight mb-4 text-gray-900">40+</div>
              <div className="text-gray-600 uppercase tracking-widest text-sm">Global Markets</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extralight mb-4 text-gray-900">6M+</div>
              <div className="text-gray-600 uppercase tracking-widest text-sm">Assets Managed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extralight mb-4 text-gray-900">180M+</div>
              <div className="text-gray-600 uppercase tracking-widest text-sm">Campaign Reach</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;