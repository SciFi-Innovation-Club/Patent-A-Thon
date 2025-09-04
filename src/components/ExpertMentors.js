import Image from 'next/image';

const ExpertMentors = () => {
  const mentors = [
    {
      name: "Dr. Sachin Ahuja",
      position: "ED Engineering",
      organization: "Chandigarh University",
      image: "/Sachin Sir.jpeg"
    },
    {
      name: "Dr. Ruchika Gupta",
      position: "AD UIE Research",
      organization: "Chandigarh University",
      image: "/Ruchika M.jpeg"
    },
    {
      name: "Dr. Puneet Kumar",
      position: "AD CSE",
      organization: "Chandigarh University",
      image: "/Puneet SIr.jpeg"
    },
    {
      name: "Dr. Gurmeet Saini",
      position: "Faculty Co-Advisor",
      organization: "Chandigarh University",
      image: "/Gurmeet.jpeg"
    }
  ];

  return (
    <section id="mentors" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Expert Mentors</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from industry experts and academic leaders
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 hover:bg-gray-800/70 transition-all duration-300 text-center group"
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
              <p className="text-gray-400 text-sm">
                {mentor.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertMentors;
