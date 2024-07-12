import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import MainContent from "./MainContent"; // Import MainContent component
import "./App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <HelmetProvider>
      <Router>
        <div className={`app ${sidebarOpen ? "sidebar-open" : ""}`}>
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="content">
            <MainContent /> {/* Use MainContent to manage routes and header */}
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
