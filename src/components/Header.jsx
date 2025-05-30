import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

const Header = () => {
  const navigate = useNavigate(); // Хук для навигации

  // Функция для перехода на главную
  const goToHome = () => {
    navigate('/');
  };

  return (
    <header className="header">
      {/* Логотип (кликабельный) */}
      <div className="logo" onClick={goToHome} style={{ cursor: 'pointer' }}>
        BLAENZAIGA
      </div>

      <nav className="nav">
        <ul>
          {/* Пункт "Главная" (кликабельный) */}
          <li>
            <a href="/" onClick={(e) => {
              e.preventDefault(); // Отменяем стандартное поведение ссылки
              goToHome(); // Переходим на главную
            }}>
              Главная
            </a>
          </li>
          
          <li><a href="/men">Мужское</a></li>
          <li><a href="/women">Женское</a></li>
          <li><a href="/new">Новинки</a></li>
          <li><a href="/contacts">Контакты</a></li>
        </ul>
      </nav>

      <div className="cart">Корзина (0)</div>
    </header>
  );
};

export default Header;