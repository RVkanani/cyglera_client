/* eslint-disable no-useless-escape */
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SignupApiCall from "../../apis/auth/SignupApiCall";
import SignupComponent from "../../components/public/SignupComponent";
import ToastFunc from "../../helpers/toasts/ToastFunc";

import useActionDispatcher from "../../hooks/useActionDispatcher";

const SignupPage = () => {
  //Assign initial values of signup form
  const initialValue = {
    email: "",
    password: "",
    userRole: "",
    firstName: "",
    lastName: "",
    languages: [],
    address: "",
    city: "",
    country: "",
    postalCode: "",
    phone: "",
    province: "",
    gender: "",
    agreementSigned: false,
  };

  //Assign initial state of error value of the signup fields
  const initialErrorState = {
    emailError: false,
    passwordError: false,
    roleError: false,
    firstNameError: false,
    lastNameError: false,
    addressError: false,
    cityError: false,
    countryError: false,
    postalCodeError: false,
    phoneError: false,
    provinceError: false,
    genderError: false,
    hasError: false,
  };

  //Roles available
  const roles = [
    { label: "Client", value: "CLIENT" },
    { label: "Organization", value: "ORGANIZATION" }, //Added
    { label: "Dietician", value: "DIETICIAN" },
    { label: "Trainer", value: "TRAINER" },
    { label: "Physician", value: "PHYSICIAN" },
    { label: "Care Provider", value: "CAREPROVIDER" },
  ];

  const [isDietician, setIsDietician] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isorganization, setIsorganization] = useState(false); //
  const [isTrainer, setIsTrainer] = useState(false);
  const [isPhysician, setIsPhysician] = useState(false);
  const [isCareProvider, setIsCareProvider] = useState(false);

  const [state, setState] = useState(initialValue);
  const [errorState, setErrorState] = useState(initialErrorState);
  const dispatch = useActionDispatcher();
  const navigate = useNavigate();

  //Change event of all the form fields
  const handleChange = (ev) => {
    setState((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
    if (ev.target.name === "userRole") {
      setIsDietician(false);
      setIsClient(false);
      // setIsOrganization(false);
      setIsCareProvider(false);
      setIsTrainer(false);
      setIsCareProvider(false);
      if (ev.target.value === roles[1].value) {
        setIsDietician(true);
      } else if (ev.target.value === roles[0].value) {
        setIsClient(true);
      } else if (ev.target.value === roles[2].value) {
        setIsTrainer(true);
      } else if (ev.target.value === roles[3].value) {
        setIsPhysician(true);
      } else if (ev.target.value === roles[4].value) {
        setIsCareProvider(true);
      } else if (ev.target.value === roles[5].value) {
        setIsorganization(true);
      } 
    }
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  //validate the fields
  const validateStateValues = () => {
    const {
      email,
      password,
      firstName,
      lastName,
      userRole,
      address,
      city,
      province,
      country,
      postalCode,
      phone,
      gender,
    } = state;

    const emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
    const passwordTest =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    const firstNameError = firstName.length < 3 ? true : false;
    const lastNameError = lastName.length < 3 ? true : false;
    const emailError = email.length < 1 ? true : false;
    const passwordError = password.length < 8 ? true : false;
    const roleError = userRole.length < 1 ? true : false;
    const addressError = address.length < 1 ? true : false;
    const cityError = city.length < 1 ? true : false;
    const provinceError = province.length < 1 ? true : false;
    const countryError = country.length < 1 ? true : false;
    const postalCodeError = postalCode.length < 1 ? true : false;
    const phoneError = phone.length < 1 ? true : false;
    const genderError = gender.length < 1 ? true : false;

    //setting errorState
    setErrorState((prev) => ({
      ...prev,
      emailError: emailError || !emailTest,
      passwordError: passwordError || !passwordTest,
      roleError,
      firstNameError,
      lastNameError,
      addressError,
      cityError,
      provinceError,
      countryError,
      postalCodeError,
      phoneError,
      genderError,
    }));

    //if any error variable present return true
    return emailError ||
      passwordError ||
      roleError ||
      !emailTest ||
      !passwordTest ||
      firstNameError ||
      lastNameError ||
      addressError ||
      cityError ||
      provinceError ||
      countryError ||
      postalCodeError ||
      phoneError ||
      genderError
      ? true
      : false;
  };

  const submitForm = async () => {
    //this validates state values and return either true/false
    const isErrorPresent = validateStateValues();
    setErrorState((prev) => ({ ...prev, hasError: isErrorPresent }));
    if (isErrorPresent) {
      //error present so dont sumbit form
      return;
    } else {
      if (errorState.hasError) {
        return;
      }

      //api call here
      dispatch({ type: "loadingOn" });
      const response = await SignupApiCall(state);
      dispatch({ type: "loadingOff" });

      if (response.data.type === "success") {
        //api call success
        navigate("/signin");
        ToastFunc({ msg: response.data.msg, type: "success" });
      } else {
        //apicall failed
        ToastFunc({ msg: response.data.msg, type: "error" });
      }
    }
  };

  return (
    <>
      <>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3">SIGN UP</Typography>
        </Box>
      </>
      <SignupComponent
        state={state}
        errorState={errorState}
        submitForm={submitForm}
        handleChange={handleChange}
        roles={roles}
        isDietician={isDietician}
        isClient={isClient}
        isOrganization={isorganization}
        isCareProvider={isCareProvider}
        isPhysician={isPhysician}
        isTrainer={isTrainer}
      />
    </>
  );
};

export default SignupPage;
