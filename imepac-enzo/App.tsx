import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Login from './src/pages/login';
import Cadastro from './src/pages/cadastro';

export default function App() {
    const [telaAtual, setTelaAtual] = useState<'login' | 'cadastro'>('login');

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {telaAtual === 'login' && <Login onNavigate={setTelaAtual} />}
            {telaAtual === 'cadastro' && <Cadastro onNavigate={setTelaAtual} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
        paddingTop: 20
    }
});