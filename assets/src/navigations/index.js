import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./DrawerNavigator";
import AuthNavigator from "./AuthNavigator";

const AppNavContainer=()=>{
    const isLogin= true;
    return(
        <NavigationContainer>
           {isLogin ? <DrawerNavigator/>: <AuthNavigator />}
        </NavigationContainer>
    );
}  
export default AppNavContainer;