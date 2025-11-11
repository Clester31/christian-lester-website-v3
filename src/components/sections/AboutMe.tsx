export default function AboutMe() {
  return (
    <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-12 w-full text-base sm:text-lg mx-auto">
      <div className="bg-(--color-card) p-3 sm:p-4 rounded-xl border border-(--color-border) gap-1 flex flex-col">
        <h1 className="font-semibold text-lg sm:text-xl mb-2">About Me</h1>
        <p className="leading-relaxed">
          Hi! My name is Christian Lester. I am a passionate and aspiring
          frontend engineer who enjoys creating fun and feature-rich web
          applications with seamless and stylish front-end designs. I have over
          4+ years of experience with using front-end technology and creating
          web applications.
        </p>
      </div>
      <div className="bg-(--color-card) p-3 sm:p-4 rounded-xl border border-(--color-border) gap-1 flex flex-col">
        <h1 className="font-semibold text-lg sm:text-xl mb-2">Education</h1>
        <p className="leading-relaxed">
          I attended the University of Pittsburgh from 2021-2025 and graduated
          with a Bachelor's in Computer Science along with a minor in
          Information Science. My classes and projects focused on various topics
          such as low-level systems/architecture, data structures/algorithms,
          web development, AI databases, software engineering practices, etc.
        </p>
      </div>
      <div className="bg-(--color-card) p-3 sm:p-4 rounded-xl border border-(--color-border) gap-1 flex flex-col">
        <h1 className="font-semibold text-lg sm:text-xl mb-2">Experience</h1>
        <p className="leading-relaxed">
          I have over 4+ years of experience working as a programming instructor
          for multiple STEM-based educational programs. I worked alongside
          students to help them learn and apply programming fundamentals to
          create projects focused around their special interests and hobbies.
          Additionally I developed a web application for a non-profit
          organization focused on assisting formerly incarcerated individuals
          with re-entry into society.
        </p>
      </div>
    </div>
  );
}
