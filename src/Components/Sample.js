import React from "react";
import axios from 'axios';
import { useEffect } from "react";
function Sample(props) {
  const { question,getAllPercentages } = props;
  const statusChange = async(e) =>
  {
    e.preventDefault();
    console.log(e.target.value);
    const product = {question_status:e.target.value};
    // const status = e.target.value;
    await axios.patch('http://localhost:5000'+'/questions'+'/update/'+`${question._id}`, product);
    getAllPercentages();
  }
  useEffect(() => {
    getAllPercentages();
  }, []);
  return (
    <tr className="question bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      {/* <td class="px-6 py-4">{props.id}</td> */}
      <td class="px-6 py-4">
      {question.question_name}
      </td>
      {/* <td class="px-6 py-4">{props.difficulty == 0?"Easy":props.difficulty == 1?"Medium":"Hard"}</td> */}
      <td>
      <a href={question.question_link[0]} target="_blank"
            rel="noopener noreferrer" >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/></svg>
        </a>
      </td>
      {/* <td>
        <a href={props.solution}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg></a>
      </td> */}
      <td class="px-6 py-4">{question.question_difficulty}</td>
      <td class="px-6 py-4">
        <form class="max-w-sm mx-auto">
            <label
              for="status"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <select
              id="status"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={question.question_status}
              onChange = {statusChange}
            >
              <option value="Pending">Pending</option>
              <option value="Revisit">Revisit</option>
              <option value="Done">Done</option>
            </select>
          </form>
      </td>
    </tr>
   

   
  );
}

export default Sample;
