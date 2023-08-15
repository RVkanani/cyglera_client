// import React, { useState, useEffect } from "react";
// import Recipes from "../../../components/private/dietician/Recipes";

// const RecipesPage = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Simulate an API call to fetch recipes data
//     fetchRecipes()
//       .then((data) => {
//         setRecipes(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError("Error fetching recipes. Please try again later.");
//         setIsLoading(false);
//       });
//   }, []);

//   const fetchRecipes = () => {
//     // Simulated API call with a delay to show loading state
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Replace this with your actual API call to fetch recipes data
//         const data = [
//           {
//             id: 1,
//             name: "Delicious Salad",
//             description: "A healthy and refreshing salad.",
//             imageUrl: "https://example.com/salad.jpg",
//           },
//           {
//             id: 2,
//             name: "Tasty Smoothie",
//             description: "A delightful and nutritious smoothie.",
//             imageUrl: "https://example.com/smoothie.jpg",
//           },
//           // Add more recipe objects here
//         ];

//         // Resolve with the data
//         resolve(data);
//       }, 1500); // Simulated delay of 1.5 seconds
//     });
//   };

//   return (
//     <>
//       {isLoading ? (
//         <p>Loading recipes...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <Recipes recipes={recipes} />
//       )}
//     </>
//   );
// };

// export default RecipesPage;




import React from "react";

import Recipes from "../../../components/private/dietician/Recipes";
const RecipesPage = () => {
  return (
    <>
      <Recipes />
    </>
  );
};

export default RecipesPage;
