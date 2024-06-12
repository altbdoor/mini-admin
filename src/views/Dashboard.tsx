import { FC, MouseEvent, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Dashboard: FC = () => {
  const navigate = useNavigate();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const confirmLogout = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/login");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Mini admin
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbar-content"
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="#"
                  onClick={confirmLogout}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container pt-3 pb-5">
        <Outlet />
      </div>
    </>
  );
};
