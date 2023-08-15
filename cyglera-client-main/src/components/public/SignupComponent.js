// 2 
import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Select,
  MenuItem,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormLabel,
  Radio,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DieticianFields from "../../components/public/DieticianFields";
import ClientFields from "./ClientFields";
import OrganizationFields from "./OrganizationFields"

const SignupComponent = ({
  state,
  errorState,
  submitForm,
  handleChange,
  roles,
  isDietician,
  isClient,
  isOrganization,
  isCareProvider,
  isTrainer,
  isPhysician,
}) => {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    handleChange(convertToDefEventPara("agreementSigned", checked));
  }, [checked]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f8f8",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            border: "2px solid black",
            borderRadius: "8px",
            padding: "24px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            background: "white",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center", mb: 4 }}>
            Signup Form
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                label="First name"
                name="firstName"
                value={state.firstName}
                error={errorState.firstNameError}
                onChange={(ev) => handleChange(ev)}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                label="Last name"
                name="lastName"
                value={state.lastName}
                error={errorState.lastNameError}
                onChange={(ev) => handleChange(ev)}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="Email"
                name="email"
                value={state.email}
                onChange={(ev) => handleChange(ev)}
                error={errorState.emailError}
                variant="standard"
                helperText={errorState.emailError && "Enter a valid email"}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                label="Password"
                name="password"
                value={state.password}
                onChange={(ev) => handleChange(ev)}
                error={errorState.passwordError}
                variant="standard"
                helperText={errorState.passwordError && "eg: Password1@"}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <FormLabel>User Role</FormLabel>
                <Select
                  value={state.userRole}
                  name="userRole"
                  error={errorState.roleError}
                  onChange={(ev) => handleChange(ev)}
                  variant="standard"
                >
                  {roles?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label ?? option.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={state.gender}
                  onChange={(ev) => handleChange(ev)}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Address"
                name="address"
                value={state.address}
                onChange={(ev) => handleChange(ev)}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="City"
                name="city"
                value={state.city}
                onChange={(ev) => handleChange(ev)}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Country"
                name="country"
                value={state.country}
                onChange={(ev) => handleChange(ev)}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Province"
                name="province"
                value={state.province}
                onChange={(ev) => handleChange(ev)}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="PostalCode"
                name="postalCode"
                value={state.postalCode}
                onChange={(ev) => handleChange(ev)}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Phone"
                name="phone"
                value={state.phone}
                onChange={(ev) => handleChange(ev)}
                variant="standard"
                fullWidth
              />
            </Grid>
          </Grid>

          {/* Additional form fields based on role */}
          {isDietician | isTrainer | isPhysician | isCareProvider ? (
            <DieticianFields
              state={state}
              errorState={errorState}
              submitForm={submitForm}
              handleChange={handleChange}
              roles={roles}
            />
          ) : (
            <></>
          )}

          {isClient ? (
            <ClientFields
              state={state}
              errorState={errorState}
              submitForm={submitForm}
              handleChange={handleChange}
              roles={roles}
            />
          ) : (
            <></>
          )}

          {isOrganization ? (
            <OrganizationFields
              state={state}
              errorState={errorState}
              submitForm={submitForm}
              handleChange={handleChange}
              roles={roles}
            />
          ) : (
            <></>
          )}    

          <FormControl component="fieldset" sx={{ mt: 4 }}>
            <FormLabel component="legend">
              I agree to the liability form
            </FormLabel>
            <Grid container alignItems="center">
              <Grid item>
                <Button onClick={handleClickOpen} color="primary">
                  {isClient ? "Consent Form" : "Waiver of Liability Form"}
                </Button>
              </Grid>
              <Grid item>
                <Checkbox
                  checked={checked}
                  onChange={handleCheckChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </Grid>
            </Grid>
          </FormControl>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            {isDietician ? (
              <>
                <DialogTitle>{"RELEASE & WAIVER OF LIABILITY FORM"}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {/* Form content */}
                  </DialogContentText>
                </DialogContent>
              </>
            ) : (
              <>
                <DialogTitle>{"CONSENT FORM"}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {/* Form content */}
                  </DialogContentText>
                </DialogContent>
              </>
            )}
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                CLOSE
              </Button>
            </DialogActions>
          </Dialog>

          <Box sx={{ mt: 4 }}>
            <Button onClick={() => submitForm()} variant="contained" fullWidth>
              Signup now
            </Button>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Button component={Link} to="/signin" fullWidth>
              Go to SignIn
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignupComponent;




// 1
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Select,
//   MenuItem,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
//   Checkbox,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
// } from "@mui/material";
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import DieticianFields from "../../components/public/DieticianFields";
// import ClientFields from "./ClientFields";

// const SignupComponent = ({
//   state,
//   errorState,
//   submitForm,
//   handleChange,
//   roles,
//   isDietician,
//   isClient,
//   isCareProvider,
//   isTrainer,
//   isPhysician,
// }) => {
//   const [open, setOpen] = React.useState(false);
//   const [checked, setChecked] = React.useState(false);
//   const convertToDefEventPara = (name, value) => ({
//     target: {
//       name,
//       value,
//     },
//   });
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleCheckChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   useEffect(() => {
//     handleChange(convertToDefEventPara("agreementSigned", checked));
//   }, [checked]); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <>
//       <Container
//         sx={{
//           my: 100,
//           justifyContent: "center",
//           border: "2px solid black",
//           mt: "1%",
//         }}
//         style={{
//           width: "80%",
//         }}
//       >
//         <Box
//           sx={{
//             flexGrow: 1,
//             display: { md: "flex", sm: "flex", xs: "none" },
//           }}
//         >
//           {/* here form elements */}
//           <Grid container>
//             <Grid item sm={6} md={6}>
//               <div>
//                 <Box sx={{ py: 2, pr: 2 }}>
//                   <TextField
//                     type="text"
//                     label="First name"
//                     name="firstName"
//                     value={state.firstName}
//                     error={errorState.firstNameError}
//                     onChange={(ev) => handleChange(ev)}
//                     variant="standard"
//                     fullWidth
//                   />
//                 </Box>
//                 <Box sx={{ py: 2, pr: 2 }}>
//                   <TextField
//                     type="text"
//                     label="Last name"
//                     name="lastName"
//                     value={state.lastName}
//                     error={errorState.lastNameError}
//                     onChange={(ev) => handleChange(ev)}
//                     variant="standard"
//                     fullWidth
//                   />
//                 </Box>
//                 <Box sx={{ py: 2, pr: 2 }}>
//                   <TextField
//                     type="email"
//                     label="Email"
//                     name="email"
//                     value={state.email}
//                     onChange={(ev) => handleChange(ev)}
//                     error={errorState.emailError}
//                     variant="standard"
//                     helperText={errorState.emailError && "Enter a valid email"}
//                     fullWidth
//                   />
//                 </Box>

//                 <Box sx={{ py: 2, pr: 2 }}>
//                   <TextField
//                     type="password"
//                     label="Password"
//                     name="password"
//                     value={state.password}
//                     onChange={(ev) => handleChange(ev)}
//                     error={errorState.passwordError}
//                     variant="standard"
//                     helperText={errorState.passwordError && "eg: Password1@"}
//                     fullWidth
//                   />
//                 </Box>

//                 <Box sx={{ py: 3, pr: 2 }}>
//                   <FormLabel id="demo-row-radio-buttons-group-label">
//                     User Role
//                   </FormLabel>
//                   <Select
//                     value={state.userRole}
//                     name="userRole"
//                     label="User role"
//                     error={errorState.roleError}
//                     onChange={(ev) => handleChange(ev)}
//                     variant="standard"
//                     fullWidth
//                   >
//                     {roles?.map((option) => {
//                       return (
//                         <MenuItem key={option.value} value={option.value}>
//                           {option.label ?? option.value}
//                         </MenuItem>
//                       );
//                     })}
//                   </Select>
//                 </Box>
//                 <Box sx={{ py: 2 }}>
//                   <FormLabel id="demo-row-radio-buttons-group-label">
//                     Gender
//                   </FormLabel>
//                   <RadioGroup
//                     row
//                     error={errorState.genderError}
//                     aria-labelledby="demo-row-radio-buttons-group-label"
//                     name="gender"
//                     onChange={handleChange}
//                   >
//                     <FormControlLabel
//                       value="female"
//                       control={<Radio />}
//                       label="Female"
//                     />
//                     <FormControlLabel
//                       value="male"
//                       control={<Radio />}
//                       label="Male"
//                     />
//                     <FormControlLabel
//                       value="other"
//                       control={<Radio />}
//                       label="Other"
//                     />
//                   </RadioGroup>
//                 </Box>
//               </div>
//             </Grid>
//             <Grid item xs={6}>
//               <div>
//                 <Box sx={{ py: 2 }}>
//                   <TextField
//                     type="text"
//                     label="Address"
//                     name="address"
//                     error={errorState.addressError}
//                     value={state.address}
//                     onChange={(ev) => handleChange(ev)}
//                     variant="standard"
//                     fullWidth
//                   />
//                 </Box>
//                 <Box sx={{ py: 2 }}>
//                   <TextField
//                     type="text"
//                     label="City"
//                     name="city"
//                     value={state.city}
//                     error={errorState.cityError}
//                     onChange={(ev) => handleChange(ev)}
//                     variant="standard"
//                     fullWidth
//                   />
//                 </Box>
//                 <Box sx={{ py: 2 }}>
//                   <TextField
//                     type="text"
//                     label="Country"
//                     name="country"
//                     value={state.country}
//                     error={errorState.countryError}
//                     onChange={(ev) => handleChange(ev)}
//                     variant="standard"
//                     fullWidth
//                   />
//                 </Box>
//                 <Box sx={{ py: 2 }}>
//                   <TextField
//                     type="text"
//                     label="Province"
//                     name="province"
//                     value={state.province}
//                     error={errorState.provinceError}
//                     onChange={(ev) => handleChange(ev)}
//                     variant="standard"
//                     fullWidth
//                   />
//                 </Box>
//                 <Box sx={{ py: 4 }}>
//                   <TextField
//                     type="text"
//                     label="PostalCode"
//                     name="postalCode"
//                     value={state.postalCode}
//                     error={errorState.postalCodeError}
//                     onChange={(ev) => handleChange(ev)}
//                     variant="standard"
//                     fullWidth
//                   />
//                 </Box>
//                 <Box sx={{ py: 2 }}>
//                   <TextField
//                     type="text"
//                     label="Phone"
//                     name="phone"
//                     value={state.phone}
//                     error={errorState.phoneError}
//                     onChange={(ev) => handleChange(ev)}
//                     variant="standard"
//                     fullWidth
//                   />
//                 </Box>
//               </div>
//             </Grid>
//           </Grid>
//         </Box>
//         <Box
//           sx={{
//             flexGrow: 1,
//             display: { md: "flex", sm: "flex", xs: "none" },
//           }}
//         >
//           {isDietician | isTrainer | isPhysician | isCareProvider ? (
//             <DieticianFields
//               state={state}
//               errorState={errorState}
//               submitForm={submitForm}
//               handleChange={handleChange}
//               roles={roles}
//             />
//           ) : (
//             <></>
//           )}
//           {isClient ? (
//             <ClientFields
//               state={state}
//               errorState={errorState}
//               submitForm={submitForm}
//               handleChange={handleChange}
//               roles={roles}
//             />
//           ) : (
//             <></>
//           )}
//         </Box>
//         <Box
//           sx={{
//             flexGrow: 1,
//             display: { md: "none", sm: "none", xs: "flex" },
//           }}
//         >
//           {/* here form elements */}
//           <Grid container>
//             <Grid item xs={12}>
//               <Box sx={{ py: 2 }}>
//                 <TextField
//                   type="text"
//                   label="First name"
//                   name="firstName"
//                   value={state.firstName}
//                   onChange={(ev) => handleChange(ev)}
//                   variant="standard"
//                   fullWidth
//                 />
//               </Box>
//               <Box sx={{ py: 2 }}>
//                 <TextField
//                   type="text"
//                   label="Last name"
//                   name="lastName"
//                   value={state.lastName}
//                   onChange={(ev) => handleChange(ev)}
//                   variant="standard"
//                   fullWidth
//                 />
//               </Box>
//               <Box sx={{ py: 2 }}>
//                 <TextField
//                   type="email"
//                   label="Email"
//                   name="email"
//                   value={state.email}
//                   onChange={(ev) => handleChange(ev)}
//                   error={errorState.emailError}
//                   variant="standard"
//                   helperText={errorState.emailError && "Enter a valid email"}
//                   fullWidth
//                 />
//               </Box>

//               <Box sx={{ py: 2 }}>
//                 <TextField
//                   type="password"
//                   label="Password"
//                   name="password"
//                   value={state.password}
//                   onChange={(ev) => handleChange(ev)}
//                   error={errorState.passwordError}
//                   variant="standard"
//                   helperText={errorState.passwordError && "eg: Password1@"}
//                   fullWidth
//                 />
//               </Box>

//               <Box sx={{ py: 1 }}>
//                 <FormLabel id="demo-row-radio-buttons-group-label">
//                   User Role
//                 </FormLabel>
//                 <Select
//                   value={state.userRole}
//                   name="userRole"
//                   label="User role"
//                   error={errorState.roleError}
//                   onChange={(ev) => handleChange(ev)}
//                   variant="standard"
//                   fullWidth
//                 >
//                   {roles?.map((option) => {
//                     return (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label ?? option.value}
//                       </MenuItem>
//                     );
//                   })}
//                 </Select>
//               </Box>
//               <Box sx={{ py: 1 }}>
//                 <FormLabel id="demo-row-radio-buttons-group-label">
//                   Gender
//                 </FormLabel>
//                 <RadioGroup
//                   row
//                   aria-labelledby="demo-row-radio-buttons-group-label"
//                   name="gender"
//                   onChange={handleChange}
//                 >
//                   <FormControlLabel
//                     value="female"
//                     control={<Radio />}
//                     label="Female"
//                   />
//                   <FormControlLabel
//                     value="male"
//                     control={<Radio />}
//                     label="Male"
//                   />
//                   <FormControlLabel
//                     value="other"
//                     control={<Radio />}
//                     label="Other"
//                   />
//                 </RadioGroup>
//               </Box>
//               <Box sx={{ py: 2 }}>
//                 <TextField
//                   type="text"
//                   label="Address"
//                   name="address"
//                   value={state.address}
//                   onChange={(ev) => handleChange(ev)}
//                   variant="standard"
//                   fullWidth
//                 />
//               </Box>
//               <Box sx={{ py: 2 }}>
//                 <TextField
//                   type="text"
//                   label="City"
//                   name="city"
//                   value={state.city}
//                   onChange={(ev) => handleChange(ev)}
//                   variant="standard"
//                   fullWidth
//                 />
//               </Box>
//               <Box sx={{ py: 2 }}>
//                 <TextField
//                   type="text"
//                   label="Country"
//                   name="country"
//                   value={state.country}
//                   onChange={(ev) => handleChange(ev)}
//                   variant="standard"
//                   fullWidth
//                 />
//               </Box>
//               <Box sx={{ py: 2 }}>
//                 <TextField
//                   type="text"
//                   label="Province"
//                   name="province"
//                   value={state.province}
//                   onChange={(ev) => handleChange(ev)}
//                   variant="standard"
//                   fullWidth
//                 />
//               </Box>
//               <Box sx={{ py: 2 }}>
//                 <TextField
//                   type="text"
//                   label="PostalCode"
//                   name="postalCode"
//                   value={state.postalCode}
//                   onChange={(ev) => handleChange(ev)}
//                   variant="standard"
//                   fullWidth
//                 />
//               </Box>
//               <Box sx={{ py: 2 }}>
//                 <TextField
//                   type="text"
//                   label="Phone"
//                   name="phone"
//                   value={state.phone}
//                   onChange={(ev) => handleChange(ev)}
//                   variant="standard"
//                   fullWidth
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//         <Box
//           sx={{
//             flexGrow: 1,
//             display: { md: "none", sm: "none", xs: "flex" },
//           }}
//         >
//           {isDietician ? (
//             <DieticianFields
//               state={state}
//               errorState={errorState}
//               submitForm={submitForm}
//               handleChange={handleChange}
//               roles={roles}
//             />
//           ) : (
//             <></>
//           )}
//           {isClient ? (
//             <ClientFields
//               state={state}
//               errorState={errorState}
//               submitForm={submitForm}
//               handleChange={handleChange}
//               roles={roles}
//             />
//           ) : (
//             <></>
//           )}
//         </Box>
//         <Grid item xs={12}>
//           <div>
//             <span>I agree to the liability form - </span>
//             <Button onClick={handleClickOpen}>
//               {isClient ? "Consent Form" : "Waiver of Liability Form"}
//             </Button>
//             <Checkbox
//               checked={checked}
//               onChange={handleCheckChange}
//               inputProps={{ "aria-label": "controlled" }}
//             />
//             <Dialog
//               open={open}
//               onClose={handleClose}
//               aria-labelledby="alert-dialog-title"
//               aria-describedby="alert-dialog-description"
//             >
//               {isDietician ? (
//                 <>
//                   <DialogTitle id="alert-dialog-title">
//                     {"RELEASE & WAIVER OF LIABILITY FORM"}
//                   </DialogTitle>
//                   <DialogContent>
//                     <DialogContentText id="alert-dialog-description">
//                       <div>
//                         On behalf of SalusWell, we would like to say how pleased
//                         we are that you have chosen to join us. We are dependent
//                         on the contributions of our health professionals and
//                         thank you for supporting us in our efforts to promote
//                         and serve online (telehealth) services to the consumers
//                         by providing Lifestyle Health and Wellness Counselling
//                         for healthier and happier life.
//                       </div>
//                       <br />
//                       <div>
//                         Please review our Terms and Conditions of this Agreement
//                         and Liability Release Form, so that you are fully aware
//                         and agree on the obligations and responsibilities of
//                         your service as an independent service provider with
//                         SalusWell.
//                       </div>
//                       <br />
//                       <div>
//                         SalusWell reserves the right to change its terms and
//                         conditions from time to time. If, and when, we make any
//                         changes, we will advice you accordingly. We want this
//                         service experience to be rewarding, enjoyable and
//                         productive for you and everyone involved in this
//                         collaborative effort to serve consumers with your help
//                         manage their health challenges for healthier and happier
//                         life. We are confident that you will find your fellow
//                         health professionals to be special, highly valued group
//                         of individuals whose commitment to SalusWell will be
//                         integral to this incredible Telehealth Service for much
//                         needed Lifestyle Health and Wellness.
//                       </div>
//                       <br />
//                       <div>
//                         <ol>
//                           <li>
//                             <b>Service Participation:</b>
//                             <span>
//                               {" "}
//                               I, the Health Professional, acknowledge that I am
//                               credentialed Health Professional and, I am
//                               registering to be an Independent Telehealth
//                               Practitioner on the SalusWell Lifestyle Health and
//                               Wellness Telehealth Portal.
//                             </span>
//                           </li>
//                           <li>
//                             <b>Waiver and Release:</b>
//                             <span>
//                               {" "}
//                               I, the Health Professional, release and forever
//                               discharge and hold harmless SalusWell and its
//                               successors from any and all liability, claims, and
//                               demands of whatever kind of nature, either in law
//                               or in equity, which arise or may hereafter arise
//                               from the services I provide on the SalusWell
//                               Telehealth Portal. I understand and acknowledge
//                               that this Release discharges SalusWell from any
//                               Liability or Claim that I may have against
//                               SalusWell with respect to my conduct, behavior, or
//                               damages that may result from the services I
//                               provide to consumers or occurring while I am
//                               interacting with other Health Professionals while
//                               utilising the SalusWell Telehealth Portal to
//                               provide my professional services.
//                             </span>
//                           </li>
//                           <li>
//                             <b>Insurance:</b>
//                             <span>
//                               {" "}
//                               I understand that SalusWell does not assume any,
//                               responsibility for, or obligation to provide me
//                               with insurance or other assistance, including
//                               financial or other benefits. I expressly waive any
//                               such claims for compensation or liability on the
//                               part of SalusWell. I further understand as a Care
//                               Provider, that I am always fully responsible for
//                               always maintaining my own Personal Professional
//                               Liability Insurance while I am providing my
//                               professional services on SalusWell Telehealth
//                               Portal.
//                             </span>
//                           </li>
//                           <li>
//                             <b>Assumption of Risk:</b>
//                             <span>
//                               {" "}
//                               I am aware that there may be various risks in
//                               participating in providing Telehealth Services
//                               while on SalusWell Telehealth Portal including,
//                               but not limited to verbal abuse, harassment of any
//                               kind, theft of data, emotional injuries however
//                               arising, and/or unforeseen catastrophic events
//                               (Risks). Notwithstanding these risks, I understand
//                               that I am participating as a Health Professional
//                               Service Provider with SalusWell with this full
//                               knowledge of this risks involved and agree to
//                               accept any and all risks as listed. If you have
//                               any concerns about agreeing to this assumption of
//                               risks, we will ask that you please decline from
//                               providing your service as SalusWell Telehealth
//                               Professional.
//                             </span>
//                           </li>
//                           <li>
//                             <b>Professional Interaction With Others: </b>
//                             <span>
//                               {" "}
//                               During my Health Professional Services to
//                               SalusWell, I agree to abide by all SalusWell
//                               policies set out herein and generally conduct
//                               myself with professionalism, courtesy and respect
//                               for others. I agree to take responsibility for my
//                               actions and for how those actions might affect
//                               others. I agree to avoid undertaking any behavior
//                               that will disrupt others, harm or negatively
//                               impact any service and SalusWell. Prohibited
//                               conduct includes but is not limited to any kind of
//                               verbal abuse, harassment based on race, gender,
//                               sexual orientation, disability or any other
//                               protect ed group status as provided by local,
//                               state, provincial and/or federal law. For further
//                               clarity, this would include yelling or threatening
//                               others, sexual harassment of any kind whatsoever,
//                               and critical commentary of another person’s views
//                               or religious beliefs. In general, we seek to
//                               preclude any prohibited conduct which has the
//                               purpose or effect of interfering with another
//                               person’s ability to enjoy, benefit from
//                               participating in SalusWell. Person’s who are
//                               target of, or witnesses to hostile or harassing
//                               conduct should immediately contact SalusWell
//                               Management. SalusWell has a zero-tolerance policy
//                               for such behavior which may include but is not
//                               limited to expulsion from your service and
//                               suspension of your account at SalusWell Telehealth
//                               Portal. If you are ever unsure as to whether a
//                               behavior or course of conduct is appropriate, you
//                               agree that you will speak to the SalusWell
//                               Management immediately for direction and guidance.
//                             </span>
//                           </li>
//                           <li>
//                             <b>Photographic and Material Release: </b>
//                             <span>
//                               {" "}
//                               I grant and convey to SalusWell all rights, title
//                               and interest to any and all photographic, images,
//                               videos and audio recordings of me, my likeness and
//                               my voices made by SalusWell and any material I
//                               provide to SalusWell in connection with my
//                               providing telehealth services and being part of
//                               the SalusWell group of Health Professionals.
//                             </span>
//                           </li>
//                           <li>
//                             <b>Others:</b>
//                             <span>
//                               {" "}
//                               As a SalusWell Health Professional, I expressly
//                               agree that this Release is intended to be as broad
//                               and inclusive as permitted by the laws across the
//                               states and provinces and that this Release shall
//                               be governed by and interpreted in accordance with
//                               the laws of Ontario and Canada. I agree that if
//                               any clause or provision of this Release is deemed
//                               invalid, the enforceability of the remaining
//                               provisions of this Release shall not be affected.
//                             </span>
//                           </li>
//                         </ol>
//                       </div>
//                       <div>
//                         By accepting and agreeing, I express my understanding
//                         and intent to enter this Release and Waiver of Liability
//                         both willingly and voluntarily.
//                       </div>
//                     </DialogContentText>
//                   </DialogContent>
//                 </>
//               ) : (
//                 <>
//                   <DialogTitle id="alert-dialog-title">
//                     {"CONSENT FORM"}
//                   </DialogTitle>
//                   <DialogContent>
//                     <DialogContentText id="alert-dialog-description">
//                       I hereby AGREE and GIVE CONSENT to the Care Provider I
//                       have chosen for my health care management within SalusWell
//                       Telehealth App. SalusWell has permission to disclose, to
//                       provide and to share my health information with my
//                       physician and other Care Provider which is a member or
//                       service provider of this telehealth App for the purpose of
//                       providing my health care analysis, management, and
//                       prevention. I further agree that any duplication and any
//                       copy, photocopy, electronic data, or facsimile which have
//                       been made as a copy from this original consent letter by
//                       means of photocopying, image scanning, or recording in
//                       whatever forms shall be deemed as evidence of my consent
//                       with the same effect as its original.
//                     </DialogContentText>
//                   </DialogContent>
//                 </>
//               )}
//               <DialogActions>
//                 <Button onClick={handleClose} autoFocus>
//                   CLOSE
//                 </Button>
//               </DialogActions>
//             </Dialog>
//           </div>
//           <Box sx={{ py: 4 }}>
//             <Button onClick={() => submitForm()} variant="contained" fullWidth>
//               Signup now
//             </Button>
//           </Box>

//           <Button component={Link} to="/signin" sx={{ pt: 1 }} fullWidth>
//             Go to SignIn
//           </Button>
//         </Grid>
//       </Container>
//     </>
//   );
// };

// export default SignupComponent;
