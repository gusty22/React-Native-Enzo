import { StyleSheet } from "react-native";
import { palette } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.background,
        justifyContent: "center",
        paddingHorizontal: 30
    },
    wrapper: {
        backgroundColor: palette.card,
        borderRadius: 24,
        padding: 28
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: palette.textPrimary,
        marginBottom: 25
    },
    // Novo contêiner para abraçar o input e o ícone
    controlContainer: {
        backgroundColor: palette.inputBg,
        height: 52,
        borderRadius: 16,
        paddingHorizontal: 16,
        marginBottom: 16,
        flexDirection: "row", // Coloca os itens lado a lado
        alignItems: "center", // Centraliza verticalmente
        justifyContent: "space-between", // Joga o ícone para o canto direito
    },
    control: {
        flex: 1, // Faz o texto ocupar todo o espaço disponível antes do ícone
        height: "100%",
        color: palette.textPrimary,
        marginRight: 10, // Espaçamento entre o texto e o ícone
    },
    action: {
        backgroundColor: palette.accent,
        height: 52,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    actionText: {
        color: palette.background,
        fontWeight: "700",
        fontSize: 16
    },
    secondaryAction: {
        marginTop: 18,
        alignItems: "center"
    },
    secondaryText: {
        color: palette.accentSoft,
        fontSize: 14
    }
});