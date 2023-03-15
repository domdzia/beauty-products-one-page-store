import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <div className={classes.header}>
      <p>BeautyStore</p>
      <HeaderCartButton />
    </div>
  );
};

export default Header;
