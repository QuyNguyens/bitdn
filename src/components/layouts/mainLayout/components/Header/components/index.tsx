'use client';

import HeaderBottom from "./HeaderBottom";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <TopHeader />
      <HeaderBottom />
    </div>
  );
};

export default Header;
