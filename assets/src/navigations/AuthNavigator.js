import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

const Login=({navigation})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('signup')}}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const signUp=({navigation})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('login')}}>
                <Text>SignUp</Text>
            </TouchableOpacity>
        </View>
    );
}
const AuthNavigator=()=>{
    const AuthStack=createStackNavigator();
    return(
            <AuthStack.Navigator>
                <AuthStack.Screen name="login" component={Login} />
                <AuthStack.Screen name="signup" component={signUp} />
            </AuthStack.Navigator>
    );
}
export default AuthNavigator;