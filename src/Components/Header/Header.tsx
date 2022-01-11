import React from 'react';
import './Header.scss';
import { Layout, Menu } from 'antd';
import logo from '../../Assets/Images/logo-icon-1.png';

function Header() {
  const menuList = [
    '서비스 소개',
    '법적효력·보안',
    '활용 분야',
    '이용 혜택',
    '요금 안내',
    '요금 안내',
  ];

  return (
    <Layout.Header className="header">
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <Menu
          className="nav-bar"
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          disabledOverflow={true}
        >
          {menuList.map((m, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{m}</Menu.Item>;
          })}
        </Menu>
        <div className="header__extra">
          <a href="#" className="header__btn">
            로그인
          </a>
          <a href="#" className="header__btn">
            회원가입
          </a>
        </div>
      </div>
    </Layout.Header>
  );
}

export default Header;
