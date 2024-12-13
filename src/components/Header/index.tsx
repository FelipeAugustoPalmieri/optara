import logo from '../../assets/logo/icon-optara.png';

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Optara Logo" className="w-21 h-20" />
        <span className="text-3xl text-black">Optara</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <a href="#features" className="text-gray-600 hover:text-gray-900">
          About
        </a>
        <a href="#testimonials" className="text-gray-600 hover:text-gray-900">
          Testimonials
        </a>
        <a href="#pricing" className="text-gray-600 hover:text-gray-900">
          Pricing
        </a>
      </nav>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <a
          href="#signin"
          className="text-gray-600 hover:text-gray-900 hidden md:block"
        >
          Sign in
        </a>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-blue-700">
          Get started today
        </button>
      </div>
    </header>
  );
};
