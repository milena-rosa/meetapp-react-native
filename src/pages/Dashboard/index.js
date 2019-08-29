import React, { useState, useMemo, useEffect } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, subDays, addDays } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';
import {
  Container,
  DateForm,
  DateButton,
  DateText,
  MeetupsList,
} from './styles';

function Dashboard({ isFocused, navigation }) {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  const formattedDate = useMemo(
    () => format(date, "d 'de' MMMM", { locale: ptBR }),
    [date]
  );

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('subscriberMeetups', {
        params: { date },
      });

      setMeetups(response.data);
    }

    if (isFocused) {
      loadMeetups();
    }
  }, [date, isFocused]);

  function handleChangeDate(action) {
    if (action === 'prev') {
      setDate(subDays(date, 1));
    } else if (action === 'next') {
      setDate(addDays(date, 1));
    }
  }

  async function handleSubscription(id) {
    try {
      await api.post(`subscriptions/${id}`);
      navigation.navigate('Subscriptions');
    } catch (error) {
      Alert.alert('Algo deu errado', error.message);
    }
  }

  return (
    <Background>
      <Container>
        <DateForm>
          <DateButton onPress={() => handleChangeDate('prev')}>
            <Icon name="keyboard-arrow-left" size={30} color="#fff" />
          </DateButton>

          <DateText style={{ fontFamily: 'Montserrat-Bold' }}>
            {formattedDate}
          </DateText>

          <DateButton onPress={() => handleChangeDate('next')}>
            <Icon name="keyboard-arrow-right" size={30} color="#fff" />
          </DateButton>
        </DateForm>

        <MeetupsList
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              data={item}
              onSubmit={() => handleSubscription(item.id)}
              action="Realizar inscrição"
            />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
