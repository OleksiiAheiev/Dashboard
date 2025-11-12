import React, { FC, ReactNode } from 'react'
import { MainCard } from '@components/ui/card'

interface AuthCardProps {
  children: ReactNode;
}

export const AuthCard: FC<AuthCardProps> = ({children}) => {
  return (
    <MainCard>{children}</MainCard>
  )
}
