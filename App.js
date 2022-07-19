import React from 'react';
import Root from './src/index';
import { Provider } from 'react-redux';
import store from './src/store/index';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { init } from './src/db/index'

init()
  .then(() => {
    console.log('DB initialized');
  })
  .catch((err) => {
    console.log('Error initializing DB', err);
  })

export default function App() {

  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf')
  })

  if (!loaded) {
    return <ActivityIndicator />;
  }
  
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}