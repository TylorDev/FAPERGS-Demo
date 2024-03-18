import "./App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import TestimonialsPage from "./TestimonialPage";
import Faq from "./FAQ";

function App() {
  return (
    <>
      <Header />
      <div className="Contenido">
        <Home></Home>
        <About></About>
        <TestimonialsPage></TestimonialsPage>
        <Faq></Faq>
      </div>
      <Footer />
    </>
  );
}

export default App;
