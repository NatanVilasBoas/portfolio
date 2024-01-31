import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <>
            <button className={styles.pushable} style={{outlineColor: `${props.color}`}}>
                <span className={styles.shadow} style={{background: `${props.color}`}}></span>
                <span className={styles.edge} style={{background: `${props.color}`}}></span>
                <span className={styles.front} style={{background: `${props.colorLight}`}}>
                    {props.text}
                </span>
            </button>
        </>
    )
}

export default Button;