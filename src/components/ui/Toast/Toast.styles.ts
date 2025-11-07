import styled from 'styled-components';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const StyledCloseIcon = styled(CloseIcon)`
  &.MuiSvgIcon-root {
    height: 20px;
    width: 20px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  align-self: center;
  height: 24px;
  width: 24px;
`;
