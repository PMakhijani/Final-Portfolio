import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Brain, Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 90, color: "bg-blue-500" },
        { name: "JavaScript", level: 85, color: "bg-yellow-500" },
        { name: "TypeScript", level: 80, color: "bg-blue-600" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
        { name: "Next.js", level: 75, color: "bg-gray-800" }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 80, color: "bg-green-600" },
        { name: "Express.js", level: 85, color: "bg-gray-700" },
        { name: "Python", level: 75, color: "bg-yellow-600" },
        { name: "MongoDB", level: 70, color: "bg-green-500" },
        { name: "PostgreSQL", level: 65, color: "bg-blue-700" }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Git/GitHub", level: 85, color: "bg-gray-800" },
        { name: "Docker", level: 70, color: "bg-blue-500" },
        { name: "AWS", level: 60, color: "bg-orange-600" },
        { name: "Figma", level: 75, color: "bg-purple-500" },
        { name: "Vite", level: 80, color: "bg-purple-600" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Tech Stack</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-8 hover:shadow-2xl hover:border-gray-700 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-900 rounded-lg mr-4">
                  <div className="text-indigo-400">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
