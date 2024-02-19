import Navbar from "./(Components)/Navbar";
import ProfileSection from "./(Components)/ProfileSection";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ProfileSection />
      <Navbar />
    </div>
  );
};

export default App;
