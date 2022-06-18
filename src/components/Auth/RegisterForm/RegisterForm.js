import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Icon, Button } from "@rneui/base";
import { colors } from "../../../utils/colors";

export function RegisterForm() {
	return (
		<View style={styles.content}>
			<Input
				placeholder="Correo Electronico"
				containerStyle={styles.input}
				rightIcon={
					<Icon
						type="material-community"
						name="at"
						style={styles.icon}
						color="gray"
					/>
				}
			/>

			<Input
				placeholder="Contraseña"
				containerStyle={styles.input}
				secureTextEntry={true}
				rightIcon={
					<Icon
						type="material-community"
						name="eye"
						style={styles.icon}
						color="gray"
					/>
				}
			/>

			<Input
				placeholder="Repetir contraseña"
				containerStyle={styles.input}
				secureTextEntry={true}
				rightIcon={
					<Icon
						type="material-community"
						name="eye"
						style={styles.icon}
						color="gray"
					/>
				}
			/>

			<Button
				title="Registrarme"
				containerStyle={styles.btnContainer}
				buttonStyle={styles.btn}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30,
	},

	input: {
		width: "100%",
		marginTop: 20
	},

	btnContainer: {
		marginTop: 20,
		width: "80%",
		borderRadius: 10,
	},

	btn: {
		backgroundColor: colors.PRIMARY_DARK_COLOR,
	},
});
