import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import './styles/global.scss'
import Slider from './components/Slider'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;


