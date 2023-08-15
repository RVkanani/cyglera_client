import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Alert } from "reactstrap";
import useStateValues from "../../../hooks/useStateValues";

const getType = {
  userName: "",
  email: "",
  recipeName: "",
  summary: "",
  imgUrl: "",
  ingredients: "",
  instructions: "",
  benefits: "",
  prepTime: "",
  cookTime: "",
  totalTime: "",
  carbohydrates: "",
  calories: "",
  protein: "",
  fat: "",
  courses: "",
  cuisines: "",
};

const AddRecipeForm = () => {
  const { userData } = useStateValues();
  console.log(userData);

  const [fetchUserInfo, setFetchUserInfo] = useState({
    userName: userData.firstName,
    email: userData.email,
  });

  const [formData, setFormData] = useState(getType);
  const [successMessage, setSuccessMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, imgUrl: file }));
  };

  //rouite to submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://3.133.175.117:8000/addRecipe", formData)
      .then((res) => {
        if (res.data === true) {
          setSuccessMessage("Recipe submitted successfully!");
          setIsOpen(true);
        } else {
          setSuccessMessage(
            "Form Submission Failed: Invalid data entered. Please check the information you have entered and try again."
          );
          setIsOpen(true);
        }
        console.log(res.data);
        // do something with the response, e.g. show a success message
      })
      .catch((error) => {
        console.log(error);
        // handle the error, e.g. show an error message
      });
  };
  // creating function for any changes in form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // creating function for any changes in textarea field
  const handleChangeTextArea = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5">
      <Form onSubmit={handleSubmit}>
        <h3>Submit Your Own Recipe</h3>
        <br />
        <Form.Group controlId="userName">
          <Form.Label className="font-weight-bold">
            Name<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="userName"
            onChange={handleChange}
            defaultValue={userData.firstName}
            disabled={!editMode}
          />
        </Form.Group>
        <br />

        <Form.Group controlId="email">
          <Form.Label className="font-weight-bold">
            Email<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            defaultValue={userData.email}
            disabled={!editMode}
          />
        </Form.Group>
        <br />
        <h4>Recipe Essentials</h4>
        <br />

        <Form.Group controlId="recipeName">
          <Form.Label className="font-weight-bold">
            Recipe Name<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter recipe name"
            name="recipeName"
            onChange={handleChange}
          />
        </Form.Group>
        <br />

        <Form.Group controlId="summary">
          <Form.Label className="font-weight-bold">Summary</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter recipe summary"
            name="summary"
            onChange={handleChangeTextArea}
          />
        </Form.Group>
        <br />

        <Form.Group controlId="imgUrl">
          <Form.Label className="font-weight-bold">
            Image<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <br />
          <input
            type="file"
            id="custom-file"
            label="Choose file"
            name="imgUrl"
            onChange={handleImageChange}
            custom
          />
        </Form.Group>
        <br />

        <Form.Group controlId="ingredients">
          <Form.Label className="font-weight-bold">
            Ingredients<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter recipe ingredients"
            name="ingredients"
            onChange={handleChangeTextArea}
          />
        </Form.Group>
        <br />

        <Form.Group controlId="instructions">
          <Form.Label className="font-weight-bold">
            Instructions<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter recipe instructions"
            name="instructions"
            onChange={handleChangeTextArea}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="benefits">
          <Form.Label className="font-weight-bold">
            Breakdown of Essential Ingrediants
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter recipe Essential Ingrediants"
            name="benefits"
            onChange={handleChangeTextArea}
          />
        </Form.Group>
        <br />
        <h4>Recipe Details</h4>
        <br />

        <Form.Group controlId="cookTime">
          <Form.Label className="font-weight-bold">Cook time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter recipe cook time"
            name="cookTime"
            onChange={handleChange}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="prepTime">
          <Form.Label className="font-weight-bold">Prep time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter recipe prep time"
            name="prepTime"
            onChange={handleChange}
          />
        </Form.Group>
        <br />

        <Form.Group controlId="totalTime">
          <Form.Label className="font-weight-bold">Total time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter recipe Total cook time"
            name="totalTime"
            onChange={handleChange}
          />
        </Form.Group>
        <br />
        <h4>Nutritional Facts</h4>
        <br />
        <div className="row">
          <div className="col-md-6">
            <Form.Group controlId="carbohydrates">
              <Form.Label className="font-weight-bold">
                Carbohydrates
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="10g"
                name="carbohydrates"
                onChange={handleChange}
              />
            </Form.Group>
            <br />
          </div>
          <div className="col-md-6">
            <Form.Group controlId="calories">
              <Form.Label className="font-weight-bold">Calories</Form.Label>
              <Form.Control
                type="text"
                placeholder="100cal"
                name="calories"
                onChange={handleChange}
              />
            </Form.Group>
            <br />
          </div>
          <div className="col-md-6">
            <Form.Group controlId="protein">
              <Form.Label className="font-weight-bold">Protein</Form.Label>
              <Form.Control
                type="text"
                placeholder="20g"
                name="protein"
                onChange={handleChange}
              />
            </Form.Group>
            <br />
          </div>
          <div className="col-md-6">
            <Form.Group controlId="fat">
              <Form.Label className="font-weight-bold">Fat</Form.Label>
              <Form.Control
                type="text"
                placeholder="5g"
                name="fat"
                onChange={handleChange}
              />
            </Form.Group>
            <br />
          </div>
        </div>

        <Form.Group controlId="courses">
          <Form.Label className="font-weight-bold">Courses</Form.Label>
          <Form.Control type="text" name="courses" onChange={handleChange} />
        </Form.Group>
        <br />
        <Form.Group controlId="cuisines">
          <Form.Label className="font-weight-bold">Cuisines</Form.Label>
          <Form.Control type="text" name="cuisines" onChange={handleChange} />
        </Form.Group>
        <br />
        <br />
        <Button variant="primary" type="submit">
          Submit Recipe
        </Button>
        <Alert
          color="success"
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)}
        >
          {successMessage}
        </Alert>
      </Form>
    </div>
  );
};

export default AddRecipeForm;
