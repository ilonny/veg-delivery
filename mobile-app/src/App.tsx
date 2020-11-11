import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store, persistor } from './lib';
import { PersistGate } from 'redux-persist/integration/react';
import { StackNavigator } from './modules';
import Toast from 'react-native-toast-message';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};
export default App;
