import { useFormik } from 'formik';

import {
  Rating,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import UploadImage from './UploadImage';
import Button from './Button';

import styles from './Modal.module.css';

const Modal = ({ showCreateReport }) => {
  const formik = useFormik({
    initialValues: {
      address: '',
      description: '',
      typeReport: '',
      rating: 1,
      photo: null,
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <div className={styles['modal-create-report']}>
      <div className={styles['modal-content']}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles['modal-address-photo']}>
            <TextField
              fullWidth
              id="address"
              name="address"
              label="Dirección"
              variant="standard"
              color="secondary"
              margin="dense"
              onChange={formik.handleChange}
            />
            <UploadImage formik={formik} />
          </div>
          <TextField
            id="description"
            name="description"
            placeholder="Escriba su reporte aquí..."
            multiline
            variant="standard"
            color="secondary"
            fullWidth
            rows={20}
            onChange={formik.handleChange}
          />
          <div className={styles['modal-type_report-assessment']}>
            <RadioGroup
              row
              aria-label="gender"
              name="typeReport"
              onChange={formik.handleChange}
            >
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
            <Rating
              sx={{
                color: '#9A31E4',
                fontSize: '2.5rem',
                alignSelf: 'center',
              }}
              id="rating"
              name="rating"
              onChange={formik.handleChange}
            />
          </div>
          <div className={styles['modal-buttons']}>
            <Button fun={showCreateReport} className="close">
              Cancelar
            </Button>
            <Button className="publish" type="submit">
              Publicar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
