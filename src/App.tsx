import React, { useState, useRef, useEffect } from 'react';
import { Star, Menu, X, ChevronRight, Sparkles, BarChart3, Image, Users, BookOpen, Database, Target } from 'lucide-react';
import Header from '@components/layout/Header';
import Navigation from '@components/layout/Navigation';
import SkipLinks from '@components/layout/SkipLinks/SkipLinks';
import Hero from '@components/sections/Hero';
import Campaigns from '@components/sections/Campaigns';
import AICopy from '@components/sections/AICopy';
import AIVisual from '@components/sections/AIVisual';
import Analytics from '@components/sections/Analytics';
import ContentInsights from '@components/sections/ContentInsights';
import AssetHub from '@components/sections/AssetHub';
import Personalization from '@components/sections/Personalization';
import ChannelsHub from '@components/sections/ChannelsHub';
import KeyboardShortcutsHelp from '@components/layout/KeyboardShortcutsHelp/KeyboardShortcutsHelp';
import { useActiveSection } from '@hooks/useActiveSection';
import { useMobileMenu } from '@hooks/useMobileMenu';
import { useKeyboardShortcuts } from '@hooks/useKeyboardShortcuts';
import { useFocusManagement } from '@hooks/useFocusManagement';
import type { NavigationItem } from '@types/navigation';

function App() {
  const { activeSection, setActiveSection } = useActiveSection('home');
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();
  const mainRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const { announceToScreenReader } = useFocusManagement();

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

  const sectionTitles: Record<string, string> = {
    home: 'Overview - Mercedes-Benz BrandOS',
    campaigns: 'Campaigns - Mercedes-Benz BrandOS',
    'ai-copy': 'AI Copy Generation - Mercedes-Benz BrandOS',
    'ai-visual': 'AI Visual Generation - Mercedes-Benz BrandOS',
    analytics: 'Analytics Dashboard - Mercedes-Benz BrandOS',
    insights: 'Content Insights - Mercedes-Benz BrandOS',
    assets: 'Asset Hub - Mercedes-Benz BrandOS',
    personalization: 'Personalization - Mercedes-Benz BrandOS',
    channels: 'Channels Hub - Mercedes-Benz BrandOS'
  };

  // Keyboard shortcuts
  const shortcuts = [
    {
      key: '/',
      action: () => {
        const searchInput = document.querySelector('input[type="search"], input[placeholder*="search" i]') as HTMLElement;
        searchInput?.focus();
      },
      description: 'Focus search'
    },
    {
      key: 'm',
      action: () => setIsMobileMenuOpen(!isMobileMenuOpen),
      description: 'Toggle mobile menu'
    },
    {
      key: 'h',
      action: () => setActiveSection('home'),
      description: 'Go to home'
    },
    {
      key: 'c',
      action: () => setActiveSection('campaigns'),
      description: 'Go to campaigns'
    },
    {
      key: 'a',
      action: () => setActiveSection('analytics'),
      description: 'Go to analytics'
    }
  ];

  useKeyboardShortcuts(shortcuts, true);

  // Handle section changes
  useEffect(() => {
    // Update page title
    document.title = sectionTitles[activeSection] || 'Mercedes-Benz BrandOS';
    
    // Announce section change to screen readers
    const sectionLabel = navigationItems.find(item => item.id === activeSection)?.label || 'Overview';
    announceToScreenReader(`Navigated to ${sectionLabel} section`);
    
    // Focus main content area
    setTimeout(() => {
      mainRef.current?.focus();
    }, 100);
  }, [activeSection, announceToScreenReader]);

  const handleSkipToMain = () => {
    mainRef.current?.focus();
  };

  const handleSkipToNav = () => {
    const firstNavButton = document.querySelector('[data-nav-id]') as HTMLElement;
    firstNavButton?.focus();
  };

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
      <SkipLinks onSkipToMain={handleSkipToMain} onSkipToNav={handleSkipToNav} />
      
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
        
        <main 
          ref={mainRef}
          className="flex-1 lg:ml-64" 
          role="main"
          tabIndex={-1}
          aria-labelledby="main-heading"
        >
          {renderActiveSection()}
        </main>
      </div>
      
      {/* Screen reader announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" />
      
      <KeyboardShortcutsHelp />
    </div>
  );
}

export default App;