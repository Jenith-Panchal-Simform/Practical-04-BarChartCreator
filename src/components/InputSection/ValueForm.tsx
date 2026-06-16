import { useState } from 'react';

import { Button, FormGroup, TextField } from '@mui/material';

import { useChartData } from '../../context/ChartContext';

export const ValueForm = () => {
  const { dispatch } = useChartData();

  // Local state for axis form
  const [xAxisLabel, setXAxisLabel] = useState('');
  const [yAxisLabel, setYAxisLabel] = useState('');

  // Local state for data form
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  const handleAxesForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'SET_AXIS',
      payload: {
        yAxisLabel,
        xAxisLabel,
      },
    });
  };

  const handleDataForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !value.trim()) return;
    dispatch({
      type: 'SET_DATA',
      payload: {
        title,
        value: Number(value),
      },
    });

    // Clear form after submit
    setTitle('');
    setValue('');
  };

  return (
    <div className="flex flex-6 flex-col gap-5 p-5">
      {/* Axis Form */}
      <form onSubmit={handleAxesForm}>
        <FormGroup
          sx={{
            padding: 2,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'primary.main',
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
          }}
        >
          <TextField
            name="xaxis"
            placeholder="X axis"
            value={xAxisLabel}
            onChange={(e) => setXAxisLabel(e.target.value)}
          />

          <TextField
            name="yaxis"
            placeholder="Y axis"
            value={yAxisLabel}
            onChange={(e) => setYAxisLabel(e.target.value)}
          />

          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </FormGroup>
      </form>

      {/* Data Form */}
      <form onSubmit={handleDataForm}>
        <FormGroup
          sx={{
            padding: 2,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'primary.main',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            name="value"
            type="number"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button type="submit" variant="outlined">
            Add Data
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};
