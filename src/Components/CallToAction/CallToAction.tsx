import { Button, Typography } from 'antd';
import React from 'react';
import './CallToAction.scss';
import { RightOutlined } from '@ant-design/icons';

function CallToAction() {
  return (
    <section className="cta section">
      <Typography.Text
        className="section__sub-header"
        style={{
          fontWeight: 300,
          fontFamily: 'Noto Sans KR',
          fontSize: '1.8rem',
          textAlign: 'center',
        }}
      >
        지금 바로 시작하세요!
      </Typography.Text>
      <Typography.Title
        style={{ textAlign: 'center' }}
        className="section__header"
        level={3}
      >
        설명이 필요 없는 간단한 계약 과정, <br />
        직접 경험해보세요!
      </Typography.Title>
      <Button
        className="btn"
        type="primary"
        shape="round"
        icon={<RightOutlined className="btn-icon" />}
        size="large"
        style={{ marginTop: '5rem' }}
      >
        더 살펴보기
      </Button>
    </section>
  );
}

export default CallToAction;
