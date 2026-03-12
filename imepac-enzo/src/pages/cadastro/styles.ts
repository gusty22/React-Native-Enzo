import { StyleSheet } from "react-native";
import { palette } from "../../global/themes";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: palette.background,
        justifyContent: "center",
        paddingHorizontal: 25
    },
    card: {
        backgroundColor: palette.card,
        borderRadius: 24,
        padding: 30,
        elevation: 3, // Sombra menor no Android
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06, // Sombra muito mais suave no iOS/Web
        shadowRadius: 12,
    },
    heading: {
        fontSize: 30,
        color: palette.textPrimary,
        fontWeight: "800",
        marginBottom: 5
    },
    sub: {
        color: palette.textSecondary,
        marginBottom: 25,
        fontSize: 14
    },
    primaryButton: {
        backgroundColor: palette.accent,
        height: 55,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        elevation: 1 // Leve destaque
    },
    primaryText: {
        color: palette.card, // Texto branco
        fontWeight: "bold",
        fontSize: 16,
        letterSpacing: 0.5
    },
    linkArea: {
        marginTop: 20,
        alignItems: "center"
    },
    linkText: {
        color: palette.accent,
        fontSize: 14,
        fontWeight: '600'
    }
});