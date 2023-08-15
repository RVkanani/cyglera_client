import React, { useState, useEffect } from "react";
import useActionDispatcher from "../../hooks/useActionDispatcher";
import useStateValues from "../../hooks/useStateValues";
import axios from "axios";
import Footer from "../../layouts/Footer";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/private/navigation/Navigation";
import adminNavList from "../../helpers/navItems/AdminNavList";
import dieticianNavlist from "../../helpers/navItems/DieticianNavList";
import clientNavList from "../../helpers/navItems/ClientNavList";
import {
  PHYSICIAN,
  CLIENT,
  DIETICIAN,
  CAREPROVIDER,
  TRAINER,
} from "../../helpers/UserRoles";
import useRole from "../../hooks/useRole";

import Dashboard from "../../layouts/Dashboard";

const recipe = [
  {
    id: 1,
    title: "Baked Salmon",
    ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
  },
  {
    id: 2,
    title: "Lemon Couscous with Broccoli and Tuna",
    ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
  },
  {
    id: 3,
    title: "Ginger Smoothie",
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 4,
    title: "Garlic Roasted Chicken",
    ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
  },
  {
    id: 5,
    title: "Broccoli Salad",
    ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
  },
  {
    id: 6,
    title: "Beet Smoothie",
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 7,
    title: "Vegetable Quinoa Bowl",
    ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
  },
  {
    id: 8,
    title: "Cucumber, Tomato and Avocado Salad",
    ingredients: ["ingredient 4", "ingredient 5", "ingredient 6"],
  },
  {
    id: 9,
    title: "Pumpkin Overnight Oatmeal",
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 10,
    title: "Spaghetti-Squash-and-Tomato-Sauce",
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 11,
    title: "Chickpea-and-Quinoa-Bowl.png",
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 12,
    title: "Mango-Peach-Smoothie",
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 13,
    title: "Grilled-Fish-Tacos",
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 14,
    title: "Shrimp-Bowl",
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
  {
    id: 15,
    title: "Mango-Raspberry-Smoothie",
    ingredients: ["ingredient 7", "ingredient 8", "ingredient 9"],
  },
];

const DieticianDashboard = () => {
  const { jwtToken } = useStateValues();
  const { userData } = useStateValues();
  const userRole = useRole();

  const [appointments, setAppointments] = useState([]);

  const fetchData = () => {
    axios
      .get(`http://localhost:8080/api/appointment/fetchAppointments`, {
        headers: {
          authorization: `BEARER ${jwtToken}`,
        },
      })
      .then((res) => {
        const result = res.data.data
          .map((d) => {
            if (d.relatedToUser.userRole === userData.userRole) {
              return {
                id: d.id,
                subject: d.subject,
                role: d.relatedFromUser.userRole,
                timeSlot: d.timeSlot,
                name: d.relatedFromUser.firstName,
                videoLink: d.videoLink,
                email: d.relatedFromUser.email,
              };
            } else {
              return null;
            }
          })
          .filter((d) => d !== null);
        setAppointments(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useState(() => {
    fetchData();
  }, []);

  // Your component logic and JSX
  const dispatch = useActionDispatcher();
  return (
    <div>
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

      <br />
      <br />
      <br />
      <br />

      <div>
        <div>
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <title>Dashboard -SalusWell</title>
          <meta content name="description" />
          <meta content name="keywords" />

          {/* Template Main CSS File */}

          {/* ======= Header ======= */}
          <header
            id="header"
            className="header fixed-top d-flex align-items-center"
          >
            <div className="d-flex align-items-center justify-content-between">
              <a href="index.html" className="logo d-flex align-items-center">
                <img src="./assets/img/logo.png" alt="" />
                <span className="d-none d-lg-block" />
              </a>
            </div>
            {/* End Logo */}
            <nav className="header-nav" style={{ marginLeft: "auto" }}>
              <ul className="d-flex align-items-center">
                <li className="nav-item d-none d-lg-block">
                  <a className="nav-link " href="appointments">
                    APPOINTMENT
                  </a>
                </li>
                &nbsp; &nbsp;&nbsp; &nbsp;
                <li className="nav-item d-none d-lg-block">
                  <a className="nav-link " href="recipes">
                    RECIPE
                  </a>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item dropdown pe-3">
                  <a
                    className="nav-link nav-profile d-flex align-items-center pe-0"
                    href=""
                    data-bs-toggle="dropdown"
                  >
                    <span className="d-none d-md-block dropdown-toggle ps-2">
                      {userData.firstName} {userData.lastName}
                    </span>
                  </a>
                  {/* End Profile Iamge Icon */}
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li className="dropdown-header">
                      <h6>
                        {userData.firstName} {userData.lastName}
                      </h6>
                      <span>Dietitian</span>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="Profile"
                      >
                        <i className="bi bi-person" />
                        <span>My Profile</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#users-profile.html"
                      >
                        <i className="bi bi-gear" />
                        <span>Account Settings</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#pages-faq.html"
                      >
                        <i className="bi bi-question-circle" />
                        <span>Need Help?</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="dropdown-item d-flex align-items-center"
                        onClick={() => {
                          dispatch({ type: "signOut" });
                        }}
                      >
                        <i className="bi bi-box-arrow-right" />
                        <span>Sign Out</span>
                      </button>
                    </li>
                  </ul>
                  {/* End Profile Dropdown Items */}
                </li>
                {/* End Profile Nav */}
              </ul>
            </nav>
            {/* End Icons Navigation */}
          </header>
          {/* End Header */}
          {/* ======= Sidebar ======= */}
          <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
              <li className="nav-item">
                <a className="nav-link " href="index.html">
                  <i className="bi bi-grid" />
                  <span>Dashboard</span>
                </a>
              </li>
              {/* End Dashboard Nav */}
              <li className="nav-item">
                <a className="nav-link collapsed" href="appointments">
                  <i className="bi bi-calendar" />
                  <span>View Appointments</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link collapsed" href="addrecipes">
                  <i className="bi bi-grid" />
                  <span>Add Recipie</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link collapsed" href="recipes">
                  <i className="bi bi-grid" />
                  <span>View Recipies</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link collapsed" href="profile">
                  <i className="bi bi-person" />
                  <span>Profile</span>
                </a>
              </li>
              {/* End Profile Page Nav */}
              <li
                className="nav-item"
                onClick={() => {
                  dispatch({ type: "signOut" });
                }}
              >
                <a className="nav-link collapsed" href="#pages-login.html">
                  <i className="bi bi-box-arrow-in-right" />
                  <span>LogOut</span>
                </a>
              </li>
              {/* End Login Page Nav */}
            </ul>
          </aside>
          {/* End Sidebar*/}
          <main id="main" className="main">
            <div className="pagetitle">
              <h1>Dashboard</h1>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </nav>
            </div>
            {/* End Page Title */}
            <section className="section dashboard">
              <div className="row">
                {/* Left side columns */}
                <div className="col-lg-8">
                  <div className="row">
                    {/* Reports */}
                    <div className="col-12">
                      <div className="card">
                        <div className="filter">
                          <a
                            className="icon"
                            href="#"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bi bi-three-dots" />
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                              <h6>Filter</h6>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Today
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                This Month
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                This Year
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Reports */}
                    {/* Recent Sales */}
                    <div className="col-12">
                      <div className="card recent-sales overflow-auto">
                        <div className="filter">
                          <a
                            className="icon"
                            href="#"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bi bi-three-dots" />
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                              <h6>Filter</h6>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Today
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                This Month
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                This Year
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div id="add-appointment-section" className="card-body">
                          <a
                            href="appointments"
                            className="btn btn-primary my-2"
                          >
                            View Appointment
                          </a>
                          {/* {<AddAppointment/>} */}
                          <table className="table table-borderless datatable">
                            <thead>
                              <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Time</th>
                                <th scope="col">Zoom Link</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <>
                                {appointments.map((appointment) => {
                                  return (
                                    <tr>
                                      <th scope="row">
                                        <a href="">#{appointment.id}</a>
                                      </th>
                                      <td>{appointment.name}</td>
                                      <td>
                                        <a
                                          href={`mailto:${appointment.email}`}
                                          className="text-primary"
                                        >
                                          {appointment.email}
                                        </a>
                                      </td>
                                      <td>{appointment.timeSlot}</td>
                                      <td>
                                        <a href="">{appointment.videoLink}</a>
                                      </td>
                                      <td>
                                        <span className="btn btn-sm btn-outline-warning">
                                          Pending
                                        </span>
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-sm btn-outline-danger"
                                          style={{ cursor: "pointer" }}
                                        >
                                          Delete
                                        </button>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* End Recent Sales */}
                    {/* add recipie */}
                    <div className="col-12">
                      <div className="card recent-sales overflow-auto">
                        <div className="filter">
                          <a
                            className="icon"
                            href="#"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bi bi-three-dots" />
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                              <h6>Filter</h6>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Today
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                This Month
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                This Year
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body" id="add-recipie-section">
                          <a href="addrecipes" className="btn btn-primary my-2">
                            Add Recipie
                          </a>
                          <table className="table table-borderless datatable">
                            <thead>
                              <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Recipe Name</th>
                                <th scope="col">Ingredients</th>
                                <th scope="col">Type</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <>
                                {recipe.map((recipie) => {
                                  return (
                                    <tr>
                                      <th scope="row">
                                        <a href="">#{recipie.id}</a>
                                      </th>
                                      <td>{recipie.title}</td>
                                      <td>
                                        <a href="" className="text-primary">
                                          {recipie.ingredients.join(", ")}
                                        </a>
                                      </td>
                                      <td>
                                        <select>
                                          <option>Seelct Type</option>
                                          <option>veg</option>
                                          <option>non-veg</option>
                                        </select>
                                      </td>
                                      <td>
                                        <span className="btn btn-sm btn-outline-warning">
                                          Pending
                                        </span>
                                      </td>
                                      <td>
                                        <button
                                          className="btn btn-sm btn-outline-danger"
                                          style={{ cursor: "pointer" }}
                                        >
                                          Delete
                                        </button>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Left side columns */}
                <div id="delete-alert" className="custom-alert">
                  <div className="custom-alert-content">
                    Deleted successfully!
                  </div>
                </div>
                {/* Right side columns */}
                <div className="col-lg-4">
                  {/* Recent Activity */}
                  <div className="card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Recent Activity <span>| Today</span>
                      </h5>
                      <div className="activity">
                        {appointments.slice(0, 3).map((appointment) => {
                          return (
                            <div className="activity-item d-flex">
                              <div className="activite-label">Appointment </div>
                              <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                              <div className="activity-content px-3">
                                Added a new appointment for {appointment.name}{" "}
                                at {appointment.timeSlot.split(" - ")[0]}.
                              </div>
                            </div>
                          );
                        })}
                        {recipe.slice(0, 3).map((recipie) => {
                          return (
                            <div className="activity-item d-flex">
                              <div className="activite-label px-3">
                                Recipie{" "}
                              </div>
                              <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                              <div className="activity-content px-3">
                                Added a new recipie: {recipie.title}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* End Recent Activity */}
                  {/* Budget Report */}
                  <div className="card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Budget Report */}
                </div>
                {/* End Right side columns */}
              </div>
            </section>
          </main>
          {/* End #main */}
          {/* ======= Footer ======= */}

          <a
            href="#"
            className="back-to-top d-flex align-items-center justify-content-center"
          >
            <i className="bi bi-arrow-up-short" />
          </a>
          <a
            href="#"
            class="back-to-top d-flex align-items-center justify-content-center"
          >
            <i class="bi bi-arrow-up-short"></i>
          </a>
        </div>
        );
      </div>
      <Footer />
    </div>
  );
};

export default DieticianDashboard;
