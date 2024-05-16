import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

ProtectedRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default ProtectedRoutes;
