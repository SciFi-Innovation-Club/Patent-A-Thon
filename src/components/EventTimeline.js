import { Calendar, FileText, Upload, Award, Trophy, Flag } from 'lucide-react';

const EventTimeline = () => {
  const timeline = [
    {
      date: "29 Aug",
      title: "Registration Start",
      icon: Calendar,
      color: "bg-blue-500"
    },
    {
      date: "13 Sep",
      title: "Registration End",
      icon: Calendar,
      color: "bg-red-500"
    },
    {
      date: "17 Sep",
      title: "Draft to Craft",
      icon: FileText,
      color: "bg-green-500"
    },
    {
      date: "26 Sep",
      title: "Compile to File",
      icon: Upload,
      color: "bg-yellow-500"
    },
    {
      date: "15 Oct",
      title: "Grand Finale",
      icon: Award,
      color: "bg-purple-500"
    },
    {
      date: "17 Oct",
      title: "Patent-a-thon 1.0",
      icon: Trophy,
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Event Timeline</h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
                  <div className={`relative ${isEven ? 'pr-8' : 'pl-8'} ${isEven ? 'text-right' : 'text-left'} w-1/2`}>
                    <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
                      <div className={`flex items-center gap-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                        <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-white mb-1">{item.date}</div>
                          <div className="text-gray-300">{item.title}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 ${item.color} rounded-full border-4 border-black ${isEven ? '-right-3' : '-left-3'}`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;
