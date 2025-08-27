import React from 'react';
import { Instagram, Youtube, Facebook, Linkedin, MessageCircle, Mail, Calendar, ChevronRight } from 'lucide-react';

const ChannelsHub: React.FC = () => {
  const channels = [
    {
      name: 'Instagram',
      description: 'Flagship channel for lifestyle imagery, Reels, Stories, and influencer collaborations',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      followers: '28.5M',
      engagement: '4.2%',
      prompts: {
        copy: 'Write a 2-line Instagram caption for the [model] launch, tone: aspirational + elegant.',
        visual: 'Cinematic Reel: EQE SUV on Amalfi Coast, sunset tones, lifestyle focus.',
        automation: 'Auto-resize visuals to 9:16 Stories, 1:1 posts. Auto-suggest trending audio.'
      }
    },
    {
      name: 'TikTok',
      description: 'Fast-growing, used for Gen Z engagement with creative challenges and trends',
      icon: MessageCircle,
      color: 'from-black to-gray-800',
      followers: '5.8M',
      engagement: '8.7%',
      prompts: {
        copy: 'Draft 3 TikTok captions targeting Gen Z for AMG GT in playful tone.',
        visual: 'POV video: AMG accelerating through neon-lit Tokyo streets.',
        automation: 'Auto-localize challenges (#MBStarChallenge → APAC variants). Auto-adapt hero clips into short-form edits.'
      }
    },
    {
      name: 'YouTube',
      description: 'Hero films, product reveals, cinematic storytelling, and behind-the-scenes content',
      icon: Youtube,
      color: 'from-red-500 to-red-700',
      followers: '1.2M',
      engagement: '6.3%',
      prompts: {
        copy: 'Generate SEO-friendly title + description for EQS reveal video.',
        visual: 'Cinematic film still: EQS in futuristic night cityscape.',
        automation: 'Auto-generate 15s / 30s / 60s cutdowns. Auto-translate subtitles for 20+ languages.'
      }
    },
    {
      name: 'LinkedIn',
      description: 'Brand leadership, sustainability storytelling, B2B and employer branding',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-800',
      followers: '1.8M',
      engagement: '3.1%',
      prompts: {
        copy: 'Formal LinkedIn post on Mercedes\' sustainability initiative.',
        visual: 'Editorial-style portrait: engineers working on EQS battery tech.',
        automation: 'Auto-convert press releases into LinkedIn posts. Auto-schedule regional corporate updates.'
      }
    },
    {
      name: 'Facebook',
      description: 'Broad awareness and community engagement, especially in established markets',
      icon: Facebook,
      color: 'from-blue-500 to-blue-700',
      followers: '15.3M',
      engagement: '2.8%',
      prompts: {
        copy: 'Carousel ad lines for EQS SUV - 1 benefit per slide.',
        visual: 'Lifestyle image: family road trip with GLE at golden hour.',
        automation: 'Auto-reformat Instagram visuals into Facebook carousels.'
      }
    },
    {
      name: 'WeChat/Douyin',
      description: 'Essential in APAC for social engagement, localized campaigns, and service updates',
      icon: MessageCircle,
      color: 'from-green-500 to-green-700',
      followers: '12.1M',
      engagement: '7.2%',
      prompts: {
        copy: 'WeChat article intro for EQS launch - premium, concise, Mandarin.',
        visual: 'EQE in Shanghai skyline, neon luxury feel.',
        automation: 'Auto-transcreate global content kits for Chinese platforms.'
      }
    },
    {
      name: 'CRM & Email',
      description: 'Personalized content tied to browsing/purchase history, SMS & WhatsApp marketing',
      icon: Mail,
      color: 'from-gray-600 to-gray-800',
      followers: '9.7M',
      engagement: '12.4%',
      prompts: {
        copy: 'Personalized email intro for EV-intender, highlight EQE benefits.',
        visual: 'Email header: EQS in monochrome, elegant typography.',
        automation: 'Auto-generate multilingual CRM campaigns. Auto-A/B test subject lines.'
      }
    },
    {
      name: 'Experiential',
      description: 'Auto shows, lifestyle sponsorships, pop-up experiences, track days & driving experiences',
      icon: Calendar,
      color: 'from-yellow-500 to-orange-600',
      followers: 'Global',
      engagement: '98%',
      prompts: {
        copy: 'Invitation caption for AMG Driving Academy.',
        visual: 'Immersive VR teaser of AMG track POV.',
        automation: 'Auto-create event highlight reels. Auto-generate localized press kits.'
      }
    }
  ];

  return (
    <div className="p-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-lg">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-extralight mb-6 tracking-tight">
              One brand. Every channel. 
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"> Seamlessly.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Control, create, and adapt content for every global channel in one place. 
              From TikTok virality to LinkedIn leadership, BrandOS ensures Mercedes-Benz speaks with one voice everywhere.
            </p>
            <div className="flex items-center space-x-4">
              <ChevronRight className="text-white" size={24} />
              <span className="text-gray-400">Unified management across all digital touchpoints</span>
            </div>
          </div>
        </div>
      </section>

      {/* Channels Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">Channel Cards</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 group">
                {/* Header with gradient */}
                <div className={`h-24 bg-gradient-to-r ${channel.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="relative h-full flex items-center justify-between px-6">
                    <div className="flex items-center space-x-3">
                      <Icon size={24} className="text-white" />
                      <h3 className="text-xl font-medium text-white">{channel.name}</h3>
                    </div>
                    <div className="text-right text-white">
                      <div className="text-sm font-medium">{channel.followers}</div>
                      <div className="text-xs opacity-80">{channel.engagement} engagement</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">{channel.description}</p>
                  
                  <div className="space-y-4">
                    {/* Copy Prompt */}
                    <div>
                      <h4 className="text-sm font-medium text-blue-400 mb-2">Copy Prompt:</h4>
                      <p className="text-gray-400 text-sm italic">"{channel.prompts.copy}"</p>
                    </div>
                    
                    {/* Visual Prompt */}
                    <div>
                      <h4 className="text-sm font-medium text-purple-400 mb-2">Visual Prompt:</h4>
                      <p className="text-gray-400 text-sm italic">"{channel.prompts.visual}"</p>
                    </div>
                    
                    {/* Automation */}
                    <div>
                      <h4 className="text-sm font-medium text-yellow-400 mb-2">Automation:</h4>
                      <p className="text-gray-400 text-sm">{channel.prompts.automation}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <button className="text-white hover:text-gray-300 transition-colors text-sm flex items-center space-x-2 group">
                      <span>Open Channel Studio</span>
                      <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Integration Note */}
      <section>
        <div className="bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-light mb-4 tracking-wide">Integration with Analytics & Insights</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Every channel card links back to Analytics → performance dashboards. 
            Example: Clicking "Instagram" not only provides prompts but also surfaces top-performing assets, 
            with AI recommending new caption/visual variations based on data.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-light mb-2">AI Copy Prompts</div>
              <div className="text-gray-400 text-sm">Channel-optimized templates</div>
            </div>
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-light mb-2">AI Visual Prompts</div>
              <div className="text-gray-400 text-sm">Format-specific generation</div>
            </div>
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-light mb-2">Automation Workflows</div>
              <div className="text-gray-400 text-sm">Smart adaptation & distribution</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChannelsHub;