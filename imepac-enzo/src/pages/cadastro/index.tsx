import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, Platform, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../AppNavigation";
import { styles } from "./styles";
import { palette } from "../../global/themes";
import { Input } from "../../components/input";

type Props = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

export default function Cadastro({ navigation }: Props) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erros, setErros] = useState({ nome: '', email: '', senha: '' });

    const validarCampos = () => {
        let validos = true;
        let novosErros = { nome: '', email: '', senha: '' };

        // Validação de Nome
        if (!nome.trim()) {
            novosErros.nome = "O nome é obrigatório.";
            validos = false;
        } else if (nome.trim().length < 3) {
            novosErros.nome = "O nome deve ter pelo menos 3 letras.";
            validos = false;
        }

        // Validação de E-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            novosErros.email = "O e-mail é obrigatório.";
            validos = false;
        } else if (!emailRegex.test(email) || !email.includes('@') || !email.includes('.')) {
            // Mensagem detalhada conforme solicitado
            novosErros.email = "Formato inválido. Deve conter o '@', o domínio e o '.com'.";
            validos = false;
        }

        // Validação de Senha
        if (!senha) {
            novosErros.senha = "A senha é obrigatória.";
            validos = false;
        } else if (senha.length <= 6) {
            // Mensagem e validação exigindo MAIS de 6 caracteres
            novosErros.senha = "A senha deve ter mais de 6 caracteres.";
            validos = false;
        }

        setErros(novosErros);
        return validos;
    };

    const handleCadastro = () => {
        Keyboard.dismiss();

        if (!validarCampos()) {
            return;
        }

        if (Platform.OS === 'web') {
            window.alert("Cadastro realizado com sucesso!");
            navigation.navigate("Home");
        } else {
            Alert.alert("Sucesso", "Cadastro realizado com sucesso!", [
                { text: "OK", onPress: () => navigation.navigate("Home") }
            ]);
        }
    };

    const conteudo = (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} keyboardShouldPersistTaps="handled">
            <View style={styles.screen}>
                <View style={styles.card}>
                    <Text style={styles.heading}>Nova Conta</Text>
                    <Text style={styles.sub}>Preencha os dados abaixo</Text>

                    <Input
                        placeholder="Seu nome completo"
                        value={nome}
                        onChangeText={(text) => { setNome(text); setErros({...erros, nome: ''}); }}
                        iconName="person"
                        errorMessage={erros.nome}
                    />

                    <Input
                        placeholder="email@dominio.com"
                        value={email}
                        onChangeText={(text) => { setEmail(text); setErros({...erros, email: ''}); }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        iconName="email"
                        errorMessage={erros.email}
                    />

                    <Input
                        placeholder="Crie uma senha"
                        value={senha}
                        onChangeText={(text) => { setSenha(text); setErros({...erros, senha: ''}); }}
                        secureTextEntry
                        iconName="lock"
                        errorMessage={erros.senha}
                    />

                    <TouchableOpacity style={styles.primaryButton} onPress={handleCadastro}>
                        <Text style={styles.primaryText}>Criar Conta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkArea} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.linkText}>Já possui conta? Entrar</Text>
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