import { View, DimensionValue } from 'react-native';

const Logo = require('@/theme/assets/images/logovjpc.png');

import { ImageVariant } from '@/components/atoms';
import { useTheme } from '@/theme';
import { isImageSourcePropType } from '@/types/guards/image';

type Props = {
	height?: DimensionValue;
	width?: DimensionValue;
	mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

function Brand({ height = 200, width = 200, mode = 'contain' }: Props) {
	const { layout } = useTheme();

	if (!isImageSourcePropType(Logo)) {
		throw new Error('Image source is not valid');
	}

	return (
		<View testID="brand-img-wrapper" style={{ height, width }}>
			<ImageVariant
				style={[layout.fullHeight, layout.fullWidth]}
				source={Logo}
				resizeMode={mode}
			/>
		</View>
	);
}

export default Brand;
