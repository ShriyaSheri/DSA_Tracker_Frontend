import React, { useState, useEffect } from "react";
import Sample from "./Sample";
import ProgressBar from "./ProgressBar";

function Question(props) {
  const { category } = props;
  const questions = category.questions;
  const [percentage, setPercentage] = useState([]);
  
  useEffect(() => {
    getAllPercentages();
  }, []);

  const getAllPercentages = async () => {
    try {
      const response = await fetch('http://localhost:5000/data/getPercentages', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const json = await response.json();
      console.log(json);
      setPercentage(json);
    } catch (error) {
      console.error('Error fetching data', error.message);
    }
  }

  const Category_data = percentage && percentage.category_values;
  const Category_Values = Category_data && Category_data[category.category_name];
  const { categoryQuestions, categoryDone, categoryPercentage } = Category_Values || {};

  return (
    <div>
      <ProgressBar done={categoryDone} percentage={categoryPercentage} total={categoryQuestions} />
      <div>
        {category.category_name}
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Question Name
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
              <th scope="col" className="px-6 py-3">
                Difficulty
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {questions.map((element) => (
              <Sample key={element._id} question={element} getAllPercentages={getAllPercentages} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Question;
