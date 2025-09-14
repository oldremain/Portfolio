import React from "react";
import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="">
            <span className="hashtag">#</span>home
          </a>
        </li>
        <li>
          <a href="">
            <span className="hashtag">#</span>works
          </a>
        </li>
        <li>
          <a href="">
            <span className="hashtag">#</span>about-me
          </a>
        </li>
        <li>
          <a href="">
            <span className="hashtag">#</span>contacts
          </a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 32px;
  }
  a {
    color: #abb2bf;
    transition: all 0.2s ease;
    &:hover {
      color: #ffffff;
    }
    &:active {
      font-weight: 500;
    }
  }
  .hashtag {
    padding-right: 2px;
    color: #c778dd;
    transition: all 0.2s ease;
    &:active {
      font-weight: 500;
    }
  }
`;
