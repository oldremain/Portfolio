import styled, { keyframes } from "styled-components";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { theme } from "@/styles/Theme";
import imgUrl from "@/assets/images/main-img.png";

export const Main = () => {
  return (
    <Container>
      <StyledMain>
        <div>
          <StyledGreeting>
            Hi 👋, <br />
            My name is <StyledAccent>Oleg</StyledAccent>.
            <h1>
              I am <StyledAccent>front-end developer</StyledAccent>
            </h1>
            <h2>I create modern and user-friendly interfaces</h2>
          </StyledGreeting>
          <Button>Contact me 🧑‍💻</Button>
        </div>
        <div>
          <Photo src={imgUrl} alt="" />
          <PhotoDescription>
            <PulseDot /> Currently working on <span>Portfolio</span>
          </PhotoDescription>
        </div>
      </StyledMain>
      <StyledQuoteWrapper>
        <StyledQuote>"Simplicity is the soul of efficiency"</StyledQuote>
        <StyledAuthor>- Austin Freeman</StyledAuthor>
      </StyledQuoteWrapper>
    </Container>
  );
};

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-top: 62px;
  color: ${theme.colors.secondary};
`;

const StyledGreeting = styled.div`
  max-width: 463px;
  margin-bottom: 24px;
  color: ${theme.colors.secondary};
  font-family: monospace;
  font-weight: 700;
  font-size: 24px;
  h2 {
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.colors.primary};
  }
`;

const StyledAccent = styled.span`
  color: ${theme.colors.accent};
  font-weight: 600;
`;

const Photo = styled.img`
  width: 470px;
  height: 386px;
  object-fit: cover;
`;

const PhotoDescription = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 12px;
  width: max-content;
  margin: -12px auto 0;
  border: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.bg};
  span {
    padding-top: 2px;
    font-weight: 700;
    color: ${theme.colors.accent};
    font-family: monospace;
    font-size: 16px;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 #c778de;
    opacity: 1;
  }
  70% {
    transform: scale(1.6);
    box-shadow: 0 0 0 10px rgba(255, 77, 79, 0);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.9);
    box-shadow: 0 0 0 14px rgba(255, 77, 79, 0);
    opacity: 0;
  }
`;

const pulseFade = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.9;
  }
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    opacity: 0;
  }
`;

const PulseDot = styled.div`
  width: 8px;
  height: 8px;
  margin-right: 4px;
  background: ${theme.colors.accent};
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);
  animation: ${pulse} 1.6s infinite cubic-bezier(0.4, 0, 0.2, 1);
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #c778de20;
    animation: ${pulseFade} 1.6s infinite cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const StyledQuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 712px;
  margin: 80px auto 0;
  font-family: monospace;
  font-size: 22px;
  font-weight: 500;
  color: ${theme.colors.secondary};
`;

const StyledQuote = styled.div`
  margin-left: auto;
  padding: 16px 32px;
  border: 1px solid ${theme.colors.primary};
`;

const StyledAuthor = styled.div`
  margin-left: auto;
  padding: 16px 32px;
  border: 1px solid ${theme.colors.secondary};
  border-top: 0;
`;
