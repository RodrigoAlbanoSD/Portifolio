const styles = {
    cardContainer: {
        backgroundColor: "#1f2937",
        border: "1px solid #1f2937",
        borderRadius: "0.5rem",
        padding: "1.5rem",
        marginTop: "5%",
        flex: "2",
        maxWidth: "25%",

    },
    posiçãoTexto: {
        color: "#d1d5db",
    },
    companyContainer: {
        marginBottom: "10%"
    },
    empresaTexto: {
        color: "rgb(5, 150, 105)",
    },
    dataTexto: {
        color: "rgb(52 211 153 / var(--tw-text-opacity, 1))",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        borderRadius: "9999px",
        padding: "0.5rem",
        fontSize: "0.8rem"

    },
    linguagensContainer: {
        display: "flex",
        flexWrap: "wrap",

    },
    funçãoTexto: {
        color: "rgb(209 213 219 / var(--tw-text-opacity, 1))",

    },
    linguagemButton: {
        backgroundColor: "#374151",
        borderRadius: "9999px",
        padding: "0.5rem",
        marginLeft: "5%",
        marginBottom: "5%",
        color: "#d1d5db",
        fontSize: "1rem"
    }
}

function Card(props) {
    //data="" posição="" empresa="" função="" linguagens=[]/
    return <div className={props.class} style={styles.cardContainer}>
<span style={styles.dataTexto}>{props.data}</span>
        <div style={styles.companyContainer}>
            
            <h2 style={styles.posiçãoTexto}>{props.posição}</h2>
<h3 style={styles.empresaTexto}>{props.empresa}</h3>

        </div>
        
        <p style={styles.funçãoTexto}>{props.função}</p>
        <div className={props.class} style={styles.linguagensContainer}>
            {props.linguagens.map((linguagem, lId) => (
                <div key={lId} style={styles.linguagemButton}>{linguagem}</div>
            ))}
        </div>

    </div>
}

export default Card;