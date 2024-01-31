import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <>
            <button className={`${styles.cButton} ${styles.cButtonGooey}`}> {props.text}
                <div className={styles.cButton__blobs}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: "block", height: "0", width: "0"}}>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                        <feBlend in="SourceGraphic" in2="goo"></feBlend>
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export default Button;