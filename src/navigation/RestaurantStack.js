import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantsScreen from "../screens/Restaurants/RestaurantsScreen";
import AddRestaurants from "../screens/Restaurants/AddRestaurants";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export default function RestaurantStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={screen.restaurant.restaurants}
				component={RestaurantsScreen}
				options={{ title: "Restaurante" }}
			/>

			<Stack.Screen
				name={screen.restaurant.addRestaurant}
				component={AddRestaurants}
				options={{ title: "Nuevo Restaurante" }}
			/>
		</Stack.Navigator>
	);
}
