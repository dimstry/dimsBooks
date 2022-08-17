import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Content from './components/Content';
import ContentLocal from './components/ContentLocal';
import { useEffect,useState } from 'react';
import Footer from './components/Footer';

function App() {
  
  const [scrolled, setScrolled] = useState(false);
  
  const goUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const up = document.querySelector(".action_up");
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        up.style.display = "block";
      } else {
        setScrolled(false);
        up.style.display = "none";
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])


  return (
    <div className="App" id='App'>
      <NavBar />
      <div className='action_up' onClick={goUp}>⬆️</div>
      <div className='mt-1'>
        <h1 className='my-2 text-bold'>Free Download</h1>
        <ContentLocal />
      </div>
      <div className='my-3'>
        <h1 className='my-2 text-bold'>Paid</h1>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
