import { Card } from "@mui/material";
import styled from "styled-components";

export const StyledMainCard = styled(Card)<{ border: boolean }>`
  border: ${props => props.border ? '1px solid rgba(0,0,0,0.12)' : 'none'};
  border-radius: 2px;
  transition: box-shadow 0.3s ease;
`;
