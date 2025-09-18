import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlumniProfile from '@/components/AlumniProfile';
import Groups from '@/components/Groups';
import ContributionHub from '@/components/ContributionHub';
import LegacyTree from '@/components/LegacyTree';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content - Add padding top to account for fixed header */}
      <main className="pt-16">
        <div id="profile">
          <AlumniProfile />
        </div>
        
        <div id="groups">
          <Groups />
        </div>
        
        <div id="contribute">
          <ContributionHub />
        </div>
        
        <div id="legacy">
          <LegacyTree />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
