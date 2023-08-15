import { Container } from "@mui/material";
import React from "react";

const ComponentWrapper = ({ children }) => {
  return (
    <>
      <>
        <Container
          sx={{
            mx: 5,
            my: 20,
          }}
          style={{
            height: "100vh",
            width: "100vh",
          }}
        >
          {children}
        </Container>
      </>
    </>
  );
};

export default ComponentWrapper;
