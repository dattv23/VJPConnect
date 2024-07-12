import { View, DimensionValue, Image } from 'react-native';

import { useTheme } from '@/theme';

type Props = {
	height?: DimensionValue;
	width?: DimensionValue;
	mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

function Brand({ height = 200, width = 200, mode = 'contain' }: Props) {
	const { layout } = useTheme();

	return (
		<View testID="brand-img-wrapper" style={{ height, width }}>
			<Image
				style={[layout.fullHeight, layout.fullWidth]}
				source={require('@/assets/images/logovjpc.png')}
				resizeMode={mode}
			/>
		</View>
	);
}

export default Brand;
