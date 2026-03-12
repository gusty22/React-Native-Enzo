import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, Platform, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../AppNavigation";
import { palette } from "../../global/themes";
import { styles } from "./styles";
import { Input } from "../../components/input";

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const [erros, setErros] = useState({ usuario: '', senha: '' });

    const validarCampos = () => {
        let validos = true;
        let novosErros = { usuario: '', senha: '' };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!usuario.trim()) {
            novosErros.usuario = "O e-mail é obrigatório.";
            validos = false;
        } else if (!emailRegex.test(usuario) || !usuario.includes('@') || !usuario.includes('.')) {
            // Regra espelhada no Login
            novosErros.usuario = "Formato inválido. Deve conter o '@', o domínio e o '.com'.";
            validos = false;
        }

        if (!senha) {
            novosErros.senha = "A senha é obrigatória.";
            validos = false;
        } else if (senha.length <= 6) {
            novosErros.senha = "A senha deve ter mais de 6 caracteres.";
            validos = false;
        }

        setErros(novosErros);
        return validos;
    };

    const handleLogin = () => {
        Keyboard.dismiss();

        if (!validarCampos()) {
            return;
        }

        if (Platform.OS === 'web') {
            window.alert("Logado com sucesso!");
            navigation.navigate("Home");
        } else {
            Alert.alert("Sucesso", "Logado com sucesso!", [
                { text: "OK", onPress: () => navigation.navigate("Home") }
            ]);
        }
    };

    const conteudo = (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
                <View style={styles.wrapper}>

                    <Text style={styles.title}>Acesso</Text>
                    <Text style={styles.subtitle}>Entre com sua conta</Text>

                    <Input
                        placeholder="Digite seu email"
                        value={usuario}
                        onChangeText={(text) => { setUsuario(text); setErros({...erros, usuario: ''}); }}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        iconName="email"
                        errorMessage={erros.usuario}
                    />

                    <Input
                        placeholder="Senha"
                        value={senha}
                        onChangeText={(text) => { setSenha(text); setErros({...erros, senha: ''}); }}
                        secureTextEntry
                        iconName="lock"
                        errorMessage={erros.senha}
                    />

                    <TouchableOpacity style={styles.action} onPress={handleLogin}>
                        <Text style={styles.actionText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondaryAction} onPress={() => navigation.navigate("Cadastro")}>
                        <Text style={styles.secondaryText}>Não possui conta? Criar nova</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1, backgroundColor: palette.background }}>
            {Platform.OS === 'web' ? conteudo : <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{conteudo}</TouchableWithoutFeedback>}
        </KeyboardAvoidingView>
    );
}