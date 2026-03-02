import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles";
import { palette } from "../../global/themes";

interface Props {
    onNavigate: (tela: 'login' | 'cadastro') => void;
}

export default function Login({ onNavigate }: Props) {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={styles.wrapper}>
                <Text style={styles.title}>Acesso</Text>

                {/* Input Usuário/E-mail */}
                <View style={styles.controlContainer}>
                    <TextInput
                        style={styles.control}
                        value={usuario}
                        onChangeText={setUsuario}
                        placeholder="Digite seu email"
                        placeholderTextColor={palette.textSecondary}
                    />
                    <MaterialIcons name="email" size={20} color={palette.textSecondary} />
                </View>

                {/* Input Senha */}
                <View style={styles.controlContainer}>
                    <TextInput
                        style={styles.control}
                        value={senha}
                        onChangeText={setSenha}
                        placeholder="Senha"
                        placeholderTextColor={palette.textSecondary}
                        secureTextEntry
                    />
                    <MaterialIcons name="lock" size={20} color={palette.textSecondary} />
                </View>

                <TouchableOpacity style={styles.action}>
                    <Text style={styles.actionText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.secondaryAction}
                    onPress={() => onNavigate("cadastro")}
                >
                    <Text style={styles.secondaryText}>Criar nova conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}