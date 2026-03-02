import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Importação dos ícones
import { styles } from "./styles";
import { palette } from "../../global/themes";

interface Props {
    onNavigate: (tela: 'login' | 'cadastro') => void;
}

export default function Cadastro({ onNavigate }: Props) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View style={[styles.screen, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={palette.background}
            />

            <View style={styles.card}>
                <Text style={styles.heading}>Nova Conta</Text>
                <Text style={styles.sub}>Preencha os dados abaixo</Text>

                {/* Input Nome */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={nome}
                        onChangeText={setNome}
                        placeholder="Seu nome completo"
                        placeholderTextColor={palette.textSecondary}
                    />
                    <MaterialIcons name="person" size={20} color={palette.textSecondary} />
                </View>

                {/* Input E-mail */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="email@dominio.com"
                        placeholderTextColor={palette.textSecondary}
                        keyboardType="email-address"
                    />
                    <MaterialIcons name="email" size={20} color={palette.textSecondary} />
                </View>

                {/* Input Senha */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={senha}
                        onChangeText={setSenha}
                        placeholder="Crie uma senha"
                        placeholderTextColor={palette.textSecondary}
                        secureTextEntry
                    />
                    <MaterialIcons name="lock" size={20} color={palette.textSecondary} />
                </View>

                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.primaryText}>Criar Conta</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.linkArea}
                    onPress={() => onNavigate("login")}
                >
                    <Text style={styles.linkText}>Já possui conta? Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}