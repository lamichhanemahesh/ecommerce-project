import classes from './Icon.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter,faYoutube,faInstagram} from "@fortawesome/free-brands-svg-icons";

function Icon(){
    return (
      <div className="social-icons" id="social-icons">
        <ul className={classes.Social}>
          <li>
            <a href="#" className={classes.Icon + " " + classes.facebook}>
              <FontAwesomeIcon
                icon={faFacebook}
                className={classes.MyIcons1}
              />
              <span></span>
            </a>
          </li>
          <li>
            <a href="#" className={classes.Icon + " " + classes.twitter}>
              <FontAwesomeIcon
                icon={faTwitter}
                className={classes.MyIcons2}
              />
              <span></span>
            </a>
          </li>
          <li>
            <a href="#" className={classes.Icon + " " + classes.youtube}>
              <FontAwesomeIcon
                icon={faYoutube}
                className={classes.MyIcons3}
              />
              <span></span>
            </a>
          </li>
          <li>
            <a href="#" className={classes.Icon + " " + classes.instagram}>
              <FontAwesomeIcon
                icon={faInstagram}
                className={classes.MyIcons4}
              />
              <span></span>
            </a>
          </li>
        </ul>
      </div>
    );
}
export default Icon;