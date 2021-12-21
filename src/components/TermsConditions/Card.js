import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import RadioButton from 'components/TermsConditions/RadioButton';

import styles from './Card.module.css';

const Card = () => {
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  const handleClick = () => checked && history.push('/inicio');

  return (
    <div className={styles['card-container']}>
      <div className={styles['content']}>
        <h2>Terminos y condiciones</h2>
        <p>
          En HYDRA apostamos por una comunidad segura por lo que antes de
          comenzar te pedimos que leas nuestras normas comunitarias para que
          tengas la mejor experiencia posible.
        </p>
        <div className={styles['content-list']}>
          <ul>
            <li>
              Hac massa, nulla tellus, bibendum tincidunt aliquam, odio mauris.
              Nulla velit mattis sollicitudin nisi. Sed eu enim tristique
              dictumst dolor interdum adipiscing. Aenean diam et libero in
              adipiscing. Blandit et magna magna ipsum risus rhoncus sed. Nisi,
              sed a vel, velit vestibulum, facilisis facilisis. Laoreet dolor,
              velit ullamcorper id laoreet odio.
            </li>
            <li>
              Massa, suscipit mauris tellus vestibulum, sapien, phasellus
              sagittis vulputate sagittis. Diam aliquet nec rhoncus morbi.
              Nullam at molestie facilisis blandit. Integer facilisis tempor,
              sagittis feugiat tellus. Curabitur purus cras viverra rhoncus
              massa non.
            </li>
            <li>
              Magnis eu aliquet commodo risus morbi risus, fermentum adipiscing
              adipiscing. Donec porttitor morbi egestas enim egestas fermentum.
              Viverra adipiscing senectus adipiscing tempor sed magna. Purus
              accumsan phasellus viverra mattis est aenean tristique. Quam
              vehicula ut praesent laoreet mi, senectus sem donec at. Nec sit
              purus fringilla ornare tincidunt. Eget quisque pretium sit arcu.
              Integer vitae nibh in mi at pellentesque. Leo semper diam sit
              vitae proin sociis in at velit. Cursus tempus placerat a donec
              habitant ac, sit. Eu sed eget amet viverra elementum. Mollis
              tristique euismod facilisi morbi nec rhoncus amet. Nulla in morbi
              laoreet id orci dictumst fames augue. Urna malesuada quis enim
              maecenas. Quis ut enim.
            </li>
            <li>
              Hac massa, nulla tellus, bibendum tincidunt aliquam, odio mauris.
              Nulla velit mattis sollicitudin nisi. Sed eu enim tristique
              dictumst dolor interdum adipiscing. Aenean diam et libero in
              adipiscing. Blandit et magna magna ipsum risus rhoncus sed. Nisi,
              sed a vel, velit vestibulum, facilisis facilisis. Laoreet dolor,
              velit ullamcorper id laoreet odio.
            </li>
            <li>
              Massa, suscipit mauris tellus vestibulum, sapien, phasellus
              sagittis vulputate sagittis. Diam aliquet nec rhoncus morbi.
              Nullam at molestie facilisis blandit. Integer facilisis tempor,
              sagittis feugiat tellus. Curabitur purus cras viverra rhoncus
              massa non.
            </li>
          </ul>
        </div>
        <div className={styles['content-buttons-accept']}>
          <RadioButton label="Acepto los terminos y condiciones" checked={checked} setChecked={setChecked} />
          <button className={styles['next_link']} onClick={handleClick}>
            continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
