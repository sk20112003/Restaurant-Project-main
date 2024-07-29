
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div  >
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">A brief description of My restaurant and its mission.</p>
          </div>
          
          <div >
            <h3 className="text-xl font-bold mb-4 ">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-gray-400">FaceBook<i className="fab fa-facebook py-3"></i></a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Twitter<i className="fab fa-twitter py-3"></i></a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Instagram<i className="fab fa-instagram py-3"></i></a></li>
              {/* Add more social media icons and links */}
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700"/>
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SANDY Eats. All rights reserved.</p>
          <p>Designed and developed by Santhosh Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
