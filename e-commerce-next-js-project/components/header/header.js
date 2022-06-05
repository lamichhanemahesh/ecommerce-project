import classes from "./header.module.css";
import Card from "./card/Card";
import Icon from "./icon/Icon";
import Logo from "./logo/Logo";
function Header(){
    return (
      <header id="Header" className="Header">
        <div className="container ">
          <div className={classes.HeaderContent}>
              <Logo />
              <Card />
              <Icon />
          </div>
        </div>
      </header>
    );
}
export default Header;