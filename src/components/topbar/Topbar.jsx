import "./topbar.scss";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";

function Topbar({ setOpenMenu, openMenu }) {
  return (
    <div className={"topbar " + (openMenu && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Bakhtiyor Khasanov
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+998 99 000 00 00</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>exemple@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="humburger" onClick={() => setOpenMenu(!openMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
