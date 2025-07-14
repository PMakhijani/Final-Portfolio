const Respons = () => {
  const currentRoles = [ // Changed from currentRole to currentRoles (plural) and wrapped in array brackets
    {
      title: "Council Member",
      company: "Technical Council IIT Gandhinagar",
      duration: "May 2025 - Present",
      location: "Remote",
      responsibilities: [
        "Contribute ideas and support for building internal tools or platforms for campus-wide use (portals, websites, automation tools).",
        "Plan and execute college-level tech events, including coding competitions, hardware hackathons, and innovation challenges.",
        "Guide and assist student-led tech clubs (e.g., MeanMechanics, ML CLub, Metis) in organizing sessions, workshops, and competitions."
      ]
    },
    {
      title: "Council Member",
      company: "Industrial Relations and Projects (IR&P) council, IIT Gandhinagar",
      duration: "June 2025 - Present",
      location: "Remote",
      responsibilities: [
        "Serve as a bridge between students and industries to promote collaborative projects, internships, and live problem-solving engagements.",
        "Reach out to companies, startups, and research labs for potential collaborations and partnerships with IITGN.",
        "Help bring in interdisciplinary and technical projects from external organizations for student participation under faculty mentorship."
      ]
    }
  ]; 
  const previousRoles = [
    {
      title: "Sponsorship Executive",
      company: "TedxIITGandhinagar",
      duration: "July 2024 - Apr 2025",
      location: "Remote",
      responsibilities: [
        "Identified and reached out to potential sponsors, drafting professional proposals to secure funding.",
        "Coordinated with partners for branding, deliverables, and timely communication.",
        "Contributed to achieving key sponsorship targets, ensuring smooth financial backing for the event."
      ]
    },
    {
      title: "Conclave And Symposium Executive",
      company: "Amalthea 2024",
      duration: "July 2024 - Dec 2024",
      location: "Remote",
      responsibilities: [
        "Assisted in curating and inviting high-profile speakers from academia and industry.",
        "Managed scheduling, session planning, and backend logistics during live symposiums and conclave talks.",
        "Ensured seamless execution by coordinating with tech, content, and hospitality teams."
      ]
    }
  ];

  const RoleCard = ({ role, isCurrent }) => (
    <div className={`bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-8 hover:shadow-2xl hover:border-gray-700 transition-all duration-300 ${isCurrent ? 'border-l-4 border-indigo-500' : ''}`}>
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-lg ${isCurrent ? 'bg-indigo-900' : 'bg-gray-800'}`}>
            <div className={`${isCurrent ? 'text-indigo-400' : 'text-gray-400'}`}>
              <BriefcaseIcon />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{role.title}</h3>
            <p className="text-lg text-indigo-400 font-medium">{role.company}</p>
          </div>
        </div>
        {isCurrent && (
          <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
            Current
          </span>
        )}
      </div>
      
      <div className="flex items-center space-x-4 mb-6 text-gray-400">
        <div className="flex items-center space-x-2">
          <CalendarIcon />
          <span className="text-sm">{role.duration}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPinIcon />
          <span className="text-sm">{role.location}</span>
        </div>
      </div>
      
      <ul className="space-y-3">
        {role.responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-300">{responsibility}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Current Role</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What I'm working on right now
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> 
            {/* Added grid for multiple cards */}
            {currentRoles.map((role, index) => (<RoleCard key={index} role={role} isCurrent={true} />))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Previous Experience</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My journey and past roles that shaped my skills
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {previousRoles.map((role, index) => (
              <RoleCard key={index} role={role} isCurrent={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Respons;
