import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TaskBoard from './components/TaskBoard/TaskBoard';

const App = () => {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Navbar />
      <Header />
      <TaskBoard />
      <Footer />
    </div>
  );
};

export default App;
