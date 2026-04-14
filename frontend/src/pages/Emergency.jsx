import { Link } from "react-router-dom";

const emergencyServices = [
  {
    icon: "🚑",
    title: "Ambulance on Call",
    desc: "BLS & ALS equipped ambulances dispatched within 15 minutes in metro cities.",
    number: "1800-XXX-XXXX",
    color: "from-red-500 to-red-700",
  },
  {
    icon: "🩺",
    title: "Doctor at Home",
    desc: "Emergency physician at your doorstep within 60 minutes — no waiting at hospital.",
    number: "+91 800 123 4567",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: "💉",
    title: "Emergency Nurse",
    desc: "Trained emergency nurses for acute care, wound management, and stabilization.",
    number: "+91 800 123 4567",
    color: "from-teal-500 to-teal-700",
  },
  {
    icon: "🏥",
    title: "Hospital Admission Help",
    desc: "We coordinate priority hospital admission, bed availability, and patient transfer.",
    number: "+91 800 123 4567",
    color: "from-purple-500 to-purple-700",
  },
];

const firstAidTips = [
  { condition: "Cardiac Arrest", steps: ["Call 108 immediately", "Start CPR — 30 chest compressions", "Give 2 rescue breaths", "Continue until help arrives"] },
  { condition: "Stroke", steps: ["FAST: Face drooping?", "Arm weakness?", "Speech difficulty?", "Time to call 108 now!"] },
  { condition: "Choking", steps: ["Encourage coughing", "Give 5 back blows", "5 abdominal thrusts (Heimlich)", "Call emergency if unresolved"] },
  { condition: "Severe Bleeding", steps: ["Apply firm pressure with cloth", "Do not remove the cloth", "Elevate the wound if possible", "Call 108 immediately"] },
];

const Emergency = () => {
  return (
    <div className="pt-20">
      {/* Hero — urgent red */}
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-red-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-3 h-3 bg-white rounded-full animate-ping" />
            <span className="text-red-200 font-bold text-sm uppercase tracking-widest">Emergency Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-5" style={{ fontFamily: "'Sora', sans-serif" }}>
            Medical Emergency?<br />We're Here — 24/7
          </h1>
          <p className="text-red-100 text-lg mb-8">
            Immediate medical response across 25+ cities. Don't wait — call now.
          </p>
          <a
            href="tel:+918001234567"
            className="inline-flex items-center gap-3 bg-white text-red-700 px-10 py-5 rounded-2xl font-black text-xl hover:bg-red-50 transition-all shadow-2xl hover:-translate-y-1 animate-pulse"
          >
            📞 +91 800 123 4567
          </a>
          <p className="text-red-200 text-sm mt-4">or dial <strong className="text-white">108</strong> for government ambulance</p>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
              Emergency Services
            </h2>
            <p className="text-slate-500 mt-3">Available round-the-clock for life-threatening situations.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((svc) => (
              <div key={svc.title} className="bg-white rounded-3xl p-7 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-400">
                <div className={`w-14 h-14 bg-gradient-to-br ${svc.color} rounded-2xl flex items-center justify-center text-2xl shadow-md mb-5`}>
                  {svc.icon}
                </div>
                <h3 className="font-black text-slate-800 mb-2">{svc.title}</h3>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">{svc.desc}</p>
                <a
                  href={`tel:${svc.number.replace(/\D/g, "")}`}
                  className="block text-center bg-red-50 text-red-700 font-bold py-2.5 rounded-xl text-sm hover:bg-red-100 transition-all border border-red-200"
                >
                  📞 {svc.number}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Aid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-red-600 font-bold text-sm uppercase tracking-widest">Immediate Action</span>
            <h2 className="text-3xl font-black mt-3 text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
              First Aid Quick Guide
            </h2>
            <p className="text-slate-500 mt-3">Follow these steps while waiting for professional help.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {firstAidTips.map((tip) => (
              <div key={tip.condition} className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h3 className="font-black text-red-800 text-base mb-4">{tip.condition}</h3>
                <ol className="space-y-2">
                  {tip.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">
            ⚠️ First aid is not a substitute for professional medical care. Always call emergency services immediately.
          </p>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
            Non-Emergency? Book a Consultation
          </h2>
          <p className="text-slate-300 mb-8">
            Schedule a doctor visit, nursing care, or physiotherapy session in advance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-teal-500 hover:bg-teal-400 text-white px-10 py-4 rounded-2xl font-bold transition-all"
            >
              Book a Caregiver
            </Link>
            <Link
              to="/services"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-10 py-4 rounded-2xl font-bold transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency;
