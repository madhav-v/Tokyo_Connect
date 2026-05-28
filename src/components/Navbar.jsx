import { Link, NavLink } from "react-router-dom";
import { MapPin, Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: "/events", label: "Events" },
    { path: "/bookings", label: "My Bookings" },
    { path: "/about-safety", label: "Safety" },
    { path: "/admin", label: "Admin Demo" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur border-b border-gray-100 sticky top-0 z-50">
      <div className="page-container py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-ink"
        >
          <span className="bg-tokyoRed text-white p-2 rounded-2xl">
            <MapPin size={20} />
          </span>
          Tokyo Connect
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-tokyoRed font-semibold"
                  : "text-gray-600 hover:text-tokyoRed font-medium"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-xl border"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-700 font-medium"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
