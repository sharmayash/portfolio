import Navbar from "@/components/common/Navbar";
import ProfileSection from "@/components/common/ProfileSection";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ProfileSection />
      <Navbar />
    </div>
  );
};

export default App;
