import React from "react";

const ContactSection = () => {
  return (
    <div id="contact" className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 items-center gap-10">
        {/* Left Side */}
        <div>
          <h2 className="text-7xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-3xl text-gray-400 mb-8">
            Have a project in mind or want to collaborate? Feel Free to reach out. I'm always open to discussing new opportunities.
          </p>

          <div className="space-y-4">
            <a
              href="https://instagram.com/piyush.makhijani?igsh=NXInN29zMjNkeWc3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center space-x-3 hover:scale-105 transition-transform"
            >
              <img src="/assets/socials/instagram.svg" alt="Facebook" className="w-11 h-11" />
              <span className="text-purple-600">Follow me on Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/in/piyush-makhijani-52a064371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center space-x-3 hover:scale-105 transition-transform"
            >
              <img src="/assets/socials/linkedin.svg" alt="LinkedIn" className="w-11 h-11" />
              <span className="text-blue-300">Connect with me on LinkedIn</span>
            </a>
            <a
              href="tel:+918408908090"
              className="text-2xl flex items-center space-x-3 hover:scale-105 transition-transform">
              <img src="/assets/socials/whatsapp.svg" alt="WhatsApp" className="w-11 h-11" />
              <span className="text-green-400">+91 8408908090</span>
            </a>
             <a
               href="mailto:piyush.makhijani@iitgn.ac.in"
               className="text-2xl flex items-center space-x-3 hover:scale-105 transition-transform"
               >
               <img src="/assets/socials/gmail.svg" alt="Email" className="w-11 h-11" />
               <span className="text-neutral-400">piyush.makhijani@iitgn.ac.in</span>
             </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-full h-full">
          <img
            src="/assets/pfp3.png"
            alt="Avatar"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent rounded-xl"/>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent rounded-xl"/>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

