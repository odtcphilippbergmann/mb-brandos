import { useEffect, useCallback, useRef } from 'react';

interface UseKeyboardNavigationProps {
  items: string[];
  activeIndex: number;
  onNavigate: (index: number) => void;
  onSelect?: (index: number) => void;
  isEnabled?: boolean;
}

export const useKeyboardNavigation = ({
  items,
  activeIndex,
  onNavigate,
  onSelect,
  isEnabled = true
}: UseKeyboardNavigationProps) => {
  const containerRef = useRef<HTMLElement>(null);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isEnabled) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        onNavigate(activeIndex < items.length - 1 ? activeIndex + 1 : 0);
        break;
      case 'ArrowUp':
        event.preventDefault();
        onNavigate(activeIndex > 0 ? activeIndex - 1 : items.length - 1);
        break;
      case 'Home':
        event.preventDefault();
        onNavigate(0);
        break;
      case 'End':
        event.preventDefault();
        onNavigate(items.length - 1);
        break;
      case 'Enter':
      case ' ':
        if (onSelect) {
          event.preventDefault();
          onSelect(activeIndex);
        }
        break;
      case 'Escape':
        // Allow parent components to handle escape
        break;
    }
  }, [items, activeIndex, onNavigate, onSelect, isEnabled]);

  useEffect(() => {
    const container = containerRef.current;
    if (container && isEnabled) {
      container.addEventListener('keydown', handleKeyDown);
      return () => container.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown, isEnabled]);

  return { containerRef };
};