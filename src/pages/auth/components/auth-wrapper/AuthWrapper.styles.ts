import { Box } from "@mui/material"
import styled from "styled-components"

export const Wrapper = styled(Box)`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LogoContainer = styled(Box)`
  padding: 24px;
  display: flex;
  align-items: flex-start;
`

export const ContentContainer = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 180px);

  @media (max-width: 600px) {
    min-height: calc(100vh - 210px);
  }
  @media (min-width: 600px) and (max-width: 900px) {
    min-height: calc(100vh - 134px);
  }
  @media (min-width: 900px) {
    min-height: calc(100vh - 112px);
  }
`

export const FooterContainer = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
