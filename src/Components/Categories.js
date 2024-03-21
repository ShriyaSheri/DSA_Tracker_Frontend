import React, { useEffect ,useState} from 'react'
import Card from './Card'
import ProgressBar from './ProgressBar';
function Categories(props) {
    const {data,changeCategory}=props;
    const [percentage,setPercentage]=useState([])
    const totalvalues=percentage&&percentage['Total_values'];
    const {Questions_done,Total_Questions,Total_percentage}=totalvalues||{};
    useEffect(() => {
      getAllPercentages()
    
    }, [])
    
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
          setPercentage(json)
      }
      catch (error) {
          console.error('Error fetching data', error.message)
      }
    }
  return (
    <div className = "app">
    <ProgressBar done={Questions_done} percentage={Total_percentage} total={Total_Questions}/>
    <div className="container">
      {data.map((element) => (
        <div key={element._id}>
          <Card
            title={element.category_name}
            changeCategory={changeCategory}
            categoryData={element}
          />
        </div>
      ))}
  </div>
  </div>
  )
}

export default Categories

