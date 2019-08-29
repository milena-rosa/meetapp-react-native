import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';
import { Container, MeetupsList } from './styles';

function Subscriptions({ isFocused, navigation }) {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    async function loadSubscriptions() {
      const response = await api.get('subscriptions');
      setSubscriptions(response.data);
    }

    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`subscriptions/${id}`);

    if (response.data.message === 'ok') {
      Alert.alert('Sucesso', 'Sua meetup foi cancelada com sucesso!');
    } else {
      Alert.alert('Erro', 'Algo deu errado!');
    }

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <MeetupsList
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              data={item.meetup}
              onSubmit={() => handleCancel(item.id)}
              action="Cancelar inscrição"
            />
          )}
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
