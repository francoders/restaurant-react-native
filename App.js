import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { colors } from './src/utils';

export default function App() {
  return (
    <NavigationContainer >
      <Navigation />
      <StatusBar backgroundColor={colors.PRIMARY_COLOR} style={'light'} />
    </NavigationContainer>
  );
}

