import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const Separator = styled.View`
  background: rgba(255, 255, 255, 0.1);
  height: 1px;
  margin: 20px 0;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  background: #e5556e;
  margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
  background: #d44059;
  height: 42px;
  margin-top: 15px;
`;
