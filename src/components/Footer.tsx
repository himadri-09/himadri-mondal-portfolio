import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-4">Himadri Mondal</h3>
            <p className="text-muted-foreground mb-4">
              AI Engineer specializing in machine learning, deep learning, and
              natural language processing.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/himadri-09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/himadrimondal09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:mondalhimadri43@gmail.com"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="tel:+919641643774"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  mondalhimadri43@gmail.com
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+91-9641643774</span>
              </li>
              <li className="flex items-center space-x-2">
                <Github className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">himadri-09</span>
              </li>
              <li className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">himadrimondal09</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Himadri Mondal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;