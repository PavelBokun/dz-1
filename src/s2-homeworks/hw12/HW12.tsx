import React, { useEffect } from "react";
import s from "./HW12.module.css";
import s2 from "../../s1-main/App.module.css";
import SuperSelect from "../hw07/common/c5-SuperSelect/SuperSelect";
import { useDispatch, useSelector } from "react-redux";
import { ThemeState, changeThemeId } from "./bll/themeReducer";
import { AppStoreType } from "../hw10/bll/store";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import { MenuItem } from "@mui/material";

/*
 * 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
 * 2 - получить themeId из редакса
 * 3 - дописать тип и логику функции change
 * 4 - передать пропсы в SuperSelect
 * */
type TypeThemes = {
  id: number;
  value: string;
};

const themes: TypeThemes[] = [
  { id: 1, value: "light" },
  { id: 2, value: "blue" },
  { id: 3, value: "dark" },
];

const HW12 = () => {
  const themeId = useSelector((state: AppStoreType) => state.theme.themeId);

  const dispatch = useDispatch();
  const change = (id: number) => {
    console.log(id);
    dispatch(changeThemeId(id));
  };

  useEffect(() => {
    console.log(themeId);
    document.documentElement.dataset.theme = themeId + "";
  }, [themeId]);
 const handleChange=(id:number)=>{
    dispatch(changeThemeId(id))
 }
  return (
    <div id={"hw12"}>
      <div id={"hw12-text"} className={s2.hwTitle}>
        Homework #12
      </div>
      
      <div className={s2.hw}>
        <SuperSelect
          id={"hw12-select-theme"}
          className={s.select}
          // сделать переключение тем
          onChangeOption={change}
          options={themes}
          value={themeId}
        />
      </div>
    </div>
  );
};

export default HW12;
