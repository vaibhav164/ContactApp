import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { LOGIN, SIGNUP} from "../constants/routeName";

const Authentication=({navigation})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const Registeration=({navigation})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                <Text>SignUp</Text>
            </TouchableOpacity>
        </View>
    );
}
const AuthNavigator=()=>{
    const AuthStack=createStackNavigator();
    return(
            <AuthStack.Navigator>
                <AuthStack.Screen name={LOGIN} component={Authentication} />
                <AuthStack.Screen name={SIGNUP} component={Registeration} />
            </AuthStack.Navigator>
    );
}
export default AuthNavigator;