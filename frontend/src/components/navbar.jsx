// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from "react-icons/fa";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-sans flex justify-between items-center p-6 relative">
//       <div className='flex items-center'>
//         <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded mr-3" />
//         <h1 className="text-2xl font-bold">NDINDABAHIZIEM LTD </h1>
//       </div>

//       {/* Desktop Menu */}
//       <nav className="space-x-6 hidden md:flex">
//         <ul className="flex space-x-6">
//           <li className="hover:underline"><Link to={'/'}> Home</Link></li>
//           <li className="hover:underline"><Link to={'about'}> About</Link></li>
//           <li className="hover:underline"><Link to={'service'}> Services</Link></li>
//           <li className="hover:underline"><Link to={'certificates'}> Certification</Link></li>
//           <li className="hover:underline"><Link to={'contact'}> Contact</Link></li>
//           <li className="hover:underline"><Link to={'faq'}> Faq</Link></li>
//         </ul>
//       </nav>

//       {/* Mobile Toggle Button */}
//       <button 
//         className="md:hidden text-2xl"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <nav className="absolute top-16 right-6 bg-blue-600 text-white rounded-lg shadow-lg p-4 md:hidden">
//           <ul className="flex flex-col space-y-4">
//             <li><Link to={'/'} onClick={() => setIsOpen(false)}> Home</Link></li>
//             <li><Link to={'about'} onClick={() => setIsOpen(false)}> About</Link></li>
//             <li><Link to={'service'} onClick={() => setIsOpen(false)}> Services</Link></li>
//             <li><Link to={'certificates'} onClick={() => setIsOpen(false)}> Certification</Link></li>
//             <li><Link to={'contact'} onClick={() => setIsOpen(false)}> Contact</Link></li>
//             <li><Link to={'faq'} onClick={() => setIsOpen(false)}> Faq</Link></li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   )
// }

// export default Navbar;




import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "underline decoration-2 underline-offset-4"
      : "hover:underline";

  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-sans flex justify-between items-center p-6 relative">
      <div className='flex items-center'>
        <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded mr-3" />
        <h1 className="text-2xl font-bold">NDINDABAHIZIEM LTD </h1>
      </div>

      {/* Desktop Menu */}
      <nav className="space-x-6 hidden md:flex">
        <ul className="flex space-x-6">
          <li><NavLink to={'/'} className={linkClass} end> Home</NavLink></li>
          <li><NavLink to={'about'} className={linkClass}> About</NavLink></li>
          <li><NavLink to={'service'} className={linkClass}> Services</NavLink></li>
          <li><NavLink to={'certificates'} className={linkClass}> Certification</NavLink></li>
          <li><NavLink to={'contact'} className={linkClass}> Contact</NavLink></li>
          <li><NavLink to={'faq'} className={linkClass}> Faq</NavLink></li>
        </ul>
      </nav>

      {/* Mobile Toggle Button */}
      <button 
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-16 right-6 bg-blue-600 text-white rounded-lg shadow-lg p-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            <li><NavLink to={'/'} className={linkClass} end onClick={() => setIsOpen(false)}> Home</NavLink></li>
            <li><NavLink to={'about'} className={linkClass} onClick={() => setIsOpen(false)}> About</NavLink></li>
            <li><NavLink to={'service'} className={linkClass} onClick={() => setIsOpen(false)}> Services</NavLink></li>
            <li><NavLink to={'certificates'} className={linkClass} onClick={() => setIsOpen(false)}> Certification</NavLink></li>
            <li><NavLink to={'contact'} className={linkClass} onClick={() => setIsOpen(false)}> Contact</NavLink></li>
            <li><NavLink to={'faq'} className={linkClass} onClick={() => setIsOpen(false)}> Faq</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar;