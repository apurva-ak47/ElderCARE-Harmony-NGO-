import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "₹9,999",
    period: "/month",
    desc: "Perfect for seniors who need light daily assistance and health monitoring.",
    features: [
      "Daily health vitals check",
      "Companion caregiver (4 hrs/day)",
      "Weekly nurse visit",
      "Medication reminders",
      "Family health reports",
    ],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Standard",
    price: "₹18,999",
    period: "/month",
    desc: "Ideal for seniors with moderate care needs or recovering from illness.",
    features: [
      "Everything in Basic",
      "Full-day caregiver (8 hrs)",
      "3x physiotherapy sessions/week",
      "Doctor visit twice/month",
      "Emergency care priority",
      "Nutrition counselling",
    ],
    highlight: true,
    cta: "Most Popular",
  },
  {
    name: "Intensive",
    price: "₹34,999",
    period: "/month",
    desc: "Round-the-clock care for seniors with dementia, paralysis, or post-ICU recovery.",
    features: [
      "Everything in Standard",
      "24-hour caregiver",
      "Daily nurse supervision",
      "Weekly specialist visit",
      "ICU-grade monitoring",
      "Palliative care support",
      "Priority emergency response",
    ],
    highlight: false,
    cta: "Get Started",
  },
];

const conditions = [
  { icon: "🧠", title: "Dementia & Alzheimer's", desc: "Specialized memory care, cognitive therapy, and safe environment management." },
  { icon: "❤️", title: "Heart Disease", desc: "Cardiac monitoring, medication adherence, and lifestyle guidance." },
  { icon: "🦴", title: "Arthritis & Mobility", desc: "Pain management, physiotherapy, and home modification for safe movement." },
  { icon: "💉", title: "Diabetes Care", desc: "Blood sugar monitoring, dietary management, and insulin administration." },
  { icon: "🫁", title: "COPD / Respiratory", desc: "Oxygen therapy, breathing exercises, and respiratory medication management." },
  { icon: "🧬", title: "Cancer / Palliative", desc: "Pain relief, emotional support, and dignified end-of-life care at home." },
  { icon: "🏥", title: "Post-Stroke Care", desc: "Neurological rehab, speech therapy, and mobility restoration after stroke." },
  { icon: "🦿", title: "Post-Surgery Recovery", desc: "Wound care, physiotherapy, and supervised recovery in your own home." },
];

const whyUs = [
  { icon: "✅", title: "Verified Caregivers", desc: "All caregivers undergo police verification, reference checks, and clinical skills assessment." },
  { icon: "📱", title: "Real-time Updates", desc: "Daily care reports, health vitals, and activity logs sent directly to your family app." },
  { icon: "🏅", title: "NABH Accredited", desc: "We meet the highest Indian healthcare quality standards — certified by NABH." },
  { icon: "🔄", title: "Flexible Plans", desc: "Hourly, daily, or monthly care packages tailored to your needs and budget." },
];

const ElderCare = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-800 via-teal-800 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-rose-300 font-bold text-sm uppercase tracking-widest">Senior Home Care</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-5" style={{ fontFamily: "'Sora', sans-serif" }}>
            Dignified Care for<br />
            <span className="text-teal-300">Your Elderly Parents</span>
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto mb-8">
            Personalised, compassionate elder care services — medical, physical, and emotional — delivered in the comfort of home.
          </p>
          <Link to="/contact" className="bg-white text-teal-800 px-10 py-4 rounded-2xl font-bold hover:bg-teal-50 transition-all shadow-xl">
            Explore Care Plans →
          </Link>
        </div>
      </section>

      {/* Conditions We Care For */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Specialised Support</span>
            <h2 className="text-3xl font-black mt-3 text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
              Conditions We Care For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditions.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-400 hover:-translate-y-1 border border-slate-100">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Pricing</span>
            <h2 className="text-3xl font-black mt-3 text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
              Monthly Care Plans
            </h2>
            <p className="text-slate-500 mt-3">Transparent pricing. No hidden charges.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-gradient-to-br from-teal-700 to-teal-900 text-white shadow-2xl shadow-teal-200 scale-105"
                    : "bg-slate-50 border border-slate-200 text-slate-800"
                }`}
              >
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full">⭐ Most Popular</span>
                  </div>
                )}
                <h3 className={`text-xl font-black mb-1 ${plan.highlight ? "text-teal-100" : "text-slate-700"}`}>{plan.name}</h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-teal-700"}`}>{plan.price}</span>
                  <span className={`text-sm mb-1 ${plan.highlight ? "text-teal-200" : "text-slate-400"}`}>{plan.period}</span>
                </div>
                <p className={`text-sm mb-6 ${plan.highlight ? "text-teal-100" : "text-slate-500"}`}>{plan.desc}</p>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlight ? "text-teal-100" : "text-slate-600"}`}>
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${plan.highlight ? "bg-teal-500 text-white" : "bg-teal-100 text-teal-700"}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3.5 rounded-xl font-bold transition-all ${
                    plan.highlight
                      ? "bg-white text-teal-700 hover:bg-teal-50"
                      : "bg-teal-700 text-white hover:bg-teal-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">
            * All plans include a free home assessment visit. Custom plans available on request.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>Why Families Trust ElderCare</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElderCare;
