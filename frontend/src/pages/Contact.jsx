import { useState } from "react";

const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Pune",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Surat",
];

const serviceOptions = [
  "Doctor on Call",
  "Nursing Care",
  "Physiotherapy",
  "Elder Companion",
  "ICU at Home",
  "Lab at Home",
  "Other",
];

const Contact = () => {
 const [form, setForm] = useState({
  name: "",
  email: "",   
  phone: "",
  city: "",
  service: "",
  message: "",
});

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // ✅ FIXED FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Saved:", data);
        setSubmitted(true);
      } else {
        console.error(data);
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-800 to-slate-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-teal-300 font-bold text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h1
            className="text-4xl font-black mt-3 mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Book a Caregiver Today
          </h1>
          <p className="text-teal-100 text-lg">
            Tell us your needs, and our care coordinator will connect with you
            within 30 minutes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-800 mb-2">
              Request a Callback
            </h2>

            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-black text-slate-800 mb-2">
                  ✅ Request Submitted!
                </h3>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-xl font-bold"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-3 rounded-xl"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-3 rounded-xl"
                />
                <input
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
  required
  placeholder="Enter your email"
  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm"
/>

                <select
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-3 rounded-xl"
                >
                  <option value="">Select City</option>
                  {cities.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border px-4 py-3 rounded-xl"
                >
                  <option value="">Select Service</option>
                  {serviceOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>

                <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border px-4 py-3 rounded-xl"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 rounded-xl font-bold"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;