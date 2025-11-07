import React, { ReactNode } from 'react';
import { ToastContainer as ReactToastContainer, Slide } from 'react-toastify';
import { CloseButtonProps, IconProps } from 'react-toastify';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { StyledCloseIcon, StyledIconButton } from './Toast.styles';
import { CustomToastContainerProps, ToastType } from './types';

import 'react-toastify/dist/ReactToastify.min.css';
import { TOAST_CLASS, TOAST_CONTAINER_CLASS } from '@utils/constants/common.constants';

const getIcon = ({ type }: IconProps): ReactNode => {
  const validTypes: ToastType[] = ['info', 'error', 'warning', 'success'];
  
  if (validTypes.includes(type as ToastType)) {
    return <InfoOutlinedIcon color={type as ToastType} />;
  }

  return false;
};

const getCloseButton = ({ closeToast }: CloseButtonProps): ReactNode => {
  return (
    <StyledIconButton onClick={closeToast} aria-label="Close notification">
      <StyledCloseIcon />
    </StyledIconButton>
  );
};

export const ToastContainer = ({ 
  theme = 'light',
  ...props 
}: CustomToastContainerProps) => {
  return (
    <ReactToastContainer
      icon={getIcon}
      closeButton={getCloseButton}
      className={TOAST_CONTAINER_CLASS}
      toastClassName={TOAST_CLASS}
      limit={3}
      position="bottom-right"
      autoClose={6000}
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      transition={Slide}
      {...props}
    />
  );
};