import useRole from "../../hooks/useRole";
import { DIETICIAN } from "../UserRoles";

const DieticianProtected = ({ children, redirect }) => {
  const userRole = useRole();
  return userRole === DIETICIAN ? children : redirect;
};

export default DieticianProtected;
