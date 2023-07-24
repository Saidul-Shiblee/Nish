
import SideBar from "../sidebar/SideBar";

const Layout = ({ children,toggle, isOpen }) => {
  return (
    <>
      <SideBar toggle={toggle} isOpen={isOpen} />
      {children}
    </>
  );
};

export default Layout;
