import React, { useEffect, useState } from "react";
import img1 from "../assets/image/wheyred.jpeg";
import "../css/navbar.css";
import "../css/homepage.css";
import CategoryBox from "./CategoryBox";

export default function Category() {
  const [givedata, setgivedata] = useState([]);
  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setgivedata(data);
      });
  }, []);

  return (
    <>
      <div className="category-box-container">
        <h1>Category</h1>
        <div className="category-card-container flex flex-wrap justify-c-ctr ">
          {givedata.categories?.map((a) => (
            <CategoryBox
              categoryImage={a.categoryImage}
              name={a.categoryName}
            />
          ))}
          {console.log(givedata.categories)}
        </div>
      </div>
    </>
  );
}
