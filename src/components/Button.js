import styles from "styles/Button.module.scss";

const Button = ({ title, bgColor }) => {
  return (
    <div className={styles.container}>
      <button type="button" style={{ backgroundColor: bgColor ? bgColor : "#000000" }}>
        {title}
      </button>
    </div>
  );
};

export default Button;
