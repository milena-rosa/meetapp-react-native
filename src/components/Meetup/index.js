import React from 'react';
import PropTypes from 'prop-types';

import { Container, Banner, Info, Title, SubmitButton } from './styles';
import InfoText from '~/components/InfoText';

import banner from '~/assets/images/banner.png';

export default function Meetup({ data, onSubmit, action }) {
  console.tron.log(data);
  return (
    <Container>
      {data.file ? (
        <Banner source={{ uri: data.file.url }} />
      ) : (
        <Banner source={banner} />
      )}
      <Info>
        <Title style={{ fontFamily: 'Montserrat-Bold' }}>{data.title}</Title>
        <InfoText icon="event">{data.formattedDate}</InfoText>
        <InfoText icon="place">{data.location}</InfoText>
        <InfoText icon="person">{data.user.name}</InfoText>
      </Info>
      <SubmitButton onPress={onSubmit}>{action}</SubmitButton>
    </Container>
  );
}

Meetup.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    }),
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    formattedDate: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
  action: PropTypes.string.isRequired,
};

Meetup.defaultProps = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      url: banner,
    }),
  }),
};
