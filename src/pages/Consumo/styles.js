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

export const Info = styled.View`
  flex-direction: column;
  padding-top: ${2 * statusBarHeight + 'px'};
  align-items: center;
`;

export const Current = styled.View`
  width: 350px;
  height: 50px;
  background: #0ef500;
  border-radius: 6px;
  margin: 15px;
  justify-content: center;
  padding: 5px;
`;

export const MbInfo = styled.Text`
  font-family: Quicksand-Medium;
  font-size: 22px;
  color: #ffffff;
`;
