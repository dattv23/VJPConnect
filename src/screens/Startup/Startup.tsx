import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CommonActions } from '@react-navigation/native';
import { NativeModules, Platform, Text, View } from 'react-native';

import { useTheme } from '@/theme';
import { Brand } from '@/components/molecules';
import { SafeScreen } from '@/components/template';

import type { RootScreenProps } from '@/types/navigation';

function Startup({ navigation }: RootScreenProps<'Startup'>) {
	const { layout, fonts } = useTheme();
	const { t, i18n } = useTranslation(['startup']);

	useEffect(() => {
		const deviceLanguage =
			Platform.OS === 'ios'
				? NativeModules.SettingsManager.settings.AppleLocale ||
				  NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
				: NativeModules.I18nManager.localeIdentifier;
		i18n.changeLanguage(deviceLanguage.split('-')[0]);
		const timeout = setTimeout(() => {
			navigation.dispatch(
				CommonActions.reset({
					index: 0,
					routes: [{ name: 'Home' }],
				}),
			);
		}, 3000);
		clearTimeout(timeout);
	}, []);

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
				<Brand />
				<Text style={[fonts.size_16]}>{t('startup:welcome')}</Text>
			</View>
		</SafeScreen>
	);
}

export default Startup;
