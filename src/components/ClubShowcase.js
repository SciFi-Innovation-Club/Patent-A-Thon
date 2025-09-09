// CLUB SHOWCASE COMPONENT
// Section for showcasing the Sci-Fi Innovation Club
// Displays club information, mission, achievements, and activities

'use client';

import { useTheme } from '../contexts/ThemeContext';
import { Users, Target, Award, Calendar, Lightbulb, Rocket, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const ClubShowcase = () => {
  const { isDarkMode } = useTheme(); // Use global theme context

  const achievements = [
    {
      icon: Award,
      title: "17+ Events Organized",
      description: "Successfully conducted multiple innovation events",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      title: "500+ Members",
      description: "Growing community of innovators and researchers",
      color: "text-blue-400"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Leading innovation initiatives at Chandigarh University",
      color: "text-green-400"
    },
    {
      icon: TrendingUp,
      title: "Growing Impact",
      description: "Expanding reach and influence in the tech community",
      color: "text-purple-400"
    }
  ];

  const activities = [
    {
      title: "Patent Workshops",
      description: "Regular workshops on intellectual property and patent filing",
      icon: "🔬"
    },
    {
      title: "Innovation Competitions",
      description: "Organizing hackathons and innovation challenges",
      icon: "🏆"
    },
    {
      title: "Tech Talks",
      description: "Expert sessions on emerging technologies",
      icon: "💡"
    },
    {
      title: "Research Collaboration",
      description: "Facilitating research partnerships and projects",
      icon: "🤝"
    },
    {
      title: "Mentorship Programs",
      description: "Connecting students with industry experts",
      icon: "👨‍🏫"
    },
    {
      title: "Industry Visits",
      description: "Organizing visits to tech companies and research labs",
      icon: "🏢"
    }
  ];

  return (
    <section id="club-showcase" className={`py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700'}`}>
              Sci-Fi Innovation Club
            </h1>
            <p className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Chandigarh University
            </p>
          </div>
          
          <div className={`max-w-4xl mx-auto p-8 rounded-2xl backdrop-blur-sm border ${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-300'}`}>
            <p className={`text-lg md:text-xl leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              We are a dynamic community of innovators, researchers, and tech enthusiasts dedicated to fostering 
              creativity and technological advancement. Our club serves as a platform for students to explore 
              cutting-edge technologies, develop innovative solutions, and connect with industry leaders.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-800/80 border-gray-700 hover:border-green-400' : 'bg-white/90 border-blue-200 hover:border-blue-400'}`}>
            <div className="flex items-center mb-6">
              <Target className={`w-8 h-8 mr-4 ${isDarkMode ? 'text-green-400' : 'text-blue-500'}`} />
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Mission</h2>
            </div>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              To inspire and empower the next generation of innovators by providing a collaborative environment 
              for learning, creating, and implementing groundbreaking technological solutions that address real-world challenges.
            </p>
          </div>

          <div className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-800/80 border-gray-700 hover:border-purple-400' : 'bg-white/90 border-purple-200 hover:border-purple-400'}`}>
            <div className="flex items-center mb-6">
              <Rocket className={`w-8 h-8 mr-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-500'}`} />
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Vision</h2>
            </div>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              To become the leading innovation hub in academia, fostering a culture of creativity and entrepreneurship 
              that bridges the gap between theoretical knowledge and practical application in emerging technologies.
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl backdrop-blur-sm border text-center transition-all duration-300 hover:scale-105 group ${isDarkMode ? 'bg-gray-800/80 border-gray-700 hover:border-gray-600' : 'bg-white/90 border-gray-300 hover:border-gray-400'}`}
              >
                <achievement.icon className={`w-12 h-12 mx-auto mb-4 ${achievement.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {achievement.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 group ${isDarkMode ? 'bg-gray-800/80 border-gray-700 hover:border-green-400' : 'bg-white/90 border-blue-200 hover:border-blue-400'}`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white group-hover:text-green-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors duration-300`}>
                  {activity.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className={`text-center p-12 rounded-2xl backdrop-blur-sm border ${isDarkMode ? 'bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-gray-600' : 'bg-gradient-to-r from-blue-50/80 to-purple-50/80 border-blue-200'}`}>
          <Star className={`w-16 h-16 mx-auto mb-6 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
          <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Join Our Innovation Journey
          </h2>
          <p className={`text-xl mb-8 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Be part of a community that&apos;s shaping the future of technology. Whether you&apos;re interested in research, 
            development, or entrepreneurship, we have opportunities for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              Contact Us
            </a>
            <a
              href="#events"
              className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black' : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}`}
            >
              View Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubShowcase;

// End CLUB SHOWCASE COMPONENT
