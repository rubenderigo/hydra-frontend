import PropTypes from 'prop-types';

import Input from './Input';
import Button from './Button';

const FieldController = ({
  children,
  typeField,
  typeInput,
  name,
  label,
  placeholder,
}) => {
  switch (typeField) {
    case 'input': {
      return (
        <Input
          name={name}
          type={typeInput}
          label={label}
          placeholder={placeholder}
        />
      );
    }
    case 'button': {
      return <Button>{children}</Button>;
    }
    default: {
      return null;
    }
  }
};

FieldController.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  name: PropTypes.string,
  typeField: PropTypes.string.isRequired,
  typeInput: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FieldController;
