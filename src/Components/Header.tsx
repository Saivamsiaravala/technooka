import { IoMdSearch } from "react-icons/io";
import { BiQuestionMark } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import adminImage from "./../assets/adminImage.jpg";

const Header = () => {
  return (
    <div className="header">
      <button className="menu-btn">
        <div className="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className="input-div">
        <div className="icon-div">
          <IoMdSearch className="icon" />
        </div>
        <input type="text" placeholder="Search..." className="input" />
      </div>
      <button className="help-div">
        <div className="help">
          <BiQuestionMark className="icon" style={{ color: "white" }} />
        </div>
      </button>
      <div className="notifications-div">
        <div className="notifications">
          <IoMdNotifications className="icon"></IoMdNotifications>
          <div className="dot"></div>
        </div>
      </div>
      <div className="account-div">
        <div className="image">
          <img src={adminImage} alt="" />
        </div>
        <div className="name-div">
          <div className="name">Aarohi Shah</div>
          <div className="role">Admin</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
