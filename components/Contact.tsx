export default function Contact() {
  return (
    <section id="contact" className="py-16 scroll-mt-20">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="text-lg font-medium text-text-muted mb-4">
          // initiate communication
        </h2>
        <p className="text-text-muted italic mb-6">"Simplicity is the ultimate sophistication."</p>
        <div className="space-y-4">
          <p>
            <span className="text-text-muted">Email:</span>{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-text-primary hover:text-accent transition-colors"
            >
              your.email@example.com
            </a>
          </p>
          <p>
            <span className="text-text-muted">LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:text-accent transition-colors"
            >
              linkedin.com/in/your-profile
            </a>
          </p>
        </div>
        <p className="text-text-muted text-sm mt-6">Open to opportunities</p>
      </div>
    </section>
  );
}
