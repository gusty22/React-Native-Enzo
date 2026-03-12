import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../pages/AppNavigation";
import { style } from "./styles";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function Menu() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <View style={style.menuContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={style.menuBtn}>
                <Text style={style.menuItem}>Início</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={style.menuBtn}>
                <Text style={style.menuItem}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")} style={style.menuBtnActive}>
                <Text style={style.menuItemActive}>Nova Conta</Text>
            </TouchableOpacity>
        </View>
    );
}