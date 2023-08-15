import React from "react";
import {
  TextField,
  FormControl,
  MenuItem,
  Box,
  InputLabel,
  Select,
  Stack,
  Button,
} from "@mui/material";

const AddAppointment = ({
  handleInputChange,
  handleSubmit,
  values,
  users,
  userRole,
  slots,
  appointmentDate,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f5f5f5", // Background color outside the box
        padding: "20px 0", // Add some padding to create space between the box and the background
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          margin: "0 auto",
          padding: "24px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#888",
          transition: "background-color 0.3s",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Subject"
              name="subject"
              value={values.subject}
              onChange={handleInputChange}
              color="primary"
              sx={{
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0, 0, 0, 0.6)",
                },
                backgroundColor: "#fff",
                color: "black",
                transition: "color 0.3s",
              }}
            />

            {/* Rest of the fields and button code goes here... */}
            <FormControl fullWidth variant="outlined">
            <InputLabel>User Role</InputLabel>
            <Select
              label="User role"
              name="userRole"
              value={values.userRole}
              onChange={handleInputChange}
              color="primary"
              sx={{
                "& .MuiSelect-root:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover effect on the select field
                },
                backgroundColor: "#fff",
                color: "black", // Label color changed to black
                transition: "color 0.3s", // Smooth transition for label color
              }}
            >
              <MenuItem value="">None</MenuItem>
              {userRole.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel id="dietitian-label">Select User</InputLabel>
            <Select
              label="Select User"
              name="user"
              value={values.user}
              onChange={handleInputChange}
              color="primary"
              sx={{
                "& .MuiSelect-root:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover effect on the select field
                },
                backgroundColor: "#fff",
                color: "black", // Label color changed to black
                transition: "color 0.3s", // Smooth transition for label color
              }}
            >
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.User.firstName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {slots && (
            <FormControl fullWidth variant="outlined">
              <InputLabel id="slot-label">Select Slot</InputLabel>
              <Select
                label="Select Slot"
                name="slot"
                value={values.slot}
                onChange={handleInputChange}
                color="primary"
                sx={{
                  "& .MuiSelect-root:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover effect on the select field
                  },
                  backgroundColor: "#fff",
                  color: "black", // Label color changed to black
                  transition: "color 0.3s", // Smooth transition for label color
                }}
              >
                <MenuItem value="" disabled>
                  {appointmentDate}
                </MenuItem>
                {slots.map((slot) => (
                  <MenuItem key={slot} value={slot}>
                    {slot}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              sx={{
                backgroundColor: "#333",
                "&:hover": {
                  backgroundColor: "#444",
                },
                marginTop: "20px",
                transition: "background-color 0.3s",
              }}
            >
              SUBMIT
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default AddAppointment;



// import React from "react";
// import {
//   TextField,
//   FormControl,
//   MenuItem,
//   Box,
//   InputLabel,
//   Select,
//   Stack,
//   Button,
// } from "@mui/material";

// const AddAppointment = ({
//   handleInputChange,
//   handleSubmit,
//   values,
//   users,
//   userRole,
//   slots,
//   appointmentDate,
// }) => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: "400px",
//         margin: "0 auto",
//         padding: "24px",
//         border: "1px solid #ddd",
//         borderRadius: "8px",
//         boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//         backgroundColor: "#888",
//         transition: "background-color 0.3s", // Smooth transition for background color
//       }}
//     >
//       <form onSubmit={handleSubmit}>
//         <Stack spacing={2}>
//           <TextField
//             fullWidth
//             variant="outlined"
//             label="Subject"
//             name="subject"
//             value={values.subject}
//             onChange={handleInputChange}
//             color="primary"
//             sx={{
//               "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
//                 borderColor: "rgba(0, 0, 0, 0.6)", // Hover effect on the text field
//               },
//               backgroundColor: "#fff",
//               color: "black", // Label color changed to black
//               transition: "color 0.3s", // Smooth transition for label color
//             }}
//           />

          // <FormControl fullWidth variant="outlined">
          //   <InputLabel>User Role</InputLabel>
          //   <Select
          //     label="User role"
          //     name="userRole"
          //     value={values.userRole}
          //     onChange={handleInputChange}
          //     color="primary"
          //     sx={{
          //       "& .MuiSelect-root:hover": {
          //         backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover effect on the select field
          //       },
          //       backgroundColor: "#fff",
          //       color: "black", // Label color changed to black
          //       transition: "color 0.3s", // Smooth transition for label color
          //     }}
          //   >
          //     <MenuItem value="">None</MenuItem>
          //     {userRole.map((item) => (
          //       <MenuItem key={item.value} value={item.value}>
          //         {item.label}
          //       </MenuItem>
          //     ))}
          //   </Select>
          // </FormControl>

          // <FormControl fullWidth variant="outlined">
          //   <InputLabel id="dietitian-label">Select User</InputLabel>
          //   <Select
          //     label="Select User"
          //     name="user"
          //     value={values.user}
          //     onChange={handleInputChange}
          //     color="primary"
          //     sx={{
          //       "& .MuiSelect-root:hover": {
          //         backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover effect on the select field
          //       },
          //       backgroundColor: "#fff",
          //       color: "black", // Label color changed to black
          //       transition: "color 0.3s", // Smooth transition for label color
          //     }}
          //   >
          //     {users.map((user) => (
          //       <MenuItem key={user.id} value={user.id}>
          //         {user.User.firstName}
          //       </MenuItem>
          //     ))}
          //   </Select>
          // </FormControl>

          // {slots && (
          //   <FormControl fullWidth variant="outlined">
          //     <InputLabel id="slot-label">Select Slot</InputLabel>
          //     <Select
          //       label="Select Slot"
          //       name="slot"
          //       value={values.slot}
          //       onChange={handleInputChange}
          //       color="primary"
          //       sx={{
          //         "& .MuiSelect-root:hover": {
          //           backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover effect on the select field
          //         },
          //         backgroundColor: "#fff",
          //         color: "black", // Label color changed to black
          //         transition: "color 0.3s", // Smooth transition for label color
          //       }}
          //     >
          //       <MenuItem value="" disabled>
          //         {appointmentDate}
          //       </MenuItem>
          //       {slots.map((slot) => (
          //         <MenuItem key={slot} value={slot}>
          //           {slot}
          //         </MenuItem>
          //       ))}
          //     </Select>
          //   </FormControl>
          // )}

//           <Button
//             variant="contained"
//             size="large"
//             color="primary"
//             type="submit"
//             sx={{
//               backgroundColor: "#333", // Change the background color of the button
//               "&:hover": {
//                 backgroundColor: "#444", // Hover effect on the button
//               },
//               marginTop: "20px",
//               transition: "background-color 0.3s", // Smooth transition for background color
//             }}
//           >
//             SUBMIT
//           </Button>
//         </Stack>
//       </form>
//     </Box>
//   );
// };

// export default AddAppointment;


// import React from "react";
// import {
//   TextField,
//   FormControl,
//   MenuItem,
//   Box,
//   InputLabel,
//   Select,
//   Stack,
//   Button,
// } from "@mui/material";

// const AddAppointment = ({
//   handleInputChange,
//   handleSubmit,
//   values,
//   users,
//   userRole,
//   slots,
//   appointmentDate,
// }) => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: "400px",
//         margin: "0 auto",
//         padding: "24px",
//         border: "1px solid #ddd",
//         borderRadius: "8px",
//         boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//         backgroundColor: "#888", // Darker grey background color for the popup
//       }}
//     >
//       <form onSubmit={handleSubmit}>
//         <Stack spacing={2}>
//           <TextField
//             fullWidth
//             variant="outlined"
//             label="Subject"
//             name="subject"
//             value={values.subject}
//             onChange={handleInputChange}
//             color="primary"
//             sx={{
//               "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
//                 borderColor: "rgba(0, 0, 0, 0.6)", // Hover effect on the text field
//               },
//               backgroundColor: "#fff", // White background color for the text field
//             }}
//           />

//           <FormControl fullWidth variant="outlined">
//             <InputLabel>User Role</InputLabel>
//             <Select
//               label="User role"
//               name="userRole"
//               value={values.userRole}
//               onChange={handleInputChange}
//               color="primary"
//               sx={{
//                 "& .MuiSelect-root:hover": {
//                   backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover effect on the select field
//                 },
//                 backgroundColor: "#fff", // White background color for the select field
//               }}
//             >
//               <MenuItem value="">None</MenuItem>
//               {userRole.map((item) => (
//                 <MenuItem key={item.value} value={item.value}>
//                   {item.label}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <FormControl fullWidth variant="outlined">
//             <InputLabel id="dietitian-label">Select User</InputLabel>
//             <Select
//               label="Select User"
//               name="user"
//               value={values.user}
//               onChange={handleInputChange}
//               color="primary"
//               sx={{
//                 "& .MuiSelect-root:hover": {
//                   backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover effect on the select field
//                 },
//                 backgroundColor: "#fff", // White background color for the select field
//               }}
//             >
//               {users.map((user) => (
//                 <MenuItem key={user.id} value={user.id}>
//                   {user.User.firstName}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           {slots && (
//             <FormControl fullWidth variant="outlined">
//               <InputLabel id="slot-label">Select Slot</InputLabel>
//               <Select
//                 label="Select Slot"
//                 name="slot"
//                 value={values.slot}
//                 onChange={handleInputChange}
//                 color="primary"
//                 sx={{
//                   "& .MuiSelect-root:hover": {
//                     backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover effect on the select field
//                   },
//                   backgroundColor: "#fff", // White background color for the select field
//                 }}
//               >
//                 <MenuItem value="" disabled>
//                   {appointmentDate}
//                 </MenuItem>
//                 {slots.map((slot) => (
//                   <MenuItem key={slot} value={slot}>
//                     {slot}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           )}

//           <Button
//             variant="contained"
//             size="large"
//             color="primary"
//             type="submit"
//             sx={{
//               backgroundColor: "#333", // Change the background color of the button
//               "&:hover": {
//                 backgroundColor: "#444", // Hover effect on the button
//               },
//               marginTop: "20px",
//             }}
//           >
//             SUBMIT
//           </Button>
//         </Stack>
//       </form>
//     </Box>
//   );
// };

// export default AddAppointment;



// import React from "react";
// import {
//   TextField,
//   FormControl,
//   MenuItem,
//   Box,
//   InputLabel,
//   Select,
//   Stack,
//   Button,
// } from "@mui/material";

// const AddAppointment = ({
//   handleInputChange,
//   handleSubmit,
//   values,
//   users,
//   userRole,
//   slots,
//   appointmentDate,
// }) => {
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <FormControl
//           style={{
//             width: "100vh",
//           }}
//         >
//           <Stack>
//             <Box sx={{ py: 1 }}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Subject"
//                 name="subject"
//                 value={values.subject}
//                 onChange={handleInputChange}
//               />
//             </Box>

//             <Box sx={{ py: 1 }}>
//               <FormControl
//                 variant="outlined"
//                 style={{
//                   width: "100vh",
//                 }}
//               >
//                 <InputLabel>User Role</InputLabel>
//                 <Select
//                   label="User role"
//                   name="userRole"
//                   fullWidth
//                   value={values.userRole}
//                   onChange={handleInputChange}
//                 >
//                   <MenuItem value="">None</MenuItem>
//                   {userRole.map((item) => (
//                     <MenuItem key={item.value} value={item.value}>
//                       {item.label}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Box>
//             <Box sx={{ py: 1 }}>
//               <FormControl
//                 variant="outlined"
//                 style={{
//                   width: "100vh",
//                 }}
//               >
//                 <InputLabel id="dietitian-label">Select one</InputLabel>
//                 <Select
//                   label="Select one"
//                   name="user"
//                   value={values.user}
//                   fullWidth
//                   onChange={handleInputChange}
//                 >
//                   {users.map((user) => (
//                     <MenuItem key={user.id} value={user.id}>
//                       {user.User.firstName}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Box>
//             {slots && (
//               <Box sx={{ py: 1 }}>
//                 <FormControl
//                   variant="outlined"
//                   style={{
//                     width: "100vh",
//                   }}
//                 >
//                   <InputLabel id="slot-label">Select slot</InputLabel>
//                   <Select
//                     label="TimeSlot"
//                     name="slot"
//                     value={values.slot}
//                     fullWidth
//                     onChange={handleInputChange}
//                   >
//                     <MenuItem value="" disabled>
//                       {appointmentDate}
//                     </MenuItem>
//                     {slots.map((slot) => (
//                       <MenuItem key={slot} value={slot}>
//                         {slot}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Box>
//             )}
//           </Stack>
//         </FormControl>
//         <div>
//           <Button
//             variant="outlined"
//             size={"large"}
//             color={"primary"}
//             type="submit"
//           >
//             SUBMIT
//           </Button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default AddAppointment;
