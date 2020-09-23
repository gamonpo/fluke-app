import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Header = styled.View`
  padding-top: ${statusBarHeight + 'px'};
  margin-left: 5px;
  align-items: center;
  flex-grow: 0.75;
`;

export const Title = styled.Text`
  font-family: Quicksand-Light;
  font-size: 100px;
  color: rgb(30, 30, 30);
`;

export const Button = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  border-radius: 100px;
  background: #0ef500;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const Enter = styled.Text`
  font-family: Quicksand-Medium;
  font-size: 23px;
  color: #ffffff;
`;
