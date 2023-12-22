
<template>
    <div>
      <nav className= "navbar navbar-expand-lg">
        <div className="container align-items-center">
          <Link className="navbar-brand" href="#">
            <Image src= images.logo alt= "logo" />
          </Link>
          <button
            className= "navbar-toggler d-flex d-lg-none  p-2"
            type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div
            className= "offcanvas-lg offcanvas-end d-lg-flex justify-content-between align-items-center p-4 p-lg-0 p-xxl-0 $ isOpen"
           tabIndex= -1 id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel" data-bs-scroll="true" >
             
              <button
                className="btn btn-close d-lg-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
              </button>
            <ul className="navbar-nav ">
              <li className="nav-item my-3 my-lg-0">
                <Link className="nav-link px-0" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-xxl-6 mx-lg-4 ">
                <Link
                  className="nav-link px-0"
                  href="/about"
                  role="button"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item my-3 my-lg-0">
                <Link
                  className="nav-link px-0"
                  aria-current="page"
                  href="/program"
                >
                  Programs
                </Link>
              </li>
              <li className="nav-item mx-xxl-6 mx-lg-4 ">
                <Link
                  className="nav-link px-0"
                  aria-current="page"
                  href="/activity"
                >
                  Activity
                </Link>
              </li>
              <li className="nav-item my-3 my-lg-0">
                <Link
                  className="nav-link"
                  aria-current="page"
                  href="/contact"
                >
                  Contact us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar-end ml-lg-14 ml-xxl-16">
            <li className="nav-item ">
                <Link className="nav-contact px-4" href="#">
                <i className="bi bi-telephone-fill"></i>+12 345 678
                </Link>
              </li>
              <li className="nav-item mx-lg-3 my-3 my-lg-0">
                <Link className="nav-sign px-lg-4" href="#">
                  Sign in
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-register  px-lg-5" href="#">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>