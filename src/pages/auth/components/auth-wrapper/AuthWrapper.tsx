import { AuthCard } from "../AuthCard";
import { AuthWrapperProps } from "./AuthWrapper.types";
import { ContentContainer, Wrapper } from "./AuthWrapper.styles";

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return (
    <Wrapper>
      {/* <AuthBackground />
      <LogoContainer>
        <Logo />
      </LogoContainer> */}

      <ContentContainer>
        <AuthCard>{children}</AuthCard>
      </ContentContainer>

      {/* <FooterContainer>
        <AuthFooter />
      </FooterContainer> */}
    </Wrapper>
  )
}

export default AuthWrapper;
