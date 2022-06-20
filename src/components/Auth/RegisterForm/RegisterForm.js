import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Icon, Button } from "@rneui/base";
import { colors } from "../../../utils/colors";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./RegisterForm.data";

export function RegisterForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [showRepeatPassword, setRepeatShowPassword] = useState(false);

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnChange: false,
		onSubmit: (formValue) => {
			console.log("Formulario enviado");
			console.log(formValue);
		},
	});

	//Validacion del ojo
	const showHidenPassword = () => {
		setShowPassword((prevState) => !prevState);
	};
	const showHidenRepeatPassword = () => {
		setRepeatShowPassword((prevState) => !prevState);
	};

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
				onChangeText={(text) => formik.setFieldValue("email", text)}
				errorMessage={formik.errors.email}
			/>

			<Input
				placeholder="Contraseña"
				containerStyle={styles.input}
				secureTextEntry={showPassword ? false : true}
				rightIcon={
					<Icon
						type="material-community"
						name={showPassword ? "eye-off" : "eye"}
						style={styles.icon}
						color="gray"
						onPress={showHidenPassword}
					/>
				}
				onChangeText={(text) => formik.setFieldValue("password", text)}
				errorMessage={formik.errors.password}
			/>

			<Input
				placeholder="Repetir contraseña"
				containerStyle={styles.input}
				secureTextEntry={showRepeatPassword ? false : true}
				rightIcon={
					<Icon
						type="material-community"
						name={showRepeatPassword ? "eye-off" : "eye"}
						style={styles.icon}
						color="gray"
						onPress={showHidenRepeatPassword}
					/>
				}
				onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
				errorMessage={formik.errors.repeatPassword}
			/>

			<Button
				title="Registrarme"
				containerStyle={styles.btnContainer}
				buttonStyle={styles.btn}
				onPress={formik.handleSubmit}
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
		marginTop: 20,
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
