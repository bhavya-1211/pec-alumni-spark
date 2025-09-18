import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Linkedin, Github, Loader2, Sparkles } from 'lucide-react';

const AlumniProfile = () => {
  const [isSyncing, setIsSyncing] = useState(false);

  // Dummy profile data
  const profileData = {
    name: "Priya Sharma",
    title: "Senior Software Engineer",
    company: "Google",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/priyasharma",
    github: "https://github.com/priyasharma"
  };

  const handleAISync = async () => {
    setIsSyncing(true);
    // Simulate AI sync process
    setTimeout(() => {
      setIsSyncing(false);
    }, 2000);
  };

  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Alumni Profile</h2>
          <p className="text-muted-foreground text-lg">Showcase your professional journey</p>
        </div>

        <Card className="shadow-elevated border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="relative mx-auto mb-6">
              <img 
                src={profileData.profileImage} 
                alt={profileData.name}
                className="w-32 h-32 rounded-full object-cover shadow-glow mx-auto"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-card flex items-center justify-center">
                <div className="w-3 h-3 bg-success-foreground rounded-full"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground">{profileData.name}</h3>
            <p className="text-lg text-primary font-semibold">{profileData.title}</p>
            <p className="text-muted-foreground">{profileData.company}</p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Professional Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a 
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">GitHub</span>
              </a>
            </div>

            {/* AI Sync Button */}
            <div className="text-center">
              <Button 
                onClick={handleAISync}
                disabled={isSyncing}
                className="bg-gradient-hero hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold relative overflow-hidden group"
              >
                {isSyncing ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Syncing Profile...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    AI Sync Profile
                  </>
                )}
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Automatically update your profile with latest achievements
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AlumniProfile;