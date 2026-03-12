# Projeto React Native - Sistema de Acesso (Clean Soft)

Este projeto é um aplicativo desenvolvido em **React Native (Expo)** contendo um fluxo completo de navegação entre as telas de **Login, Cadastro e Home**, utilizando **React Navigation** e um **Design System próprio**.

O objetivo é garantir que o projeto possa rodar facilmente, inclusive em computadores de faculdade que podem possuir restrições de rede ou permissões.

---

# 🛠️ Pré-requisitos

Antes de começar, o computador precisa ter instalado:

* **Node.js** (versão LTS recomendada)
  https://nodejs.org/

* **Git** (para clonar o repositório)
  https://git-scm.com/

* O aplicativo **Expo Go** instalado no celular

    * Android ou iOS

---

##  Instalar as dependências base

Esse comando lê o arquivo `package.json` e instala o núcleo do **React** e do **Expo**.

```bash
npm install
```

---

##  Instalar as dependências de Navegação (React Navigation)

Essas bibliotecas são responsáveis pelo sistema de navegação entre as telas **Login, Cadastro e Home**.

```bash
npm install @react-navigation/native @react-navigation/native-stack
```

---

## Instalar dependências nativas do Expo

O React Navigation precisa dessas bibliotecas para lidar com:

* animações
* gestos
* adaptação de tela (notch)
* performance

```bash
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
```

---

## Instalar suporte para Web (Opcional)

Caso seja necessário rodar o aplicativo **no navegador do computador**:

```bash
npx expo install react-native-web react-dom @expo/metro-runtime
```

---

# 🚀 Como Rodar o Projeto

Como redes de faculdade frequentemente **bloqueiam portas locais**, o projeto deve ser iniciado usando **modo túnel**.

```bash
npx expo start --tunnel
```

Se o terminal perguntar para instalar o pacote:

```
@expo/ngrok
```

Digite:

```
y
```

e pressione **Enter**.

---

# 📱 Executar no Celular

1. Aguarde aparecer o **QR Code** no terminal.
2. Abra o aplicativo **Expo Go**.
3. Escaneie o **QR Code**.

O aplicativo será carregado automaticamente.

---

# 🌐 Executar no Navegador

Com o servidor rodando:

Pressione a tecla:

```
w
```

no terminal.

O projeto será aberto automaticamente no navegador.

---

# 📚 Tecnologias e Bibliotecas Utilizadas

* **React Native / Expo**
  Framework principal do projeto.

* **React Navigation**
  Gerenciamento de navegação entre telas.

* **@react-navigation/native-stack**
  Sistema de navegação em pilha.

* **@expo/vector-icons**
  Biblioteca de ícones (Material Icons).

* **Design System Customizado**
  Cores, estilos e métricas organizados em:

```
global/themes.ts
```

---

# ⚡ Instalação Rápida (Opcional)

Caso queira instalar todas as dependências de uma vez:

```bash
npm install @react-navigation/native @react-navigation/native-stack && npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-web react-dom @expo/metro-runtime
```
```bash
npm install @react-navigation/native @react-navigation/native-stack; npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-web react-dom @expo/metro-runtime
```

````
npx expo install react-native-web react-dom @expo/metro-runtime react-native-safe-area-context
````
---

# 💡 Dica para usar em computadores de faculdade

Alguns computadores de faculdade:

* bloqueiam portas de rede
* apagam arquivos ao reiniciar
* possuem restrições de firewall

Por isso:

* sempre use **`npx expo start --tunnel`**
* mantenha o projeto em um **repositório GitHub**
* rode **`npm install`** sempre que baixar novamente

Assim o projeto funcionará sem problemas.
