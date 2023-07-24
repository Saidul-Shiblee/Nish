import React from "react";
import { NavItem, Nav } from "reactstrap";
import classNames from "classnames";
import Link from "next/link";
import { GalleryIcon } from "./Icon/GalleryIcon";
import { VideoIcon } from "./Icon/VideoIcon";
import { BlogIcon } from "./Icon/BlogIcon";
import { useAuth } from "../../../../context/authcontext";
import { useRouter } from "next/router";
import { LogoutIcon } from "./Icon/LogoutIcon";

const SideBar = (props) => {

   const { signout } = useAuth();

  const router = useRouter();
   const handleSignOut=()=>{
    signout()
    router.push({ pathname: "/admin/dashboard/signin" })
   }
  return (
    <div className={classNames("sidebar", { "is-open": props.isOpen })}>
      <div className="sidebar-header">
        <a color="info" onClick={props.toggle} style={{ color: "#fff" }}>
          &times;
        </a>
        <h3>Nish </h3>
      </div>
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          {/* <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> */}
          <Link className="my_nav" href={`/admin/dashboard/addGallery`}>
            <GalleryIcon />
            Add Gallery
          </Link>
        </NavItem>
        <NavItem>
          {/* <FontAwesomeIcon icon={faQuestion} className="mr-2" /> */}
          <Link className="my_nav" href={`/admin/dashboard/addVideo`}>
            <VideoIcon />
            Add Video
          </Link>
        </NavItem>
        <NavItem>
          {/* <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> */}
          <Link className="my_nav" href={`/admin/dashboard/addBlog`}>
            <BlogIcon />
            Add Blog
          </Link>
        </NavItem>
        <NavItem
          onClick={handleSignOut}
        >
          {/* <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> */}
          <p className="my_nav" style={{cursor:"pointer"}} >
            <span style={{marginLeft:"10px"}}></span>
            <LogoutIcon/>
            Logout
          </p>
        </NavItem>
      </Nav>
    </div>
  );
};

export default SideBar;
