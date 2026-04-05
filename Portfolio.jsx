import { useState, useEffect, useRef } from "react";

const NAVY = "#1F3864";
const BLUE = "#2E75B6";
const LIGHT_BLUE = "#DEEAF1";
const ACCENT = "#C9A84C";
const OFF_WHITE = "#F8F9FC";
const GRAY_100 = "#F1F3F7";
const GRAY_200 = "#E2E6EE";
const GRAY_500 = "#7A8399";
const GRAY_700 = "#3D4459";
const GRAY_900 = "#1A1F2E";

const skills = [
  { icon: "🐍", name: "Python Programming", level: 75 },
  { icon: "🗺️", name: "GIS & Spatial Analysis", level: 80 },
  { icon: "📊", name: "Data Analysis", level: 70 },
  { icon: "🤝", name: "Customer Service", level: 90 },
  { icon: "🎬", name: "Video Editing", level: 65 },
  { icon: "🏙️", name: "Urban Planning", level: 72 },
  { icon: "💬", name: "Communication", level: 88 },
  { icon: "🔍", name: "Problem Solving", level: 82 },
];

const experience = [
  {
    role: "Service Provider",
    company: "Carrefour, Kigali",
    period: "Recent",
    bullets: [
      "Assisted customers with product inquiries and selection across departments",
      "Delivered responsive, attentive support resulting in consistent customer satisfaction",
      "Communicated technical product information clearly to diverse customers",
    ],
  },
  {
    role: "Telemarketer",
    company: "RVI",
    period: "Recent",
    bullets: [
      "Navigated high-volume customer inquiries and resolved conflicts diplomatically",
      "Applied negotiation and conflict resolution skills to retain customers",
      "Maintained accurate records and met outbound call performance targets",
    ],
  },
];

const education = [
  { degree: "B.Sc. Urban & Regional Planning", school: "University of Rwanda — Kigali", dates: "Aug 2022 – Jun 2027 (Expected)" },
  { degree: "A.Sc. Mathematics, Physics & Geography", school: "Ecole Secondaire De Murama, Ruhango", dates: "Advanced Level" },
  { degree: "Secondary Education", school: "Collège de Bethel, Rwanda", dates: "2015 – 2018" },
  { degree: "Primary Education", school: "Ecole Primaire Kimihurura, Rwanda", dates: "2008 – 2014" },
];

const projects = [
  {
    icon: "📊",
    tag: "Data Science",
    title: "Data Analysis & Visualization",
    desc: "Conducted comprehensive data analysis projects exploring patterns and trends. Cleaned, processed, and visualized datasets to produce meaningful, actionable insights for decision-making.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    icon: "🏥",
    tag: "GIS & Urban Planning",
    title: "Hospital Site Selection — Nyagatare District",
    desc: "Applied GIS spatial analysis to evaluate and recommend optimal hospital establishment locations in Nyagatare District, considering population density, accessibility, and land use patterns.",
    tools: ["GIS", "Spatial Analysis", "Urban Planning"],
  },
];

