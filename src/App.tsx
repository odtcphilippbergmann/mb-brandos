import React, { useState } from 'react';
import { Star, Menu, X, ChevronRight, Sparkles, BarChart3, Image, Users, BookOpen, Database, Target } from 'lucide-react';
import Header from '@components/layout/Header';
import Navigation from '@components/layout/Navigation';
import Hero from '@components/sections/Hero';
import Campaigns from '@components/sections/Campaigns';
import AICopy from '@components/sections/AICopy';
import AIVisual from '@components/sections/AIVisual';
import Analytics from '@components/sections/Analytics';
import ContentInsights from '@components/sections/ContentInsights';
import AssetHub from '@components/sections/AssetHub';
import Personalization from '@components/sections/Personalization';
import ChannelsHub from '@components/sections/ChannelsHub';
import { useActiveSection } from '@hooks/useActiveSection';
import { useMobileMenu } from '@hooks/useMobileMenu';
import type { NavigationItem } from '@types/navigation';

function App() {
  const { activeSection, setActiveSection } = useActiveSection('home');
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

  const navigationItems: NavigationItem[] = [
    { id: 'home', label: 'Overview', icon: Star },
    { id: 'campaigns', label: 'Campaigns', icon: Target },
    { id: 'ai-copy', label: 'AI Copy', icon: Sparkles },
    { id: 'ai-visual', label: 'AI Visual', icon: Image },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'insights', label: 'Content Insights', icon: BookOpen },
    { id: 'assets', label: 'Asset Hub', icon: Database },
    { id: 'personalization', label: 'Personalization', icon: Users },
    { id: 'channels', label: 'Channels Hub', icon: ChevronRight }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'campaigns':
        return <Campaigns />;
      case 'ai-copy':
        return <AICopy />;
      case 'ai-visual':
        return <AIVisual />;
      case 'analytics':
        return <Analytics />;
      case 'insights':
        return <ContentInsights />;
      case 'assets':
        return <AssetHub />;
      case 'personalization':
        return <Personalization />;
      case 'channels':
        return <ChannelsHub />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white" role="application">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <div className="flex">
        <Navigation 
          navigationItems={navigationItems}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        
        <main className="flex-1 lg:ml-64" role="main">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
}

export default App;