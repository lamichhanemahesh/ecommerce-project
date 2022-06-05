import classes from './Icon.module.css';
function Icon(){
    return (
      <div class="header-ri">
        <ul class="social-top">
          <li>
            <a href="#" class="icon facebook">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#" class="icon twitter">
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#" class="icon pinterest">
              <i class="fa fa-pinterest-p" aria-hidden="true"></i>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#" class="icon dribbble">
              <i class="fa fa-dribbble" aria-hidden="true"></i>
              <span></span>
            </a>
          </li>
        </ul>
      </div>
    );
}
export default Icon;