import React from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";
function Card(props) {
    const {changeCategory,title,categoryData}=props
    // console.log(categoryData.category_name);
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex">
            
    <h className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h>

<div>
    <Link to={`/${title}`} className="button" onClick={() => changeCategory(categoryData)}>Start</Link>
    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>

<div>
    </div>
</div>
</div>
  );
}

export default Card;

