import React, { useState } from 'react';
import './tryout.css'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
  } from 'chart.js';
  
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
  );

const Poll = () => {
  const [responses, setResponses] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setResponses([...responses, formData.get('response')]);
  };

  const chartData = {
    labels: ['Option 1', 'Option 2', 'Option 3','Option 4','Option 5'],
    datasets: [
      {
        label: 'Poll Results',
        data: [
          responses.filter((response) => response === 'Option 1').length,
          responses.filter((response) => response === 'Option 2').length,
          responses.filter((response) => response === 'Option 3').length,
          responses.filter((response) => response === 'Option 4').length,
          responses.filter((response) => response === 'Option 5').length
        ],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className='votes'>

      <div className='poll'>
          <form onSubmit={handleSubmit}>
          <label htmlFor="response">Select your option:</label>
          <select name="response" id="response">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
          <option value="Option 5">Option 5</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      </div>
      <div className="chart">
      <Bar data={chartData} />
      </div>
    </div>
  );
};

export default Poll;
