import {
  PHYSICIAN,
  CAREPROVIDER,
  CLIENT,
  DIETICIAN,
  TRAINER,
} from "../helpers/UserRoles";
import useStateValues from "./useStateValues";

const useRole = () => {
  const { userData } = useStateValues();
  const role = userData ? userData.userRole : null;

  //getting role from state
  switch (role) {
    case PHYSICIAN: {
      return PHYSICIAN;
    }
    case CLIENT: {
      return CLIENT;
    }
    case DIETICIAN: {
      return DIETICIAN;
    }
    case TRAINER: {
      return TRAINER;
    }
    case CAREPROVIDER: {
      return CAREPROVIDER;
    }

    default: {
      return false;
    }
  }
};

export default useRole;
