import React from "react";
import "./footer.css";
export default () => {
  return (
    <div>
    <footer className="text-black mt-8 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Course Select
    </footer>
  </div>
  );
};
