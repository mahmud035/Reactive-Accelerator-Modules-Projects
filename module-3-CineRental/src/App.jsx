import CartProvider from './contexts/CartContext';
import ThemeProvider from './contexts/ThemeContext';
import HomePage from './pages/HomePage';
import Footer from './shared/Footer';
import Header from './shared/Header';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Header />
        <HomePage />
        <Footer />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
