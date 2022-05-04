import styles from "styles/Select.module.scss";
import GetIcon from "components/GetIcon";
import { useContext, useEffect } from "react";
import SelectContext from "context/SelectContext";
import clsx from "clsx";

const Select = ({ options, title, id, selectsValues, setSelectsValues }) => {
  const { activeSelect, setActiveSelect } = useContext(SelectContext);

  useEffect(() => {
    document.addEventListener("click", ({ target }) => (target?.getAttribute("class")?.includes("select") ? false : setActiveSelect(null)));
  }, []);

  const setValue = (obj) => {
    let arr = [...selectsValues];
    if (arr.length > 0) {
      let index = null;
      let filter = arr.filter((item, i) => {
        if (item.select_id === obj.select_id) {
          index = i;
        }
        return item.select_id === obj.select_id;
      });

      if (filter.length > 0) {
        arr[index] = obj;
      } else {
        arr.push(obj);
      }
    } else {
      arr.push(obj);
    }

    setSelectsValues(arr);
  };

  return (
    <div
      className={styles.select}
      id={id}
      onClick={() => {
        activeSelect === id ? setActiveSelect(null) : setActiveSelect(id);
      }}
    >
      <div className={clsx(styles.selectHeader, activeSelect === id ? styles.active : styles.notActive)}>
        <h4>{title}</h4>
        <div className={styles.icon}>
          <GetIcon icon="BsCaretDownFill" size={17} />
        </div>
      </div>

      <div className={clsx(styles.selectContent, activeSelect === id ? styles.show : styles.hide)}>
        {options.map((option) => (
          <div className={styles.option} key={option.id} onClick={() => setValue({ select_id: id, option_id: option.id })}>
            <span>{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Select.defaultProps = {
  options: [],
  title: "select",
};

export default Select;
