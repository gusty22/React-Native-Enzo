import { StyleSheet } from "react-native";
import { palette } from "../../global/themes";

export const style = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: palette.card,
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: '100%',
        marginTop: 40,
        borderBottomWidth: 1,
        borderBottomColor: palette.inputBg,
        elevation: 1, // Reduzido para ficar mais sutil
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.03, // Sombra quase imperceptível
    },
    menuBtn: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    menuItem: {
        fontSize: 15,
        fontWeight: "600",
        color: palette.textSecondary,
    },
    menuBtnActive: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: palette.accent,
        borderRadius: 12,
    },
    menuItemActive: {
        fontSize: 15,
        fontWeight: "bold",
        color: palette.card, // Como o card agora é branco, o texto do botão fica branco
    }
});