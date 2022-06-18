import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RankingScreen from "../screens/RankingScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export default function RankingStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={screen.ranking.ranking}
				component={RankingScreen}
				options={{ title: "Calificaciones" }}
			/>
		</Stack.Navigator>
	);
}
