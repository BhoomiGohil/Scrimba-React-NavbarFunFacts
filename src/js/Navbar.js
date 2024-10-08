function Navbar() {
  return (
    <nav>
      {" "}
      {/* Navigation bar for the application */}
      <div>
        {" "}
        {/* Container for the logo and title */}
        <img src="Icons/react-icon.png" alt="React Logo" />{" "}
        {/* React logo image */}
        <h3>ReactFacts</h3> {/* Title of the application */}
      </div>
      <h4>React Course - Project 1</h4> {/* Subtitle for the project */}
    </nav>
  );
}

export default Navbar; // Exporting Navbar component for use in other files
