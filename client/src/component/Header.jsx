import React from "react"


const Header = () => {

  return(
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/experience">Experience</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/contactus">Contact Us</a></li>
    </ul>
  </div>
</div>
  )
 

}
export default Header