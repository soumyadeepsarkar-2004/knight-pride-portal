import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Crown, Twitter, Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      toast.success("Subscribed!", {
        description: "You'll receive KKR updates in your inbox",
      });
      setEmail("");
    }
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Squad", href: "#squad" },
    { label: "Matches", href: "#matches" },
    { label: "Stats", href: "#stats" },
    { label: "Gallery", href: "#gallery" },
    { label: "Fan Zone", href: "#fanzone" },
  ];

  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-hero text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold">KKR</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Kolkata Knight Riders - Two-time IPL Champions embodying the spirit of "Korbo Lorbo Jeetbo Re"
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Eden Gardens</li>
              <li>Kolkata, West Bengal 700021</li>
              <li>India</li>
              <li className="flex items-center gap-2 mt-4">
                <Mail className="w-4 h-4" />
                <span>info@kkr.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Newsletter</h3>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Subscribe to receive the latest KKR updates and match notifications
            </p>
            <form onSubmit={handleNewsletter} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Sponsor Logos Placeholder */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <p className="text-center text-sm text-primary-foreground/60 mb-4">Our Partners</p>
          <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-32 h-16 bg-primary-foreground/10 rounded-lg flex items-center justify-center"
              >
                <span className="text-xs text-primary-foreground/40">Partner {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/80 mb-2">
            © 2025 Kolkata Knight Riders. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <span className="text-primary-foreground/40">|</span>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <span className="text-primary-foreground/40">|</span>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
