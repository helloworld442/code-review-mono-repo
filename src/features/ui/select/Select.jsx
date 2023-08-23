import "./Select.scss";
import { createContext, useContext, useState } from "react";

const SelectContext = createContext(null);

const Select = ({ children, name, label, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenSelect = () => {
    setIsOpen(true);
    onSelect({ name, value: "" });
  };

  const onCloseSelect = (skill) => {
    setIsOpen(false);
    onSelect({ name, value: skill });
  };

  return (
    <SelectContext.Provider value={{ isOpen, onOpenSelect, onCloseSelect }}>
      <div className="select">
        <span className="select-label">{label}</span>
        {children}
      </div>
    </SelectContext.Provider>
  );
};

const SelectTrigger = ({ trigger }) => {
  const { onOpenSelect } = useContext(SelectContext);

  return (
    <div className="select-trigger" onClick={onOpenSelect}>
      {trigger}
    </div>
  );
};

const SelectMenu = ({ children }) => {
  const { isOpen } = useContext(SelectContext);

  return isOpen ? <ul className="select-menu">{children}</ul> : null;
};

const SelectItem = ({ item }) => {
  const { onCloseSelect } = useContext(SelectContext);

  return (
    <li className="select-item" onClick={() => onCloseSelect(item)}>
      {item}
    </li>
  );
};

Select.Trigger = SelectTrigger;
Select.Menu = SelectMenu;
Select.Item = SelectItem;

export default Select;
