import styles from "styles/Button.module.scss";

const Button = ({ title, bgColor, event }) => {
  return (
    <div className={styles.container}>
      <button type="button" onClick={(e) => event(e)} style={{ backgroundColor: bgColor ? bgColor : "#000000" }}>
        {title}
      </button>
    </div>
  );
};

export default Button;
