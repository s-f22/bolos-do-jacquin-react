import type { JSX } from "react";
import { Navigate } from "react-router-dom";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const authHash = getCookie("auth_hash");

  if (!authHash) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
