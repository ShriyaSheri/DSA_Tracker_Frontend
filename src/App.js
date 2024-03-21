import "./App.css";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import { useState,useEffect } from "react";
import Question from "./Components/Question";
import ProgressBar from "./Components/ProgressBar";
function App() {
  
  const [data, setData] = useState([]);


  const intial='hi';
  const [category, setCategory] = useState(intial);
  const changeCategory = (newCategory) => {
    setCategory(newCategory);
    console.log(category)
    console.log(newCategory)
  };
  // const host = 'http://localhost:5000'
  const getAllData = async () => {
    // console.log(localStorage.getItem('token'))
    try {
        const response = await fetch('http://localhost:5000/data/getAllData', {
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
        setData(json)
    }
    catch (error) {
        console.error('Error fetching data', error.message)
    }
}

  useEffect(() => {
    getAllData()
    // Log the updated value of category when it changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // Log the updated value of category when it changes
  }, [category]);
  return (
    <div className="App">
      <div>
        <Router>
          <Header />
          
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Categories data={data} changeCategory={changeCategory} />
              }
            />
            <Route exact path={`/${category.category_name}`} element=<Question data={data} category={category} /> />
            <Route path='*' element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
