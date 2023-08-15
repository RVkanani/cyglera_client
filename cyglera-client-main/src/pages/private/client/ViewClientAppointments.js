import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, Button, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";
import useStateValues from "../../../hooks/useStateValues";

import Popup from "../../../components/private/dietician/Popup";
import AddAppointmentPage from "./AddAppointment";

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          height: "54vh",
          "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus": {
            outline: "none",
          },
        },
      },
    },
  },
});

const columns = [
  { field: "id", headerName: "ID", flex: 1, headerClassName: "header-cell" },
  { field: "subject", headerName: "SUBJECT", flex: 1, headerClassName: "header-cell" },
  { field: "role", headerName: "ROLE", flex: 1, headerClassName: "header-cell" },
  { field: "name", headerName: "NAME", flex: 1, headerClassName: "header-cell" },
  { field: "email", headerName: "EMAIL", flex: 1, headerClassName: "header-cell" },
  {
    field: "timeSlot",
    headerName: "TIME SLOT",
    flex: 1,
    headerClassName: "header-cell",
  },
  
  {
    field: "videoLink",
    flex: 1,
    headerName: "ZOOM LINK",
    headerClassName: "header-cell",
    renderCell: (params) => {
      if (!params.value) {
        return <span style={{ color: "red", fontStyle: "italic" }}>Appointment yet to be confirmed</span>;
      }
      return <Link href={`${params.value}`} style={{ color: "#007bff", textDecoration: "underline" }}>{params.value}</Link>;
    },
  },
];


export default function ViewClientAppointmentsPage() {
  const { jwtToken } = useStateValues();
  const [rows, setRows] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const fetchData = () => {
    setOpenPopup(false);
    axios
      .get(`http://3.133.175.117:8000/api/appointment/fetchAppointments`, {
        headers: {
          authorization: `BEARER ${jwtToken}`,
        },
      })
      .then((res) => {
        const result = res.data.data.map((d) => {
          return {
            id: d.id,
            subject: d.subject,
            role: d.relatedToUser.userRole,
            timeSlot: d.timeSlot,
            name: d.relatedToUser.firstName,
            videoLink: d.videoLink,
            email: d.relatedToUser.email,
          };
        });
        setRows(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container
      sx={{
        my: 30,
        width: "100%",
        height: "100vh",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => {
          setOpenPopup(true);
        }}
        sx={{
          mb: 2,
          backgroundColor: "#333",
          color: "#fff",
          fontSize: "18px",
          padding: "10px 20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#45a049",
          },
        }}
      >
        ADD NEW
      </Button>

      <ThemeProvider theme={theme}>
        <DataGrid
          sx={{
            justifyContent: "center",
            my: 0,
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            "& .MuiDataGrid-cell": {
              fontSize: "16px",
              color: "#333",
              fontWeight: "normal",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#333",
              fontSize: "18px",
              color: "#fff",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-row": {
              "&:nth-of-type(odd)": {
                backgroundColor: "#f5f5f5",
              },
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            },
          }}
          rows={rows}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[]}
        />
      </ThemeProvider>

      <Popup
        title="Create Appointment"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AddAppointmentPage fetchData={fetchData} />
      </Popup>
    </Container>
  );
}
