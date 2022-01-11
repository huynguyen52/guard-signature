import { Typography } from 'antd';
import React from 'react';
import './Campaign.scss';

import service1 from '../../Assets/Images/service-01-img_18.png';
import service2 from '../../Assets/Images/service-01-img_21.png';
import service3 from '../../Assets/Images/service-01-img_24.png';

function Campaign() {
  return (
    <section className="campaign section">
      <article className="campaign__item">
        <div className="campaign__main">
          <Typography.Title className="campaign__header">
            모두 시그니처만의 <br />
            효과적인 기능
          </Typography.Title>
          <Typography.Text className="campaign__title">
            템플릿 저장 및 불러오기
          </Typography.Text>
          <Typography.Text className="campaign__desc">
            자주 사용하는 문서를 저장하고 필요할 때 마다 템플릿을 <br />
            불러와 빠르게 작업할 수 있습니다.
          </Typography.Text>
          <Typography.Text className="campaign__title">
            폴더 설정
          </Typography.Text>
          <Typography.Text className="campaign__desc">
            별도로 관리가 필요한 문서들은 폴더 설정을 통해 <br />
            보다 체계적으로 관리할 수 있습니다.
          </Typography.Text>
          <Typography.Text className="campaign__title">
            텍스트 및 체크박스 입력
          </Typography.Text>
          <Typography.Text className="campaign__desc">
            텍스트, 체크박스를 설정하여 문서에 텍스트를 자유롭게 <br />
            입력하고 상대방의 동의 여부를 확인할 수 있습니다.
          </Typography.Text>
          <Typography.Text className="campaign__title">
            다양한 파일형식 지원
          </Typography.Text>
          <Typography.Text className="campaign__desc">
            한글, 오피스 계열(Word, PPT, Excel), PDF부터 JPG, PNG, <br />
            GIF, BMP와 같은 이미지 파일까지 변환없이 업로드하고 <br />
            사용할 수 있습니다.
          </Typography.Text>
        </div>
        <div className="campaign__img">
          <img src={service2} alt="service 2" />
        </div>
      </article>
      <article className="campaign__item align-right">
        <div className="campaign__main">
          <Typography.Title className="campaign__header">
            계약을 쉽고 빠르게 <br />
            체결하는 방법!
          </Typography.Title>
          <Typography.Text className="campaign__title">
            공인인증서 없는 본인인증
          </Typography.Text>
          <Typography.Text className="campaign__desc">
            공인인증서와 ActiveX가 필요 없습니다. 이메일 인증, <br />
            휴대폰 인증, 암호인증 설정으로 간편하게 본인인증 해 보세요.
          </Typography.Text>
          <Typography.Text className="campaign__title">
            카카오톡으로 서명 요청하기
          </Typography.Text>
          <Typography.Text className="campaign__desc">
            카카오톡으로 상대방에게 서명을 요청해보세요. 상대방은 <br />
            PC, 모바일 언제 어디에서나 계약서에 서명할 수 있습니다.
          </Typography.Text>
          <Typography.Text className="campaign__title">
            계약 체결과 보안
          </Typography.Text>
          <Typography.Text className="campaign__desc">
            누구나 이용하기 쉬운 직관적인 흐름으로 빠르고 신속하게 <br />
            계약을 체결하고, 이후에도 지속적으로 관리할 수 있습니다.
          </Typography.Text>
          <Typography.Text className="campaign__title">
            가입 없이 즉시 서명
          </Typography.Text>
          <Typography.Text className="campaign__desc">
            계약 상대방은 번거로운 회원가입 절차 없이 간편인증 후 <br />
            즉시 서명할 수 있습니다.
          </Typography.Text>
        </div>
        <div className="campaign__img">
          <img src={service3} alt="service 3" />
        </div>
      </article>
      <article className="campaign__item">
        <div className="campaign__main">
          <Typography.Title className="campaign__header">
            수월하게 계약을 <br />
            완료하세요
          </Typography.Title>
          <Typography.Text className="campaign__title">
            감사추적인증서를 통한 증명
          </Typography.Text>
          <Typography.Text className="campaign__desc">
            계약완료시 원본과 함께 발급되는 ‘감사추적인증서’로 계약 <br />
            당사자의 행위를 쉽게 증명할 수 있습니다.
          </Typography.Text>
          <Typography.Text className="campaign__title">
            혼자 서명하기
          </Typography.Text>
          <Typography.Text className="campaign__desc">
            동의서, 영수증 같이 본인만 서명하는 문서에도 빠르게 <br />
            서명할 수 있습니다.
          </Typography.Text>
          <Typography.Text className="campaign__title">
            다양한 드라이브 업로드 지원
          </Typography.Text>
          <Typography.Text className="campaign__desc">
            Google Drive, Dropbox, Box, One Drive에 저장되어 있 <br />
            문서를 변환 없이 바로 업로드하여 이용하세요.
          </Typography.Text>
          <Typography.Text className="campaign__title">
            계약 문서 관리
          </Typography.Text>
          <Typography.Text className="campaign__desc">
            내문서함에서 계약 문서별로 내용 확인하기, 계약서 다운로드, <br />
            공유하기, 삭제하기가 가능합니다.
          </Typography.Text>
        </div>
        <div className="campaign__img">
          <img src={service1} alt="service 1" />
        </div>
      </article>
    </section>
  );
}

export default Campaign;
