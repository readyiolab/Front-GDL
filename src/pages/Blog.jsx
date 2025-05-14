import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Calendar, Clock, User, ChevronRight, 
  ArrowRight, Search, Heart, MessageCircle, Share2, Bookmark,
  ChevronLeft, Filter, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Example blog post data
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Nutrients Your Body Needs Daily",
      excerpt: "Discover the vital nutrients your body requires for optimal health and learn how to incorporate them into your daily diet.",
      category: "wellness",
      image: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRofGVufDB8fDB8fHww",
      author: "Dr. Sarah Johnson",
      date: "May 2, 2025",
      readTime: "8 min read",
      tags: ["Nutrition", "Health", "Wellness"],
      featured: true,
      likes: 124,
      comments: 32
    },
    {
      id: 2,
      title: "The Science Behind Anti-Aging Skincare",
      excerpt: "Explore the cutting-edge research and ingredients that are revolutionizing the way we approach skin health and aging.",
      category: "beauty",
      image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhbHRofGVufDB8fDB8fHww",
      author: "Emma Rodriguez",
      date: "April 28, 2025",
      readTime: "6 min read",
      tags: ["Skincare", "Beauty", "Anti-aging"],
      featured: true,
      likes: 98,
      comments: 17
    },
    {
      id: 3,
      title: "Natural Ways to Boost Your Immune System",
      excerpt: "Learn effective, science-backed methods to strengthen your body's natural defenses against illness.",
      category: "wellness",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D",
      author: "Dr. Michael Chen",
      date: "April 25, 2025",
      readTime: "5 min read",
      tags: ["Immunity", "Natural Health", "Wellness"],
      featured: false,
      likes: 86,
      comments: 14
    },
    {
      id: 4,
      title: "Creating a Healthier Home Environment",
      excerpt: "Simple changes you can make to reduce toxins and create a healthier living space for you and your family.",
      category: "lifestyle",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D",
      author: "Jessica Wang",
      date: "April 20, 2025",
      readTime: "7 min read",
      tags: ["Home", "Clean Living", "Lifestyle"],
      featured: false,
      likes: 73,
      comments: 21
    },
    {
      id: 5,
      title: "Traditional Herbal Remedies for Modern Life",
      excerpt: "How ancient herbal wisdom can address contemporary health challenges and support overall wellbeing.",
      category: "herbal",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D",
      author: "Thomas Green",
      date: "April 15, 2025",
      readTime: "9 min read",
      tags: ["Herbal", "Traditional Medicine", "Natural Remedies"],
      featured: false,
      likes: 65,
      comments: 18
    },
    {
      id: 6,
      title: "The Connection Between Gut Health and Mental Wellbeing",
      excerpt: "New research reveals the profound impact your digestive system has on your mental health and emotional balance.",
      category: "wellness",
      image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D",
      author: "Dr. Laura Smith",
      date: "April 10, 2025",
      readTime: "10 min read",
      tags: ["Gut Health", "Mental Health", "Wellness"],
      featured: false,
      likes: 112,
      comments: 43
    }
  ];

  // List of blog categories
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'beauty', name: 'Beauty' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'herbal', name: 'Herbal' }
  ];

  // Filter posts based on active category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured posts - get top 2 featured posts
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 2);

  // Get category color class
  const getCategoryColor = (category) => {
    switch(category) {
      case 'wellness': return { bg: 'bg-green-100', text: 'text-green-700' };
      case 'beauty': return { bg: 'bg-pink-100', text: 'text-pink-700' };
      case 'lifestyle': return { bg: 'bg-blue-100', text: 'text-blue-700' };
      case 'herbal': return { bg: 'bg-lime-100', text: 'text-lime-700' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-700' };
    }
  };

  return (
    <section className="py-12 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-teal-50 opacity-40 blur-3xl" />
        <div className="absolute bottom-16 -left-16 w-64 h-64 rounded-full bg-purple-50 opacity-40 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-slide-in">
          <div className="inline-flex items-center justify-center bg-teal-50 p-2 rounded-full mb-3">
            <BookOpen className="h-5 w-5 text-teal-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">Health & Wellness Blog</h2>
          <div className="h-0.5 w-20 bg-teal-600 mx-auto mb-3"></div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Discover expert insights, practical tips, and the latest research to live your healthiest life.
          </p>
        </div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <div className="mb-10 animate-slide-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-teal-500" />
                Featured Articles
              </h3>
              <Button asChild variant="ghost" className="text-teal-600 hover:text-teal-700 text-base">
                <Link to="/blog">View all <ChevronRight className="h-4 w-4 ml-1" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="group bg-white border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-slide-in"
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className={`absolute top-4 left-4 ${getCategoryColor(post.category).bg} ${getCategoryColor(post.category).text} text-sm font-medium py-1 px-3 rounded-full`}>
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                    </div>
                  </Link>
                  <div className="flex justify-between items-center px-6 pb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700 text-sm">{post.author}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-500">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-green-500">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter Section */}
        <div className="mb-10 bg-white border border-gray-100 rounded-lg p-6 animate-slide-in">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10 text-base"
              />
            </div>
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="flex gap-2 overflow-x-auto scrollbar-hide">
                <Filter className="h-5 w-5 text-gray-500 flex-shrink-0 mt-1" />
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm px-4 py-1">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredPosts.map((post) => (
            <div 
              key={post.id} 
              className="group bg-white border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-slide-in flex flex-col"
            >
              <Link to={`/blog/${post.id}`} className="block flex-1">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 ${getCategoryColor(post.category).bg} ${getCategoryColor(post.category).text} text-xs font-medium py-1 px-2 rounded-full`}>
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white bg-opacity-80 text-gray-400 hover:text-teal-500"
                  >
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-5 flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                </div>
              </Link>
              <div className="flex justify-between items-center px-5 pb-5">
                <div className="flex items-center gap-2">
                  <User className="h-3 w-3 text-gray-600" />
                  <span className="text-gray-700 text-sm">{post.author}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    {post.comments}
                  </span>
                </div>
              </div>
              <div className="px-5 pb-5">
                <Button asChild variant="link" className="w-full justify-center text-teal-600 hover:text-teal-700 text-base">
                  <Link to={`/blog/${post.id}`}>Read Article <ArrowRight className="h-4 w-4 ml-1" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mb-10 animate-slide-in">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="h-9 w-9"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          {[1, 2, 3].map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? 'default' : 'outline'}
              onClick={() => setCurrentPage(page)}
              className="h-9 w-9 text-base"
            >
              {page}
            </Button>
          ))}
          <span className="text-gray-500 text-base px-2">...</span>
          <Button variant="outline" className="h-9 w-9 text-base">10</Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === 10}
            className="h-9 w-9"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-lg p-8 animate-slide-in">
          <h3 className="text-2xl font-bold mb-3">Join Our Health Newsletter</h3>
          <p className="text-teal-100 mb-5 text-base">
            Stay updated with the latest articles, health tips, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-900 h-10 text-base"
            />
            <Button className="bg-white text-teal-600 hover:bg-teal-50 h-10 text-base">
              Subscribe
            </Button>
          </div>
          <p className="text-teal-200 text-sm mt-4">
            Your privacy is safe with us. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}