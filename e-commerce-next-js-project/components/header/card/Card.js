import classes from "./Card.module.css";
import { faHeart, faUser,faArrowRight,faFileText,faShip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Card(){
    return (
      <div className={classes.HeadText}>
        <ul className={classes.Card}>
          <li>
            <a href="wishlist.html">
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "#FAB005", marginRight: "5px" }}
              />
              Wishlist
            </a>
          </li>
          <li>
            <a href="login.html">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#FAB005", marginRight: "5px" }}
              />
              Login
            </a>
          </li>
          <li>
            <a href="register.html">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#FAB005", marginRight: "5px" }}
              />
              Register
            </a>
          </li>
          <li>
            <a href="about.html">
              <FontAwesomeIcon
                icon={faFileText}
                style={{ color: "#FAB005", marginRight: "5px" }}
              />
              Order History
            </a>
          </li>
          <li>
            <a href="shipping.html">
              <FontAwesomeIcon
                icon={faShip}
                style={{ color: "#FAB005", marginRight: "5px" }}
              />
              Shipping
            </a>
          </li>
        </ul>
      </div>
    );
}
export default Card;