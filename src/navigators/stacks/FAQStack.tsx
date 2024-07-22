import { createStackNavigator } from '@react-navigation/stack';

import { FAQ } from '@/screens';
import { useTheme } from '@/theme';
import { FAQStackParamList } from '@/types/navigation';

const FAQStack = createStackNavigator<FAQStackParamList>();

function FAQStackScreen() {
	const { variant, navigationTheme } = useTheme();

	return (
		<FAQStack.Navigator
			key={variant}
			initialRouteName="FAQ"
			screenOptions={{ headerShown: false }}
		>
			<FAQStack.Screen name="FAQ" component={FAQ} />
		</FAQStack.Navigator>
	);
}

export default FAQStackScreen;
