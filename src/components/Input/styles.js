import styled from 'styled-components/native';

export const Container = styled.View`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 50px;
  padding: 0 20px;

  align-items: center;
  flex-direction: row;
`;

export const TxtInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
})`
  flex: 1;
  margin-left: 10px;

  color: #fff;
  font-size: 18px;
`;
