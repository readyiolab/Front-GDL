import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/products" },
  { title: "Opportunity", path: "/opportunity" },
  { title: "Opportunity Overview", path: "/opportunity-overview" },
  { title: "Join Now", path: "/join-now" },
  { title: "Blog", path: "/blog" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent hidden sm:block">
              Company
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-md border border-blue-100">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                end={item.path === "/"} // Ensures exact match for home route
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    isActive
                      ? "text-white bg-blue-950 border-blue-950 shadow-md"
                      : "text-blue-950 hover:text-white hover:bg-blue-950 border-transparent hover:border-blue-950 hover:shadow-sm"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Contact Button - Desktop */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            to="/contact"
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-950 to-blue-800 text-white rounded-full font-medium hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            <span>Contact</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-blue-50 rounded-full"
              >
                <Menu className="h-6 w-6 text-blue-950" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <div className="flex flex-col h-full bg-gradient-to-b from-white to-slate-50">
                <div className="flex items-center justify-between p-6 border-b border-blue-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">C</span>
                    </div>
                    <span className="text-xl font-bold text-blue-950">
                      Company
                    </span>
                  </div>
                </div>
                <nav className="flex flex-col p-6 space-y-3 flex-1">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.title}
                      to={item.path}
                      end={item.path === "/"}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 border ${
                          isActive
                            ? "text-white bg-blue-950 border-blue-950 shadow-md"
                            : "text-blue-950 hover:text-white hover:bg-blue-950 border-blue-200 hover:border-blue-950 hover:shadow-sm"
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  ))}
                  {/* Contact Button in Mobile Menu */}
                  <div className="pt-4 border-t border-blue-100 mt-4">
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-blue-950 to-blue-800 text-white rounded-xl font-medium shadow-md transition-all duration-300"
                    >
                      <Mail className="h-5 w-5" />
                      <span>Contact Us</span>
                    </Link>
                  </div>
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