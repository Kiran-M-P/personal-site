const skills = [
  "Java",
  "Spring Boot",
  "MySQL",
  "Kafka",
  "Microservices",
  "System Design",
];

export default function About() {
  return (
    <section id="about" className="py-16 scroll-mt-20">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="text-lg font-medium text-text-muted mb-4">// about</h2>
        <p className="text-text-primary mb-4 leading-relaxed">
        I’m a backend engineer with 3.7 years of experience building systems and APIs.
         Over the last few years, I’ve worked on real-world systems handling thousands of requests and integrations, where things don’t always go as planned (and that’s where most of the learning happens).
        </p>
        <p className="text-text-primary mb-4 leading-relaxed">
        From reducing failure rates to chasing down production issues, I’ve spent a lot of time understanding how systems behave outside ideal conditions. I think in terms of trade-offs, not just what works, 
        but what continues to work as systems scale. 
        </p>
        <p className="text-text-primary mb-6 leading-relaxed">
        Coffee fuels my day.
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
