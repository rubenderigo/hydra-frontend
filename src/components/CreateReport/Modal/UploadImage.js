import React, { useState } from 'react';

import { IconButton, Box } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import FlipCameraIosIcon from '@mui/icons-material/FlipCameraIos';

import styles from './UploadImage.module.css';

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {selectedImage ? (
        <>
          <Box className={styles.UploadImageWrapper}>
            <Box className={styles.IconsWrapper}>
              <IconButton aria-label="my reports">
                <label className={styles.UploadImageLabel} htmlFor="photo">
                  <FlipCameraIosIcon sx={{ color: 'rgba(154, 49, 228, 50%)' }} />
                </label>
                <input
                  id="photo"
                  className={styles.UploadInput}
                  type="file"
                  name="photo"
                  accept="image/png, image/jpeg"
                  webkitRelativePath
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => setSelectedImage(null)}
                aria-label="my reports"
              >
                <DeleteIcon sx={{ color: 'rgba(154, 49, 228, 50%)' }} />
              </IconButton>
            </Box>
            <img
              alt="not fount"
              width="50px"
              height="50px"
              src={URL.createObjectURL(selectedImage)}
            />
          </Box>
        </>
      ) : (
        <>
          <Box className={styles.UploadImageWrapper}>
            <IconButton aria-label="my reports">
              <label className={styles.UploadImageLabel} htmlFor="photo">
                <PhotoCameraIcon sx={{ color: 'rgba(154, 49, 228, 50%)' }} />
              </label>
              <input
                id="photo"
                className={styles.UploadInput}
                type="file"
                name="photo"
                accept="image/png, image/jpeg"
                webkitRelativePath
                onChange={(event) => {
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </IconButton>
          </Box>
        </>
      )}
    </>
  );
};

export default UploadImage;
