import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/products" },
  { title: "Opportunity", path: "/opportunity" },
  { title: "Opportunity Overview", path: "/opportunity-overview" },
  { title: "Join Now", path: "/join-now" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  return (
    <header className="w-full border-b bg-gradient-to-br from-orange-50 via-white to-orange-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={() => setActiveItem("/")}
          >
            <span className="text-2xl font-bold text-gray-800 hidden sm:block">
              Company
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              onClick={() => setActiveItem(item.path)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeItem === item.path
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-gray-700" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <div className="flex flex-col h-full bg-white">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-800">
                      Company
                    </span>
                  </div>
                </div>
                <nav className="flex flex-col p-4 space-y-1 flex-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      onClick={() => {
                        setActiveItem(item.path);
                        setIsOpen(false);
                      }}
                      className={`px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                        activeItem === item.path
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
