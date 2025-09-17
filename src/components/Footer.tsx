import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight
} from "lucide-react";

const footerSections = [
  {
    title: "Platform",
    links: [
      { name: "Features", href: "#features" },
      { name: "Architecture", href: "#architecture" },
      { name: "Security", href: "#security" },
      { name: "Integrations", href: "#integrations" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#docs" },
      { name: "API Reference", href: "#api" },
      { name: "Tutorials", href: "#tutorials" },
      { name: "Case Studies", href: "#cases" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Contact", href: "#contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Security Policy", href: "#security-policy" },
      { name: "Compliance", href: "#compliance" }
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-cyber-darker border-t border-cyber-blue/20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border/20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-cyber-green text-cyber-green">
              Stay Updated
            </Badge>
            <h3 className="text-2xl font-bold mb-4">
              Get the latest cybersecurity insights and product updates
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of security professionals who rely on our intelligence briefings 
              to stay ahead of emerging threats and AI-powered defense strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-background/20 border border-border/50 rounded-lg focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button variant="cyber" className="px-8">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-gradient-cyber">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-teal bg-clip-text text-transparent">
                  SecureAI Defense Matrix
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The next generation of cybersecurity powered by federated learning and autonomous AI agents. 
                Protecting cloud infrastructure with real-time threat detection and response.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyber-blue" />
                  <span>San Francisco, CA & Remote</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyber-blue" />
                  <span>security@secureai.dev</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyber-blue" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-2 rounded-lg bg-background/20 hover:bg-cyber-blue/20 text-muted-foreground hover:text-cyber-blue transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerSections.map((section) => (
                  <div key={section.title}>
                    <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-cyber-blue transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 SecureAI Defense Matrix. Built for the Thales Hackathon. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Badge variant="outline" className="border-cyber-green text-cyber-green">
                SOC 2 Certified
              </Badge>
              <Badge variant="outline" className="border-cyber-blue text-cyber-blue">
                ISO 27001
              </Badge>
              <Badge variant="outline" className="border-cyber-purple text-cyber-purple">
                GDPR Compliant
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};