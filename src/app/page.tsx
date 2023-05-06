import Navbar from "./(homepageComponents)/Navbar";
import ProfileSection from "./(homepageComponents)/ProfileSection";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ProfileSection />
      <Navbar />
    </div>
  );
};

export default App;
