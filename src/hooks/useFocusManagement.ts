import { useEffect, useRef, useCallback } from 'react';

export const useFocusManagement = () => {
  const focusableElementsSelector = 
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select';
  
  const trapFocus = useCallback((container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(focusableElementsSelector);
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, []);

  const focusFirstElement = useCallback((container: HTMLElement) => {
    const firstFocusable = container.querySelector(focusableElementsSelector) as HTMLElement;
    firstFocusable?.focus();
  }, []);

  const restoreFocus = useCallback((element: HTMLElement | null) => {
    if (element && document.contains(element)) {
      element.focus();
    }
  }, []);

  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  return {
    trapFocus,
    focusFirstElement,
    restoreFocus,
    announceToScreenReader
  };
};