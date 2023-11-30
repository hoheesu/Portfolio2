import axios from "axios";
import { skillArrayType } from "../type";
import { Dispatch, SetStateAction } from "react";

export const instance = axios.create({
  baseURL: "http://localhost:5000",
});

export const getSkillData = async (
  setData: Dispatch<SetStateAction<skillArrayType>>,
) => {
  try {
    const res = await instance.get("/skills");
    setData(res.data || []);
  } catch (err) {
    console.log(err);
  }
};
export const getToolData = async (
  setData: Dispatch<SetStateAction<skillArrayType>>,
) => {
  try {
    const res = await instance.get("/tool");
    setData(res.data || []);
  } catch (err) {
    console.log(err);
  }
};
