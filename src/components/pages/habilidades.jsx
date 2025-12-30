import { useState, useEffect } from "react";
import "./habilidades.css";

function Habilidades() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    const el = document.getElementById("habilidades");
    if (el) observer.observe(el);

    return () => el && observer.unobserve(el);
  }, []);

  const habilidades = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: 90 },
        { name: "React Native", level: 90 },
        { name: "Design UI/UX", level: 70 },
        { name: "XX", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "C#", level: 90 },
        { name: "Java", level: 70 },
        { name: "Node.js", level: 60 },
        { name: "APIs REST", level: 70 },
        { name: "Bancos SQL", level: 80 },
        { name: "MongoDB", level: 90 },
      ],
    },
    {
      category: "Ferramentas & Outros",
      items: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "WebForms", level: 70 },
        { name: "AWS", level: 80 },
        { name: "RabbitMQ", level: 90 },
        { name: "WebForms", level: 60 },
      ],
    },
  ];

  return (
    <section id="habilidades">
      <div className="habilidades-container">
        <div className={`habilidades-animated ${isVisible ? "visible" : ""}`}>
          <h2 className="habilidades-title">
            Minhas <span>Habilidades</span>
          </h2>

          <p className="habilidades-subtitle">
            Expertise e tecnologias com as quais trabalho
          </p>
          {/* Tabela de nivel das habilidades */}
          <div className="habilidades-grid">
            {habilidades.map((category, cIdx) => (
              <div
                key={cIdx}
                className={`habilidade-card ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${cIdx * 200}ms` }}
              >
                <h3 className="habilidade-card-title">{category.category}</h3>

                <div className="space-y-6">
                  {category.items.map((habilidade, sIdx) => (
                    <div key={sIdx} className="habilidade-item">
                      <div className="habilidade-item-header">
                        <span className="habilidade-name">{habilidade.name}</span>
                        <span className="habilidade-level">{habilidade.level}%</span>
                      </div>

                      <div className="progress-bar-bg">
                        <div
                          className="progress-bar-fill"
                          style={{
                            width: isVisible ? `${habilidade.level}%` : "0%",
                            transitionDelay: `${cIdx * 200 + sIdx * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GRID DE TECNOLOGIAS */}
          <div className="tech-grid">
            {[
              "Java",
              "Mongo",
              "React",
              "HTML/CSS",
              "SQL",
              "C#",
              "JavaScript",
              "Git",
            ].map((tech, idx) => (
              <div
                key={idx}
                className={`tech-card ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <span className="tech-text">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;