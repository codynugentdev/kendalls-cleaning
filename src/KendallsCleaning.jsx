import { useState, useEffect } from "react";
import kendallPfp from './assets/kendallpfp.jpg';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

const services = [
  {
    icon: "🏠",
    title: "Standard Cleaning",
    desc: "Regular maintenance cleaning to keep your home fresh and tidy.",
    prices: [
      { label: "Studio / Small Apt", price: "$60–$90" },
      { label: "1 Bed / 1 Bath", price: "$80–$120" },
      { label: "2 Bed / 1–2 Bath", price: "$100–$150" },
      { label: "3 Bed / 2 Bath", price: "$130–$200" },
      { label: "4+ Bedrooms", price: "$180–$300" },
    ],
    color: "#7BAE7F",
  },
  {
    icon: "✨",
    title: "Deep Cleaning",
    desc: "A thorough top-to-bottom clean for homes that need extra attention.",
    prices: [
      { label: "Small Home", price: "$120–$180" },
      { label: "Medium Home", price: "$180–$300" },
      { label: "Large Home", price: "$300–$450+" },
    ],
    color: "#5C9EAD",
  },
  {
    icon: "🚚",
    title: "Specialty Services",
    desc: "Moving, RVs, offices — we handle the spaces others don't.",
    prices: [
      { label: "Move In / Move Out", price: "$150–$400" },
      { label: "Camper / RV", price: "$80–$200" },
      { label: "Office Cleaning", price: "$75–$250+" },
    ],
    color: "#C17C74",
  },
];

const addons = [
  { label: "Oven Cleaning", price: "$25–$50", icon: "🔥" },
  { label: "Refrigerator Cleaning", price: "$20–$40", icon: "❄️" },
  { label: "Baseboards", price: "$20–$60", icon: "🧹" },
  { label: "Interior Windows", price: "$5/window or $40+", icon: "🪟" },
  { label: "Laundry Folding", price: "$15–$30", icon: "👕" },
  { label: "Organization", price: "$25–$75/hr", icon: "📦" },
];

const faqs = [
  {
    q: "Do I need to be home during the cleaning?",
    a: "Nope! Many clients provide a key or door code. As long as we can get in, you're free to go about your day.",
  },
  {
    q: "Do you bring your own supplies?",
    a: "Yes — all cleaning products and equipment are provided. Just let me know if you have any preferences or sensitivities.",
  },
  {
    q: "How do I book?",
    a: "Just send a message or give me a call! We'll talk through your space, pick a time that works, and get you on the schedule.",
  },
  {
    q: "What areas do you serve?",
    a: "Proudly serving Richmond, KY and the surrounding area.",
  },
];

