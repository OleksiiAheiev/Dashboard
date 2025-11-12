import styled from "styled-components";

import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useThemeContext } from "@utils/providers/ThemeProvider/ThemeProvider.context";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.default};
  overflow: hidden;
`;

export const AppLayout = () => {
  const { mode } = useThemeContext();

  return (
    <Container>
      <Outlet />
      <ToastContainer theme={mode} />
    </Container>
  );
};
