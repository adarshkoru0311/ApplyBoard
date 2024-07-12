import { Helmet } from "react-helmet-async";
import "./Profile.css"; // Import the CSS file
import { useState } from "react";
import {
  Accordion,
  FloatingLabel,
  Form,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    date_of_birth: "",
    first_language: "",
    country_of_citizenship: "",
    passport_number: "",
    passport_expiry_date: "",
    marital_status: "",
    gender: "",
    address: "",
    city: "",
    country: "",
    state: "",
    postal_code: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  return (
    <div className="profile-container">
      <Helmet>
        <title>Student Profile</title>
      </Helmet>
      <div className="Heading">
        <h1>My Profile</h1>
      </div>
      <div className="outerbox">
        <div className="leftbox">
          <ul className="customlist">
            <Link to="/profile">
              <li>General Information</li>
            </Link>
            <Link to="/education">
              <li>Education History</li>
            </Link>
            <Link to="/testscores">
              <li>Test Scores</li>
            </Link>
            <Link to="/visa">
              <li>Visa & Study Permit</li>
            </Link>
          </ul>
        </div>
        <div className="rightbox">
          <Container className="mt-5">
            <Form onSubmit={handleSubmit}>
              <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
                {/* Personal Information Section */}
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Personal Information</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="first_name"
                          label="First Name"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="middle_name"
                          label="Middle Name"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="middle_name"
                            value={formData.middle_name}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="last_name"
                          label="Last Name"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="date_of_birth"
                          label="Date of Birth"
                          className="mb-3"
                        >
                          <Form.Control
                            type="date"
                            name="date_of_birth"
                            value={formData.date_of_birth}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="first_language"
                          label="First Language"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="first_language"
                            value={formData.first_language}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="country_of_citizenship"
                          label="Country of Citizenship"
                          className="mb-3"
                        >
                          <Form.Select
                            name="country_of_citizenship"
                            value={formData.country_of_citizenship}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select</option>
                            {countries.map((country, index) => (
                              <option key={index} value={country}>
                                {country}
                              </option>
                            ))}
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="passport_number"
                          label="Passport Number"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="passport_number"
                            value={formData.passport_number}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="passport_expiry_date"
                          label="Passport Expiry Date"
                          className="mb-3"
                        >
                          <Form.Control
                            type="date"
                            name="passport_expiry_date"
                            value={formData.passport_expiry_date}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="marital_status"
                          label="Marital Status"
                          className="mb-3"
                        >
                          <Form.Select
                            name="marital_status"
                            value={formData.marital_status}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="gender"
                          label="Gender"
                          className="mb-3"
                        >
                          <Form.Select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Address Detail Section */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Address Detail</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={12}>
                        <FloatingLabel
                          controlId="address"
                          label="Address"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="city"
                          label="City/Town"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="country"
                          label="Country"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="state"
                          label="Province/State"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="postal_code"
                          label="Postal/Zip Code"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="postal_code"
                            value={formData.postal_code}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Button type="submit" className="btn btn-primary mt-4">
                Save & Continue
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Profile;
