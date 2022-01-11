import { Layout, Typography } from 'antd';
import React from 'react';
import './Footer.scss';
import social1 from '../../Assets/Images/-e-sns_icon_1.svg';
import social2 from '../../Assets/Images/-e-sns_icon_2.svg';
import social3 from '../../Assets/Images/-e-sns_icon_3.svg';

function Footer() {
  return (
    <Layout.Footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__title-group">
            <Typography.Text className="footer__title">
              이용약관{' '}
            </Typography.Text>
            <Typography.Text className="footer__title">
              {' '}
              개인정보처리방침{' '}
            </Typography.Text>
            <Typography.Text className="footer__title">
              {' '}
              고객센터
            </Typography.Text>
          </div>
          <Typography.Text className="footer__desc">
            {' '}
            (주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 :
            356-00-00000 <br />
            이메일 : test0101@guardsignature.co.kr｜ FAX : 070-0000-0000 <br />
            서울특별시 강남구 도산대로 8길 17 3층{' '}
          </Typography.Text>
          <Typography.Text className="copy-right">
            Copyright© GUARDSIGNATURE All rights reserved.
          </Typography.Text>
        </div>
        <ul className="socials">
          <li className="socials__item">
            <img src={social1} alt=" social 1" />
          </li>
          <li className="socials__item">
            <img src={social2} alt=" social 2" />
          </li>
          <li className="socials__item">
            <img src={social3} alt=" social 3" />
          </li>
        </ul>
      </div>
    </Layout.Footer>
  );
}

export default Footer;
