import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const eachLink=links.map((link)=>{
  return <a href="#" key={index}> {link}</a>
})
  return <nav>{eachLink}</nav>;
}

export default NavBar;
