import { Fragment, useState } from 'react';
import { List, ListItem, ListItemText, Typography, Divider, Paper } from '@mui/material';

export function ValueList() {
  const [items] = useState([
    { title: 'Apples', value: 10 },
    { title: 'Bananas', value: 5 },
    { title: 'Cherries', value: 8 },
    { title: 'Dates', value: 12 },
    { title: 'Elderberries', value: 7 },
    { title: 'Figs', value: 4 },
    { title: 'Grapes', value: 15 },
  ]);

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
