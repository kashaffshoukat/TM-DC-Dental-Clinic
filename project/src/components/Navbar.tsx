import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Globe,
  Stethoscope,
  Phone,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setAboutOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const aboutLinks = [
    { to: "/about", label: t.nav.ourStory },
    { to: "/about#vision", label: t.nav.ourVision },
    { to: "/about#doctors", label: t.nav.meetDoctors },
  ];

  const serviceLinks = t.services.items.map((item, i) => ({
    to: `/services#${i === 0 ? "all" : "all"}`,
    label: item.name,
  }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Professional Contact & Engagement Bar */}
      <div className="bg-navy-950 text-white py-1.5 px-3 sm:px-6 lg:px-8 border-b border-navy-900 text-[11px] sm:text-xs">
        <div className="container-max flex justify-between items-center gap-1 whitespace-nowrap">
          {/* Left Details: Address & Timing */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 text-navy-200">
              <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
              <span>9, Club Road, Sadiqabad</span>
            </div>
            <div className="hidden md:flex items-center gap-1 text-navy-200 border-l border-navy-800 pl-3">
              <Clock className="w-3 h-3 text-amber-400 shrink-0" />
              <span>Mon - Sat: 9 AM - 9 PM</span>
            </div>
          </div>

          {/* Center Polite Engagement Line */}
          <div className="hidden xl:flex items-center gap-1 text-amber-200 font-medium italic tracking-wide overflow-hidden text-ellipsis">
            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
            <span>Your comfort is our priority—let us bring back your radiant smile today!</span>
          </div>

          {/* Right Details: Call Now CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <a 
              href="tel:03086838555" 
              className="flex items-center gap-1 text-navy-100 hover:text-white transition-colors bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15 shadow-sm"
            >
              <Phone className="w-3 h-3 text-amber-400 shrink-0 animate-pulse" />
              <span>Call: <strong className="text-white tracking-wider">0308-6838555</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Section */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-lg shadow-navy-900/10 py-2"
            : "bg-white/95 backdrop-blur-md py-3 border-b border-navy-100"
        }`}
      >
        <nav className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-navy-900 to-navy-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md">
                <Stethoscope className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-extrabold text-navy-950 tracking-tight">
                  TM&DC
                </span>
                <span className="text-[9px] text-navy-500 font-bold tracking-widest uppercase">
                  Dental Clinic
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <NavItem to="/" label={t.nav.home} />

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 py-1.5 text-navy-950 font-semibold hover:text-navy-600 transition-colors rounded-lg text-sm">
                  {t.nav.about}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                    aboutOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="w-56 bg-white rounded-2xl shadow-xl shadow-navy-900/15 border border-navy-100 overflow-hidden">
                    {aboutLinks.map((link) => (
                      <DropdownLink key={link.to} to={link.to} label={link.label} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 py-1.5 text-navy-950 font-semibold hover:text-navy-600 transition-colors rounded-lg text-sm">
                  {t.nav.services}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute top-full right-0 pt-2 transition-all duration-300 ${
                    servicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="w-64 bg-white rounded-2xl shadow-xl shadow-navy-900/15 border border-navy-100 overflow-hidden max-h-[70vh] overflow-y-auto">
                    <DropdownLink to="/services" label={t.services.title} bold />
                    {serviceLinks.map((link, i) => (
                      <DropdownLink key={i} to={link.to} label={link.label} />
                    ))}
                  </div>
                </div>
              </div>

              <NavItem to="/reviews" label={t.nav.reviews} />
              <NavItem to="/contact" label={t.nav.contact} />
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2.5">
              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === "en" ? "ur" : "en")}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-navy-200 text-navy-800 hover:bg-navy-50 transition-all duration-300 text-xs font-semibold"
              >
                <Globe className="w-3.5 h-3.5 text-navy-600" />
                <span>{lang === "en" ? "اردو" : "EN"}</span>
              </button>

              {/* Book Now */}
              <Link
                to="/#appointment"
                className="hidden sm:flex items-center gap-1.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-4 py-2 rounded-xl text-xs transition-all shadow-md shadow-navy-900/10 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.nav.bookNow}</span>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl bg-navy-50 text-navy-900 hover:bg-navy-100 transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-400 ${
              isOpen ? "max-h-[650px] mt-3 pt-2 border-t border-navy-100" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-1 pb-3">
              <MobileItem to="/" label={t.nav.home} />
              <MobileCollapse label={t.nav.about} links={aboutLinks} />
              <MobileCollapse label={t.nav.services} links={serviceLinks} />
              <MobileItem to="/reviews" label={t.nav.reviews} />
              <MobileItem to="/contact" label={t.nav.contact} />
              <Link
                to="/#appointment"
                className="flex items-center gap-2 bg-navy-900 text-white font-semibold px-4 py-2.5 rounded-xl text-xs mt-2 justify-center shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.nav.bookNow}</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-1.5 font-semibold text-sm rounded-lg transition-colors duration-300 ${
          isActive
            ? "text-navy-950 bg-navy-50"
            : "text-navy-700 hover:text-navy-950 hover:bg-navy-50/50"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

function DropdownLink({ to, label, bold }: { to: string; label: string; bold?: boolean }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2.5 text-navy-700 hover:bg-navy-50 hover:text-navy-950 transition-colors duration-200 text-xs border-b border-navy-50 last:border-0"
    >
      <span className={bold ? "font-bold text-navy-950 text-sm" : "font-medium"}>{label}</span>
    </Link>
  );
}

function MobileItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
          isActive ? "text-navy-950 bg-navy-50" : "text-navy-800 hover:bg-navy-50"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

function MobileCollapse({
  label,
  links,
}: {
  label: string;
  links: { to: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2.5 text-navy-800 font-semibold text-sm hover:bg-navy-50 rounded-xl transition-colors"
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="pl-3 flex flex-col gap-0.5">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              className="px-3 py-2 text-xs text-navy-600 hover:text-navy-950 hover:bg-navy-50 rounded-xl transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}