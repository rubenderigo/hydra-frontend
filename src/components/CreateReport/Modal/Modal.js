import { useState } from 'react';

import {
  Rating,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import UploadImage from './UploadImage';
import Button from './Button';

import styles from './Modal.module.css';

const Modal = ({ showCreateReport }) => {
  const [value, setValue] = useState(1);
  const [photoValue, setPhotoValue] = useState(null);

  const photoReturn = (photo) => {
    setPhotoValue(photo);
  };

  return (
    <div className={styles['modal-create-report']}>
      <div className={styles['modal-content']}>
        <div className={styles['modal-address-photo']}>
          <TextField
            id="standard-basic"
            label="Dirección"
            variant="standard"
            color="secondary"
            margin="dense"
            fullWidth
          />
          <UploadImage photo={photoValue} photoReturn={photoReturn} />
        </div>
        <TextField
          id="standard-textarea"
          placeholder="Escriba su reporte aquí..."
          multiline
          variant="standard"
          color="secondary"
          fullWidth
          rows={20}
        />
        <div className={styles['modal-type_report-assessment']}>
          <FormControl component="fieldset">
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel
                value="opinion"
                control={
                  <Radio
                    sx={{
                      color: '#9A31E4',
                      '&.Mui-checked': {
                        color: '#9A31E4',
                      },
                    }}
                  />
                }
                label="Opinión"
              />
              <FormControlLabel
                value="denuncia"
                control={
                  <Radio
                    sx={{
                      color: '#9A31E4',
                      '&.Mui-checked': {
                        color: '#9A31E4',
                      },
                    }}
                  />
                }
                label="Denuncia"
              />
            </RadioGroup>
          </FormControl>
          <Rating
            sx={{
              color: '#9A31E4',
              fontSize: '2.5rem',
              alignSelf: 'center',
            }}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div className={styles['modal-buttons']}>
          <Button fun={showCreateReport} className="close">Cancelar</Button>
          <Button className="publish">Publicar</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
