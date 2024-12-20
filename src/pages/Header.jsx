import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { assets } from "../assets/assets";

const links = [
  { name: "CREATE UR OWN", path: "/collection" },
  { name: "SEE TUTORIALS", path: "/tutorials" },
  { name: "ATTEND QUIZZES ", path: "/mainquiz" },
  { name: "TRY CONTESTS", path: "/contest" },
];

const stats = [
  { name: "STATES", value: 28 },
  { name: "UNION TERRITORIES", value: 8 },
  { name: "ART FORMS", value: 50 },
  { name: "ARTISANS", value: 7 }, // We'll treat "7m+" as 7 for counting
];

export default function Example() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [currentStats, setCurrentStats] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 3000; // Total duration in ms
    const steps = 120; // Total steps for the count
    const interval = duration / steps; // Time per step

    const counters = stats.map((stat) => ({
      startValue: 0,
      endValue: stat.value,
    }));

    let stepCount = 0;

    const intervalId = setInterval(() => {
      setCurrentStats(() =>
        counters.map((counter) => {
          const progress = Math.min(stepCount / steps, 1); // Progress as a fraction (0 to 1)
          return counter.startValue + progress * (counter.endValue - counter.startValue);
        })
      );

      stepCount++;
      if (stepCount > steps) clearInterval(intervalId); // End animation
    }, interval);

    return () => clearInterval(intervalId); // Cleanup
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src={assets.bg1}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">AIRAVAT</h2>
          <div className="text-pretty tracking-tight absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-gray-300 text-lg font-bold p-4 z-10">
            Exploring the colors of India
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => navigate(link.path)} // Navigate programmatically
                className="hover:text-gray-300 focus:outline-none"
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </button>
            ))}
          </div>
          <dl className="py-12 mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.name === "ARTISANS" ? `${Math.floor(currentStats[index])}m+` : Math.floor(currentStats[index])}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
