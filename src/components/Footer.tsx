import { Link } from "react-router-dom";

// Social buttons for author if present
const authorSocials = (author?: any) => {
  if (!author) return null;
  const links = [
    author.twitter && { href: author.twitter, icon: "/assets/X-icon.png", label: "X" },
    author.linkedin && { href: author.linkedin, icon: "/assets/LinkedIn-icon.png", label: "LinkedIn" },
    author.facebook && { href: author.facebook, icon: "/assets/facebook-icon.png", label: "Facebook" },
    author.instagram && { href: author.instagram, icon: "/assets/instagram-icon.jpg", label: "Instagram" },
    author.website && { href: author.website, icon: null, label: "Website" },
  ].filter(Boolean);
  if (!links.length) return null;
  return (
    <div className="mt-8">
      <h3 className="font-playfair font-semibold text-lg mb-2 text-white">Connect with the Author</h3>
      <div className="flex flex-wrap gap-2">
        {links.map(({ href, icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="border border-white bg-white text-slm-green-700 hover:bg-slm-green-50 font-semibold rounded px-3 py-1 flex items-center gap-2 transition">
            {icon && <img src={icon} alt={label} className="w-5 h-5" />} {label}
          </a>
        ))}
      </div>
    </div>
  );
};

interface FooterProps {
  author?: any;
}

const Footer = ({ author }: FooterProps) => {
  return (
    <footer className="bg-slm-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/slm-logo.png"
                alt="SLM Logo"
                className="w-10 h-10 object-contain rounded-lg shadow bg-white"
                style={{ maxWidth: "40px", maxHeight: "40px" }}
              />
              <span className="font-playfair font-bold text-xl text-white">SLM Planning & Design</span>
            </div>
            <p className="text-slm-green-100 mb-4 max-w-md">
              Shaping sustainable futures through innovative urban design, planning, 
              3D rendering, and landscape architecture solutions.
            </p>
            <div className="space-y-2 text-slm-green-100">
              <p className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white transition-transform duration-200 hover:scale-110">
                  <img src="/assets/email.png" alt="Email" className="w-5 h-5" />
                </span>
                sandy@slmplanning.com
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white transition-transform duration-200 hover:scale-110">
                  <img src="/assets/phone icone.png" alt="Phone" className="w-5 h-5" />
                </span>
                (703) 947-7885
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white transition-transform duration-200 hover:scale-110">
                  <img src="/assets/address.png" alt="Address" className="w-5 h-5" />
                </span>
                Indianapolis, Indiana, USA
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slm-green-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slm-green-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-slm-green-100 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/process" className="text-slm-green-100 hover:text-white transition-colors">Our Process</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-slm-green-100">
              <li><Link to="/services/urban-design" className="hover:text-white transition-colors">Urban Design</Link></li>
              <li><Link to="/services/urban-planning" className="hover:text-white transition-colors">Urban Planning</Link></li>
              <li><Link to="/services/3d-rendering" className="hover:text-white transition-colors">3D Rendering</Link></li>
              <li><Link to="/services/landscape-architecture" className="hover:text-white transition-colors">Landscape Architecture</Link></li>
            </ul>
          </div>
        </div>
        {authorSocials(author)}
        <div className="border-t border-slm-green-700 mt-8 pt-8 text-center text-slm-green-100">
          <p>&copy; {new Date().getFullYear()} SLM Planning Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
