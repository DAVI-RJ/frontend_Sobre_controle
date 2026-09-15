import LoadingComponent from "@/shared/components/organisms/loading/LoadingComponent";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isRestoringSession } = useSelector((state) => state.auth);

  if (isRestoringSession) return <LoadingComponent isLoading={true} />;

  return isAuthenticated ? children : <Navigate to="/" replace />;
}
