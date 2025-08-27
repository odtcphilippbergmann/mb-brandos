import React, { useState } from 'react';
import { Keyboard, X } from 'lucide-react';

interface Shortcut {
  key: string;
  description: string;
  category: string;
}

const KeyboardShortcutsHelp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts: Shortcut[] = [
    { key: '/', description: 'Focus search', category: 'Navigation' },
    { key: 'm', description: 'Toggle mobile menu', category: 'Navigation' },
    { key: 'h', description: 'Go to home/overview', category: 'Navigation' },
    { key: 'c', description: 'Go to campaigns', category: 'Navigation' },
    { key: 'a', description: 'Go to analytics', category: 'Navigation' },
    { key: 'Escape', description: 'Close menus/dialogs', category: 'General' },
    { key: 'Tab', description: 'Navigate to next element', category: 'General' },
    { key: 'Shift + Tab', description: 'Navigate to previous element', category: 'General' },
    { key: '↑ ↓', description: 'Navigate menu items', category: 'Menu' },
    { key: 'Enter / Space', description: 'Activate focused element', category: 'General' },
    { key: 'Home', description: 'First menu item', category: 'Menu' },
    { key: 'End', description: 'Last menu item', category: 'Menu' }
  ];

  const groupedShortcuts = shortcuts.reduce((acc, shortcut) => {
    if (!acc[shortcut.category]) {
      acc[shortcut.category] = [];
    }
    acc[shortcut.category].push(shortcut);
    return acc;
  }, {} as Record<string, Shortcut[]>);

  const toggleHelp = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === '?' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        toggleHelp();
      }
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Help trigger button */}
      <button
        onClick={toggleHelp}
        className="fixed bottom-4 right-4 z-50 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-white transition-colors"
        aria-label="Show keyboard shortcuts help"
        title="Keyboard shortcuts (Ctrl+?)"
      >
        <Keyboard size={20} />
      </button>

      {/* Help modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="shortcuts-title"
            aria-modal="true"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 id="shortcuts-title" className="text-2xl font-light">
                  Keyboard Shortcuts
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
                  aria-label="Close shortcuts help"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {Object.entries(groupedShortcuts).map(([category, shortcuts]) => (
                  <div key={category}>
                    <h3 className="text-lg font-medium mb-3 text-gray-300">
                      {category}
                    </h3>
                    <div className="space-y-2">
                      {shortcuts.map((shortcut, index) => (
                        <div key={index} className="flex items-center justify-between py-2 px-3 bg-gray-800 rounded">
                          <span className="text-gray-300">{shortcut.description}</span>
                          <kbd className="px-2 py-1 text-xs font-mono bg-black text-white rounded border border-gray-600">
                            {shortcut.key}
                          </kbd>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700 text-sm text-gray-400">
                <p>Press <kbd className="px-1 py-0.5 bg-black rounded text-xs">Ctrl+?</kbd> to toggle this help</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KeyboardShortcutsHelp;