import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const NotAuthRoutes = ({ isAuth }) => {
  return isAuth ? <Navigate to={"/"} /> : <Outlet />;
};

NotAuthRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default NotAuthRoutes;
