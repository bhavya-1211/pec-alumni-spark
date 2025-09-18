import { Heart, GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PEC Alumni Connect</h3>
                <p className="text-sm opacity-80">Connecting Minds, Building Future</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Empowering PEC alumni to stay connected, share knowledge, and create lasting impact 
              in their professional and personal journeys.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-4 h-4 opacity-80" />
                <span className="text-sm">PEC University, Chandigarh</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="text-sm">alumni@pec.edu.in</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-4 h-4 opacity-80" />
                <span className="text-sm">+91 172 275 1234</span>
              </div>
            </div>
          </div>

          {/* Team Credit */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Development Team</h4>
            <div className="space-y-2">
              <p className="text-sm font-medium">SIH Team</p>
              <p className="text-sm opacity-90">Punjab Engineering College</p>
              <p className="text-sm opacity-90">Chandigarh</p>
              <div className="flex items-center justify-center md:justify-end space-x-1 mt-3">
                <span className="text-sm opacity-80">Built with</span>
                <Heart className="w-4 h-4 text-red-300 animate-pulse" />
                <span className="text-sm opacity-80">for innovation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © {currentYear} PEC Alumni Connect. All rights reserved.
            </div>
            <div className="text-sm opacity-80">
              Smart India Hackathon 2024 • Team PEC
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;