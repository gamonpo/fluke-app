import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const Container = styled.View`
  flex: 1;
  background: #eee;
`;

export const Header = styled.View`
  padding-top: ${statusBarHeight + 'px'};
  height: 100px;
  margin-left: 5px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: Quicksand-Light;
  font-size: 50px;
  color: rgb(75, 75, 75);
`;

export const Item = styled.TouchableOpacity`
  width: 350px;
  height: 50px;
  background: #0ef500;
  border-radius: 6px;
  margin: 15px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Info = styled.Text`
  font-family: Quicksand-Medium;
  font-size: 25px;
  color: #ffffff;
`;
