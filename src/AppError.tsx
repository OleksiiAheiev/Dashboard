import React, { FC } from "react";

type AppErrorProps = {
  error?: Error;
};

const AppError: FC<AppErrorProps> = ({ error }) => {
  return (
    <>
      <div>Error: {error?.message}</div>
    </>
  );
};

export default AppError;
