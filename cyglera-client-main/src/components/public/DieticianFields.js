import {
  Box,
  TextField,
  ListItemText,
  MenuItem,
  Checkbox,
  OutlinedInput,
  InputLabel,
  TextareaAutosize,
  Grid,
  Select,
} from "@mui/material";
import React, { useState, useEffect } from "react";

const names = ["English", "French", "Hindi", "Spanish", "Tamil"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const DieticianFields = ({ state, handleChange }) => {
  const [language, setLanguage] = useState([]);
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  const handleLanguageChange = (event) => {
    const {
      target: { value },
    } = event;
    setLanguage(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    handleChange(convertToDefEventPara("languages", language));
  }, [language]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Grid container>
        <Grid item sm={6} md={6} xs={12}>
          <Box sx={{ py: 2, pr: 2 }}>
            <TextField
              type="text"
              label="Height"
              name="height"
              value={state.height}
              onChange={(ev) => handleChange(ev)}
              variant="standard"
              fullWidth
            />
          </Box>

          <Box sx={{ py: 2, pr: 2 }}>
            <TextField
              type="text"
              label="Weight"
              name="weight"
              value={state.weight}
              onChange={(ev) => handleChange(ev)}
              variant="standard"
              fullWidth
            />
          </Box>

          <Box sx={{ py: 2, pr: 2 }}>
            <InputLabel id="demo-multiple-checkbox-label">Language</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={language}
              onChange={handleLanguageChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              fullWidth
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={language.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box sx={{ py: 4, pr: 2 }}>
            <TextField
              type="text"
              label="Years of Experience"
              name="yearsOfExperience"
              value={state.yearsOfExperience}
              onChange={(ev) => handleChange(ev)}
              variant="standard"
              fullWidth
            />
          </Box>
          <Box sx={{ py: 2 }}>
            <TextField
              type="text"
              label="Education"
              name="education"
              value={state.education}
              onChange={(ev) => handleChange(ev)}
              variant="standard"
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item sm={6} md={6} xs={12}>
          <Box sx={{ py: 2 }}>
            <TextField
              type="text"
              label="Occupation"
              name="occupation"
              value={state.occupation}
              onChange={(ev) => handleChange(ev)}
              variant="standard"
              fullWidth
            />
          </Box>
          <Box sx={{ py: 2 }}>
            <TextField
              type="text"
              label="Area of Focus"
              name="areaOfFocus"
              value={state.areaOfFocus}
              onChange={(ev) => handleChange(ev)}
              variant="standard"
              fullWidth
            />
          </Box>
          <Box sx={{ py: 5 }}>
            <TextareaAutosize
              type="text"
              label="Professional Summary"
              name="professionalSummary"
              value={state.professionalSummary}
              maxRows={3}
              minRows={3}
              onChange={(ev) => handleChange(ev)}
              placeholder="Professional Summary"
              style={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ py: 0 }}>
            <TextareaAutosize
              type="text"
              label="Professional Approach"
              name="professionalApproach"
              value={state.professionalApproach}
              maxRows={3}
              minRows={3}
              onChange={(ev) => handleChange(ev)}
              placeholder="Professional Approach"
              style={{ width: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DieticianFields;
