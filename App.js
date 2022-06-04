import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { colors } from './src/utils';
import { initFirebase } from './src/utils';

{/** Ignora Warnings*/ }
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer >
      <Navigation />
      <StatusBar backgroundColor={colors.PRIMARY_COLOR} style={'light'} />
    </NavigationContainer>
  );
}

