import { ReactNode } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

type Props = {
  children: ReactNode;
};
const Layout = (props: Props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
