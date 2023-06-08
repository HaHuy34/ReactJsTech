import "./App.css"
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Main from "./Main";

function App() {
  const name = "Chao ban";
  return (
    <div className="container">
      <Header name = {name} />
      <h1>Hello {name}</h1>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
