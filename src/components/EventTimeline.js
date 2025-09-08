'use client';
import { useState } from 'react';

const timeline = [
  { date: "29 Aug", title: "Registration Start", desc: "Kick-off your journey here!" },
  { date: "13 Sep", title: "Registration End", desc: "Last chance to register!" },
  { date: "17 Sep", title: "Draft to Craft", desc: "Turn your raw ideas into structured drafts." },
  { date: "26 Sep", title: "Compile to File", desc: "Prepare your submissions in final form." },
  { date: "15 Oct", title: "Grand Finale", desc: "Showcase your innovation to the jury." },
  { date: "17 Oct", title: "Patent-a-thon 1.0", desc: "Celebrate the innovators and winners." }
];

export default function EventTimeline() {
  const [hovered, setHovered] = useState(-1);

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Event Timeline
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-green-400 via-blue-500 to-purple-500 h-full rounded-full"></div>

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            const isActive = hovered === i;

            return (
              <div
                key={i}
                className={`relative flex w-full mb-16 
                  ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-start`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(-1)}
              >
                {/* Card */}
                <div
                  className={`max-w-md p-6 rounded-xl border bg-gray-800/80 backdrop-blur-sm shadow-xl transition-all duration-500
                  ${isLeft ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8 md:text-left'}
                  ${isActive ? 'border-green-400 scale-105' : 'border-gray-700'}
                  ml-12 md:ml-0`}
                >
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {item.date} — {item.title}
                  </h3>
                  {isActive && <p className="mt-2 text-gray-300 text-sm md:text-base">{item.desc}</p>}
                </div>

                {/* Diamond marker */}
                <div
                  className={`absolute top-1/2 left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-6 h-6 transition-all duration-500
                  ${isActive ? 'bg-green-400 scale-125 shadow-lg shadow-green-400/60' : 'bg-gray-700'}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
