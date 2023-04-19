export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container">
          <a
            className="navbar-brand text-white d-flex align-items-center"
            href="#"
          >
            <img
              src="./images/Home/group-2911.svg"
              alt=""
              width="37"
              height="24"
              className=""
            />
            <div>ivoyant</div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav text-white m-auto">
              <li className="nav-item text-white">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Who We Are
                </a>
              </li>
              <li className="nav-item dropdown text-white">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  What we do
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="text-white">
                    <a className="dropdown-item text-white" href="#">
                      Action
                    </a>
                  </li>
                  <li className="text-white">
                    <a className="dropdown-item text-white" href="#">
                      Another action
                    </a>
                  </li>
                  <li className="text-white">
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item text-white">
                <a className="nav-link text-white" href="#">
                  How We do
                </a>
              </li>
              <li className="nav-item dropdown text-white">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="text-white">
                    <a className="dropdown-item text-white" href="#">
                      Action
                    </a>
                  </li>
                  <li className="text-white">
                    <a className="dropdown-item text-white" href="#">
                      Another action
                    </a>
                  </li>
                  <li className="text-white">
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item text-white">
                <a className="nav-link text-white" href="#">
                  Careers
                </a>
              </li>
              <li className="nav-item text-white">
                <a className="nav-link text-white" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <li className="nav-item text-white list-unstyled">
            <a className="nav-link text-white" href="#">
              Life at ivoyant
            </a>
          </li>
        </div>
      </nav>
    </div>
  );
}
