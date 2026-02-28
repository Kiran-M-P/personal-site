const skills = [
  "Java",
  "Spring Boot",
  "MySQL",
  "REST APIs",
  "Microservices",
  "Git",
];

export default function About() {
  return (
    <section id="about" className="py-16 scroll-mt-20">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="text-lg font-medium text-text-muted mb-4">// about</h2>
        <p className="text-text-primary mb-4 leading-relaxed">
          I build backend systems and APIs, focusing on clean architecture and scalable solutions. 
          My experience spans microservices, database design, and building reliable services that power production applications.
        </p>
        <p className="text-text-primary mb-6 leading-relaxed">
          This site is where I document what I learn and think. Filter by tags to find topics that interest you.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm border border-muted rounded text-text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
