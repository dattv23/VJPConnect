import { createStackNavigator } from '@react-navigation/stack';

import { Deals } from '@/screens';
import { useTheme } from '@/theme';
import { DealsStackParamList } from '@/types/navigation';

const DealsStack = createStackNavigator<DealsStackParamList>();

function DealsStackScreen() {
	const { variant, navigationTheme } = useTheme();

	return (
		<DealsStack.Navigator
			key={variant}
			initialRouteName="Company"
			screenOptions={{ headerShown: false }}
		>
			<DealsStack.Screen name="Company" component={Deals} />
		</DealsStack.Navigator>
	);
}

export default DealsStackScreen;
