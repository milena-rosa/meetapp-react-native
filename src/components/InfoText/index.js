import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function InfoText({ children, icon }) {
  return (
    <Container>
      {icon && <Icon name={icon} size={14} color="#999" />}
      <Text style={{ fontFamily: 'Montserrat-Regular' }}>{children}</Text>
    </Container>
  );
}

InfoText.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string.isRequired,
};

InfoText.defaultProps = {
  icon: null,
};
