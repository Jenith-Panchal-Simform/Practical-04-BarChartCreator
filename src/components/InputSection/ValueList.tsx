import { Fragment } from 'react';
import { List, ListItem, ListItemText, Typography, Divider, Paper } from '@mui/material';
import { useChartData } from '../../context/ChartContext';

export function ValueList() {
  const { chartData } = useChartData();
  const items = chartData.data;
  return (
    <Paper
      sx={{ padding: 2, borderRadius: 2, border: '1px solid blue' }}
      className="flex h-full flex-col shadow-md"
    >
      <Typography variant="h6" gutterBottom>
        Title & Value List
      </Typography>
      <div className="flex-1 overflow-y-auto">
        <List>
          {items.length == 0 && (
            <ListItem>
              <ListItemText>No Items To Show</ListItemText>
            </ListItem>
          )}
          {items.map((item, index) => (
            <Fragment key={index}>
              <ListItem>
                <ListItemText primary={item.title} secondary={`Value: ${item.value}`} />
              </ListItem>
              {index < items.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </div>
    </Paper>
  );
}
