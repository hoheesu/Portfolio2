import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5000/skills",
});

export const getSkillData = async () => {
  const res = await instance.get("/");
  console.log(res.data);
  return res.data;
};
