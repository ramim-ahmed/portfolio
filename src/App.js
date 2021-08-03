import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyProjects from "./components/MyProjects";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <About/>
      <MyProjects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
