import "./home.css";
import me from "../../assets/me.jpeg"; 

function Home() {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return <section id="home" className="home-section" >
        <div className="home-container">
            <div className="home-grid">

                {/* Textos */}
                <div className="home-text-block">
                    <div>
                        <h1 className="home-title">
                            <span className="home-highlight">Olá, eu sou</span><br />
                            Rodrigo Albano
                        </h1>

                        <h2 className="home-subtitle">Desenvolvedor Fullstack</h2>

                        <p className="home-description">
                            Desenvolvimento de soluções tecnológicas com foco em impacto e inovação.
                        </p>
                    </div>

                    <div className="home-buttons">
                        <button
                            onClick={() => scrollToSection("contato")}
                            className="home-btn-primary"
                        >
                            Entre em Contato
                        </button>

                        <a
                            href="https://github.com/RodrigoAlbanoSD?tab=repositories"
                            className="home-btn-outline"
                        >
                            Ver Projetos
                        </a>
                    </div>
                </div>

                {/* Imagem */}
                <div className="home-image-wrapper">
                    <div className="home-image-container">
                        <div className="home-image-glow"></div>

                        <img
                            src={me}
                            alt="Rodrigo"
                            className="home-image"
                        />
                    </div>
                </div>

            </div>
        </div>
    </section>
}

export default Home;

