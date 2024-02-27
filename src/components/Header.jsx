import { useState } from "react";

import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-header">
      <nav>
          <a href="#presentation" className="logo">
            <h1>Portafolio</h1>
          </a>
          <ul>
            <li>
              <a
                href="https://github.com/suavev9"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Github <img src="./github-color-svgrepo-com.svg" alt="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/axel-ivan-mejia-gonzalez-3bb18423b/"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <img src="./linkedin-svgrepo-com.svg" alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="mailto:" className="link">
                Contáctame <img src="./ms-outlook-svgrepo-com.svg" alt="outlook" />
              </a>
            </li>
          </ul>

        <button
          className="menu-icon"
          aria-label="mobile-menu"
          onClick={toggleMenu}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M13 18H20"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
        {isOpen && (
          <ul className="menu-list">
            <li>
              <a
                href="https://github.com/suavev9"
                className="link-mobile"
                target="_blank"
                rel="noreferrer"
              >
                Github <img src="./github-color-svgrepo-com.svg" alt="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/axel-ivan-mejia-gonzalez-3bb18423b/"
                className="link-mobile"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <img src="./linkedin-svgrepo-com.svg" alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="mailto:" className="link-mobile">
                Contáctame <img src="./ms-outlook-svgrepo-com.svg" alt="outlook" />
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
