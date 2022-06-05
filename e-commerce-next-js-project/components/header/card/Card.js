import classes from "./Card.module.css";
function Card(){
    return (
      <div class="head-text">
        <ul class="card">
          <li>
            <a href="wishlist.html">
              <i class="fa fa-heart" aria-hidden="true"></i>Wishlist
            </a>
          </li>
          <li>
            <a href="login.html">
              <i class="fa fa-user" aria-hidden="true"></i>Login
            </a>
          </li>
          <li>
            <a href="register.html">
              <i class="fa fa-arrow-right" aria-hidden="true"></i>Register
            </a>
          </li>
          <li>
            <a href="about.html">
              <i class="fa fa-file-text-o" aria-hidden="true"></i>Order History
            </a>
          </li>
          <li>
            <a href="shipping.html">
              <i class="fa fa-ship" aria-hidden="true"></i>Shipping
            </a>
          </li>
        </ul>
      </div>
    );
}
export default Card;