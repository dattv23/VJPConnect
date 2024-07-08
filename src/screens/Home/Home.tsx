import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';

import type { RootScreenProps } from '@/types/navigation';

function Home({ navigation }: RootScreenProps<'Home'>) {
	const { layout, gutters, fonts } = useTheme();
	const { t } = useTranslation(['home']);

	return (
		<SafeScreen>
			<View
				style={[
					layout.flex_1,
					layout.col,
					layout.itemsCenter,
					layout.justifyCenter,
				]}
			>
				<Text style={[fonts.size_16, fonts.red500]}>{t('home:title')}</Text>
			</View>
		</SafeScreen>
	);
}

export default Home;
