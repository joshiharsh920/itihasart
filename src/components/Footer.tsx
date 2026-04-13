import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-3">ItihasartConservation</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Dedicated to preserving and restoring India's rich architectural and artistic heritage for future generations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>info@itihasartconservation.com</li>
              <li>+91 98765 43210</li>
              <li>India</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} ItihasartConservation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
