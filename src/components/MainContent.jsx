import React from 'react';

const MainContent = () => {
  return (
    <main className="main-content">
      <h1>Добро пожаловать в BLAENZAIGA</h1>
      <p>Актуальные тренды сезона</p>
      
      <div className="products">
        <div className="product-card">
          <h3>Мужская куртка</h3>
          <p>2 999 ₽</p>
        </div>
        <div className="product-card">
          <h3>Женское платье</h3>
          <p>3 499 ₽</p>
        </div>
        <div className="product-card">
          <h3>Кроссовки</h3>
          <p>4 299 ₽</p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;