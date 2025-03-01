import { useState } from "react";
import Logo from "./logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5 z-20">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
