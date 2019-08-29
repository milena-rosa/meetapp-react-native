import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const DateForm = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 34px;
`;

export const DateButton = styled.TouchableOpacity``;

export const DateText = styled.Text`
  color: #fff;
  font-size: 20px;
  line-height: 23px;
  padding: 0 15px;
`;

export const MeetupsList = styled.FlatList.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
})``;
