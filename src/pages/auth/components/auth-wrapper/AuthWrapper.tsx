import React, { FC, memo } from "react";
import { AuthWrapperProps } from "./AuthWrapper.types";
import { AuthCard } from "../AuthCard";

const AuthWrapper: FC<AuthWrapperProps> = ({ children, }) => {
  return (
    <AuthCard>
      {children}
    </AuthCard>
  );
};

export default memo(AuthWrapper);
