import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

const contact=({navigation})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('details')}}>
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
                <HomeStack.Screen name="contact" component={contact} />
                <HomeStack.Screen name="details" component={contactDetails} />
                <HomeStack.Screen name="create" component={createContact} />
                <HomeStack.Screen name="setting" component={setting} />
            </HomeStack.Navigator>
    );
}
export default HomeStackNavigator;