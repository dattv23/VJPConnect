import WebView from 'react-native-webview';

import type { RootScreenProps } from '@/types/navigation';

function Home({ navigation }: RootScreenProps<'Home'>) {
	return (
		<WebView source={{ uri: 'https://vjp-connect.com/' }} style={{ flex: 1 }} />
	);
}

export default Home;
