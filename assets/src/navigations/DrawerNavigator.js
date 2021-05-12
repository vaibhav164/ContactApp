import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigator from "./HomeNavigator";
import { CONTACT, contact } from "../constants/routeName";
const DrawerNavigator=()=>{
    const AuthStack=createDrawerNavigator();
    return(
            <AuthStack.Navigator>
                <AuthStack.Screen name={CONTACT} component={HomeStackNavigator} />
                {/* <AuthStack.Screen name="Authentication" component={AuthNavigator} /> */}
            </AuthStack.Navigator>
    );
}
export default DrawerNavigator;