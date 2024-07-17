import React from "react";
import instance from "../base";

const getCategories = async () => {
  const data = await instance.get("list.php?c=list");
  return data;
};

export default getCategories;
