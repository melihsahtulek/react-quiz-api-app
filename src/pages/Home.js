import Select from "components/Select";
import { useState } from "react";
import styles from "styles/Home.module.scss";

const Home = () => {
  const [selectsValues, setSelectsValues] = useState([]);

  return (
    <section className={styles.home}>
      <div className={styles.select}>
        <Select
          id="categories"
          title="select category"
          options={[
            { id: 1, name: "cat 1" },
            { id: 2, name: "cat 2" },
            { id: 3, name: "cat 3" },
          ]}
          selectsValues={selectsValues}
          setSelectsValues={setSelectsValues}
        />
      </div>
    </section>
  );
};

export default Home;
