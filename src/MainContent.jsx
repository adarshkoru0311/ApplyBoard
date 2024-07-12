import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import EduHistory from "./EduHistory";
import Header from "./Header";

const MainContent = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/profile":
        return "Student Profile";
      // Add other cases for different routes
      case "/education":
        return "Education";
      default:
        return "";
    }
  };

  return (
    <>
      <Header title={getTitle()} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/education" element={<EduHistory />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </>
  );
};

export default MainContent;
