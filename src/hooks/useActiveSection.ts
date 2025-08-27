import { useState } from 'react';

export const useActiveSection = (initialSection: string = 'home') => {
  const [activeSection, setActiveSection] = useState(initialSection);
  
  return {
    activeSection,
    setActiveSection,
  };
};