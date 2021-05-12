import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from "./HomeNavigator";
import DrawerNavigator from "./DrawerNavigator";

const AppNavContainer=()=>{
    return(
        <NavigationContainer>
           <DrawerNavigator />
        </NavigationContainer>
    );
}
export default AppNavContainer;