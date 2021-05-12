import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { CREATE, DETAIL, HOME, SETTING } from "../constants/routeName";

const Home=({navigation})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>
                <Text>Home Navigation</Text>
            </TouchableOpacity>
        </View>
    );
}

const contactDetails=({navigation})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('create')}}>
                <Text>Home Contact Details</Text>
            </TouchableOpacity>
        </View>
    );
}
const createContact=({navigation})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('setting')}}>
                <Text>Home createContact</Text>
            </TouchableOpacity>
        </View>
    );
}
const setting=({navigation})=>{
    return(
        <View>
            <TouchableOpacity>
                <Text>Home Settings</Text>
            </TouchableOpacity>
        </View>
    );
}
const HomeStackNavigator=()=>{
    const HomeStack=createStackNavigator();
    return(
            <HomeStack.Navigator>
                <HomeStack.Screen name={HOME} component={Home} />
                <HomeStack.Screen name={DETAIL} component={contactDetails} />
                <HomeStack.Screen name={CREATE} component={createContact} />
                <HomeStack.Screen name={SETTING} component={setting} />
            </HomeStack.Navigator>
    );
}
export default HomeStackNavigator;