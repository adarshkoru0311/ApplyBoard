import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./EduHistory.css";
import {
  Accordion,
  FloatingLabel,
  Form,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const EduHistory = () => {
  const [formData, setFormData] = useState({
    country_of_education: "",
    highest_level_of_education: "",
    grading_scheme: "",
    grade_average: "",
    country_of_institute: "",
    name_of_institute: "",
    level_of_education: "",
    primary_language_of_institute: "",
    attended_from: "",
    attended_to: "",
    degree_name: "",
    graduated: false,
    graduation_date: "",
    physical_certificate: false,
    address: "",
    city: "",
    province: "",
    postal_code: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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

  const educationLevels = [
    "High School",
    "Associate Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctorate",
  ];

  const gradingSchemes = [
    "Letter grade: F to AA/A+",
    "Letter grade: F to O",
    "Letter Grade: Division/Class",
    "Higher education percentage scale 0-100",
    "Higher education grade point 10 scale",
    "Higher education (degree) division scale",
    "Higher education (bachelor and above) grade point 10 scale",
    "Higher education (bachelor and above) percentage scale 0-100",
    "Other",
  ];

  const gradeAverages = {
    "Letter grade: F to AA/A+": ["F", "E", "D", "C", "B", "A", "A+"],
    "Letter grade: F to O": ["F", "E", "D", "C", "B", "A", "O"],
    "Letter Grade: Division/Class": [
      "Third Class",
      "Second Class",
      "First Class",
    ],
    "Higher education percentage scale 0-100": [
      "0-39%",
      "40-49%",
      "50-59%",
      "60-69%",
      "70-79%",
      "80-89%",
      "90-100%",
    ],
    "Higher education grade point 10 scale": [
      "0-3.9",
      "4.0-4.9",
      "5.0-5.9",
      "6.0-6.9",
      "7.0-7.9",
      "8.0-8.9",
      "9.0-10.0",
    ],
    "Higher education (degree) division scale": [
      "Third Class",
      "Second Class",
      "First Class",
    ],
    "Higher education (bachelor and above) grade point 10 scale": [
      "0-3.9",
      "4.0-4.9",
      "5.0-5.9",
      "6.0-6.9",
      "7.0-7.9",
      "8.0-8.9",
      "9.0-10.0",
    ],
    "Higher education (bachelor and above) percentage scale 0-100": [
      "0-39%",
      "40-49%",
      "50-59%",
      "60-69%",
      "70-79%",
      "80-89%",
      "90-100%",
    ],
    Other: [],
  };

  const degreeNames = [
    "Associate Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctorate",
  ];

  return (
    <div className="education-container">
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
                {/* Education Summary Section */}
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Education Summary</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="country_of_education"
                          label="Country of Education"
                          className="mb-3"
                        >
                          <Form.Select
                            name="country_of_education"
                            value={formData.country_of_education}
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
                          controlId="highest_level_of_education"
                          label="Highest Level of Education"
                          className="mb-3"
                        >
                          <Form.Select
                            name="highest_level_of_education"
                            value={formData.highest_level_of_education}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select</option>
                            {educationLevels.map((level, index) => (
                              <option key={index} value={level}>
                                {level}
                              </option>
                            ))}
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="grading_scheme"
                          label="Grading Scheme"
                          className="mb-3"
                        >
                          <Form.Select
                            name="grading_scheme"
                            value={formData.grading_scheme}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select</option>
                            {gradingSchemes.map((scheme, index) => (
                              <option key={index} value={scheme}>
                                {scheme}
                              </option>
                            ))}
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="grade_average"
                          label="Grade Average"
                          className="mb-3"
                        >
                          <Form.Select
                            name="grade_average"
                            value={formData.grade_average}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select</option>
                            {gradeAverages[formData.grading_scheme]?.map(
                              (grade, index) => (
                                <option key={index} value={grade}>
                                  {grade}
                                </option>
                              )
                            )}
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Schools Attended Section */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Schools Attended</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="country_of_institute"
                          label="Country of Institute"
                          className="mb-3"
                        >
                          <Form.Select
                            name="country_of_institute"
                            value={formData.country_of_institute}
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
                          controlId="name_of_institute"
                          label="Name of Institute"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="name_of_institute"
                            value={formData.name_of_institute}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="level_of_education"
                          label="Level of Education"
                          className="mb-3"
                        >
                          <Form.Select
                            name="level_of_education"
                            value={formData.level_of_education}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select</option>
                            {educationLevels.map((level, index) => (
                              <option key={index} value={level}>
                                {level}
                              </option>
                            ))}
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="primary_language_of_institute"
                          label="Primary Language of Institute"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="primary_language_of_institute"
                            value={formData.primary_language_of_institute}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="attended_from"
                          label="Attended Institute From"
                          className="mb-3"
                        >
                          <Form.Control
                            type="date"
                            name="attended_from"
                            value={formData.attended_from}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="attended_to"
                          label="Attended Institute To"
                          className="mb-3"
                        >
                          <Form.Control
                            type="date"
                            name="attended_to"
                            value={formData.attended_to}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="degree_name"
                          label="Degree Name"
                          className="mb-3"
                        >
                          <Form.Select
                            name="degree_name"
                            value={formData.degree_name}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select</option>
                            {degreeNames.map((degree, index) => (
                              <option key={index} value={degree}>
                                {degree}
                              </option>
                            ))}
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col md={12}>
                        <Form.Check
                          type="checkbox"
                          id="graduated"
                          label="I have graduated from this institute"
                          name="graduated"
                          checked={formData.graduated}
                          onChange={handleChange}
                          className="mt-3"
                        />
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="graduation_date"
                          label="Graduation Date"
                          className="mb-3"
                        >
                          <Form.Control
                            type="date"
                            name="graduation_date"
                            value={formData.graduation_date}
                            onChange={handleChange}
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <Form.Check
                          type="checkbox"
                          id="physical_certificate"
                          label="I have the physical certificate for this degree"
                          name="physical_certificate"
                          checked={formData.physical_certificate}
                          onChange={handleChange}
                          className="mt-3"
                        />
                      </Col>
                    </Row>
                    <hr />
                    <h5>School Address</h5>
                    <Row>
                      <Col md={6}>
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
                          controlId="province"
                          label="Province/State"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="postal_code"
                          label="Postal/ZIP Code"
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
                      <Col md={12}>
                        <Button variant="danger" className="mb-3">
                          Delete
                        </Button>
                      </Col>
                    </Row>
                    <Button variant="primary" className="mb-3">
                      Add Another School
                    </Button>
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

export default EduHistory;
