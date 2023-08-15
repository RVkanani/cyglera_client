import axios from "axios";

const SigninApiCall = async (data) => {
  // data -> {email,password}
  try {
    const response = await axios.post(
      `http://3.133.175.117:8000/api/auth/signin`,
      data
    );
    return response;
  } catch (err) {
    return err.response;
  }
};

export default SigninApiCall;
