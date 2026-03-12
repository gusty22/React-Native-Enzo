import React, { forwardRef } from "react";
import { View, TextInput, StyleSheet, TextInputProps, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { palette } from "../../global/themes";

interface InputProps extends TextInputProps {
    iconName?: keyof typeof MaterialIcons.glyphMap;
    errorMessage?: string; // Nova propriedade para receber o texto de erro
}

export const Input = forwardRef<TextInput, InputProps>(({ iconName, errorMessage, ...props }, ref) => {
    return (
        <View style={styles.wrapper}>
            <View style={[styles.container, errorMessage ? styles.containerError : null]}>
                <TextInput
                    ref={ref}
                    style={styles.input}
                    placeholderTextColor={palette.textSecondary}
                    {...props}
                />
                {iconName && (
                    <MaterialIcons
                        name={iconName}
                        size={20}
                        color={errorMessage ? palette.danger : palette.textSecondary}
                    />
                )}
            </View>
            {/* Renderiza o texto de erro condicionalmente */}
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        </View>
    );
});

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 16, // Movemos a margem para o wrapper para acomodar o texto
    },
    container: {
        backgroundColor: palette.inputBg,
        height: 55,
        borderRadius: 16,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: 'transparent', // Borda invisível por padrão
    },
    containerError: {
        borderColor: palette.danger, // Fica vermelho se houver erro
    },
    input: {
        flex: 1,
        height: "100%",
        color: palette.textPrimary,
        marginRight: 10,
        fontSize: 16
    },
    errorText: {
        color: palette.danger,
        fontSize: 12,
        marginTop: 4,
        marginLeft: 8,
        fontWeight: '500'
    }
});