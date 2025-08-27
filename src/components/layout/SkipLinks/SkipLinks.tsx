import React from 'react';

interface SkipLinksProps {
  onSkipToMain: () => void;
  onSkipToNav: () => void;
}

const SkipLinks: React.FC<SkipLinksProps> = ({ onSkipToMain, onSkipToNav }) => {
  return (
    <div className="skip-links">
      <button
        onClick={onSkipToMain}
        className="skip-link"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSkipToMain();
          }
        }}
      >
        Skip to main content
      </button>
      <button
        onClick={onSkipToNav}
        className="skip-link"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSkipToNav();
          }
        }}
      >
        Skip to navigation
      </button>
    </div>
  );
};

export default SkipLinks;