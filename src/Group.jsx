import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Group = () => {
  const [fields, setFields] = useState([{ name: '', percentage: '' }]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [chartInstance, setChartInstance] = useState(null);

  const handleFieldChange = (index, fieldName, value) => {
    const newFields = [...fields];
    newFields[index][fieldName] = value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { name: '', percentage: '' }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = () => {
    // Generate pie chart
    generatePieChart();
  };

  const generatePieChart = () => {
    const ctx = document.getElementById('pieChart');
  
    // Check if a chart instance exists
    if (chartInstance) {
      // Destroy the previous chart instance
      chartInstance.destroy();
    }
  
    const chartData = {
      labels: fields.map(field => field.name),
      datasets: [{
        data: fields.map(field => field.percentage),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1
      }]
    };
  
    // Create a new chart instance
    setChartInstance(new Chart(ctx, {
      type: 'pie',
      data: chartData,
    }));
  };

  useEffect(() => {
    // Generate initial pie chart on component mount
    generatePieChart();
  }, []);

  return (
    <div className="w-full relative text-left text-36xl-3 text-black font-ibm-plex-sans">
      <div className="flex flex-col items-start justify-start gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {fields.map((field, index) => (
          <div key={index} className="flex gap-4 mb-2">
            <input
              type="text"
              placeholder="Field Name"
              value={field.name}
              onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
            />
            <input
              type="number"
              placeholder="Percentage"
              value={field.percentage}
              onChange={(e) => handleFieldChange(index, 'percentage', e.target.value)}
            />
            {index > 0 && (
              <button type="button" onClick={() => handleRemoveField(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddField}>
          Add Field
        </button>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="mt-8">
        <canvas id="pieChart" />
      </div>
    </div>
  );
};

export default Group;
