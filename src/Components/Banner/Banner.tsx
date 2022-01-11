import { Typography } from 'antd';
import React from 'react';
import './Banner.scss';
import banner1 from '../../Assets/Images/service-01-img_03.png';

interface BannerProps {
  item: {
    id: number;
    key: string;
    img: any;
    title: any;
    desc: any;
  };
  whiteBackground?: boolean;
  align?: 'left' | 'right';
}

function Banner({ item }: BannerProps) {
  const { id, key, img, title, desc } = item;

  const isOdd = id % 2 == 0 ? false : true;

  return (
    <section
      className={`${isOdd ? 'banner section' : 'banner align-right section'}`}
    >
      <div className="container">
        <div className="banner__wrapper">
          <div className="banner__img">
            <img src={img} alt="banner1" />
          </div>
          <div className="banner__content">
            <Typography.Text className="section__sub-header">
              {key}
            </Typography.Text>
            <Typography.Title className="section__header" level={3}>
              {title}
            </Typography.Title>
            {desc}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
