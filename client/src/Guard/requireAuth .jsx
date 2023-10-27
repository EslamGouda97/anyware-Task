// eslint-disable-next-line react/prop-types
import { Navigate } from "react-router";
import jwt_decode from "jwt-decode";

function requireAuth(props) {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwt_decode(token);
      if (decodedToken && decodedToken.userId) {
        return props.children;
      } else {
        return <Navigate to="/" />;
      }
    } catch (error) {
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/" />;
  }
}

export default requireAuth;
