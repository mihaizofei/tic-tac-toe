import React from 'react';
import { Button } from '@material-ui/core';

function Square({ value, onClick }) {
  return (
    <Button
      className="square"
      onClick={onClick}
      variant="outlined"
      style={{maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px'}}>
      {value}
    </Button>
  );
}
export default Square;