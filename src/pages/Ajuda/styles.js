import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding-top: ${statusBarHeight + 'px'};
  margin-left: 5px;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-family: Quicksand-Light;
  font-size: 50px;
  color: rgb(75, 75, 75);
`;

export const List = styled.View`
  margin-left: 5px;
`;

export const Item = styled.TouchableOpacity`
  width: 350px;
  height: 55px;
  background: #0ef500;
  border-radius: 6px;
  margin: 10px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: Quicksand-Bold;
  padding: 5px;
  color: #ffffff;
`;
