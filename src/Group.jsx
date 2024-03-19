import { useState } from 'react';
import FundContainer from "./FundContainer";

const Group = ({ onDataSubmit }) => {
  const [fields, setFields] = useState([{ name: '', percentage: '' }]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
    // Pass data to parent component
    onDataSubmit({ title, description, fields });
  };

  return (
    <div className="w-full relative h-[1072px] text-left text-36xl-3 text-black font-ibm-plex-sans">
      <div className="absolute top-[0px] left-[0px] rounded-[34.58px] bg-white w-[792px] h-[1072px]" />
      <div className="absolute top-[221px] left-[50px] bg-gainsboro w-[692px] h-[788px]" />
      <div className="absolute top-[53px] left-[50px] w-[692px] h-[143px]">
        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[20px]">
          <input
            type="text"
            className="w-[354px] relative inline-block"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-[692px] relative text-11xl leading-[50.14px] inline-block"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="absolute top-[196px] left-[50px] w-[692px]">
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
    </div>
  );
};

export default Group;
