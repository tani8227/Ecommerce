
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  function getCheckBoxValue(event) {
    // const { name, checked } = event.target;
   
   
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Samsung" />}
        label="Samsung"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Apple" />}
        label="Apple"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Realme" />}
        label="Realme"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Redmi" />}
        label="Redmi"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Oppo" />}
        label="Oppo"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Vivo" />}
        label="Vivo"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="OnePlus" />}
        label="OnePlus"
      />
    </FormGroup>
  );
}