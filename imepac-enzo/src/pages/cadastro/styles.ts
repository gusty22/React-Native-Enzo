import { StyleSheet } from "react-native";
import { palette } from "../../global/themes";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: palette.background,
        justifyContent: "center",
        paddingHorizontal: 24
    },
    card: {
        backgroundColor: palette.card,
        borderRadius: 20,
        padding: 24
    },
    heading: {
        fontSize: 26,
        color: palette.textPrimary,
        fontWeight: "700",
        marginBottom: 4
    },
    sub: {
        color: palette.textSecondary,
        marginBottom: 20
    },
    // Novo contêiner para abraçar o input e o ícone
    inputContainer: {
        backgroundColor: palette.inputBg,
        height: 48,
        borderRadius: 12,
        paddingHorizontal: 14,
        marginBottom: 16,
        flexDirection: "row", // Coloca os itens lado a lado
        alignItems: "center", // Centraliza verticalmente
        justifyContent: "space-between", // Joga o ícone para o canto direito
    },
    input: {
        flex: 1, // Faz o texto ocupar todo o espaço disponível antes do ícone
        height: "100%",
        color: palette.textPrimary,
        marginRight: 10, // Espaçamento entre o texto e o ícone
    },
    primaryButton: {
        backgroundColor: palette.accent,
        height: 50,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    primaryText: {
        color: palette.background,
        fontWeight: "700",
        fontSize: 16
    },
    linkArea: {
        marginTop: 18,
        alignItems: "center"
    },
    linkText: {
        color: palette.accentSoft,
        fontSize: 14
    }
});