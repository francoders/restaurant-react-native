import React from "react";
import { styles } from "./RegisterScreen.style";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image } from "@rneui/base";
import { RegisterForm } from "../../../components/Auth";

export function RegisterScreen() {
	return (
		<View style={styles.contentAll}>
			<KeyboardAwareScrollView>
				<Image
					source={require("../../../../assets/icon.png")}
					style={styles.img}
				/>

				<View style={styles.content}>
					<RegisterForm />
				</View>
			</KeyboardAwareScrollView>
		</View>
	);
}
