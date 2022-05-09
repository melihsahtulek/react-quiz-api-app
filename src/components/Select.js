import styles from "styles/Select.module.scss";
import GetIcon from "components/GetIcon";
import { useContext, useEffect, useState } from "react";
import SelectContext from "context/SelectContext";
import clsx from "clsx";

const Select = ({ options, title, id, selectsValues, setSelectsValues }) => {
  const { activeSelect, setActiveSelect } = useContext(SelectContext); // show/hide
  const [selectedValue, setSelectedValue] = useState(title); // for select title

  useEffect(() => {
    document.addEventListener("click", ({ target }) => {
      return target?.getAttribute("class")?.includes("select") ? false : setActiveSelect(null);
    });
  }, []);

  const setValue = (obj) => {
    let arr = [...selectsValues];
    if (arr.length > 0) {
      let index = 0;
      let filter = arr.filter((item) => item.name === obj.select_id)[0];

      filter.value = obj.option_value;
      filter.value_id = obj.option_id;

      arr.forEach((item, i) => {
        if (item.name === obj.select_id) {
          index = i;
        }
      });

      arr[index] = filter;
      setSelectsValues(arr);
    }

    let { name } = options.filter((option) => option.id === obj.option_id)[0];
    setSelectedValue(name);
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
        <h4 className="select_title">{selectedValue}</h4>
        <div className={clsx(styles.icon, "select_icon")}>
          <GetIcon icon="BsCaretDownFill" size={15} />
        </div>
      </div>

      <div className={clsx(styles.selectContent, activeSelect === id ? styles.show : styles.hide)}>
        {options.map((option) => (
          <div className={styles.option} key={option.id} onClick={() => setValue({ select_id: id, option_id: option.id, option_value: option.name })}>
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
