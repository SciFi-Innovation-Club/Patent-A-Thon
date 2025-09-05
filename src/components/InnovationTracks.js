import { Heart, Leaf, Brain, Wifi, DollarSign, GraduationCap, Tractor, Factory, Lightbulb } from 'lucide-react';

const InnovationTracks = () => {
  const tracks = [
    {
      icon: Heart,
      title: "HealthTech Innovation",
      description: "Revolutionary healthcare solutions and medical device patents",
      color: "bg-red-500/20 text-red-400"
    },
    {
      icon: Leaf,
      title: "Sustainable Technology",
      description: "Green tech innovations for environmental sustainability",
      color: "bg-green-500/20 text-green-400"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Cutting-edge AI algorithms and intelligent systems",
      color: "bg-purple-500/20 text-purple-400"
    },
    {
      icon: Wifi,
      title: "IoT & Smart Systems",
      description: "Connected devices and smart infrastructure solutions",
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      icon: DollarSign,
      title: "FinTech Solutions",
      description: "Financial technology and blockchain innovations",
      color: "bg-yellow-500/20 text-yellow-400"
    },
    {
      icon: GraduationCap,
      title: "EdTech Platforms",
      description: "Educational technology and learning management systems",
      color: "bg-indigo-500/20 text-indigo-400"
    },
    {
      icon: Tractor,
      title: "AgriTech Solutions",
      description: "Agricultural technology and farming innovations",
      color: "bg-orange-500/20 text-orange-400"
    },
    {
      icon: Factory,
      title: "Smart Manufacturing",
      description: "Industry 4.0 and automated manufacturing systems",
      color: "bg-gray-500/20 text-gray-400"
    },
    {
      icon: Lightbulb,
      title: "Open Innovation",
      description: "Any innovative solution across all domains and industries",
      color: "bg-pink-500/20 text-pink-400"
    }
  ];

  return (
    <section id="tracks" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Innovation Tracks</h2>
          <p className="text-xl text-green-400 font-semibold mb-2 animate-pulse">Unleash your creativity. Pick a track. Patent your idea!</p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose your domain and build groundbreaking solutions that can be patented
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => {
            const IconComponent = track.icon;
            const taglines = [
              "Save lives with tech!",
              "Go green, go future!",
              "Smarter than ever!",
              "Connect everything!",
              "Money moves!",
              "Teach the world!",
              "Grow smarter!",
              "Automate the future!",
              "Break all boundaries!"
            ];
            const hotTracks = [0, 2, 8];
            return (
              <div key={index} className="bg-gray-800/80 rounded-xl p-8 border-2 border-gray-700 hover:border-green-400 shadow-lg hover:shadow-green-500/30 transition-all duration-300 group relative">
                {hotTracks.includes(index) && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-bounce">Hot!</span>
                )}
                <div className={`w-16 h-16 rounded-xl ${track.color} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300`}> 
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {track.title}
                </h3>
                <p className="text-green-400 text-sm mb-2 italic">{taglines[index]}</p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {track.description}
                </p>
                <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition-all">Explore</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InnovationTracks;
