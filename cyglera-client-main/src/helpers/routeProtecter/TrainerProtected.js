import useRole from "../../hooks/useRole";
import { TRAINER } from "../UserRoles";

const TrainerProtected = ({ children, redirect }) => {
  const userRole = useRole();
  return userRole === TRAINER ? children : redirect;
};

export default TrainerProtected;
