function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16 mt-8">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 mb-6 lg:mb-0">
          <a
            className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
            href="https://github.com/AndrejaSRB"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
            href="https://www.linkedin.com/in/andreja-kojadinovic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
            href="mailto:andreja.kojadinovic@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
        <div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} Andreja Kojadinovic
          </p>
        </div>
      </div>
    </footer>
  );
}
