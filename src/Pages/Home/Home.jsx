import home from "./Home.module.scss";
import Buttom from "../../Components/Button";

const Home = () => {
  return (
    <div className={home.home} id="home">
      <section className={home.section}>
        <div className={home.contenido}>
          <h1 className={home.title}>
            Bem-vindo à Conferência Estadual de Ciência, Tecnologia e Inovação!
          </h1>
          <p className={home.description}>
            Descubra o futuro da pesquisa e inovação enquanto reunimos
            especialistas, acadêmicos e inovadores sob o mesmo teto. Junte-se a
            nós enquanto exploramos avanços inovadores e traçamos o curso para
            um futuro mais promissor.
          </p>
          <div className={home.buttons}>
            <Buttom text={"inscreva-se"}></Buttom>
            <Buttom text={"Saber mais"}></Buttom>
          </div>
        </div>
      </section>
      <section className={home.section}>
        <div className={home.cover}>
          <img src="tec.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
