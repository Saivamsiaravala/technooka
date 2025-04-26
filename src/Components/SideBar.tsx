import dashboard from "./../assets/dashboard.png";
import bos from "./../assets/bos.png";
import program from "./../assets/program.png";
import fee from "./../assets/fee.png";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, name: "Dashboard", path: "dashboard", image: dashboard },
  { id: 2, name: "BOS", path: "bos", image: bos },
  { id: 3, name: "Program", path: "program", image: program },

  { id: 4, name: "Fees Creation", path: "", image: fee },
];

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="links">
        {links.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.id}
              className={({ isActive }) => (isActive ? "active link" : "link")}
            >
              <img src={link.image} alt="" />
              <div>{link.name}</div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
