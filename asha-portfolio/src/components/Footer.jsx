import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4  bg-white dark:bg-gray-900">
      <aside>
        <p className="text-gray-700 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} —  Created by Asha. All rights reserved.
        </p>
      </aside>
    </footer>

  );
};

export default Footer;
