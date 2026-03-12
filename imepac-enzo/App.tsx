import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigation from './src/pages/AppNavigation';

export default function App() {
    return (
        <SafeAreaProvider>
            {/* O flex: 1 aqui é obrigatório para evitar a tela branca no Web */}
            <GestureHandlerRootView style={{ flex: 1 }}>
                <StatusBar style="light" />
                <View style={styles.container}>
                    <AppNavigation />
                </View>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A', // Ajustado para o fundo escuro do seu app
    },
});