import React from "react";
import { Text, View } from 'react-native';
import { style } from './styles';
import Menu from '../../components/menu/Menu';

export default function Home() {
    return (
        <View style={style.container}>
            <Menu />
            <View style={style.content}>
                <Text style={style.title}>Painel Inicial</Text>
                <Text style={style.subtitle}>Você acessou o sistema com sucesso.</Text>
            </View>
        </View>
    );
}