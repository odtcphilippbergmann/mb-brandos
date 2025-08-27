import React from 'react';
import { Database, Star, Download, Search, Filter, Upload } from 'lucide-react';

const AssetHub: React.FC = () => {
  const features = [
    'Master brand guidelines',
    'Auto-updated templates',
    'Global access with permissions'
  ];

  const automationCases = [
    'Auto-flag outdated assets',
    'Suggest best asset version by channel/region',
    'Version control with approval workflows'
  ];

  const mockAssets = [
    {
      type: 'Logo',
      name: 'Mercedes Star - Primary',
      formats: ['SVG', 'PNG', 'EPS'],
      downloads: '12.3K',
      updated: '2 days ago'
    },
    {
      type: 'Template',
      name: 'Social Media Kit - EQS',
      formats: ['PSD', 'AI', 'SKETCH'],
      downloads: '8.7K',
      updated: '1 week ago'
    },
    {
      type: 'Video',
      name: 'AMG GT Hero Film',
      formats: ['MP4', 'MOV', 'ProRes'],
      downloads: '4.2K',
      updated: '3 days ago'
    },
    {
      type: 'Photography',
      name: 'EQE Lifestyle Collection',
      formats: ['RAW', 'JPEG', 'TIFF'],
      downloads: '15.1K',
      updated: '5 days ago'
    }
  ];

  const assetCategories = [
    { name: 'Logos & Identity', count: 847, icon: Star },
    { name: 'Templates', count: 1234, icon: Database },
    { name: 'Photography', count: 5678, icon: Database },
    { name: 'Video Assets', count: 892, icon: Database },
    { name: 'Brand Guidelines', count: 156, icon: Database },
    { name: '3D Models', count: 234, icon: Database }
  ];

  return (
    <div className="p-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-lg">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-extralight mb-6 tracking-tight">
              One star, 
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"> one source.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Centralized hub for every Mercedes-Benz brand asset: logos, fonts, templates, videos, AR/3D models. 
              Always consistent, always accessible.
            </p>
            <div className="flex items-center space-x-4">
              <Star className="text-white" size={24} />
              <span className="text-gray-400">6M+ assets downloaded by 46,000+ users globally</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Actions */}
      <section className="mb-12">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search assets, guidelines, templates..."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition-colors">
              <Filter size={18} />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 bg-white text-black hover:bg-gray-100 px-4 py-3 rounded-lg transition-colors">
              <Upload size={18} />
              <span>Upload Asset</span>
            </button>
          </div>
        </div>
      </section>

      {/* Asset Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">Asset Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assetCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <Icon size={24} className="text-white" />
                  <span className="text-2xl font-light">{category.count.toLocaleString()}</span>
                </div>
                <h3 className="text-lg font-medium">{category.name}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* Popular Assets */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">Popular Assets</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {mockAssets.map((asset, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">{asset.type}</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{asset.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{asset.formats.join(', ')}</span>
                    <span>•</span>
                    <span>{asset.downloads} downloads</span>
                  </div>
                </div>
                <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors">
                  <Download size={18} />
                </button>
              </div>
              <div className="text-xs text-gray-500">Updated {asset.updated}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-light mb-8 tracking-wide">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Database size={20} className="text-white" />
              </div>
              <p className="text-gray-300 leading-relaxed">{feature}</p>
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
              <Star size={20} className="text-white mt-1 flex-shrink-0" />
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
            <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-4">Library Grid with Mercedes Star Watermark</h3>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Clean, searchable asset library with subtle Mercedes star watermarks on all preview thumbnails. 
              Organized by type, region, and usage permissions with drag-and-drop functionality for easy access.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssetHub;