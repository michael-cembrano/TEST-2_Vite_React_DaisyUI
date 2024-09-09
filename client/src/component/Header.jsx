import React from 'react'

const Header = () => {

  return(
  <div className="navbar bg-base-100">
  <div className="flex-1 navbar-start">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-end">
    <ul className="menu menu-horizontal px-1">
      <ul className="menu bg-base-200 rounded-box w-56"> 
      <li>
    <details>
      <summary>Menu</summary>
      <ul>
        <li><a>About</a></li>
        <li><a>My Projects</a></li>
        <li><a>Experience</a></li>
      </ul>
    </details>
  </li>
      </ul>
    </ul>
  </div>
</div>
  )
    

}
export default Header