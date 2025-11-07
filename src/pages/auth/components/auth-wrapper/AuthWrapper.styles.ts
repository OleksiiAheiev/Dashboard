import { Box, Paper } from "@mui/material";
import styled from "styled-components";

export const Header = styled(Box)`
  width: 100%;
`;

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  min-height: 100%;
`;

export const Wrapper = styled(Paper)`
  display: flex;
  align-items: center;
  margin: auto;
  padding: 32px;
  width: 100%;
  max-width: fit-content;
`;
