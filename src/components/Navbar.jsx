import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Trips", href: "#bookings" },
    { label: "Offering", href: "#offering" },
    { label: "Value", href: "#value" },
    // { label: "Skills", href: "#competencies" },
    // { label: "Team", href: "#people" },
    { label: "Destinations", href: "#destinations" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <header className="navbar">
      <a href="#" className="logo">
        <span>旅</span>
        TABI
      </a>

      <nav className="desktop-links">
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#matcher" className="nav-cta">
        Find My Trip
      </a>

      <button className="menu-button" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <nav className="mobile-links">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}

          <a
            href="#matcher"
            className="mobile-cta"
            onClick={() => setOpen(false)}
          >
            Find My Trip
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
