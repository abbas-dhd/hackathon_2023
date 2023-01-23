import { BrowserRouter, HashRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageCarousel from "./components/ImageCarousel";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Body />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;

/* 
Header
<routers>
- Home
- Product Page
- Reels

</>
 Footer
 */
