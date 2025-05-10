import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="mb-16 mt-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Andreja{' '}
            <span className="hidden md:inline">Kojadinovic</span>
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://x.com/yourprofile" // TODO: Replace with your actual X profile URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/andreja-kojadinovic/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:andreja.kojadinovic@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://github.com/AndrejaSRB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
