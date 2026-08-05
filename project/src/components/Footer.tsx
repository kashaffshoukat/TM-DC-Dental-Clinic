import { Link } from "react-router-dom";
import { Stethoscope, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-950 text-navy-100 pt-16 pb-8">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-extrabold text-white tracking-tight">
                  TM&DC
                </span>
                <span className="text-[10px] text-navy-300 font-medium tracking-wider uppercase">
                  Dental Clinic
                </span>
              </div>
            </Link>
            <p className="text-sm text-navy-300 leading-relaxed mb-4">
              {t.footer.about}
            </p>
            <p className="text-navy-400 text-sm font-medium italic">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: t.nav.home },
                { to: "/about", label: t.nav.about },
                { to: "/services", label: t.nav.services },
                { to: "/reviews", label: t.nav.reviews },
                { to: "/contact", label: t.nav.contact },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              {t.footer.ourServices}
            </h3>
            <ul className="space-y-3">
              {t.services.items.slice(0, 6).map((item, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    className="text-sm text-navy-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-navy-300">
                <Phone className="w-4 h-4 mt-0.5 text-navy-400 shrink-0" />
                <span>0305-6838555</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy-300">
                <Mail className="w-4 h-4 mt-0.5 text-navy-400 shrink-0" />
                <span>{t.contact.emailValue}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy-300">
                <MapPin className="w-4 h-4 mt-0.5 text-navy-400 shrink-0" />
                <span>9, Club Road, Sadiqabad, near Rahim Yar Khan, Punjab, Pakistan</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy-300">
                <Clock className="w-4 h-4 mt-0.5 text-navy-400 shrink-0" />
                <span>{t.contact.hoursValue}</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-navy-400">
            © {new Date().getFullYear()} TM&DC Dental Clinic. {t.footer.rights}
          </p>
          <p className="text-sm text-navy-400">
            Designed with care for healthier smiles.
          </p>
        </div>
      </div>
    </footer>
  );
}