const certs = [
  { icon: "🏆", name: "Dean of Students Certificate — A-Level Leadership" },
  { icon: "🎖️", name: "AERG Discipline Manager at School Level Certificate" },
  { icon: "🚀", name: "Wavumbuzi Entrepreneurship Challenge Rwanda — National Level" },
  { icon: "🌱", name: "Carbon Market Certificate — GIZ & Smart Africa" },
  { icon: "📜", name: "English Proficiency Certificate" },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease`,
    }}>{children}</div>
  );
}

function SectionHeader({ label, title }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: BLUE, marginBottom: "0.4rem" }}>{label}</div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: NAVY, marginBottom: "1rem", lineHeight: 1.2 }}>{title}</div>
      <div style={{ width: 48, height: 3, background: ACCENT, borderRadius: 2 }} />
    </div>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => { setFormSent(false); setFormData({ name: "", email: "", subject: "", message: "" }); }, 3000);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: GRAY_900, background: "#fff", lineHeight: 1.7, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .hover-card:hover { transform: translateY(-6px) !important; box-shadow: 0 20px 60px rgba(31,56,100,0.15) !important; }
        .hover-lift:hover { transform: translateY(-3px) !important; }
        .nav-link:hover { color: ${BLUE} !important; }
        input, textarea { outline: none; }
        input:focus, textarea:focus { border-color: ${ACCENT} !important; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5%", height: 68, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${GRAY_200}` }}>
        <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.25rem", color: NAVY, fontWeight: 700, letterSpacing: "-0.02em" }}>Cyprien R.</span>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {["about", "skills", "experience", "projects", "contact"].map(s => (
            <button key={s} onClick={() => scrollTo(s)} className="nav-link" style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.875rem", fontWeight: 500, color: GRAY_700, letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: "inherit", ...(s === "contact" ? { background: NAVY, color: "#fff", padding: "0.5rem 1.25rem", borderRadius: 8, transition: "background 0.2s" } : {}) }}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", padding: "100px 5% 60px", background: `linear-gradient(135deg, ${NAVY} 0%, #2a4f8a 50%, ${BLUE} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 600, height: 600, borderRadius: "50%", background: "rgba(196,168,76,0.08)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: "rgba(201,168,76,0.2)", border: "1px solid rgba(201,168,76,0.4)", color: ACCENT, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 1rem", borderRadius: 100, marginBottom: "1.5rem" }}>
            Available for Opportunities
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#fff", lineHeight: 1.15, marginBottom: "1rem" }}>
            Cyprien<br /><span style={{ color: ACCENT }}>Rugamba</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", marginBottom: "2rem", maxWidth: 480 }}>
            Urban Planning Professional & Data Analyst with expertise in GIS, Python, and customer experience — based in Kigali, Rwanda.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("projects")} style={{ background: ACCENT, color: NAVY, border: "none", padding: "0.75rem 1.75rem", borderRadius: 8, fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", fontFamily: "inherit" }}>
              View My Work
            </button>
            <button onClick={() => scrollTo("contact")} style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", padding: "0.75rem 1.75rem", borderRadius: 8, fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", fontFamily: "inherit" }}>
              Get In Touch
            </button>
          </div>
          <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem" }}>
            {[["1+", "Years Experience"], ["5+", "Certificates"], ["2+", "Projects"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", zIndex: 1 }}>
          <div style={{ position: "relative" }}>
            <div style={{ width: 300, height: 360, borderRadius: "24px 24px 80px 24px", overflow: "hidden", border: `4px solid rgba(201,168,76,0.4)`, boxShadow: "0 32px 80px rgba(0,0,0,0.3)", background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5rem" }}>
              👤
            </div>
            <div style={{ position: "absolute", bottom: -20, left: -20, background: "#fff", borderRadius: 16, padding: "1rem 1.25rem", boxShadow: "0 12px 48px rgba(31,56,100,0.14)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: 40, height: 40, background: LIGHT_BLUE, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>🎓</div>
              <div>
                <div style={{ fontWeight: 600, color: NAVY, fontSize: "0.875rem" }}>B.Sc. Urban Planning</div>
                <div style={{ fontSize: "0.75rem", color: GRAY_500 }}>University of Rwanda</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 5%", background: OFF_WHITE }}>
        <Reveal><SectionHeader label="Who I Am" title="About Me" /></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}>
          <Reveal delay={0.1}>
            <div style={{ background: "#fff", borderRadius: 16, padding: "2rem", boxShadow: "0 4px 24px rgba(31,56,100,0.08)", border: `1px solid ${GRAY_200}` }}>
              {[
                ["👤", "Full Name", "Cyprien Rugamba"],
                ["📅", "Date of Birth", "9 July 2001"],
                ["🌍", "Nationality", "Rwandan"],
                ["📍", "Location", "Kigali, Rwanda"],
                ["💬", "Languages", "English & Kinyarwanda"],
                ["✉️", "Email", "rugambacb@gmail.com"],
                ["📞", "Phone", "0798894868"],
              ].map(([icon, label, value]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 0", borderBottom: `1px solid ${GRAY_100}` }}>
                  <div style={{ width: 36, height: 36, background: LIGHT_BLUE, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: GRAY_500, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
                    <div style={{ fontWeight: 500, color: GRAY_900, fontSize: "0.9rem" }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontSize: "1rem", color: GRAY_700, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              I am a customer service professional and urban planning student with over a year of experience delivering exceptional support and resolving inquiries in fast-paced retail environments. I bring strong technical aptitude — from Python programming and GIS spatial analysis to data analytics with Pandas, NumPy, and Matplotlib.
            </p>
            <p style={{ fontSize: "1rem", color: GRAY_700, lineHeight: 1.8, marginBottom: "2rem" }}>
              Currently pursuing my Bachelor's in Urban and Regional Planning at the University of Rwanda, I combine analytical thinking with a genuine passion for creating meaningful user experiences. I am a multilingual communicator, collaborative team player, and driven problem-solver committed to making a measurable impact.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="mailto:rugambacb@gmail.com" style={{ background: NAVY, color: "#fff", padding: "0.75rem 1.75rem", borderRadius: 8, fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", fontFamily: "inherit" }}>Email Me</a>
              <a href="tel:0798894868" style={{ background: "transparent", color: NAVY, border: `1.5px solid ${GRAY_200}`, padding: "0.75rem 1.75rem", borderRadius: 8, fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", fontFamily: "inherit" }}>Call Me</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "100px 5%" }}>
        <Reveal><SectionHeader label="What I Bring" title="Skills & Expertise" /></Reveal>
        <Reveal delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {skills.map((s) => (
              <div key={s.name} className="hover-card" style={{ background: "#fff", border: `1px solid ${GRAY_200}`, borderRadius: 16, padding: "1.5rem", textAlign: "center", transition: "all 0.25s", boxShadow: "0 4px 24px rgba(31,56,100,0.08)", cursor: "default" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                <div style={{ fontWeight: 600, color: NAVY, fontSize: "0.875rem", marginBottom: "0.75rem" }}>{s.name}</div>
                <div style={{ height: 4, background: GRAY_100, borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${s.level}%`, background: `linear-gradient(90deg, ${BLUE}, ${ACCENT})`, borderRadius: 2, transition: "width 1s ease" }} />
                </div>
                <div style={{ fontSize: "0.75rem", color: GRAY_500, marginTop: "0.4rem" }}>{s.level}%</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "100px 5%", background: OFF_WHITE }}>
        <Reveal><SectionHeader label="Career History" title="Work Experience" /></Reveal>
        <div style={{ position: "relative", paddingLeft: "2rem", borderLeft: `2px solid ${GRAY_200}` }}>
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 0.15}>
              <div style={{ position: "relative", paddingBottom: i < experience.length - 1 ? "3rem" : 0 }}>
                <div style={{ position: "absolute", left: "-2.45rem", top: "0.25rem", width: 14, height: 14, background: BLUE, border: "3px solid #fff", borderRadius: "50%", boxShadow: `0 0 0 2px ${BLUE}` }} />
                <div style={{ background: "#fff", borderRadius: 16, padding: "1.75rem", border: `1px solid ${GRAY_200}`, boxShadow: "0 4px 24px rgba(31,56,100,0.08)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "1.05rem", color: NAVY }}>{job.role}</div>
                      <div style={{ fontSize: "0.875rem", color: BLUE, fontWeight: 500 }}>{job.company}</div>
                    </div>
                    <div style={{ fontSize: "0.8rem", color: GRAY_500, background: GRAY_100, padding: "0.3rem 0.75rem", borderRadius: 100 }}>{job.period}</div>
                  </div>
                  <ul style={{ marginTop: "1rem", paddingLeft: "1.25rem" }}>
                    {job.bullets.map(b => <li key={b} style={{ fontSize: "0.9rem", color: GRAY_700, marginBottom: "0.4rem" }}>{b}</li>)}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ padding: "100px 5%" }}>
        <Reveal><SectionHeader label="Academic Background" title="Education" /></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <div className="hover-lift" style={{ background: "#fff", border: `1px solid ${GRAY_200}`, borderTop: `4px solid ${NAVY}`, borderRadius: 16, padding: "1.75rem", boxShadow: "0 4px 24px rgba(31,56,100,0.08)", transition: "transform 0.2s" }}>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: NAVY, marginBottom: "0.35rem" }}>{e.degree}</div>
                <div style={{ fontSize: "0.875rem", color: BLUE, fontWeight: 500, marginBottom: "0.25rem" }}>{e.school}</div>
                <div style={{ fontSize: "0.8rem", color: GRAY_500 }}>{e.dates}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 5%", background: OFF_WHITE }}>
        <Reveal><SectionHeader label="My Work" title="Featured Projects" /></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.15}>
              <div className="hover-card" style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: `1px solid ${GRAY_200}`, boxShadow: "0 4px 24px rgba(31,56,100,0.08)", transition: "all 0.25s" }}>
                <div style={{ height: 140, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)` }}>{p.icon}</div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: BLUE, background: LIGHT_BLUE, padding: "0.25rem 0.6rem", borderRadius: 100, marginBottom: "0.75rem" }}>{p.tag}</div>
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: NAVY, marginBottom: "0.5rem" }}>{p.title}</div>
                  <div style={{ fontSize: "0.875rem", color: GRAY_700, lineHeight: 1.7 }}>{p.desc}</div>
                  <div style={{ marginTop: "1rem", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    {p.tools.map(t => <span key={t} style={{ fontSize: "0.75rem", color: GRAY_700, background: GRAY_100, border: `1px solid ${GRAY_200}`, padding: "0.2rem 0.6rem", borderRadius: 100 }}>{t}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" style={{ padding: "100px 5%" }}>
        <Reveal><SectionHeader label="Achievements" title="Certificates & Awards" /></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {certs.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="hover-lift" style={{ display: "flex", alignItems: "center", gap: "1rem", background: "#fff", border: `1px solid ${GRAY_200}`, borderRadius: 16, padding: "1.25rem", boxShadow: "0 4px 24px rgba(31,56,100,0.08)", transition: "all 0.2s" }}>
                <div style={{ width: 44, height: 44, flexShrink: 0, background: `linear-gradient(135deg, ${NAVY}, ${BLUE})`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>{c.icon}</div>
                <div style={{ fontWeight: 600, fontSize: "0.875rem", color: NAVY, lineHeight: 1.4 }}>{c.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 5%", background: NAVY }}>
        <Reveal>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, marginBottom: "0.4rem" }}>Let's Talk</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#fff", marginBottom: "1rem" }}>Get In Touch</div>
            <div style={{ width: 48, height: 3, background: ACCENT, borderRadius: 2 }} />
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <Reveal delay={0.1}>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "2rem" }}>
              I am open to new opportunities, collaborations, and interesting conversations. Whether you have a project in mind or just want to connect — feel free to reach out!
            </p>
            {[["✉️", "Email", "rugambacb@gmail.com"], ["📞", "Phone", "0798894868"], ["📍", "Location", "Kigali, Rwanda"]].map(([icon, label, val]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div style={{ width: 44, height: 44, background: "rgba(255,255,255,0.1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>{icon}</div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
                  <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.9rem" }}>{val}</div>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[["name", "Your Name", "text"], ["email", "Your Email", "email"]].map(([field, ph, type]) => (
                  <input key={field} type={type} placeholder={ph} required value={formData[field]} onChange={e => setFormData({ ...formData, [field]: e.target.value })}
                    style={{ width: "100%", padding: "0.875rem 1rem", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, color: "#fff", fontFamily: "inherit", fontSize: "0.9rem" }} />
                ))}
              </div>
              <input type="text" placeholder="Subject" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })}
                style={{ width: "100%", padding: "0.875rem 1rem", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, color: "#fff", fontFamily: "inherit", fontSize: "0.9rem" }} />
              <textarea placeholder="Your Message..." rows={5} required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                style={{ width: "100%", padding: "0.875rem 1rem", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, color: "#fff", fontFamily: "inherit", fontSize: "0.9rem", resize: "none" }} />
              <button type="submit" style={{ alignSelf: "flex-start", background: formSent ? "#27ae60" : ACCENT, color: formSent ? "#fff" : NAVY, border: "none", padding: "0.75rem 1.75rem", borderRadius: 8, fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", fontFamily: "inherit", transition: "background 0.3s" }}>
                {formSent ? "Message Sent! ✓" : "Send Message →"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: GRAY_900, color: "rgba(255,255,255,0.5)", textAlign: "center", padding: "2rem 5%", fontSize: "0.85rem" }}>
        Designed & built with care · <strong style={{ color: "#fff" }}>Cyprien Rugamba</strong> · Kigali, Rwanda · 2025
      </footer>
    </div>
  );
}
