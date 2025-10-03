import { FlexWrapper } from "@/components/FlexWrapper";
import { theme } from "@/styles/Theme";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  padding-top: 32px;
  color: ${theme.colors.secondary};

  @media ${theme.media.tablet} {
    padding-top: 76px;

    ${FlexWrapper} {
      justify-content: center;
    }
  }
`;

const Content = styled.div`
  text-align: left;
`;

const Greeting = styled.div`
  max-width: 463px;
  margin-bottom: 24px;
  color: ${theme.colors.secondary};
  font-weight: 700;
  font-size: 24px;
  h2 {
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.colors.primary};
  }
`;

const Accent = styled.span`
  color: ${theme.colors.accent};
  font-weight: 600;
`;

const PhotoWrapper = styled.div`
  width: 470px;
  height: 386px;

  @media ${theme.media.tablet} {
    width: 100%;
    height: 100%;
    max-width: 400px;
    margin-top: 20px;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
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
  font-size: 15px;
  border: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.bg};
  span {
    font-weight: 700;
    color: ${theme.colors.accent};
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

export const S = {
  Section,
  Content,
  Greeting,
  Accent,
  PhotoWrapper,
  Photo,
  PhotoDescription,
  PulseDot,
};
