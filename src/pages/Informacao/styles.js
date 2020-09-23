import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding-top: ${statusBarHeight + 'px'};
  height: 100px;
  margin-left: 5px;
  align-items: center;
  flex-grow: 0.4;
`;

export const Title = styled.Text`
  font-family: Quicksand-Regular;
  font-size: 40px;
  color: rgb(75, 75, 75);
`;

export const Answer = styled.View`
  width: 350px;
  align-self: center;
  background: #0ef500;
  border-radius: 6px;
  margin: 4px;
`;

export const Description = styled.Text`
  font-size: 23px;
  font-family: Quicksand-Medium;
  padding: 5px;
  color: #ffffff;
`;
