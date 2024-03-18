import "./App.scss";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import { Home, TestimonialPage, FAQ, About } from "./Pages/Index";

function App() {
  return (
    <>
      <Header />
      <div className="Contenido">
        <Home></Home>
        <About></About>
        <TestimonialPage></TestimonialPage>
        <FAQ></FAQ>
      </div>
      <Footer />
    </>
  );
}

export default App;
