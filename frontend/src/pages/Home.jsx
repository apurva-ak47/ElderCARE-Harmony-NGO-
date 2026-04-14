import { Link } from "react-router-dom";

const stats = [
  { value: "50,000+", label: "Happy Patients" },
  { value: "1,200+", label: "Certified Caregivers" },
  { value: "25+", label: "Cities Covered" },
  { value: "4.9★", label: "Average Rating" },
];

const services = [
  {
    icon: "🩺",
    title: "Doctor on Call",
    desc: "Board-certified doctors available at your doorstep within 60 minutes, any time of day.",
    color: "from-blue-50 to-blue-100",
    accent: "bg-blue-600",
  },
  {
    icon: "💉",
    title: "Nursing Care",
    desc: "Trained RNs & ANMs for wound care, IV therapy, catheter management and more.",
    color: "from-teal-50 to-teal-100",
    accent: "bg-teal-600",
  },
  {
    icon: "🏃",
    title: "Physiotherapy",
    desc: "Post-surgery rehab, stroke recovery and mobility restoration at home.",
    color: "from-purple-50 to-purple-100",
    accent: "bg-purple-600",
  },
  {
    icon: "❤️",
    title: "Elder Companion",
    desc: "Compassionate caregivers providing emotional support and daily assistance for seniors.",
    color: "from-rose-50 to-rose-100",
    accent: "bg-rose-600",
  },
  {
    icon: "🏥",
    title: "ICU at Home",
    desc: "Critical care setup including ventilator support, cardiac monitoring in your home.",
    color: "from-amber-50 to-amber-100",
    accent: "bg-amber-600",
  },
  {
    icon: "💊",
    title: "Medication Management",
    desc: "Timely drug administration, prescription management and adherence monitoring.",
    color: "from-green-50 to-green-100",
    accent: "bg-green-600",
  },
];

const howItWorks = [
  { step: "01", title: "Book Online or Call", desc: "Share your care needs via our app, website, or call our 24/7 helpline." },
  { step: "02", title: "Get Matched", desc: "We match you with a verified, trained caregiver best suited to your needs." },
  { step: "03", title: "Receive Care", desc: "Your caregiver arrives on time. Care is delivered with warmth and expertise." },
  { step: "04", title: "Track & Monitor", desc: "Real-time updates, reports, and follow-ups to keep family informed." },
];

const testimonials = [
  {
    name: "Ramesh Sharma",
    city: "Mumbai",
    text: "After my father's stroke, ElderCare's physiotherapist visited daily. His recovery has been miraculous. The caregiver genuinely cares.",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Priya Menon",
    city: "Bangalore",
    text: "Managing my mother's dementia from another city was stressful. The companion caregiver gives us all peace of mind every single day.",
    rating: 5,
    avatar: "PM",
  },
  {
    name: "Arjun Kapoor",
    city: "Delhi",
    text: "Post-surgery nursing care was impeccable. The nurse was professional, gentle, and kept us updated via the app. Highly recommend.",
    rating: 5,
    avatar: "AK",
  },
];

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-teal-600/50 border border-teal-500/30 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                NABH Accredited Home Healthcare
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
                Compassionate Care<br />
                <span className="text-teal-300">For Your Loved Ones</span>
              </h1>
              <p className="text-teal-100 text-lg leading-relaxed mb-8 max-w-lg">
                Professional nurses, doctors, physiotherapists & caregivers — available 24/7 at your doorstep across India.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-teal-700 px-8 py-4 rounded-2xl font-bold hover:bg-teal-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300"
                >
                  Book a Caregiver →
                </Link>
                <Link
                  to="/emergency"
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl hover:-translate-y-1 duration-300"
                >
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Emergency Help
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-10">
                {["✓ No Registration Fee", "✓ Verified Caregivers", "✓ 60-Min Arrival"].map((f) => (
                  <span key={f} className="text-teal-200 text-sm font-medium">{f}</span>
                ))}
              </div>
            </div>
            {/* Hero Card */}
            <div className="hidden lg:flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 w-full max-w-md">
                <h3 className="text-lg font-bold mb-6 text-center">Quick Book</h3>
                <div className="space-y-4">
                  {["Select Service", "Your City", "Preferred Date"].map((placeholder) => (
                    <div
                      key={placeholder}
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-teal-200 text-sm"
                    >
                      {placeholder}
                    </div>
                  ))}
                  <Link
                    to="/contact"
                    className="block w-full bg-teal-500 hover:bg-teal-400 text-white text-center py-4 rounded-xl font-bold transition-all"
                  >
                    Find a Caregiver
                  </Link>
                </div>
                <p className="text-center text-xs text-teal-300 mt-4">Or call us: <strong>+91 800 123 4567</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-teal-700" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">What We Offer</span>
            <h2 className="text-4xl font-black mt-3 text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
              Our Healthcare Services
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              From routine nursing to critical home ICU — we bring hospital-grade care to your home.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className={`bg-gradient-to-br ${svc.color} rounded-3xl p-7 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl cursor-pointer group`}
              >
                <div className={`w-14 h-14 ${svc.accent} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{svc.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-teal-700 text-sm font-semibold mt-4 hover:gap-2 transition-all">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-block bg-teal-700 text-white px-10 py-4 rounded-2xl font-bold hover:bg-teal-800 transition-all shadow-lg hover:shadow-teal-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Simple Process</span>
            <h2 className="text-4xl font-black mt-3 text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
              How It Works
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <div key={step.step} className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-teal-200 transition-all duration-300 group-hover:-translate-y-1">
                    <span className="text-white text-2xl font-black" style={{ fontFamily: "'Sora', sans-serif" }}>{step.step}</span>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-teal-200" style={{ width: "calc(100% + 2rem)" }} />
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-teal-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-300 font-bold text-sm uppercase tracking-widest">What Families Say</span>
            <h2 className="text-4xl font-black mt-3" style={{ fontFamily: "'Sora', sans-serif" }}>
              Trusted by Thousands
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-200 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-teal-300 text-xs">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
            Ready to Book a Caregiver?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Get professional home healthcare in 60 minutes. Available 24/7 across 25+ cities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:shadow-teal-100 transition-all hover:-translate-y-0.5">
              Book Now — It's Free
            </Link>
            <a href="tel:+918001234567" className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-10 py-4 rounded-2xl font-bold transition-all hover:-translate-y-0.5">
              📞 Call +91 800 123 4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
