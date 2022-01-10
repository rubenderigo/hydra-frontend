import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './UploadImage.module.css';

const UploadImage = ({ formik }) => {
  return (
    <div className={styles['upload-image']}>
      <label htmlFor="icon-button-file">
        <input
          hidden
          accept="image/*"
          id="icon-button-file"
          name="photo"
          type="file"
          onChange={(event) =>
            formik.setFieldValue('photo', event.target.files[0])
          }
        />
        <IconButton aria-label="upload picture" component="span">
          <PhotoCamera sx={{ color: '#9a31e4' }} />
        </IconButton>
      </label>
      {formik.values.photo && (
        <>
          <IconButton
            aria-label="upload picture"
            component="span"
            onClick={() => formik.setFieldValue('photo', null)}
          >
            <DeleteIcon sx={{ color: '#9a31e4' }} />
          </IconButton>
          <img
            alt="place reported"
            width="100px"
            src={URL.createObjectURL(formik.values.photo)}
          />
        </>
      )}
    </div>
  );
};

export default UploadImage;
