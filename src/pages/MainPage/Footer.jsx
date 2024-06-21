import styled from 'styled-components';
import { InstagramSvg } from '../../components/icons';

function Footer() {
  return (
    <FooterContainer>
      <FooterSection>
        <FooteritemContainer>
          <span>개인정보처리방침</span>
          <span>서비스 이용약관</span>
          <span>고객센터</span>
        </FooteritemContainer>
        <FooteritemContainer>
          <FooterIcon
            src="https://nbcamp.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2Fnbcamp%2Ffooter%2Ffooter_logo_talk.png&w=64&q=75"
            alt="카카오 이모지"
          />
          <FooterIcon
            src="https://nbcamp.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2Fnbcamp%2Ffooter%2Ffooter_logo_blog.png&w=64&q=75"
            alt="블로그 이모지"
          />
          <FooterSvgDiv>
            <InstagramSvg />
          </FooterSvgDiv>
          <FooterIcon
            src="https://nbcamp.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2Fnbcamp%2Ffooter%2Ffooter_logo_youtube.png&w=64&q=75"
            alt="유튜브 이모자"
          />
        </FooteritemContainer>
        <div>Copyright ©{new Date().getFullYear()} YeoGiYeo. All rights reserved.</div>
      </FooterSection>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  margin-top: 60px;
  width: 100%;
  border-top: 1px solid rgb(228, 235, 240);
  padding: 34px 16px;
`;
const FooterSection = styled.section`
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: rgb(157, 167, 174);
`;
const FooteritemContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const FooterIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const FooterSvgDiv = styled.div`
  box-sizing: border-box;
  padding: 6px;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
