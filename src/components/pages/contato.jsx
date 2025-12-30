import "./contato.css";
import { useState } from "react";
import emailjs from 'emailjs-com';
function Contato() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [submit, setSubmit] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            nome,
            email,
            assunto,
            mensagem,
        };

        emailjs
            .send(
                "service_mu9qexz",      
                "template_esmwrgr",     
                templateParams,
                "jRjUQxkmHYeBZbnqp"       
            )
            .then(() => {
                setSubmit("Obrigado pelo interesse. Entrarei em contato com você assim que possível.");
                setIsVisible(true);

                setNome("");
                setEmail("");
                setAssunto("");
                setMensagem("");
            })
            .catch(() => {
                setSubmit("Erro ao enviar mensagem. Tente novamente.");
                setIsVisible(true);
            });
    };

    return <section id="contato" className="contato-section">
        <div className="contato-container">
            <h2 className="contato-title">Entre em <span>Contato</span></h2>
            <p className="contato-subtitle">Entre em contato comigo por favorzinho</p>
            {/* Form */}
            <form className="contato-form" onSubmit={handleSubmit}>
                <div className="left-column">
                    <div className="contato-inputbox">
                        <label className="label">Nome</label>
                        <input type="text" value={nome} className="text-input" required onChange={(e) => setNome(e.target.value)}></input>
                    </div>
                    <div className="contato-inputbox">
                        <label className="label">Email</label>
                        <input type="text" className="text-input" value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className="contato-inputbox">
                        <label className="label">Assunto</label>
                        <input type="text" className="text-input" value={assunto} required onChange={(e) => setAssunto(e.target.value)}></input>
                    </div>

                </div>
                <div className="right-column">
                    <label className="label">Mensagem</label>
                    <textarea className="text-area" value={mensagem} onChange={(e) => setMensagem(e.target.value)} ></textarea>
                    <div className="contato-button-box">
                        <button type="submit" className="submit-button">Enviar</button>
                    </div>

                    <span className={isVisible ? "greetins" : "hidden"}>{submit}</span>
                </div>
            </form>
            {/* Card para contato */}
            <div className="contato-cards-box">
                <a className="contato-card">
                    <h3>Email</h3>
                    <span>rodrigocastroalbano@gmail.com</span>
                </a>
                <a className="contato-card" href="https://www.linkedin.com/in/rodrigo-castro-albano-itpa/">
                    <h3>LinkdIn</h3>
                    <span>Rodrigo Castro Albano</span>
                </a>
                <a className="contato-card" href="https://github.com/RodrigoAlbanoSD?tab=repositories">
                    <h3>GitHub</h3>
                    <span>@rodrigo</span>
                </a>
            </div>
        </div>
    </section>
}

export default Contato;