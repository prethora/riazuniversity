import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import LanguageToggle from './LanguageToggle';

interface NavItem {
  key: string;
  path: string;
  children?: { key: string; path: string }[];
}

const navItems: NavItem[] = [
  { key: 'philosophy', path: '/philosophy' },
  {
    key: 'stoneSoup',
    path: '/stone-soup',
    children: [
      { key: 'book', path: '/stone-soup/book' },
    ],
  },
  { key: 'morningRitual', path: '/morning-ritual' },
  { key: 'wanderingTable', path: '/wandering-table' },
  { key: 'howILearnedEnglish', path: '/how-i-learned-english' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { localePath } = useLocale();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 h-16 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to={localePath('/')}
          className="font-heading text-xl font-normal text-text-primary hover:text-accent transition-colors duration-200"
        >
          Riaz University
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex h-full items-center">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.key} className="relative h-full flex items-center" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="h-full text-[0.9375rem] text-text-secondary hover:text-accent hover:bg-surface px-3 transition-colors duration-200 tracking-wide cursor-pointer flex items-center gap-1"
                >
                  {t(`nav.${item.key}`)}
                  <svg className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 min-w-[160px] bg-background border border-border rounded-sm shadow-sm overflow-hidden">
                    <Link
                      to={localePath(item.path)}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2.5 text-[0.875rem] text-text-secondary hover:text-accent hover:bg-surface transition-colors duration-200 tracking-wide"
                    >
                      {t(`nav.${item.key}`)}
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.key}
                        to={localePath(child.path)}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2.5 text-[0.875rem] text-text-secondary hover:text-accent hover:bg-surface transition-colors duration-200 tracking-wide"
                      >
                        {t(`nav.${child.key}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.key}
                to={localePath(item.path)}
                className="h-full flex items-center text-[0.9375rem] text-text-secondary hover:text-accent hover:bg-surface px-3 transition-colors duration-200 tracking-wide"
              >
                {t(`nav.${item.key}`)}
              </Link>
            )
          )}
          <div className="ml-4 pl-4 border-l border-border">
            <LanguageToggle />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-4 lg:hidden">
          <LanguageToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-1.5">
              <span className={`block h-px bg-text-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-px bg-text-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-text-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="px-6 py-6 space-y-4">
            <Link
              to={localePath('/')}
              onClick={() => setIsOpen(false)}
              className="block text-text-secondary hover:text-accent transition-colors duration-200 tracking-wide"
            >
              {t('nav.home')}
            </Link>
            {navItems.map((item) => (
              <div key={item.key}>
                <Link
                  to={localePath(item.path)}
                  onClick={() => setIsOpen(false)}
                  className="block text-text-secondary hover:text-accent transition-colors duration-200 tracking-wide"
                >
                  {t(`nav.${item.key}`)}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.key}
                    to={localePath(child.path)}
                    onClick={() => setIsOpen(false)}
                    className="block pl-4 mt-3 text-[0.875rem] text-text-secondary hover:text-accent transition-colors duration-200 tracking-wide"
                  >
                    {t(`nav.${child.key}`)}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
