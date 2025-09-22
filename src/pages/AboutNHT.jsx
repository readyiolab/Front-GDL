import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Globe, 
  TrendingUp, 
  Award, 
  Users, 
  Heart,
  DollarSign,
  GraduationCap,
  Play
} from "lucide-react";

const AboutNHT = () => {
  const features = [
    {
      icon: Building,
      title: "Proven Company",
      description: "15+ years history with record-breaking growth and financial stability"
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "Operating in 38+ countries, shipping to 50+ countries worldwide"
    },
    {
      icon: Award,
      title: "Revolutionary Model",
      description: "E-commerce business model that is the envy of the industry"
    },
    {
      icon: Heart,
      title: "Health Products",
      description: "High impacting products promoting a healthy lifestyle"
    },
    {
      icon: DollarSign,
      title: "Financial Health",
      description: "Lucrative compensation plan for committed members"
    },
    {
      icon: GraduationCap,
      title: "Training System",
      description: "Comprehensive training system in place to ensure your success"
    }
  ];

  const healthAspects = [
    { label: "Physical Health", color: "bg-primary" },
    { label: "Emotional Health", color: "bg-success" },
    { label: "Financial Health", color: "bg-gold" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                <Building className="w-4 h-4 mr-2" />
                About NHT Global
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
                Do you know what it means to have 
                <span className="text-blue-950"> Dream Life</span>?
              </h2>
              
              <p className=" text-black leading-relaxed">
                Living the Best Life means Excellent Health, Better Financial Potential, 
                Enriching Personal Relationships and the freedom to spend YOUR time enjoying 
                what makes you happy... we call that a Dream Life!
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-foreground">
                Get Dream Life (GDL) welcomes to the world of opportunity and infinite 
                potential for a great life. If you're worried about job security, 
                interested in extra income opportunities or looking for a change in your 
                professional career, your worries stop here.
              </p>
              
              <p className="text-foreground">
                This is the time to start your own business, be your own boss, choose 
                your time of working and Live Your Dream Life. Get what you deserve, 
                more than you expect.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black shadow-glow">
                <Play className="w-5 h-5 mr-2" />
                Watch NHT Global Video
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 shadow-md "
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        

       
      </div>
    </section>
  );
};

export default AboutNHT;