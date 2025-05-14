import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, children }) {
  if (!user) {
    alert("עליך להתחבר תחילה");
    return <Navigate to="/login" />;
  }
  return children;
}