export default function KendallsCleaning() {
  const isMobile = useIsMobile();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeService, setActiveService] = useState(0);

  return (
    <div style={styles.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #FAFAF8; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }

        .fade-up {
          animation: fadeUp 0.6s ease forwards;
        }
        .nav-link {
          transition: color 0.2s ease;
        }
        .nav-link:hover { color: #7BAE7F !important; }
        .service-tab {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .service-tab:hover {
          transform: translateY(-2px);
        }
        .addon-card {
          transition: all 0.2s ease;
        }
        .addon-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08) !important;
        }
        .faq-item {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .faq-item:hover {
          background: #F0F5F0 !important;
        }
        .cta-btn {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(123, 174, 127, 0.4) !important;
        }
        .cta-btn:active {
          transform: translateY(0px);
        }
        .leaf {
          animation: float 4s ease-in-out infinite;
        }
        .leaf:nth-child(2) { animation-delay: 1s; }
        .leaf:nth-child(3) { animation-delay: 2s; }
      `}</style>

      {/* NAV */}
      <nav style={{ ...styles.nav, padding: isMobile ? '16px 20px' : '20px 60px' }}>
        <div style={styles.navLogo}>
          <span style={styles.navLogoScript}>Kendall's</span>
          <span style={styles.navLogoSub}>Cleaning Services</span>
        </div>
        <div style={styles.navLinks}>
          {!isMobile && (
            <>
              <a href="#services" className="nav-link" style={styles.navLink}>Services</a>
              <a href="#pricing" className="nav-link" style={styles.navLink}>Pricing</a>
              <a href="#faq" className="nav-link" style={styles.navLink}>FAQ</a>
            </>
          )}
          <a href="#contact" className="cta-btn" style={styles.navCta}>
            Get a Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ ...styles.hero, padding: isMobile ? '60px 24px 80px' : '100px 60px 120px' }}>
        {/* Decorative circles */}
        <div style={{ ...styles.circle, width: 300, height: 300, top: -80, right: -80, background: 'rgba(123,174,127,0.12)' }} />
        <div style={{ ...styles.circle, width: 200, height: 200, bottom: 0, left: -60, background: 'rgba(92,158,173,0.1)' }} />

        {/* Floating leaves */}
        <div className="leaf" style={{ ...styles.floatingEmoji, top: '15%', right: isMobile ? '5%' : '15%' }}>🌿</div>
        <div className="leaf" style={{ ...styles.floatingEmoji, top: '60%', right: isMobile ? '8%' : '20%', fontSize: 24 }}>✨</div>
        <div className="leaf" style={{ ...styles.floatingEmoji, bottom: '20%', left: isMobile ? '5%' : '10%', fontSize: 20 }}>🌱</div>

        {/* Hero inner: text + photo */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: isMobile ? 40 : 64,
          position: 'relative',
          zIndex: 1,
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          <div className="fade-up" style={{ ...styles.heroContent, flex: 1, maxWidth: isMobile ? '100%' : 580 }}>
            <div style={styles.heroTag}>📍 Serving Richmond, KY</div>
            <h1 style={{ ...styles.heroTitle, fontSize: isMobile ? 42 : 64 }}>
              A cleaner home,<br />
              <span style={styles.heroTitleAccent}>a happier you.</span>
            </h1>
            <p style={styles.heroSub}>
              Professional residential cleaning services tailored to your home and your schedule. Trustworthy, thorough, and friendly — every single visit.
            </p>
            <div style={{ ...styles.heroButtons, flexDirection: isMobile ? 'column' : 'row' }}>
              <a href="#contact" className="cta-btn" style={styles.btnPrimary}>
                Book a Cleaning →
              </a>
              <a href="#pricing" className="cta-btn" style={styles.btnSecondary}>
                View Pricing
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="fade-up" style={styles.heroPfpWrapper}>
            {/* Decorative ring */}
            <div style={styles.heroPfpRing} />
            <img
              src={kendallPfp}
              alt="Kendall — owner of Kendall's Cleaning Services"
              style={styles.heroPfpImg}
            />
            {/* Name badge */}
            <div style={styles.heroPfpBadge}>
              <span style={styles.heroPfpBadgeName}>Kendall</span>
              <span style={styles.heroPfpBadgeTitle}>Owner & Cleaner</span>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div style={{ ...styles.trustRow, flexDirection: isMobile ? 'column' : 'row', marginTop: isMobile ? 48 : 72, justifyContent: 'center' }}>
          {["🧴 Supplies Included", "⭐ Richmond's Own", "📅 Flexible Scheduling", "💚 Locally Owned"].map((t, i) => (
            <div key={i} style={styles.trustBadge}>{t}</div>
          ))}
        </div>
      </section>

      {/* WAVY DIVIDER */}
      <div style={{ lineHeight: 0, background: '#FAFAF8' }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="#F0F5F0"/>
        </svg>
      </div>

      {/* SERVICES */}
      <section id="services" style={{ ...styles.section, background: '#F0F5F0', padding: isMobile ? '60px 20px' : '80px 60px' }}>
        <div style={styles.sectionLabel}>What I Offer</div>
        <h2 style={{ ...styles.sectionTitle, fontSize: isMobile ? 32 : 44 }}>Services for every home</h2>
        <p style={styles.sectionSub}>From routine maintenance to deep cleans and specialty jobs — I've got you covered.</p>

        {/* Service tabs */}
        <div style={{ ...styles.serviceTabs, flexDirection: isMobile ? 'column' : 'row' }}>
          {services.map((s, i) => (
            <div
              key={i}
              className="service-tab"
              onClick={() => setActiveService(i)}
              style={{
                ...styles.serviceTab,
                background: activeService === i ? '#fff' : 'transparent',
                boxShadow: activeService === i ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
                borderBottom: activeService === i ? `3px solid ${s.color}` : '3px solid transparent',
              }}
            >
              <span style={{ fontSize: 28 }}>{s.icon}</span>
              <span style={{ ...styles.serviceTabLabel, color: activeService === i ? s.color : '#666' }}>
                {s.title}
              </span>
            </div>
          ))}
        </div>

        {/* Active service detail */}
        <div style={styles.serviceDetail}>
          <p style={styles.serviceDesc}>{services[activeService].desc}</p>
          <div style={{ ...styles.priceList, gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {services[activeService].prices.map((p, i) => (
              <div key={i} style={{ ...styles.priceRow, borderLeft: `4px solid ${services[activeService].color}` }}>
                <div style={styles.priceLabel}>{p.label}</div>
                <div style={{ ...styles.priceAmount, color: services[activeService].color }}>{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAVY DIVIDER 2 */}
      <div style={{ lineHeight: 0, background: '#F0F5F0' }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 C360 0 1080 60 1440 30 L1440 0 L0 0 Z" fill="#FAFAF8"/>
        </svg>
      </div>

      {/* ADD-ONS */}
      <section id="pricing" style={{ ...styles.section, padding: isMobile ? '60px 20px' : '80px 60px' }}>
        <div style={styles.sectionLabel}>Customize Your Clean</div>
        <h2 style={{ ...styles.sectionTitle, fontSize: isMobile ? 32 : 44 }}>Add-on Services</h2>
        <p style={styles.sectionSub}>Tack on any of these extras to make your cleaning exactly what you need.</p>

        <div style={{ ...styles.addonGrid, gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)' }}>
          {addons.map((a, i) => (
            <div key={i} className="addon-card" style={styles.addonCard}>
              <div style={styles.addonIcon}>{a.icon}</div>
              <div style={styles.addonLabel}>{a.label}</div>
              <div style={styles.addonPrice}>{a.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY KENDALL'S */}
      <div style={{ lineHeight: 0, background: '#FAFAF8' }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="#2C3E35"/>
        </svg>
      </div>

      <section style={{ ...styles.section, background: '#2C3E35', padding: isMobile ? '60px 20px' : '80px 60px' }}>
        <div style={{ ...styles.sectionLabel, color: '#7BAE7F' }}>Why Choose Kendall's</div>
        <h2 style={{ ...styles.sectionTitle, fontSize: isMobile ? 32 : 44, color: '#fff' }}>Cleaning you can trust</h2>

        <div style={{ ...styles.whyGrid, gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
          {[
            { icon: "🤝", title: "Personally Done", desc: "Every job is done by me — not a rotating crew of strangers. You'll always know who's in your home." },
            { icon: "🧴", title: "Supplies Included", desc: "No need to stock up before I arrive. All cleaning products and equipment come with me." },
            { icon: "📅", title: "Flexible Scheduling", desc: "I work around your life, not the other way around. Morning, afternoon, weekends — let's find what works." },
          ].map((w, i) => (
            <div key={i} style={styles.whyCard}>
              <div style={styles.whyIcon}>{w.icon}</div>
              <div style={styles.whyTitle}>{w.title}</div>
              <div style={styles.whyDesc}>{w.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <div style={{ lineHeight: 0, background: '#2C3E35' }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 C360 0 1080 60 1440 30 L1440 0 L0 0 Z" fill="#FAFAF8"/>
        </svg>
      </div>

      <section id="faq" style={{ ...styles.section, padding: isMobile ? '60px 20px' : '80px 60px' }}>
        <div style={styles.sectionLabel}>Got Questions?</div>
        <h2 style={{ ...styles.sectionTitle, fontSize: isMobile ? 32 : 44 }}>Frequently Asked</h2>

        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          {faqs.map((f, i) => (
            <div
              key={i}
              className="faq-item"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{
                ...styles.faqItem,
                background: openFaq === i ? '#F0F5F0' : '#fff',
              }}
            >
              <div style={styles.faqQuestion}>
                <span>{f.q}</span>
                <span style={{ fontSize: 20, color: '#7BAE7F' }}>{openFaq === i ? '−' : '+'}</span>
              </div>
              {openFaq === i && (
                <div style={styles.faqAnswer}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <div style={{ lineHeight: 0, background: '#FAFAF8' }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="#7BAE7F"/>
        </svg>
      </div>

      <section id="contact" style={{ ...styles.section, background: '#7BAE7F', padding: isMobile ? '60px 20px' : '80px 60px' }}>
        <div style={{ ...styles.sectionLabel, color: '#2C3E35' }}>Let's Get Started</div>
        <h2 style={{ ...styles.sectionTitle, fontSize: isMobile ? 32 : 44, color: '#fff' }}>Book your cleaning today</h2>
        <p style={{ ...styles.sectionSub, color: 'rgba(255,255,255,0.85)' }}>
          Ready for a cleaner home? Reach out and I'll get back to you within 24 hours.
        </p>

        <div style={{ ...styles.contactGrid, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 32 : 48 }}>
          <div style={styles.contactInfo}>
            {[
              { icon: "📞", label: "Call or Text", value: "Your phone number" },
              { icon: "✉️", label: "Email", value: "Your email address" },
              { icon: "📍", label: "Service Area", value: "Richmond, KY & surrounding area" },
            ].map((c, i) => (
              <div key={i} style={styles.contactRow}>
                <span style={styles.contactIcon}>{c.icon}</span>
                <div>
                  <div style={styles.contactLabel}>{c.label}</div>
                  <div style={styles.contactValue}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.contactForm}>
            <p style={styles.contactFormTitle}>Send a message</p>
            <input style={styles.input} type="text" placeholder="Your name" />
            <input style={styles.input} type="tel" placeholder="Phone number" />
            <input style={styles.input} type="email" placeholder="Email address" />
            <select style={styles.input}>
              <option value="">What service are you interested in?</option>
              <option>Standard Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Move In / Move Out</option>
              <option>Specialty Service</option>
              <option>Not sure yet</option>
            </select>
            <textarea style={{ ...styles.input, height: 100, resize: 'vertical' }} placeholder="Tell me about your home and what you need..." />
            <a
              href="mailto:youremail@gmail.com?subject=Cleaning Inquiry"
              className="cta-btn"
              style={styles.submitBtn}
            >
              Send Message →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ ...styles.footer, padding: isMobile ? '32px 20px' : '40px 60px' }}>
        <div style={styles.footerLogo}>
          <span style={styles.footerScript}>Kendall's</span>
          <span style={styles.footerSub}>Cleaning Services</span>
        </div>
        <div style={styles.footerCopy}>© 2025 Kendall's Cleaning Services · Richmond, KY</div>
<div style={{ ...styles.footerCopy, fontSize: 12, opacity: 1, marginTop: 4, color: 'rgba(255,255,255,0.55)' }}>
  Website inquiries: <a href="mailto:cody.nugent.dev@gmail.com" style={{ color: '#7BAE7F' }}>cody.nugent.dev@gmail.com</a>
</div>
      </footer>
    </div>
  );
}

const styles = {
  root: {
    fontFamily: "'DM Sans', sans-serif",
    background: '#FAFAF8',
    minHeight: '100vh',
    overflowX: 'hidden',
    color: '#2C3E35',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#FAFAF8',
    borderBottom: '1px solid #E8EDE8',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  navLogo: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 8,
  },
  navLogoScript: {
    fontFamily: "'Playfair Display', serif",
    fontStyle: 'italic',
    fontSize: 26,
    color: '#7BAE7F',
    lineHeight: 1,
  },
  navLogoSub: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    fontWeight: 500,
    color: '#999',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
  },
  navLink: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    color: '#555',
    textDecoration: 'none',
    fontSize: 15,
  },
  navCta: {
    background: '#7BAE7F',
    color: '#fff',
    border: 'none',
    borderRadius: 100,
    padding: '10px 22px',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: 14,
    textDecoration: 'none',
    boxShadow: '0 4px 16px rgba(123,174,127,0.3)',
  },
  hero: {
    background: '#FAFAF8',
    position: 'relative',
    overflow: 'hidden',
  },
  circle: {
    position: 'absolute',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  floatingEmoji: {
    position: 'absolute',
    fontSize: 32,
    pointerEvents: 'none',
    zIndex: 0,
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
  },
  heroPfpWrapper: {
    position: 'relative',
    flexShrink: 0,
    width: 280,
    height: 280,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroPfpRing: {
    position: 'absolute',
    inset: -10,
    borderRadius: '50%',
    border: '3px dashed rgba(123,174,127,0.4)',
    animation: 'float 6s ease-in-out infinite',
  },
  heroPfpImg: {
    width: 260,
    height: 260,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '5px solid #fff',
    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
  },
  heroPfpBadge: {
    position: 'absolute',
    bottom: -8,
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#fff',
    borderRadius: 100,
    padding: '8px 20px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    border: '1px solid #E8EDE8',
  },
  heroPfpBadgeName: {
    fontFamily: "'Playfair Display', serif",
    fontStyle: 'italic',
    fontSize: 16,
    color: '#7BAE7F',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  heroPfpBadgeTitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 500,
    color: '#999',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  heroTag: {
    display: 'inline-block',
    background: '#F0F5F0',
    color: '#7BAE7F',
    borderRadius: 100,
    padding: '6px 16px',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: 13,
    marginBottom: 24,
  },
  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 64,
    lineHeight: 1.15,
    color: '#2C3E35',
    marginBottom: 20,
    fontWeight: 700,
  },
  heroTitleAccent: {
    fontStyle: 'italic',
    color: '#7BAE7F',
  },
  heroSub: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 17,
    color: '#666',
    lineHeight: 1.7,
    marginBottom: 36,
    maxWidth: 500,
  },
  heroButtons: {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
  },
  btnPrimary: {
    background: '#7BAE7F',
    color: '#fff',
    border: 'none',
    borderRadius: 100,
    padding: '14px 28px',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: 15,
    textDecoration: 'none',
    boxShadow: '0 4px 20px rgba(123,174,127,0.35)',
    display: 'inline-block',
  },
  btnSecondary: {
    background: 'transparent',
    color: '#2C3E35',
    border: '2px solid #D0DDD0',
    borderRadius: 100,
    padding: '14px 28px',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: 15,
    textDecoration: 'none',
    display: 'inline-block',
  },
  trustRow: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: 1,
  },
  trustBadge: {
    background: '#fff',
    border: '1px solid #E8EDE8',
    borderRadius: 100,
    padding: '8px 18px',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: 13,
    color: '#555',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  section: {
    padding: '80px 60px',
    background: '#FAFAF8',
  },
  sectionLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#7BAE7F',
    textAlign: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 44,
    textAlign: 'center',
    color: '#2C3E35',
    marginBottom: 12,
    fontWeight: 700,
  },
  sectionSub: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    lineHeight: 1.7,
    maxWidth: 520,
    margin: '0 auto 48px',
  },
  serviceTabs: {
    display: 'flex',
    gap: 12,
    maxWidth: 800,
    margin: '0 auto 32px',
    background: 'rgba(255,255,255,0.5)',
    borderRadius: 16,
    padding: 8,
  },
  serviceTab: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    padding: '16px 12px',
    borderRadius: 12,
  },
  serviceTabLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: 14,
    textAlign: 'center',
  },
  serviceDetail: {
    background: '#fff',
    borderRadius: 20,
    padding: '32px',
    maxWidth: 800,
    margin: '0 auto',
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
  },
  serviceDesc: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  priceList: {
    display: 'grid',
    gap: 12,
  },
  priceRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#FAFAF8',
    borderRadius: 10,
    padding: '14px 20px',
    paddingLeft: 16,
  },
  priceLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: 14,
    color: '#444',
  },
  priceAmount: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 18,
    fontWeight: 700,
  },
  addonGrid: {
    display: 'grid',
    gap: 16,
    maxWidth: 900,
    margin: '0 auto',
  },
  addonCard: {
    background: '#fff',
    borderRadius: 16,
    padding: '24px 20px',
    textAlign: 'center',
    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
    border: '1px solid #EEF2EE',
  },
  addonIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  addonLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: 14,
    color: '#2C3E35',
    marginBottom: 6,
  },
  addonPrice: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 16,
    color: '#7BAE7F',
    fontWeight: 700,
  },
  whyGrid: {
    display: 'grid',
    gap: 24,
    maxWidth: 900,
    margin: '0 auto',
  },
  whyCard: {
    background: 'rgba(255,255,255,0.07)',
    borderRadius: 16,
    padding: '28px 24px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  whyIcon: {
    fontSize: 36,
    marginBottom: 12,
  },
  whyTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 20,
    color: '#fff',
    marginBottom: 8,
    fontWeight: 700,
  },
  whyDesc: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.7,
  },
  faqItem: {
    borderRadius: 12,
    padding: '20px 24px',
    marginBottom: 8,
    border: '1px solid #E8EDE8',
  },
  faqQuestion: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: 15,
    color: '#2C3E35',
    gap: 16,
  },
  faqAnswer: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: '#666',
    lineHeight: 1.7,
    marginTop: 12,
    paddingTop: 12,
    borderTop: '1px solid #E8EDE8',
  },
  contactGrid: {
    display: 'grid',
    maxWidth: 900,
    margin: '0 auto',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    justifyContent: 'center',
  },
  contactRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 16,
  },
  contactIcon: {
    fontSize: 28,
    lineHeight: 1,
  },
  contactLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  contactValue: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: 16,
    color: '#fff',
  },
  contactForm: {
    background: '#fff',
    borderRadius: 20,
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
  },
  contactFormTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 22,
    color: '#2C3E35',
    marginBottom: 4,
    fontWeight: 700,
  },
  input: {
    border: '1.5px solid #E8EDE8',
    borderRadius: 10,
    padding: '12px 16px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    outline: 'none',
    background: '#FAFAF8',
    color: '#2C3E35',
    width: '100%',
  },
  submitBtn: {
    background: '#7BAE7F',
    color: '#fff',
    border: 'none',
    borderRadius: 100,
    padding: '14px',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: 15,
    boxShadow: '0 4px 16px rgba(123,174,127,0.35)',
    cursor: 'pointer',
    width: '100%',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'block',
    marginTop: 4,
  },
  footer: {
    background: '#2C3E35',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 8,
  },
  footerScript: {
    fontFamily: "'Playfair Display', serif",
    fontStyle: 'italic',
    fontSize: 22,
    color: '#7BAE7F',
  },
  footerSub: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 500,
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  footerCopy: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    color: 'rgba(255,255,255,0.3)',
  },
};