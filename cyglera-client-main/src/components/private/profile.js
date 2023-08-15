import React from "react";
import useRole from "../../hooks/useRole";
import { ADMIN, CLIENT, DIETICIAN } from "../../helpers/UserRoles";
import { useEffect, useState } from "react";
import { Alert } from "reactstrap";
import axios from "axios";
import useStateValues from "../../hooks/useStateValues";
import { Form } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";

function Profile() {
  const userRole = useRole();
  const { userData } = useStateValues();
  // console.log(userData);

  const [fetchInfo, setFetchInfo] = useState({
    userRole: userRole,
    email: userData.email,
  });

  const [userdetails, setUserDetails] = useState([]);
  const [formData, setFormData] = useState({ userRole: userRole });
  const [successMessage, setSuccessMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [slots, setSlots] = useState([
    "9 AM - 10 AM",
    "10 AM - 11 AM",
    "11 AM - 12 PM",
    "12 PM - 1 PM",
    "1 PM - 2 PM",
    "2 PM - 3 PM",
    "3 PM - 4 PM",
    "4 PM - 5 PM",
  ]);
  useEffect(() => {
    axios
      .post("http://3.133.175.117:8000/api/auth/fetchprofile", fetchInfo)
      .then((res) => {
        const { userFound, userInfo } = res.data;
        setUserDetails({ ...userFound, ...userInfo });
        setFormData({ ...userFound, ...userInfo });
      })
      .catch((err) => console.log(err));
  }, [editMode]);

  //setFormData({ ...formData, email: userData.email });
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    axios
      .post(`http://3.133.175.117:8000/api/auth/profile`, formData)
      .then((res) => {
        if (res.data === true) {
          setEditMode(false);
          setSuccessMessage("Profile Updated successfully!");
          setIsOpen(true);
        } else {
          setSuccessMessage(
            "Form Submission Failed: Invalid data entered. Please check the information you have entered and try again."
          );
          setIsOpen(true);
        }
        console.log(res.data);
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
  const [show, setShow] = useState(true);

  const handleSelect = (selectedList, selectedItem) => {
    const updatedFormData = { ...formData, availableSlots: selectedList };
    setFormData(updatedFormData);
  };

  const handleRemove = (selectedList, removedItem) => {
    const updatedFormData = { ...formData, availableSlots: selectedList };
    setFormData(updatedFormData);
  };

  return (
    <div className="container my-5">
      <div className="main-body p-5">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Client"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>{userdetails.firstName}</h4>
                    <p className="text-secondary mb-1">{userRole}</p>
                    {/* <p className="text-muted font-size-sm">
                      Delmonte Crescent, CA
                    </p> */}
                    {/* <button className="btn btn-primary">Follow</button>
                    <button className="btn btn-outline-primary">Message</button> */}
                  </div>
                </div>
              </div>
            </div>

            {!editMode ? (
              <>
                <div className="row mt-3">
                  <div className="col-sm-12 d-flex justify-content-center">
                    <a
                      className="btn btn-info"
                      target="__blank"
                      onClick={() => setEditMode(true)}
                    >
                      Edit Profile
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row mt-3">
                  <div className="col-sm-12 d-flex justify-content-center">
                    <a
                      className="btn btn-info"
                      target="__blank"
                      onClick={handleSubmit}
                    >
                      Update Profile
                    </a>
                  </div>
                </div>
              </>
            )}
            <div className="mt-3">
              {/* <Alert variant="danger" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} dismissible>
                      {successMessage}
                  </Alert> */}
              {/* <div class="alert alert-success alert-dismissible fade show" role="alert" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
                     {successMessage}
                  </div> */}
              <Alert
                variant="success"
                isOpen={isOpen}
                onClose={() => setShow(false)}
                dismissible
              >
                {successMessage}
              </Alert>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Title</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="title"
                      onChange={handleChange}
                      placeholder="Mr/Mrs"
                      defaultValue={userdetails.title}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary "
                      name="firstName"
                      onChange={handleChange}
                      placeholder="First Name"
                      defaultValue={userdetails.firstName}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Middle Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="middleName"
                      onChange={handleChange}
                      placeholder="Middle Name"
                      defaultValue={userdetails.middleName}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Last Names</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="lastName"
                      onChange={handleChange}
                      placeholder="Last Name"
                      defaultValue={userdetails.lastName}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Gender</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="gender"
                      onChange={handleChange}
                      placeholder="Gender"
                      defaultValue={userdetails.gender}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                {/* <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Date of Birth</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="date" className='form-control col-sm-9 text-secondary' name='dateofbirth' placeholder='Date of Birth'/>
                  </div>
                </div> */}
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Martial Status</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="martialStatus"
                      onChange={handleChange}
                      placeholder="Martial Status"
                      defaultValue={userdetails.martialStatus}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Family Physician</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="familyPhysician"
                      onChange={handleChange}
                      placeholder="Family Physician"
                      defaultValue={userdetails.familyPhysician}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="email"
                      className="form-control col-sm-9 text-secondary"
                      name="email"
                      onChange={handleChange}
                      placeholder="Email Address"
                      defaultValue={userdetails.email}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                {userRole !== CLIENT && (
                  <div>
                    <div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Area of Focus</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control col-sm-9 text-secondary"
                            name="areaOfFocus"
                            onChange={handleChange}
                            placeholder="Area of Focus"
                            defaultValue={userdetails.areaOfFocus}
                            disabled={!editMode}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Professional Summary</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control col-sm-9 text-secondary"
                            name="professionalSummary"
                            onChange={handleChange}
                            placeholder="professional summary"
                            defaultValue={userdetails.professionalSummary}
                            disabled={!editMode}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Professional Approach</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control col-sm-9 text-secondary"
                            name="professionalApproach"
                            onChange={handleChange}
                            placeholder="professional approach"
                            defaultValue={userdetails.professionalApproach}
                            disabled={!editMode}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Years Of Experience</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control col-sm-9 text-secondary"
                            name="yearsOfExperience"
                            onChange={handleChange}
                            placeholder="Years of Experience"
                            defaultValue={userdetails.yearsOfExperience}
                            disabled={!editMode}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Available Slots</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <div disabled={!editMode}>
                            <Multiselect
                              isObject={false}
                              options={slots}
                              showCheckbox
                              onSelect={handleSelect}
                              onRemove={handleRemove}
                              disable={!editMode}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <hr />
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters-sm">
          <div className="col-md-12">
            <div className="card mb-3">
              <div className="card-body">
                <h3>Primary Address</h3>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address Line 1</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="address"
                      onChange={handleChange}
                      placeholder="Address Line 1"
                      defaultValue={userdetails.address}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address Line 2</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="addressLine2"
                      onChange={handleChange}
                      placeholder="Address Line 2"
                      defaultValue={userdetails.addressLine2}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">City</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="city"
                      onChange={handleChange}
                      placeholder="City"
                      defaultValue={userdetails.city}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Province/State</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="province"
                      onChange={handleChange}
                      placeholder="Province/State"
                      defaultValue={userdetails.province}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Postal Code/Zip Code</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="postalCode"
                      onChange={handleChange}
                      placeholder="Postal Code/Zip Code"
                      defaultValue={userdetails.postalCode}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Country</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="country"
                      onChange={handleChange}
                      placeholder="Country"
                      defaultValue={userdetails.country}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="phone"
                      onChange={handleChange}
                      placeholder="Mobile"
                      defaultValue={userdetails.phone}
                      disabled={!editMode}
                    />
                  </div>
                </div>

                <hr />
                <h3>Billing Address</h3>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address Line 1</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="billingAddressLine1"
                      onChange={handleChange}
                      placeholder=""
                      defaultValue={userdetails.billingAddressLine1}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address Line 2</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="billingAddressLine2"
                      onChange={handleChange}
                      placeholder="Address Line 2"
                      defaultValue={userdetails.billingAddressLine2}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">City</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="billingCity"
                      onChange={handleChange}
                      placeholder="City"
                      defaultValue={userdetails.billingCity}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Province/State</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="billingProvince"
                      onChange={handleChange}
                      placeholder="Province/State"
                      defaultValue={userdetails.billingProvince}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Postal Code/Zip Code</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="billingPostalCode"
                      onChange={handleChange}
                      placeholder="Postal Code/Zip Code"
                      defaultValue={userdetails.billingPostalCode}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Country</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="billingCountry"
                      onChange={handleChange}
                      placeholder="Country"
                      defaultValue={userdetails.billingCountry}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="billingPhone"
                      onChange={handleChange}
                      placeholder="Mobile"
                      defaultValue={userdetails.billingPhone}
                      disabled={!editMode}
                    />
                  </div>
                </div>

                <hr />
                <h3>Shipping Address</h3>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address Line 1</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="shippingAddressLine1"
                      onChange={handleChange}
                      placeholder=""
                      defaultValue={userdetails.shippingAddressLine1}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address Line 2</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="shippingAddressLine2"
                      onChange={handleChange}
                      placeholder="Address Line 2"
                      defaultValue={userdetails.shippingAddressLine2}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">City</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="shippingCity"
                      onChange={handleChange}
                      placeholder="City"
                      defaultValue={userdetails.shippingCity}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Province/State</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="shippingProvince"
                      onChange={handleChange}
                      placeholder="Province/State"
                      defaultValue={userdetails.shippingProvince}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Postal Code/Zip Code</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="shippingPostalCode"
                      onChange={handleChange}
                      placeholder="Postal Code/Zip Code"
                      defaultValue={userdetails.shippingPostalCode}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Country</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="shippingCountry"
                      onChange={handleChange}
                      placeholder="Country"
                      defaultValue={userdetails.shippingCountry}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control col-sm-9 text-secondary"
                      name="shippingPhone"
                      onChange={handleChange}
                      placeholder="Mobile"
                      defaultValue={userdetails.shippingPhone}
                      disabled={!editMode}
                    />
                  </div>
                </div>

                <hr />
                {!editMode ? (
                  <>
                    <div className="row ">
                      <div className="col-sm-12 d-flex justify-content-center">
                        <a
                          className="btn btn-info"
                          target="__blank"
                          onClick={() => setEditMode(true)}
                        >
                          Edit Profile
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="row ">
                      <div className="col-sm-12 d-flex justify-content-center">
                        <a
                          className="btn btn-info"
                          target="__blank"
                          onClick={handleSubmit}
                        >
                          Update Profile
                        </a>
                      </div>
                    </div>
                  </>
                )}
                {/* <div className="row ">
                  <div className="col-sm-12 d-flex justify-content-center">
                    <a
                      className="btn btn-info"
                      target="__blank"
                      href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                      onClick={handleSubmit}
                    >
                      Update
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <Alert variant="danger" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} dismissible>
            {successMessage}
        </Alert>  */}
          {/* <div class="alert alert-success alert-dismissible fade show" role="alert" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        {successMessage}
        </div> */}
          <Alert
            variant="success"
            isOpen={isOpen}
            onClose={() => setShow(false)}
            dismissible
          >
            {successMessage}
          </Alert>
        </div>
      </div>
    </div>
  );
}

export default Profile;
