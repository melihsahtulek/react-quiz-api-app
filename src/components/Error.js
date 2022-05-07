import styles from "styles/Error.module.scss";

const Error = ({ error }) => {
  const { name, message } = error;

  return (
    <div className={styles.container}>
      <h4>
        {name}
        <br />
        {message}
      </h4>
    </div>
  );
};

export default Error;
