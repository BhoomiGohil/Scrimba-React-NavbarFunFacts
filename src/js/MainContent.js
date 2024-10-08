import Navbar from "./Navbar";

function MainContent() {
  return (
    <div className="container">
      {" "}
      {/* Wrapper container for the main content */}
      <Navbar /> {/* Rendering the Navbar component */}
      <div className="main">
        {" "}
        {/* Main content section */}
        <h1>Funfacts about React</h1> {/* Heading for the section */}
        <ul>
          {" "}
          {/* List of fun facts about React */}
          <li>
            <span></span>Was first released in 2013
          </li>
          <li>
            <span></span>Was originally created by Jordan Walke
          </li>
          <li>
            <span></span>Has well over 100K stars on GitHub
          </li>
          <li>
            <span></span>Is maintained by Facebook
          </li>
          <li>
            <span></span>Powers thousands of enterprise apps, including mobile
            apps
          </li>
        </ul>
        <img src="Images/project1-bg-img.png" alt="Background Image" />{" "}
        {/* Displaying an image */}
      </div>
    </div>
  );
}

export default MainContent; // Exporting MainContent component for use in other files
