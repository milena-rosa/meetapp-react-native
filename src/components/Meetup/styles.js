import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Banner = styled.Image`
  align-self: stretch;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 150px;
  max-width: 300px;
`;

export const Info = styled.View`
  margin: 18px;
`;

export const Title = styled.Text`
  color: #333;
  font-size: 18px;
`;

export const SubmitButton = styled(Button)`
  margin: 0 20px 20px 20px;
`;
