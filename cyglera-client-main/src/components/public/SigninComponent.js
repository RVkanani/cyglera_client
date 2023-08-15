// 3 


// import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

// const SigninComponent = ({ state, errorState, submitForm, handleChange }) => {
//   return (
//     <Container maxWidth="xs" sx={{ marginTop: "2rem", textAlign: "center" }}>
//       <Box
//         sx={{
//           border: "1px solid #ccc",
//           borderRadius: "8px",
//           padding: "2rem",
//           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         {/* <Typography variant="h4" sx={{ marginBottom: "2rem", color: "#555" }}>
//           <span style={{ background: "rgba(255, 255, 255, 0.7)", padding: "0.5rem 1rem", borderRadius: "4px" }}>SALUSWELL</span>
//         </Typography> */}

//         <Stack spacing={2}>
//           <TextField
//             type="email"
//             label="Email"
//             name="email"
//             value={state.email}
//             onChange={(ev) => handleChange(ev)}
//             error={errorState.emailError}
//             helperText={errorState.emailError && "Enter a valid email"}
//             fullWidth
//             variant="outlined"
//           />

//           <TextField
//             type="password"
//             label="Password"
//             name="password"
//             value={state.password}
//             onChange={(ev) => handleChange(ev)}
//             error={errorState.passwordError}
//             helperText={errorState.passwordError && "e.g., Password1@"}
//             fullWidth
//             variant="outlined"
//           />

//           <Button onClick={() => submitForm()} variant="contained" fullWidth sx={{ marginTop: "1rem", background: "#ff4081", color: "#fff" }}>
//             Sign In
//           </Button>

//           <Typography variant="body2" sx={{ marginTop: "1rem" }}>
//             Don't have an account?{" "}
//             <Link to="/signup" style={{ textDecoration: "none" }}>
//               Sign Up
//             </Link>
//           </Typography>
//         </Stack>
//       </Box>
//     </Container>
//   );
// };

// export default SigninComponent;










// 2
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SigninComponent = ({ state, errorState, submitForm, handleChange }) => {
  return (
    <Container maxWidth="xs" sx={{ marginTop: "2rem", textAlign: "center" }}>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "2rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
          Sign In
        </Typography>

        <Stack spacing={2}>
          <TextField
            type="email"
            label="Email"
            name="email"
            value={state.email}
            onChange={(ev) => handleChange(ev)}
            error={errorState.emailError}
            helperText={errorState.emailError && "Enter a valid email"}
            fullWidth
            variant="outlined"
          />

          <TextField
            type="password"
            label="Password"
            name="password"
            value={state.password}
            onChange={(ev) => handleChange(ev)}
            error={errorState.passwordError}
            helperText={errorState.passwordError && "e.g., Password1@"}
            fullWidth
            variant="outlined"
          />

          <Button onClick={() => submitForm()} variant="contained" fullWidth>
            Sign In
          </Button>

          <Typography variant="body2" sx={{ marginTop: "1rem" }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Sign Up
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default SigninComponent;






// 1

// import { Box, Button, Container, Stack, TextField } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

// const SigninComponent = ({ state, errorState, submitForm, handleChange }) => {
//   return (
//     <>
//       {/* here form elements */}
//       <Container
//         maxWidth="xs"
//         sx={
//           errorState.hasError
//             ? {
//                 justifyContent: "center",
//                 border: "2px solid black",
//                 mt: "1%",
//               }
//             : {
//                 justifyContent: "center",
//                 border: "2px solid black",
//                 mt: "1%",
//               }
//         }
//       >
//         <Stack sx={{ py: 5, my: 5 }}>
//           <Box sx={{ py: 2 }}>
//             <TextField
//               type="email"
//               label="email"
//               name="email"
//               value={state.email}
//               onChange={(ev) => handleChange(ev)}
//               error={errorState.emailError}
//               variant="standard"
//               helperText={errorState.emailError && "Enter a valid email"}
//               fullWidth
//             />
//           </Box>

//           <Box sx={{ py: 2 }}>
//             <TextField
//               type="password"
//               label="password"
//               name="password"
//               value={state.password}
//               onChange={(ev) => handleChange(ev)}
//               error={errorState.passwordError}
//               variant="standard"
//               helperText={errorState.passwordError && "eg: Password1@"}
//               fullWidth
//             />
//           </Box>

//           <Box sx={{ py: 3 }}>
//             <Button onClick={() => submitForm()} variant="contained" fullWidth>
//               Sign in
//             </Button>
//           </Box>
//           <Button
//             component={Link}
//             to="/signup"
//             sx={{ pt: 1 }}
//             variant="outlined"
//           >
//             Go to SignUp
//           </Button>
//         </Stack>
//       </Container>
//     </>
//   );
// };

// export default SigninComponent;
