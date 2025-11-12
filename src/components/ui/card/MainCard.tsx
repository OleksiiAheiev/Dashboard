import React, { forwardRef } from 'react'
import { MainCardProps } from './types'
import { StyledMainCard } from './MainCard.styles'

export const MainCard = forwardRef<HTMLDivElement, MainCardProps>(
  ({ children, sx = {}, elevation = 0, border = true, ...props }, ref) => {
    return (
      <StyledMainCard
        ref={ref}
        elevation={elevation}
        sx={sx}
        border={border}
        {...props}
      >
        {children}
      </StyledMainCard>
    )
  }
)
