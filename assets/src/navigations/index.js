import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from "./HomeNavigator";
import DrawerNavigator from "./DrawerNavigator";

const AppNavContainer=()=>{
    const isLogin=true;
    return(
        <NavigationContainer>
           {isLogin?DrawerNavigator:AuthNavigator}
        </NavigationContainer>
    );
}
export default AppNavContainer;