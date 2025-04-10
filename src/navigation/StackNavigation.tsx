import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CommonType } from '../common/CommonType';
import Home from '../screens/Home';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

const StackNavigation = () => {
    const Stack = createStackNavigator<CommonType.RootStackPageList>();

	const customStackNavigationOptions: StackNavigationOptions = {
        gestureEnabled: false,
        title: '',
        headerStyle: {
            backgroundColor: '#209bec',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
	};

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'home'} screenOptions={customStackNavigationOptions}>
                {/* 메인 페이지 */}
                <Stack.Screen name="home">
                    {(props: any) => <Home {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer >
    );
};

export default StackNavigation;
