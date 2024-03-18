import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__sections">
        <div className="footer__section">
          <img src="logo.png" alt="" />
        </div>
        <div className="footer__section">
          <h2 className="footer__title">Institucional</h2>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#">Equipe</a>
            </li>
            <li className="footer__item">
              <a href="#">Galeria de Dirigentes</a>
            </li>
            <li className="footer__item">
              <a href="#">Histórico</a>
            </li>
            <li className="footer__item">
              <a href="#">Identidade Visual</a>
            </li>
            <li className="footer__item">
              <a href="#">Missão, Visão e Valores</a>
            </li>
            <li className="footer__item">
              <a href="#">Proteção de Dados Pessoais</a>
            </li>
            <li className="footer__item">
              <a href="#">Quem somos</a>
            </li>
            <li className="footer__item">
              <a href="#">Transparência Ativa</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h2 className="footer__title">Chamadas e Editais</h2>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#">Abertos</a>
            </li>
            <li className="footer__item">
              <a href="#">Em Julgamento</a>
            </li>
            <li className="footer__item">
              <a href="#">Encerrados</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h2 className="footer__title">Comunicação</h2>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#">Avisos</a>
            </li>
            <li className="footer__item">
              <a href="#">Fale conosco</a>
            </li>
            <li className="footer__item">
              <a href="#">FAPERGS 50 Anos</a>
            </li>
            <li className="footer__item">
              <a href="#">Intranet</a>
            </li>
            <li className="footer__item">
              <a href="#">Links Úteis</a>
            </li>
            <li className="footer__item">
              <a href="#">Notícias</a>
            </li>
            <li className="footer__item">
              <a href="#">Resultados e Indicadores</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="copyright">
        Derechos de autor © 2024 FAPERGS | Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
