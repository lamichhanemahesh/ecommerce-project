import classes from "./Logo.module.css";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
function Logo(){
    return (
      <div className={classes.Logo}>
        <h1>
          <a href="#">
            <b>
              T<br></br>H<br></br>E
            </b>
            Ktm Store<span>The Best Supermarket</span>
          </a>
        </h1>
      </div>
    );
}
export default Logo;