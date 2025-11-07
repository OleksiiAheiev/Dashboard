import { ToastContainerProps } from 'react-toastify';

export interface CustomToastContainerProps extends Partial<ToastContainerProps> {
  theme?: 'light' | 'dark';
}

export type ToastType = 'info' | 'error' | 'warning' | 'success';