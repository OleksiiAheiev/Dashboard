import { AuthWrapper } from "@pages/auth/components/auth-wrapper";
import React, { memo } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = memo(() => {
  return (
    <AuthWrapper>
      <Outlet />
    </AuthWrapper>
  );
});
