import "../App.css";

const NavBar = () => {
    return <nav>
    <div className="logo">
      <img src="/public/images/logo.png" alt="logo"></img>
    </div>
    <ul>
      <li href="#">Menu</li>
      <li href="#">Location</li>
      <li href="#">About</li>
      <li href="#">Contact</li>
    </ul>

    <button>Log In</button>
  </nav>
}

export default NavBar;