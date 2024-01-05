import "./Navbar.scss";
import { Sidebar } from "./Sidebar";
import GitHub from "../images/github.png";
import LinkedIn from "../images/linkedin.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span>Welcome</span>
        <div className="logo">
          <a href="https://github.com/Kshitij-git24" target="_blank">
            <img src={GitHub} alt="GitHub" />
          </a>
          <a
            href="https://linkedin.com/in/kshitij-kiran-chaudhari"
            target="_blank"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}
