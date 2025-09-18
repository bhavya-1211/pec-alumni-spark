import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Network, TrendingUp, Users, Award, Eye } from 'lucide-react';

const LegacyTree = () => {
  // Dummy stats for the visualization placeholder
  const stats = [
    {
      label: "Total Alumni",
      value: "15,000+",
      icon: Users,
      color: "text-primary"
    },
    {
      label: "Global Connections",
      value: "45,000+",
      icon: Network,
      color: "text-success"
    },
    {
      label: "Career Growth",
      value: "89%",
      icon: TrendingUp,
      color: "text-warning"
    },
    {
      label: "Industry Leaders",
      value: "500+",
      icon: Award,
      color: "text-destructive"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Alumni Legacy Tree</h2>
          <p className="text-muted-foreground text-lg">
            Visualize the interconnected network of PEC alumni success stories
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="shadow-card border-0 bg-card text-center">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-secondary flex items-center justify-center ${stat.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Visualization Placeholder */}
        <Card className="shadow-elevated border-0 bg-card">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-bold text-foreground flex items-center justify-center gap-3">
              <Network className="w-6 h-6 text-primary" />
              Interactive Network Visualization
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="relative bg-gradient-secondary rounded-lg border-2 border-dashed border-border/50 min-h-96 flex flex-col items-center justify-center text-center p-8">
              {/* Animated Network Icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                  <Network className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="w-6 h-6 bg-success rounded-full animate-bounce flex items-center justify-center">
                    <div className="w-2 h-2 bg-success-foreground rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -left-2">
                  <div className="w-6 h-6 bg-warning rounded-full animate-bounce delay-100 flex items-center justify-center">
                    <div className="w-2 h-2 bg-warning-foreground rounded-full"></div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                Interactive Network Visualization
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                This section will feature an interactive D3.js or Three.js visualization showing 
                the connections between alumni, their career paths, and industry impact.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Real-time Network
                </Badge>
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                  Career Pathways
                </Badge>
                <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">
                  Industry Clusters
                </Badge>
                <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">
                  Success Metrics
                </Badge>
              </div>

              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview Coming Soon
              </Button>
            </div>

            {/* Planned Features */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Network className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Alumni Connections</h4>
                <p className="text-sm text-muted-foreground">
                  Interactive nodes showing how alumni are connected through companies, projects, and mentorships
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Career Trajectories</h4>
                <p className="text-sm text-muted-foreground">
                  Visual pathways showing common career progressions and success stories from PEC
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-warning" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Impact Metrics</h4>
                <p className="text-sm text-muted-foreground">
                  Quantified impact of alumni contributions to technology, society, and innovation
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LegacyTree;