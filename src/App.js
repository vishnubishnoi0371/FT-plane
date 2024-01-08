import "./App.css";
import Backtop from "./components/Backtop";
import Feedback from "./components/Feedback";
import Fly from "./components/Fly";
import Footer from "./components/Footer";
import Locationbtn from "./components/Locationbtn";
import Locationsbutn from "./components/Locationsbutn";
import Memories from "./components/Memories";
import MyNav from "./components/MyNav";
import Newsletter from "./components/Newsletter";
import OurFeature from "./components/OurFeature";
import PreLoad from "./components/Preload";
import Tickets from "./components/Tickets";
import Travelers from "./components/Travelers";

function App() {
  return (
    <div className="App">
      <Backtop />
      <PreLoad />
      <MyNav />
      {/* <Locationbtn /> */}
      <Locationsbutn />
      <OurFeature />
      <Fly />
      <Tickets />
      <Travelers />
      <Feedback />
      <Memories />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
