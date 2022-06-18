import { StyleSheet } from "react-native";
import { colors } from "../../../utils";

export const styles = StyleSheet.create({
	overlay: {
		height: 100,
		width: 200,
		backgroundColor: "#eaecf5",
		borderRadius: 10,
		borderColor: colors.PRIMARY_DARK_COLOR,
		borderWidth: 1.5,
	},

	view: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	text: {
		color: colors.PRIMARY_DARK_COLOR,
		textTransform: "uppercase",
		marginTop: 10,
	},
});
