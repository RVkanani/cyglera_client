//2 
// import React from "react";
// import { Outlet } from "react-router-dom";
// import Navigation from "../components/private/navigation/Navigation";
// import Footer from "./Footer";

// // import adminNavList from "../helpers/navItems/AdminNavList";
// import dieticianNavList from "../helpers/navItems/DieticianNavList";
// import clientNavList from "../helpers/navItems/ClientNavList";
// import { PHYSICIAN, CLIENT, DIETICIAN, CAREPROVIDER, TRAINER } from "../helpers/UserRoles";
// import useRole from "../hooks/useRole";

// const roleToNavListMap = {
//   [TRAINER]: dieticianNavList,
//   [CLIENT]: clientNavList,
//   [DIETICIAN]: dieticianNavList,
//   [PHYSICIAN]: dieticianNavList,
//   [CAREPROVIDER]: dieticianNavList,
// };

// const Dashboard = () => {
//   const userRole = useRole();
//   const navFeaturesList = roleToNavListMap[userRole];

//   return (
//     <>
//       <Navigation navFeaturesList={navFeaturesList} />
//       <Outlet />
//       <Footer />
//     </>
//   );
// };

// export default Dashboard;





// 1
import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/private/navigation/Navigation";

import adminNavList from "../helpers/navItems/AdminNavList";
import dieticianNavlist from "../helpers/navItems/DieticianNavList";
import clientNavList from "../helpers/navItems/ClientNavList";
import {
  PHYSICIAN,
  CLIENT,
  DIETICIAN,
  CAREPROVIDER,
  TRAINER,
} from "../helpers/UserRoles";
import useRole from "../hooks/useRole";
import Footer from "./Footer";

const Dashboard = () => {
  const userRole = useRole();
  return (
    <>
      {/* NavigationBar */}
      {/* if role is admin, show admin layout */}
      {userRole === TRAINER && (
        <>
          <Navigation navFeaturesList={dieticianNavlist} />
        </>
      )}
      {/* if role is client, show client layout */}
      {userRole === CLIENT && (
        <>
          <Navigation navFeaturesList={clientNavList} />
        </>
      )}
      {/* if role is dietician, show dietician layout */}
      {userRole === DIETICIAN && (
        <>
          <Navigation navFeaturesList={dieticianNavlist} />
        </>
      )}
      {userRole === PHYSICIAN && (
        <>
          <Navigation navFeaturesList={dieticianNavlist} />
        </>
      )}
      {userRole === CAREPROVIDER && (
        <>
          <Navigation navFeaturesList={dieticianNavlist} />
        </>
      )}
      {/* this is where different components gets rendered based on url-path */}
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
};

export default Dashboard;
