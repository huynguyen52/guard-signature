import { Button, Typography } from 'antd';
import React from 'react';
import './Testimonial.scss';
import icon1 from '../../Assets/Images/-e-reason_icon_1.svg';
import icon2 from '../../Assets/Images/-e-reason_icon_2.svg';
import icon3 from '../../Assets/Images/-e-reason_icon_3.svg';
import icon4 from '../../Assets/Images/-e-reason_icon_4.svg';
import icon5 from '../../Assets/Images/-e-reason_icon_5.svg';
import icon6 from '../../Assets/Images/-e-reason_icon_6.svg';
import banner from '../../Assets/Images/service-01-img_28.png';
import { RightOutlined } from '@ant-design/icons';

function Testimonial() {
  return (
    <section className="testimonial section">
      <div className="container">
        <Typography.Title className="section__header" level={3}>
          가드 시그니처를 선택하는 이유
        </Typography.Title>
        <Typography.Text className="section__header--desc">
          많은 기업들이 가드 시그니처를 선택하는 이유, <br />
          아래 버튼을 눌러 상세한 정보를 알아보세요.
        </Typography.Text>
        <div className="testimonial__content">
          <div className="testimonial__group" style={{ textAlign: 'left' }}>
            <div className="testimonial__item">
              <div className="testimonial__img">
                <img src={icon1} alt="icon 1 " />
              </div>
              <Typography.Text className="testimonial__header">
                쉽고 편리하게
              </Typography.Text>
              <Typography.Text className="testimonial__sub-header">
                번거로운 절차 없이 누구나 <br />
                빠르게 계약을 체결할 수 있습니다.
              </Typography.Text>
            </div>
            <div className="testimonial__item">
              <div className="testimonial__img">
                <img src={icon2} alt="icon 2 " />
              </div>
              <Typography.Text className="testimonial__header">
                안전한 보안
              </Typography.Text>
              <Typography.Text className="testimonial__sub-header">
                데이터는 암호화되어 전송되고 <br />
                안전한 곳에 저장됩니다.
              </Typography.Text>
            </div>
            <div className="testimonial__item">
              <div className="testimonial__img">
                <img src={icon3} alt="icon 3" />
              </div>
              <Typography.Text className="testimonial__header">
                다양한 파일형식
              </Typography.Text>
              <Typography.Text className="testimonial__sub-header">
                한글, 오피스부터 PDF, JPG와 <br />
                같은 이미지 파일도 변환없이 지원
              </Typography.Text>
            </div>
          </div>
          <div className="testimonial__banner">
            <img src={banner} alt="service" />
          </div>
          <div className="testimonial__group" style={{ textAlign: 'right' }}>
            <div className="testimonial__item">
              <div className="testimonial__img">
                <img src={icon4} alt="icon 4 " />
              </div>
              <Typography.Text className="testimonial__header">
                쉽고 편리하게
              </Typography.Text>
              <Typography.Text className="testimonial__sub-header">
                번거로운 절차 없이 누구나 <br />
                빠르게 계약을 체결할 수 있습니다.
              </Typography.Text>
            </div>
            <div className="testimonial__item">
              <div className="testimonial__img">
                <img src={icon5} alt="icon 5 " />
              </div>
              <Typography.Text className="testimonial__header">
                안전한 보안
              </Typography.Text>
              <Typography.Text className="testimonial__sub-header">
                데이터는 암호화되어 전송되고 <br />
                안전한 곳에 저장됩니다.
              </Typography.Text>
            </div>
            <div className="testimonial__item">
              <div className="testimonial__img">
                <img src={icon6} alt="icon 6" />
              </div>
              <Typography.Text className="testimonial__header">
                다양한 파일형식
              </Typography.Text>
              <Typography.Text className="testimonial__sub-header">
                한글, 오피스부터 PDF, JPG와 <br />
                같은 이미지 파일도 변환없이 지원
              </Typography.Text>
            </div>
          </div>
        </div>
        <Button
          className="btn btn--black"
          shape="round"
          icon={<RightOutlined className="btn-icon" />}
          size="large"
          style={{ marginTop: '5rem' }}
        >
          더 살펴보기
        </Button>
      </div>
    </section>
  );
}

export default Testimonial;
