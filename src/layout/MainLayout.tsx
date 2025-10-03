import React from "react";
import { Outlet } from "react-router";
import { Aside } from "./aside/Aside";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import styled from "styled-components";

export const MainLayout: React.FC = () => {
  return (
    <StyledMain>
      <Aside />
      <Header />

      {/*For content */}
      <Outlet />

      <Footer />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding-top: 70px;
`;
