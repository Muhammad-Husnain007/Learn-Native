// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import Login from './Login';
// import Home from './Home';


// // const Stack = createNativeStackNavigator();

// const Routing = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: 'blue',
//           },
//           headerTintColor: 'orange',
//           headerTitleStyle: {
//             fontSize: 25,
//           },
//         }}
//       >
//         {/* <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Login" component={Login} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Routing;


//  {/* =============== Drawer NAVIGATION =============== */}

// import React from 'react';
//  import { NavigationContainer } from '@react-navigation/native';
// import SignUp from './DrawerNavigation/SignUp';
// import Login from './DrawerNavigation/Login';
// import {createBottomDrawerNavigator} from '@react-navigation/bottom-Drawers'
// import {createMaterialTopDrawerNavigator} from '@react-navigation/material-top-Drawers'

// const Drawer = createMaterialTopDrawerNavigator();

// const Routing = () => {
//      return (
//       <NavigationContainer>
//        <Drawer.Navigator
//            initialRouteName="SignUp"
//           screenOptions={{
//             headerStyle: {
//               backgroundColor: 'blue',
//             },
//             headerTintColor: 'orange',
//             headerTitleStyle: {
//               fontSize: 25,
//             },
//           }}
//         >
//           <Drawer.Screen name="SignUp" component={SignUp} />
//           <Drawer.Screen name="Login" component={Login} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     );
//   };
  


// export default Routing;


// =================== DRAWER NAVIGATION ============

import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
import Home from './DrawerNavigation/Home';
import Notification from './DrawerNavigation/Notification';
import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

const Routing = () => {
     return (
      <NavigationContainer>
       <Drawer.Navigator
           initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'orange',
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Notification" component={Notification} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  };
  


export default Routing;
