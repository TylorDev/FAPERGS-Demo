// About.js

import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__image">
          <img
            src="about.png"
            alt="Imagen de muestra"
            className="about__image"
          />
        </div>

        <div className="about__text">
          <h2 className="about__title">Sobre a Conferência</h2>
          <p className="about__description">
            A Conferência Estadual de Ciência, Tecnologia e Inovação é uma
            plataforma líder dedicada a promover a colaboração e impulsionar o
            progresso nos campos da ciência, tecnologia e inovação. Nossa
            conferência serve como um ponto de encontro para pesquisadores,
            formuladores de políticas, líderes da indústria e acadêmicos
            trocarem ideias, apresentarem pesquisas de ponta e forjarem
            parcerias que impulsionam a inovação. Desde explorar as últimas
            tendências até abordar desafios urgentes, estamos comprometidos em
            avançar o conhecimento e catalisar mudanças transformadoras.
          </p>
          <button className="about__button">Inscrever-se</button>
        </div>
      </div>
    </div>
  );
};

export default About;
