import { Typography } from 'antd';
import React from 'react';
import './Service.scss';
import service1 from '../../Assets/Images/upload-icon-1.png';
import service2 from '../../Assets/Images/upload-icon-2.png';
import service3 from '../../Assets/Images/upload-icon-3.png';
import service4 from '../../Assets/Images/upload-icon-4.png';

function Service() {
  const servicesDataList = [
    {
      key: 0,
      img: service1,
      desc: '필요한 계약서 파일을 업로드합니다.',
      title: '업로드하기',
    },
    {
      key: 1,
      img: service2,
      desc: '업로드한 계약서 파일에 서명 요청을 하세요.',
      title: '서명 요청하기',
    },
    {
      key: 2,
      img: service3,
      desc: '상대방이 간단한 절차를 통해 서명할 수 있습니다.',
      title: '서명 입력하기',
    },
    {
      key: 3,
      img: service4,
      desc: '언제 어디서든 5분 만에 계약 완료!',
      title: '계약 완료',
    },
  ];
  return (
    <section className="service section" style={{ textAlign: 'center' }}>
      <div className="container">
        <Typography.Title className="section__header" level={3}>
          간단하게 끝내는 계약과정
        </Typography.Title>
        <Typography.Text className="section__header--desc">
          계약서 파일을 업로드하여 서명을 요청해 보세요. <br /> 상대방은
          회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수 있습니다. <br />{' '}
          언제 어디서든 5분만에 계약을 체결해 보세요.
        </Typography.Text>
        <div className="service__list">
          {servicesDataList.map((item) => (
            <article key={item.key} className="service__item">
              <div className="service__img">
                <img src={item.img} alt={item.desc} />
              </div>
              <div className="service__content">
                <Typography.Title
                  level={4}
                  className="service__title"
                  style={{ textAlign: 'center' }}
                >
                  {item.title}
                </Typography.Title>
                <Typography.Text
                  className="service__desc"
                  style={{ textAlign: 'center' }}
                >
                  {item.desc}
                </Typography.Text>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
