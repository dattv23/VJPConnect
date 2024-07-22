import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
	Home: undefined;
	Startup: undefined;
};

export type SearchStackParamList = {
	Home: undefined;
	Startup: undefined;
	Company: undefined;
};

export type DealsStackParamList = {
	Company: undefined;
};

export type FAQStackParamList = {
	FAQ: undefined;
};

export type RootScreenProps<
	S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
