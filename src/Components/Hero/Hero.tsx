import React from 'react';
import arrowBtn from '../../Assets/Images/arrow-button.png';
import './Hero.scss';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__main">
          <h1 className="hero__title">
            모든 계약을 쉽고 <br /> 간단하게, 빠르게 처리하세요.
          </h1>
          <p className="hero__desc">
            가드 시그니처를 이용하면 어떤 계약이든 <br /> 복잡한 과정없이
            간편하고 손쉽게 처리할 수 있고, <br /> 문서 처리 및 관리까지
            편리하게 이용할 수 있습니다.
          </p>
          <div className="hero__extra">
            <span>지금 확인하기</span>
            <img src={arrowBtn} alt="arrow-button" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
