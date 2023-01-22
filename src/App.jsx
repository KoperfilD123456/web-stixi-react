import './App.css';
import Footer from './components/Footer/Footer';
import Header from "./components/Header"
import Navbar_top from './components/Top_navbar/Navbar_top';
import Page_content from './components/Page_content/Page_content';



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar_top />
      <Page_content />
      <Footer />
    </div>
  );
}

export default App;
