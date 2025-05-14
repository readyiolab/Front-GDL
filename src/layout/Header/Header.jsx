import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { title: 'Home', path: '/' },
  { title: 'Products', path: '/products' },
  { title: 'Opportunity', path: '/opportunity' },
  { title: 'Opportunity Overview', path: '/opportunity-overview' },
 
  { title: 'Join Now', path: '/join-now' },
  
  { title: 'Contact', path: '/contact' },
  { title: 'Blog', path: '/blog' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/">
            <h1 className="text-2xl font-bold text-blue-600">Logo</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-end items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-gray-700" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;