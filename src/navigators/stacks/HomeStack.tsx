import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from '@/theme';
import { Home, Startup } from '@/screens';
import { RootStackParamList } from '@/types/navigation';

const HomeStack = createStackNavigator<RootStackParamList>();

function HomeStackScreen() {
	const { variant, navigationTheme } = useTheme();

	return (
		<HomeStack.Navigator key={variant} screenOptions={{ headerShown: false }}>
			<HomeStack.Screen name="Startup" component={Startup} />
			<HomeStack.Screen name="Home" component={Home} />
		</HomeStack.Navigator>
	);
}

export default HomeStackScreen;
