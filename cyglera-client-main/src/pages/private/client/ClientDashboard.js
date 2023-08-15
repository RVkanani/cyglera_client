import React, { useState } from "react";
import useActionDispatcher from "../../../hooks/useActionDispatcher";
import useStateValues from "../../../hooks/useStateValues";
import axios from "axios";

const ClientDashboard = () => {
  const { jwtToken } = useStateValues();
  const { userData } = useStateValues();

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
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Dashboard -SalusWell</title>
        <meta content name="description" />
        <meta content name="keywords" />

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
              <a className="nav-link collapsed" href="client-appointments">
                <i className="bi bi-calendar" />
                <span>View Appointments</span>
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
                  {/* Recent Sales */}
                  <div className="col-12">
                    <div className="card recent-sales overflow-auto">
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
                      <div id="add-appointment-section" className="card-body">
                        <a
                          href="client-appointments"
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
                  <div className="card-body">
                    <h5 className="card-title">
                      Recent Activity <span>| Today</span>
                    </h5>
                    <div className="activity">
                      {appointments.slice(0, 5).map((appointment) => {
                        return (
                          <div className="activity-item d-flex">
                            <div className="activite-label">Appointment </div>
                            <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                            <div className="activity-content px-3">
                              Added a new appointment for {appointment.name} at{" "}
                              {appointment.timeSlot.split(" - ")[0]}.
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* End Recent Activity */}
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
  );
};

export default ClientDashboard;
