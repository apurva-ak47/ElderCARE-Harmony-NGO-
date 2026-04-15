import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg font-black">E</span>
              </div>
              <span className="text-xl font-black text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
                Elder<span className="text-teal-400">Care</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Professional home healthcare services for your loved ones — delivered with compassion, dignity, and clinical expertise.
            </p>
            <div className="flex gap-3">
              {["f", "in", "tw", "yt"].map((icon) => (
                <div
                  key={icon}
                  className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-all duration-300 cursor-pointer text-xs font-bold"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3 text-sm">
              {["Doctor on Call", "Nursing Care", "Physiotherapy", "ICU at Home", "Post-Surgery Care", "Companion Care"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="hover:text-teal-400 transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Elder Care */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Elder Care</h4>
            <ul className="space-y-3 text-sm">
              {["Dementia Care", "Palliative Care", "Mobility Support", "Medication Management", "Health Monitoring", "Nutritional Support"].map((s) => (
                <li key={s}>
                  <Link to="/elder-care" className="hover:text-teal-400 transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-teal-400 mt-0.5">📍</span>
                <span>Mumbai, Delhi, Bangalore, Pune & 20+ cities across India</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-teal-400">📞</span>
                <a href="tel:+918001234567" className="hover:text-teal-400 transition-colors font-semibold">+91 800 123 4567</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-teal-400">✉️</span>
                <a href="mailto:care@eldercare.in" className="hover:text-teal-400 transition-colors">care@eldercare.in</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-400">🚨</span>
                <Link to="/emergency" className="text-red-400 font-bold hover:text-red-300 transition-colors">24/7 Emergency</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 ElderCare. All rights reserved. | NABH Accredited</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-teal-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
