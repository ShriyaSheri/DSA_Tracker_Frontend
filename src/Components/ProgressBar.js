import React from 'react';

function ProgressBar(props) {
  const { percentage,done,total } = props;
    // console.log(Total_Percentages);
  // Check if Total_Percentages is defined before accessing its properties

  return (
    <div className='w-full bg-red text-yellow-200 '>
      <div>
        {done }
        {total}
        {percentage }
      </div>
    </div>
  );
}

export default ProgressBar;
