import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import bgImage from "../../assets/bg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-top-text">
        <p>
          Мы знаем, что такое нейросети и как <br />
          их использовать для решения задач, <br />
          которые стоят перед бизнесом.
        </p>
      </div>

      <h1 className="hero-title">ЭЙАЙ ТЕХ</h1>

      {/* Кнопка с переходом на страницу заказа */}
      <Link to="/order" className="hero-button">
        Оставить заявку
      </Link>

      <div className="marquee">
        <div className="marquee-content">
          <span>сайты</span>
          <span>чат-боты</span>
          <span>ии-агенты</span>
          <span>боты для трейдинга</span>
          <span>комплексные решения с использованием нейросетей под ключ</span>
          <span>сайты</span>
          <span>чат-боты</span>
          <span>ии-агенты</span>
          <span>боты для трейдинга</span>
          <span>комплексные решения с использованием нейросетей под ключ</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
