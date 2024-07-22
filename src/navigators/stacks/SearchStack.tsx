import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from '@/theme';
import { SearchCompany } from '@/screens';
import { SearchStackParamList } from '@/types/navigation';

const SearchStack = createStackNavigator<SearchStackParamList>();

function SearchStackScreen() {
	const { variant, navigationTheme } = useTheme();

	return (
		<SearchStack.Navigator
			key={variant}
			initialRouteName="Company"
			screenOptions={{ headerShown: false }}
		>
			<SearchStack.Screen name="Company" component={SearchCompany} />
		</SearchStack.Navigator>
	);
}

export default SearchStackScreen;
