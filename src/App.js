import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
