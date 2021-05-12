import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
const DrawerNavigator=()=>{
    const AuthStack=createDrawerNavigator();
    return(
            <AuthStack.Navigator>
                <AuthStack.Screen name="Home" component={HomeStackNavigator} />
                {/* <AuthStack.Screen name="Authentication" component={AuthNavigator} /> */}
            </AuthStack.Navigator>
    );
}
export default DrawerNavigator;