import React from "react";
import useAuth from "../components/useAuth";
import { Outlet } from "react-router-dom";
import UnAuthorized from "../Pages/Unauthorized";
export default function Protected() {
  const isAuthorized = useAuth();
  return isAuthorized === true ? <Outlet /> : <UnAuthorized />;
}
