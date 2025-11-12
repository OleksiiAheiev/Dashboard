import { ReactNode } from "react";
import { SxProps } from "@mui/material";
import { Theme } from '@mui/material/styles';

export interface MainCardProps {
  children: ReactNode
  sx?: SxProps<Theme>
  elevation?: number
  border?: boolean
}