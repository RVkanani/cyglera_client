import { React, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../../App.css";

import useRole from "../../../hooks/useRole";

const Recipe = () => {
  const location = useLocation();

  const data = location.state.name;
  console.log(location.state.name);
  const userRole = useRole();
  const i = 0;

  const [recipe, setRecipe] = useState([]);
  const [sendRecipeName, setSendRecipeName] = useState([data]);

  useEffect(() => {
    console.log("inside use effect");
    axios
      .post(
        "http://3.133.175.117:8000/api/auth/fetchSignleRecipe",
        sendRecipeName
      )
      .then((res) => {
        console.log("after get method");
        console.log(res.data);
        setRecipe(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    // recipe.map((x) =>(
    <div className="container">
      <div className="row mt-5 d-flex text-center">
        <div className="col mt-5">
          <h1>{recipe.recipeName}</h1>
        </div>
      </div>
      {/* {recipeNames.filter((item2) => item2.recipeName === item1.title).map((item2) => ( */}

      <div className="card mb-5">
        <div className="row mx-1">
          <div className="col">
            <div className="row mt-1 d-flex text-center">
              <div className="col">
                <img src="" width="500" height="250" />
              </div>
            </div>
            <div className="row">
              <div className="col mt-1 d-flex text-center">
                <Button
                  onClick={handlePrint}
                  className="bg-success"
                  media="print"
                >
                  Print Recipe
                </Button>
              </div>
            </div>
            <hr />
            {/* <div className="row"> */}
            <div className="col mt-3">
              <b>NUTRITIONAL FACTS</b>
              <div className="row my-2">
                <div className="col-md-2">Calories: {recipe.calories}</div>
                <div className="col-md-2">
                  Carbohydrates: {recipe.carbohydrates}
                </div>
                <div className="col-md-2">Protein: {recipe.protein}</div>
                <div className="col-md-2">Fat: {recipe.fat}</div>
              </div>
            </div>
            <hr />
            {/* </div> */}
            <div className="col">
              <b className="hr-line">INGREDIENTS</b>
              <ul>
                <li>{recipe.ingredients}</li>
              </ul>
            </div>
            <hr />
            <div className="col">
              <b>INSTRUCTIONS</b>
              <ol>
                <li>{recipe.instructions}</li>
              </ol>
            </div>
            <hr />
            <div className="col">
              <b>BREAK DOWN OF ESSENTIAL INGREDIENTS</b>
              <p>{recipe.benefits}</p>
                </div>
              </div> 
          </div>
        </div>
      </div>

  )};
    

export default Recipe;
