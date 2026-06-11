import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Bookings",
    "Customers",
    "Offering",
    // "Value",
    // "Competencies",
    // "People",
    "Gallery",
  ];

  return (
    <header className="navbar">
      <a href="#" className="logo">
        <span>旅</span>
        TABI
      </a>

      <nav className="desktop-links">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>

      <button className="menu-button" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <nav className="mobile-links">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
