import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.png";

const Navbar = () => {
    return (
      <nav className="bg-[#101018]">
        <div className="container ml-8 flex items-start">
          {/* Logo and Link to Home */}
          <Link href="/" passHref>
              <Image
                src={logo} // Replace with your logo path
                alt="Logo"
                className="h-12 w-auto pb-3 ml-0"
              />
          </Link>
        </div>
      </nav>
    );
  };
  

export default Navbar;
