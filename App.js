import React from 'react';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './app/redux/store';
// import Welcome from './src/Welcome';
// import Login from './src/Login';
// import Signup from './src/Signup';
// import ProductsDashboard from './src/ProductsDashboard';
// import Checkout from './src/Checkout';
// import Receipt from './src/Receipt';
import Route from './app/routes/Route';

export default  App = () => {
//  const stack = createStackNavigator();
    return (
      <Provider store={store}>

{/* <NavigationContainer>
      <stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <stack.Screen name="Welcome" component={Welcome} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Signup" component={Signup} />        
        <stack.Screen name="ProductsDashboard" component={ProductsDashboard}/>
        <stack.Scree name="Checkout" component={Checkout}/>
        <stack.Screen name="Receipt" component={Receipt} />        
      </stack.Navigator>
    </NavigationContainer> */}
    <Route />

      </Provider>
    );
  
}
