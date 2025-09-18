import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, TrendingUp, Code, Briefcase, Globe, Heart } from 'lucide-react';

const Groups = () => {
  const [joinedGroups, setJoinedGroups] = useState<number[]>([]);

  // Dummy groups data
  const groupsData = [
    {
      id: 1,
      name: "Fintech Innovators",
      members: 150,
      description: "Exploring the future of financial technology",
      icon: TrendingUp,
      color: "text-success"
    },
    {
      id: 2,
      name: "Tech Entrepreneurs",
      members: 230,
      description: "Building tomorrow's unicorn startups",
      icon: Briefcase,
      color: "text-primary"
    },
    {
      id: 3,
      name: "Open Source Contributors",
      members: 89,
      description: "Contributing to open source projects worldwide",
      icon: Code,
      color: "text-warning"
    },
    {
      id: 4,
      name: "Global Alumni Network",
      members: 450,
      description: "Connecting PEC alumni across the globe",
      icon: Globe,
      color: "text-primary-glow"
    },
    {
      id: 5,
      name: "Women in Tech",
      members: 95,
      description: "Empowering women in technology careers",
      icon: Heart,
      color: "text-destructive"
    },
    {
      id: 6,
      name: "Startup Mentors",
      members: 67,
      description: "Guiding the next generation of entrepreneurs",
      icon: Users,
      color: "text-accent-foreground"
    }
  ];

  const handleJoinGroup = (groupId: number) => {
    if (joinedGroups.includes(groupId)) {
      setJoinedGroups(joinedGroups.filter(id => id !== groupId));
    } else {
      setJoinedGroups([...joinedGroups, groupId]);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Groups & Cohorts</h2>
          <p className="text-muted-foreground text-lg">Connect with like-minded alumni in your areas of interest</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupsData.map((group) => {
            const IconComponent = group.icon;
            const isJoined = joinedGroups.includes(group.id);

            return (
              <Card 
                key={group.id} 
                className="shadow-card hover:shadow-elevated transition-all duration-300 border-0 bg-card group cursor-pointer hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-lg bg-secondary ${group.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="text-xs font-medium bg-secondary/50"
                    >
                      {group.members} members
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {group.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {group.description}
                  </p>
                  
                  <Button 
                    onClick={() => handleJoinGroup(group.id)}
                    variant={isJoined ? "secondary" : "default"}
                    className={`w-full font-semibold transition-all duration-300 ${
                      isJoined 
                        ? "bg-success hover:bg-success/90 text-success-foreground" 
                        : "bg-primary hover:bg-primary-glow hover:shadow-glow"
                    }`}
                  >
                    {isJoined ? "Joined ✓" : "Join Group"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Groups;