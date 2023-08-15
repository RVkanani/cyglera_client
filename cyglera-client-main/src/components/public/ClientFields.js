import {
  Box,
  TextField,
  ListItemText,
  MenuItem,
  Checkbox,
  OutlinedInput,
  InputLabel,
  Grid,
  Select,
} from "@mui/material";
import React, { useState, useEffect } from "react";

const names = [
  "Managing Health Specific Condition",
  "Disease Prevention",
  "Lose Weight/ Fat",
  "Gain Weight",
  "Maintain Weight",
  "Add Muscle",
  "Improve overall health",
  "Improve physical fitness",
  "Feel better",
  "Have more energy and vitality",
  "Healthy aging",
  "Get control of eating habits",
  "Get stronger",
  "Physique competition / modelling",
  "Improve athletic performance",
  "Get off or decrease medications",
  "Other",
];
const langNames = ["English", "French", "Hindi", "Spanish", "Tamil"];

const activityLevel = ["Not Active", "Moderately Active", "Very Active"];
const dietHabits = [
  "Eats Adequate amounts of fruits and veg",
  "Eats adequate amount of protein",
  "Drinks - a half gallon of water a day",
  "Weekly/daily planned out meals",
  "Consume mainly processed foods",
  "Too many meals awary from home",
  "Too many liquid calories",
  "Eating on the run",
  "Not eating 3 or more meals a day",
  "Large portion sizes",
  "Not drinking enough water",
];
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

const ClientFields = ({ state, handleChange }) => {
  const [goals, setGoals] = useState([]);
  const [habits, setHabits] = useState([]);
  const [language, setLanguage] = useState([]);

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  const handleGoalsChange = (event) => {
    const {
      target: { value },
    } = event;
    setGoals(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleHabitChange = (event) => {
    const {
      target: { value },
    } = event;
    setHabits(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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

  useEffect(() => {
    handleChange(convertToDefEventPara("goals", goals));
  }, [goals]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    handleChange(convertToDefEventPara("dietHabits", habits));
  }, [habits]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Grid container>
        <Grid item sm={12} md={6} xs={12}>
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

          <Box sx={{ py: 5, pr: 2 }}>
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
            <TextField
              type="text"
              label="Waist Circumference"
              name="waistCircumference"
              value={state.waistCircumference}
              onChange={(ev) => handleChange(ev)}
              variant="standard"
              fullWidth
            />
          </Box>

          <Box sx={{ py: 4.5, pr: 2 }}>
            <TextField
              type="text"
              label="Hip Circumference"
              name="hipCircumference"
              value={state.hipCircumference}
              onChange={(ev) => handleChange(ev)}
              variant="standard"
              fullWidth
            />
          </Box>

          <Box sx={{ py: 1, pr: 2 }}>
            <TextField
              type="text"
              label="BMI"
              name="BMI"
              value={state.bmi}
              onChange={(ev) => handleChange(ev)}
              variant="standard"
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item sm={12} md={6} xs={12}>
          <Box sx={{ py: 1, pr: 2 }}>
            <InputLabel>Activity Level</InputLabel>
            <Select
              value={state.dailyActivityLevel}
              name="dailyActivityLevel"
              label="Activity Level"
              onChange={(ev) => handleChange(ev)}
              variant="standard"
              fullWidth
            >
              {activityLevel?.map((option) => {
                return (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
          <Box sx={{ py: 3, pr: 2 }}>
            <InputLabel>Goals</InputLabel>
            <Select
              multiple
              value={goals}
              onChange={handleGoalsChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              fullWidth
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={goals.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Box sx={{ py: 0, pr: 2 }}>
            <InputLabel>Diet Habits</InputLabel>
            <Select
              multiple
              value={habits}
              onChange={handleHabitChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              fullWidth
            >
              {dietHabits.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={habits.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
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
              {langNames.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={language.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box sx={{ py: 3.5, pr: 2 }}>
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
        </Grid>
      </Grid>
    </>
  );
};

export default ClientFields;
