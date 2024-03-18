import "./Home.scss";
import Buttom from "./Components/Button";

const Home = () => {
  return (
    <div className="home" id="home">
      <section className="home__section home__section--intro">
        <div className="home__content">
          <h1 className="home__title">
            Bem-vindo à Conferência Estadual de Ciência, Tecnologia e Inovação!
          </h1>
          <p className="home__description">
            Descubra o futuro da pesquisa e inovação enquanto reunimos
            especialistas, acadêmicos e inovadores sob o mesmo teto. Junte-se a
            nós enquanto exploramos avanços inovadores e traçamos o curso para
            um futuro mais promissor.
          </p>
          <div className="home__buttons">
            <Buttom text={"inscreva-se"}></Buttom>
            <Buttom text={"Saber mais"}></Buttom>
          </div>
        </div>
      </section>
      <section className="home__section home__section--cover">
        <div className="home__cover">
          <img src="tec.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
