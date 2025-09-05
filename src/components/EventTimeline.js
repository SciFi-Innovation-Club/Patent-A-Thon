// EVENT TIMELINE COMPONENT
// This section shows the event timeline.
// To add or change a timeline event, edit the 'timeline' array below.
// You can change the date, title, icon, or color for each event.

'use client';
import { Calendar, FileText, Upload, Award, Trophy, Flag } from 'lucide-react';
import { useEffect } from 'react';

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

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const items = document.querySelectorAll('.timeline-fade');
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.3 });
    items.forEach(item => {
      observer.observe(item);
    });
    return () => items.forEach(item => observer.unobserve(item));
  }, []);

  return (
    <section id="timeline" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title and intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Event Timeline</h2>
          <p className="text-lg text-green-400 font-semibold animate-pulse">Follow the journey, step by step!</p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-400 via-blue-500 to-purple-600 h-full shadow-lg"></div>
          <div className="space-y-12">
            {/* Timeline grid: each card shows icon, date, title, and animation */}
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
                  <div className={`relative ${isEven ? 'pr-8' : 'pl-8'} ${isEven ? 'text-right' : 'text-left'} w-full md:w-1/2`}>
                    <div className="timeline-fade opacity-0 translate-y-8 transition-all duration-700 bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700 hover:border-green-400 shadow-lg group">
                      <div className={`flex items-center gap-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                        <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xl md:text-2xl font-bold text-white mb-1 break-words">{item.date}</div>
                          <div className="text-gray-300 text-base md:text-lg break-words">{item.title}</div>
                        </div>
                      </div>
                    </div>
                    {/* Timeline dot */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 ${item.color} rounded-full border-4 border-black ${isEven ? '-right-3' : '-left-3'} transition-transform duration-300 group-hover:scale-125`}></div>
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
// End EVENT TIMELINE COMPONENT
