import { useState } from "react";
// import "./index.css";  


// css acmaq lazimdir 



import { RiArrowDropDownLine } from "react-icons/ri";

[{ value: "blue" }];
export default function Dropdown({
	
  options = ["blue", "green", "red", "yellow"],
}) {
  const [current, setCurrent] = useState(null);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="dropdown">
      <div
        className="uiselect"
        onClick={() => setToggle((prev) => (prev = !prev))}
      >
        <p className="header">{current ?? "Select color"}</p>
        <RiArrowDropDownLine/>
      </div>
      <div className="uioption" style={{ display: toggle ? "block" : "none" }}>
        {options.map((el) => (
          <p className="uioption_names"
            onClick={() => {
              setCurrent(el), setToggle((prev) => (prev = !prev));
            }}
          >
            {el}
          </p>
        ))}
      </div>
    </div>
  );
}
