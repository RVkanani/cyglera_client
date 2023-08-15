import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useStateValues from "../../../hooks/useStateValues";

import useRole from "../../../hooks/useRole";

import BakedSalmon from "../dietician/assets/Baked-Salmon.png";
import LemonCouscous from "../dietician/assets/Lemon-Couscous-with-Broccoli-and-Tuna.png";
import GingerSmoothie from "../dietician/assets/Ginger-Smoothie.png";
import GarlicRoastedChicken from "../dietician/assets/Garlic-Roasted-Chicken.png";
import BroccoliSalad from "../dietician/assets/Broccoli-Salad.png";
import BeetSmoothie from "../dietician/assets/Beet-Smoothie.png";
import Vegetablebowl from "../dietician/assets/Vegetable-and-Quinoa-Bowl.png";
import CucumberSalad from "../dietician/assets/Cucumber-Tomato-and-Avocado-Salad.png";
import PumpkinOatmeal from "../dietician/assets/Pumpkin-Overnight-Oatmeal.png";
import SpaghettiSquash from "../dietician/assets/Spaghetti-Squash-and-Tomato-Sauce.png";
import Chickpea from "../dietician/assets/Chickpea-and-Quinoa-Bowl.png";
import MangoPeach from "../dietician/assets/Mango-Peach-Smoothie.png";
import GrilledFishTacos from "../dietician/assets/Grilled-Fish-Tacos.jpg";
import ShrimpBowl from "../dietician/assets/Shrimp-Bowl.jpg";
import MangoRaspberrySmothie from "../dietician/assets/Mango-Raspberry-Smoothie.jpg";

const recipe = [
  {
    id: 1,
    title: "Baked Salmon",
    imageUrl: BakedSalmon,
    ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
  },
  {
    id: 2,
    title: "Lemon Couscous with Broccoli and Tuna",
    imageUrl: LemonCouscous,
    ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
  },
  {
    id: 3,
    title: "Ginger Smoothie",
    imageUrl: GingerSmoothie,
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 4,
    title: "Garlic Roasted Chicken",
    imageUrl: GarlicRoastedChicken,
    ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
  },
  {
    id: 5,
    title: "Broccoli Salad",
    imageUrl: BroccoliSalad,
    ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
  },
  {
    id: 6,
    title: "Beet Smoothie",
    imageUrl: BeetSmoothie,
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 7,
    title: "Vegetable Quinoa Bowl",
    imageUrl: Vegetablebowl,
    ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
  },
  {
    id: 8,
    title: "Cucumber, Tomato and Avocado Salad",
    imageUrl: CucumberSalad,
    ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
  },
  {
    id: 9,
    title: "Pumpkin Overnight Oatmeal",
    imageUrl: PumpkinOatmeal,
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 10,
    title: "Spaghetti-Squash-and-Tomato-Sauce",
    imageUrl: SpaghettiSquash,
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 11,
    title: "Chickpea-and-Quinoa-Bowl.png",
    imageUrl: Chickpea,
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 12,
    title: "Mango-Peach-Smoothie",
    imageUrl: MangoPeach,
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 13,
    title: "Grilled-Fish-Tacos",
    imageUrl: GrilledFishTacos,
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 14,
    title: "Shrimp-Bowl",
    imageUrl: ShrimpBowl,
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 15,
    title: "Mango-Raspberry-Smoothie",
    imageUrl: MangoRaspberrySmothie,
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
];
const Recipes = () => {
  const userRole = useRole();
  const i = 0;

  const [recipeNames, setRecipeNames] = useState([]);
  const navigate = useNavigate();
  const navigateTo = (recipeName) => {
    navigate(`/recipes/${recipeName}`, { state: { name: recipeName } });
  };
  const navigateToAddRecipe = () => {
    navigate(`/addrecipes/`);
  };

  useEffect(() => {
    console.log("inside ue effect");
    axios
      .get("http://3.133.175.117:8000/api/auth/fetchAllRecipes")
      .then((res) => {
        console.log("after get method");
        console.log(res.data);
        setRecipeNames(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // recipeNames.map(recipe => (

  //     console.log(recipe.recipeName)
  // ))

  // console.log(recipeNames.recipeName)

  return (
    <div className="container">
      <div className="row mt-5 d-flex text-right">
        <div className="col mt-5 ">
          {userRole != "DIETICIAN" ? (
            <></>
          ) : (
            <>
              <a 
              // href="/addrecipes" 
              className="btn btn-primary"
              onClick={() => navigateToAddRecipe()}>
                Add Recipe
              </a>
              {/* <a
                        className="btn"
                        onClick={() => navigateTo(item2.recipeName)}
                        style={{ color: "black", textDecoration: "none" }}
                ></a> */}
            </>
          )}
        </div>
      </div>
      <div className="row">
        {recipe.map((item1) => (
          // {recipeNames.map((item2) => (
          <div className="col-md-4 my-4" key={item1.id}>
            <div className="card">
              <div className="card-image">
                <img width="100%" src={item1.imageUrl} alt={item1.title} />
                {recipeNames
                  .filter((item2) => item2.recipeName === item1.title)
                  .map((item2) => (
                    <div className="card-title">
                      <a
                        className="btn"
                        onClick={() => navigateTo(item2.recipeName)}
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <b>{item2.recipeName}</b>
                      </a>
                      {console.log(item2)}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
      
export default Recipes;
