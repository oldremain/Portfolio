import React from "react";
import styled from "styled-components";
import { Icon } from "@/components/icon/Icon";

type ContactLinkProps = {
  url: string;
  iconName: string;
  children: React.ReactNode;
};

export const ContactLink = ({ url, iconName, children }: ContactLinkProps) => {
  return (
    <StyledLink href={url}>
      <Icon
        name={iconName}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="icon"
      />
      <span>{children}</span>
    </StyledLink>
  );
};

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 2px;
  font-family: monospace;
  .icon {
    flex-shrink: 0;
  }
`;
