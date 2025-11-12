// import React from "react";
// import { Link } from "react-router-dom";

// function Footer() {
  
//   return (
//     <div className="mt-16">
//       <footer
//         className="px-4 sm:px-6 md:px-12 lg:px-20 w-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white"
//         aria-label="Footer for AI Resume Builder"
//       >
//         <div className="flex flex-col md:flex-row justify-between w-full gap-8 sm:gap-10 border-b border-indigo-200 py-6 sm:py-8">
//           <div className="md:max-w-96">
//             <Link to="/" className="flex items-center gap-3 hover:no-underline">
//               <img
//                 src="./assets/resume.svg"
//                 alt="AI Resume Builder Icon"
//                 width="50"
//                 height="50"
//                 className="flex-shrink-0"
//               />
//               <h1 className="text-3xl text-white font-bold m-0">
//                 AI Resume Builder
//               </h1>
//             </Link>
//             <p className="mt-4 sm:mt-6 text-xs sm:text-sm">
//               AI Resume Builder empowers job seekers to create professional,
//               ATS-optimized resumes in minutes, helping you land your dream job
//               with ease.
//             </p>
//             <div className="flex items-center gap-2 mt-4">
//               <a href="https://play.google.com/store">
//                 <img
//                   src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
//                   alt="Download AI Resume Builder on Google Play"
//                   className="h-8 sm:h-10 w-auto border border-indigo-200 rounded hover:opacity-80 transition"
//                 />
//               </a>
//               <a href="https://www.apple.com/app-store/">
//                 <img
//                   src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
//                   alt="Download AI Resume Builder on the App Store"
//                   className="h-8 sm:h-10 w-auto border border-indigo-200 rounded hover:opacity-80 transition"
//                 />
//               </a>
//             </div>
//           </div>
//           <div className="flex-1 flex flex-col sm:flex-row items-start justify-end gap-8 sm:gap-12 md:gap-20 lg:gap-40">
//             <div>
//               <h2 className="font-semibold mb-4 sm:mb-5 text-sm sm:text-base">
//                 Company
//               </h2>
//               <ul className="text-xs sm:text-sm space-y-2">
//                 <li>
//                   <Link to="/" className="hover:text-indigo-100 transition">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   {/* <Link className="hover:text-indigo-100 transition">
//                     Features
//                   </Link> */}
//                   <a
//                     href="#features"
//                     onClick={(e) => handleScroll(e, "features")}
//                     className="text-slate-700 hover:text-indigo-600 transition"
//                   >
//                     Features
//                   </a>
//                 </li>
//                 <li>
//                   {/* <Link className="hover:text-indigo-100 transition">
//                     Testimonials
//                   </Link> */}

//                   <a
//                     href="#testimonials"
//                     onClick={(e) => handleScroll(e, "testimonials")}
//                     className="text-slate-700 hover:text-indigo-600 transition"
//                   >
//                     Testimonials
//                   </a>
//                 </li>
//                 <li>
//                   {/* <Link className="hover:text-indigo-100 transition">
//                     contact
//                   </Link> */}
//                   <a
//                     href="#contact"
//                     onClick={(e) => handleScroll(e, "contact")}
//                     className="text-slate-700 hover:text-indigo-600 transition"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h2 className="font-semibold mb-4 sm:mb-5 text-sm sm:text-base">
//                 Get in Touch
//               </h2>
//               <div className="text-xs sm:text-sm space-y-2">
//                 <p>+1-800-555-1234</p>
//                 <p>support@airesumebuilder.com</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <p className="pt-4 text-center text-xs sm:text-sm pb-2">
//           Copyright {new Date().getFullYear()} ©{" "}
//           <a
//             href="https://airesumebuilder.com"
//             className="hover:text-indigo-100 transition"
//           >
//             AI Resume Builder
//           </a>
//           . All Rights Reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }

// export default Footer;
import React from "react";

// This is your Footer component, now with fixes
function Footer() {
  // Implemented the missing scroll handler
  const handleScroll = (e, id) => {
    e.preventDefault(); // Prevent default anchor link behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (id === "top") {
      // Special case for scrolling to the top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-16">
      <footer
        className="px-4 sm:px-6 md:px-12 lg:px-20 w-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white"
        aria-label="Footer for AI Resume Builder"
      >
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 sm:gap-10 border-b border-indigo-200 py-6 sm:py-8">
          <div className="md:max-w-96">
            {/* Replaced <Link> with <a> and added onClick for scrolling */}
            <a
              href="#top"
              onClick={(e) => handleScroll(e, "top")}
              className="flex items-center gap-3 hover:no-underline"
            >
              {/* Replaced local image with an inline SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 text-white"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <h1 className="text-3xl text-white font-bold m-0">
                AI Resume Builder
              </h1>
            </a>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm">
              AI Resume Builder empowers job seekers to create professional,
              ATS-optimized resumes in minutes, helping you land your dream job
              with ease.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
                  alt="Download AI Resume Builder on Google Play"
                  className="h-8 sm:h-10 w-auto border border-indigo-200 rounded hover:opacity-80 transition"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
                  alt="Download AI Resume Builder on the App Store"
                  className="h-8 sm:h-10 w-auto border border-indigo-200 rounded hover:opacity-80 transition"
                />
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row items-start justify-end gap-8 sm:gap-12 md:gap-20 lg:gap-40">
            <div>
              <h2 className="font-semibold mb-4 sm:mb-5 text-sm sm:text-base">
                Company
              </h2>
              <ul className="text-xs sm:text-sm space-y-2">
                <li>
                  {/* Replaced <Link> with <a> */}
                  <a
                    href="#top"
                    onClick={(e) => handleScroll(e, "top")}
                    className="hover:text-indigo-100 transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  {/* Fixed class to be white-on-dark compatible */}
                  <a
                    href="#features"
                    onClick={(e) => handleScroll(e, "features")}
                    className="hover:text-indigo-100 transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  {/* Fixed class to be white-on-dark compatible */}
                  <a
                    href="#testimonials"
                    onClick={(e) => handleScroll(e, "testimonials")}
                    className="hover:text-indigo-100 transition"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  {/* Fixed class to be white-on-dark compatible */}
                  <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, "contact")}
                    className="hover:text-indigo-100 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-4 sm:mb-5 text-sm sm:text-base">
                Get in Touch
              </h2>
              <div className="text-xs sm:text-sm space-y-2">
                <p>+1-800-555-1234</p>
                <p>support@airesumebuilder.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-4 text-center text-xs sm:text-sm pb-2">
          Copyright {new Date().getFullYear()} ©{" "}
          <a
            href="https://airesumebuilder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-100 transition"
          >
            AI Resume Builder
          </a>
          . All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer