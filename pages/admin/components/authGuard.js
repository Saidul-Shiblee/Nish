import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../../../context/authcontext";

const AuthGuard = ({ children }) => {
  const { currentUser } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!currentUser) router.push(router.push({ pathname: "/admin/dashboard/signin" }));
  }, [currentUser]);

  if (children) {
    return children;
  }
  return (
    null
  );
};

export default AuthGuard;
