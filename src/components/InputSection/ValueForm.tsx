import { Button, FormGroup, TextField } from '@mui/material';

export const ValueForm = () => {
  return (
    <div className="flex flex-6 flex-col gap-5 p-5">
      {/* X and Y axis input */}
      <form>
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
          <TextField name="xaxis" variant="outlined" placeholder="X axis" />
          <TextField name="yaxis" variant="outlined" placeholder="Y axis" />
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </FormGroup>
      </form>

      {/* Value input */}
      <form>
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
          <TextField name="title" variant="outlined" placeholder="Title" />
          <TextField name="value" variant="outlined" placeholder="Value" />
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};
