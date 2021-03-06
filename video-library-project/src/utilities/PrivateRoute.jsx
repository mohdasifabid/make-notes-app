import { Navigate, Outlet } from "react-router-dom";
import { useAuthProvider } from "./authProvider";

export const PrivateRoute = () => {
  const { state } = useAuthProvider();

  if (state.isLogin) {
    return <Outlet />;
  } else {
    return (
      <>
        <Navigate to="/login" />
      </>
    );
  }
};
