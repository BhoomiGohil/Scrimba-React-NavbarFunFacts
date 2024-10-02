import Navbar from "./Navbar";

function MainContent() {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <h1>Funfacts about React</h1>
        <ul>
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
        <img src="Images/project1-bg-img.png"></img>
      </div>
    </div>
  );
}

export default MainContent;
