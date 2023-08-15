import useRole from "../../hooks/useRole";
import { CLIENT } from "../UserRoles";

const ClientProtected = ({ children, redirect }) => {
  const userRole = useRole();

  return userRole === CLIENT ? children : redirect;
};

export default ClientProtected;
