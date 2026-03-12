import { StyleSheet } from "react-native";
import { palette } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.background,
        justifyContent: "center",
        paddingHorizontal: 25
    },
    wrapper: {
        backgroundColor: palette.card,
        borderRadius: 24,
        padding: 30,
        elevation: 3, // Sombra menor no Android
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06, // Sombra muito mais suave no iOS/Web
        shadowRadius: 12,
    },
    title: {
        fontSize: 30,
        fontWeight: "800",
        color: palette.textPrimary,
        marginBottom: 5
    },
    subtitle: {
        fontSize: 14,
        color: palette.textSecondary,
        marginBottom: 25
    },
    action: {
        backgroundColor: palette.accent,
        height: 55,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        elevation: 1
    },
    actionText: {
        color: palette.card, // Texto branco
        fontWeight: "bold",
        fontSize: 16,
        letterSpacing: 0.5
    },
    secondaryAction: {
        marginTop: 20,
        alignItems: "center"
    },
    secondaryText: {
        color: palette.accent,
        fontSize: 14,
        fontWeight: '600'
    }
});