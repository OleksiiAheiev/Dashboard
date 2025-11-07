import { toast as reactToast, ToastOptions, Id } from 'react-toastify';

type ToastFunction = (message: string, options?: ToastOptions) => Id;

interface Toast {
  success: ToastFunction;
  error: ToastFunction;
  warning: ToastFunction;
  info: ToastFunction;
  dismiss: (id?: Id) => void;
  dismissAll: () => void;
}

export const toast: Toast = {
  success: (message: string, options?: ToastOptions) => 
    reactToast.success(message, options),
    
  error: (message: string, options?: ToastOptions) => 
    reactToast.error(message, options),
    
  warning: (message: string, options?: ToastOptions) => 
    reactToast.warning(message, options),
    
  info: (message: string, options?: ToastOptions) => 
    reactToast.info(message, options),
    
  dismiss: (id?: Id) => reactToast.dismiss(id),
  
  dismissAll: () => reactToast.dismiss(),
};