function Footer() {
  return (
    <footer className="bg-gray-950 text-white mt-20">
      <div className="page-container py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-bold text-2xl mb-4">Tokyo Connect</h3>
          <p className="text-gray-400 leading-relaxed">
            A demo platform helping international students and foreign residents
            discover safe social events, trips, and cultural activities in
            Tokyo.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Demo Features</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Event discovery</li>
            <li>Demo checkout</li>
            <li>Local bookings</li>
            <li>Admin event management</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Project Note</h4>
          <p className="text-gray-400 leading-relaxed">
            Built for a university presentation. No real payment,
            authentication, or backend is connected.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="page-container py-5 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-500">
          <p>© 2026 Tokyo Connect. Demo project.</p>
          <p>React · Vite · Tailwind CSS · localStorage</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
