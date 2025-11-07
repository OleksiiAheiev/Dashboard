import AuthWrapper from "@pages/auth/components/auth-wrapper/AuthWrapper";
import React, { memo } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <AuthWrapper>
      <Outlet />
    </AuthWrapper>
  );
};

export default memo(AuthLayout);
