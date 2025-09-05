const Footer = () => {
  return (
    <footer className="w-full bg-white border-t-2 shadow-sm dark:bg-[#181818] dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-6 py-8 md:py-10">
        
        {/* Logo + Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center justify-center space-x-2 rtl:space-x-reverse"
          >
            <span className="self-center   text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              PromptPro
            </span>
          </a>

          {/* Navigation */}
          <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-300">
            <li>
              <a href="#" className="hover:text-purple-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-500 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-500 transition-colors">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left gap-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2025{" "}
            <a href="/" className="hover:underline font-medium text-purple-500">
              PromptPro
            </a>
            . Tous droits réservés.
          </span>

          {/* Social Links (optionnel) */}
          {/* <div className="flex justify-center space-x-5">
            <a
              href="#"
              className="text-gray-500 hover:text-purple-500 transition-colors dark:hover:text-purple-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-500 transition-colors dark:hover:text-purple-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-500 transition-colors dark:hover:text-purple-400"
            >
              <i className="fab fa-github"></i>
            </a>
          </div> */}
      
      
        </div>
      </div>
    </footer>
  );
};

export default Footer;
