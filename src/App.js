import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Article from "./Components/Article";
import Footer from "./Components/Footer";
import "./style.css"

function App() {
  return (
    <div className="app">
      <Header/>
      <Nav /> 
      <Article/>
    
      <Footer/>
      
      
    </div>
  );
}

export default App;
