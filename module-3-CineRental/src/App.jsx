import MovieList from './components/Movie/MovieList';
import Sidebar from './components/Sidebar';
import Footer from './shared/Footer';
import Header from './shared/Header';

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
