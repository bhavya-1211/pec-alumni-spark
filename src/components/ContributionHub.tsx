import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Users, Building, UserPlus, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContributionHub = () => {
  const [contributionType, setContributionType] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Contribution types with icons and descriptions
  const contributionTypes = [
    {
      value: "mentorship",
      label: "Mentorship",
      icon: Users,
      description: "Guide and mentor current students or recent graduates"
    },
    {
      value: "donation",
      label: "Donation",
      icon: Heart,
      description: "Financial support for college infrastructure and programs"
    },
    {
      value: "internship",
      label: "Internship",
      icon: Building,
      description: "Provide internship opportunities at your organization"
    },
    {
      value: "referral",
      label: "Referral",
      icon: UserPlus,
      description: "Help alumni find job opportunities through referrals"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contributionType || !details.trim()) {
      toast({
        title: "Please fill all fields",
        description: "Both contribution type and details are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for your contribution!",
        description: "Your contribution has been submitted successfully. We'll be in touch soon.",
        className: "bg-success text-success-foreground",
      });
      
      // Reset form
      setContributionType('');
      setDetails('');
    }, 1000);
  };

  const selectedType = contributionTypes.find(type => type.value === contributionType);

  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Give Back Marketplace</h2>
          <p className="text-muted-foreground text-lg">
            Share your expertise and resources to help the PEC community grow
          </p>
        </div>

        <Card className="shadow-elevated border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-foreground">
              Make a Contribution
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contribution Type Selection */}
              <div className="space-y-3">
                <Label htmlFor="contribution-type" className="text-base font-semibold text-foreground">
                  Type of Contribution
                </Label>
                <Select value={contributionType} onValueChange={setContributionType}>
                  <SelectTrigger className="w-full h-12 border-border bg-background">
                    <SelectValue placeholder="Select how you'd like to contribute" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {contributionTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <SelectItem 
                          key={type.value} 
                          value={type.value}
                          className="cursor-pointer hover:bg-accent"
                        >
                          <div className="flex items-center space-x-3">
                            <IconComponent className="w-4 h-4 text-primary" />
                            <div>
                              <div className="font-medium">{type.label}</div>
                              <div className="text-xs text-muted-foreground">{type.description}</div>
                            </div>
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                
                {selectedType && (
                  <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <div className="flex items-center space-x-3">
                      <selectedType.icon className="w-5 h-5 text-primary" />
                      <div>
                        <h4 className="font-semibold text-foreground">{selectedType.label}</h4>
                        <p className="text-sm text-muted-foreground">{selectedType.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Details Textarea */}
              <div className="space-y-3">
                <Label htmlFor="details" className="text-base font-semibold text-foreground">
                  Details
                </Label>
                <Textarea
                  id="details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Describe your contribution in detail. Include any relevant information such as availability, requirements, or specific areas of expertise..."
                  className="min-h-32 border-border bg-background resize-none"
                />
                <p className="text-sm text-muted-foreground">
                  {details.length}/500 characters
                </p>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                disabled={isSubmitting || !contributionType || !details.trim()}
                className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300 py-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Submit Contribution
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContributionHub;