export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="sass.html" className="brand-logo center" >
          React Movie
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="sass.html">New Movies</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
