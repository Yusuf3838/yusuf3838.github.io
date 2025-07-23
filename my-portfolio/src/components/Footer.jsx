const Footer = () => {
    return (
      <footer className="bg-dark py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Yusuf Sheikhali. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer