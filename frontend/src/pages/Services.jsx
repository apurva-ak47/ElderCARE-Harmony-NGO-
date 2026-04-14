import { Link } from "react-router-dom";

const serviceCategories = [
  {
    category: "Medical Services",
    icon: "🩺",
    services: [
      {
        title: "Doctor on Call",
        desc: "Board-certified physicians available at your doorstep within 60 minutes for general consultations, acute illness, chronic disease management.",
        features: ["General Physician", "Paediatrician", "Geriatrician", "Specialist Referral"],
        price: "₹699 / visit",
        badge: "Most Booked",
        badgeColor: "bg-blue-100 text-blue-700",
      },
      {
        title: "Nursing Care",
        desc: "Qualified RNs & ANMs for medical procedures, wound care, IV administration, and post-operative monitoring.",
        features: ["Wound Dressing", "IV Therapy", "Catheter Care", "Injections"],
        price: "₹499 / visit",
        badge: "Available 24/7",
        badgeColor: "bg-teal-100 text-teal-700",
      },
      {
        title: "ICU at Home",
        desc: "Critical care at home with ventilator support, cardiac monitoring, and intensive nursing — for patients who prefer home over hospital.",
        features: ["Ventilator Setup", "Cardiac Monitor", "ICU Nurse", "Doctor Oversight"],
        price: "₹4,999 / day",
        badge: "Premium",
        badgeColor: "bg-purple-100 text-purple-700",
      },
    ],
  },
  {
    category: "Rehab & Therapy",
    icon: "🏃",
    services: [
      {
        title: "Physiotherapy",
        desc: "Post-surgery rehab, orthopaedic & neuro physiotherapy to restore movement and independence.",
        features: ["Post-Surgery Rehab", "Stroke Recovery", "Joint Mobility", "Pain Management"],
        price: "₹799 / session",
        badge: "Top Rated",
        badgeColor: "bg-green-100 text-green-700",
      },
      {
        title: "Speech Therapy",
        desc: "Expert speech-language pathologists helping patients recover communication abilities after stroke or surgery.",
        features: ["Aphasia Therapy", "Swallowing Rehab", "Voice Disorders", "Cognitive Comm."],
        price: "₹999 / session",
        badge: "Specialist",
        badgeColor: "bg-amber-100 text-amber-700",
      },
      {
        title: "Occupational Therapy",
        desc: "Helping patients regain daily life skills and independence through structured occupational rehabilitation.",
        features: ["ADL Training", "Cognitive Rehab", "Home Adaptation", "Fine Motor Skills"],
        price: "₹899 / session",
        badge: "Recommended",
        badgeColor: "bg-rose-100 text-rose-700",
      },
    ],
  },
  {
    category: "Support & Diagnostics",
    icon: "💊",
    services: [
      {
        title: "Lab at Home",
        desc: "Certified phlebotomists collect blood, urine, and other samples at home with reports delivered digitally.",
        features: ["Blood Tests", "Urine Analysis", "ECG", "Digital Reports"],
        price: "₹199 / test",
        badge: "Convenient",
        badgeColor: "bg-teal-100 text-teal-700",
      },
      {
        title: "Medication Management",
        desc: "Scheduled drug administration, prescription review and adherence monitoring by trained nurses.",
        features: ["Timed Dispensing", "Drug Interactions", "Refill Reminders", "Family Reports"],
        price: "₹299 / day",
        badge: "Essential",
        badgeColor: "bg-blue-100 text-blue-700",
      },
      {
        title: "Medical Equipment Rental",
        desc: "Rent hospital-grade equipment — wheelchairs, oxygen concentrators, hospital beds, and more.",
        features: ["Wheelchair", "Oxygen Concentrator", "Hospital Bed", "Nebuliser"],
        price: "₹250 / day",
        badge: "Flexible",
        badgeColor: "bg-slate-100 text-slate-700",
      },
    ],
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-teal-300 font-bold text-sm uppercase tracking-widest">Our Offerings</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
            Comprehensive Home Healthcare
          </h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            From basic nursing to critical care, we bring hospital-grade services to the comfort of your home.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {serviceCategories.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-3xl">{cat.icon}</span>
                <h2 className="text-2xl font-black text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {cat.category}
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {cat.services.map((svc) => (
                  <div key={svc.title} className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-slate-100 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-slate-800">{svc.title}</h3>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${svc.badgeColor}`}>{svc.badge}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{svc.desc}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-4 h-4 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 text-xs">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                      <span className="text-teal-700 font-black text-base">{svc.price}</span>
                      <Link to="/contact" className="bg-teal-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-teal-700 transition-all">
                        Book Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-teal-700 text-white text-center">
        <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Not sure which service you need?</h2>
        <p className="text-teal-100 mb-8 text-lg">Our care coordinators will assess and suggest the right plan for your loved one.</p>
        <Link to="/contact" className="bg-white text-teal-700 px-10 py-4 rounded-2xl font-bold hover:bg-teal-50 transition-all shadow-xl">
          Talk to a Care Coordinator
        </Link>
      </section>
    </div>
  );
};

export default Services;
