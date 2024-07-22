import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from '@/theme';
import FAQStackScreen from '@/navigators/stacks/FAQStack';
import HomeStackScreen from '@/navigators/stacks/HomeStack';
import DealsStackScreen from '@/navigators/stacks/DealsStack';
import SearchStackScreen from '@/navigators/stacks/SearchStack';

const Tab = createBottomTabNavigator();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<SafeAreaProvider>
			<NavigationContainer theme={navigationTheme}>
				<Tab.Navigator
					initialRouteName="Home Screen"
					screenOptions={params => {
						return {
							headerShown: false,
						};
					}}
				>
					<Tab.Screen name="Home Screen" component={HomeStackScreen}></Tab.Screen>
					<Tab.Screen name="Search Screen" component={SearchStackScreen}></Tab.Screen>
					<Tab.Screen name="Deals Screen" component={DealsStackScreen}></Tab.Screen>
					<Tab.Screen name="FAQ Screen" component={FAQStackScreen}></Tab.Screen>
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default ApplicationNavigator;
