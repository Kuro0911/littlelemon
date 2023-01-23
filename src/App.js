import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Specials from "./components/Specials/Specials";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <section>
        <Banner />
      </section>
      <section>
        <Specials />
      </section>
    </div>
  );
}

export default App;
