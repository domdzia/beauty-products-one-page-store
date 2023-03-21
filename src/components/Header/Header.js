import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <p>BeautyStore</p>
      <HeaderCartButton onClick={props.onClick} />
    </div>
  );
};

export default Header;
