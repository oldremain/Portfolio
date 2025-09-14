import { Icon } from "@/components/icon/Icon";
import styled from "styled-components";

export const Logo = () => {
  return (
    <StyledLogo href="/">
      <Icon
        name="logo"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        color="white"
      />
      <Name>Oleg</Name>
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #fff;
`;
