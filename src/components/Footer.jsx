import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>О нас</h3>
          <p>BLAENZAIGA - стиль вне времени</p>
        </div>
        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Email: info@modnymagazin.ru</p>
          <p>Телефон: +7 (123) 456-78-90</p>
        </div>
        <div className="footer-section">
          <h3>Мы в соцсетях</h3>
          <p>ВКонтакте</p>
          <p>Telegram</p>
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} BLAENZAIGA. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;