import Logo from "../Logo";
import Menu from "../Menu";
import css from "./style.module.css";
const Toolbar = () => (
  <header className={css.Toolbar}>
    <div>...</div>
    <Logo />
    <nav>
      <Menu />
    </nav>
  </header>
);

export default Toolbar;
