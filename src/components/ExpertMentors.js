// EXPERT MENTORS COMPONENT
// Section for displaying mentor profiles with LinkedIn links
// To add/edit mentors, update the 'mentors' array below

import Image from 'next/image';

const LinkedInIcon = () => (
  // LinkedIn SVG icon for mentor profiles
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="inline-block align-middle text-blue-500 mr-1">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
  </svg>
);

const ExpertMentors = () => {
  const mentors = [
    {
      name: "Dr. Sachin Ahuja",
      position: "ED Engineering",
      organization: "Chandigarh University",
      image: "/Sachin Sir.jpeg",
      linkedin: "https://www.linkedin.com/in/dr-sachin-ahuja-0885a235/"
    },
    {
      name: "Dr. Ruchika Gupta",
      position: "AD UIE Research",
      organization: "Chandigarh University",
      image: "/Ruchika M.jpeg",
      linkedin: "https://www.linkedin.com/in/ruchikagupta09/"
    },
    {
      name: "Dr. Puneet Kumar",
      position: "AD CSE",
      organization: "Chandigarh University",
      image: "/Puneet SIr.jpeg",
      linkedin: "https://www.linkedin.com/in/dr-puneet-kumar-2a84b531/"
    },
    {
      name: "Dr. Gurmeet Saini",
      position: "Faculty Co-Advisor",
      organization: "Chandigarh University",
      image: "/Gurmeet.jpeg",
      linkedin: "https://www.linkedin.com/in/gurmeet-kaur-saini-4b6815213/"
    }
  ];

  return (
    <section id="mentors" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title and intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Expert Mentors</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from industry experts and academic leaders
          </p>
        </div>
        
        {/* Mentors grid: each card shows image, name, position, organization, and LinkedIn link */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-400 hover:bg-gray-800/90 transition-all duration-300 text-center group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-600 group-hover:border-green-400 transition-colors duration-300">
                <Image
                  src={mentor.image}
                  alt={`${mentor.name} portrait`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                {mentor.name}
              </h3>
              <p className="text-green-400 font-medium mb-2">
                {mentor.position}
              </p>
              <p className="text-gray-300 text-sm mb-2">
                {mentor.organization}
              </p>
              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 text-blue-500 hover:text-green-400 font-medium text-sm mt-2"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertMentors;
// End EXPERT MENTORS COMPONENT

// This section shows all the expert mentors.
// To add a mentor, just add to the 'mentors' array below.
// You can change their name, position, organization, image, or LinkedIn link.
