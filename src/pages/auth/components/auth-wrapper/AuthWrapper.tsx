
import React, { FC, memo } from "react";
import { Container, Header, Wrapper } from "./AuthWrapper.styles";
import { AuthWrapperProps } from "./AuthWrapper.types";

const AuthWrapper: FC<AuthWrapperProps> = ({ children, ...other }) => {
  return (
    <Container {...other}>
      <Header />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default memo(AuthWrapper);
