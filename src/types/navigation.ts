export interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export interface NavigationProps {
  navigationItems: NavigationItem[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}