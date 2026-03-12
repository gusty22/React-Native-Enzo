import { StyleSheet } from 'react-native';
import { palette } from '../../global/themes';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.background,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        color: palette.textPrimary,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: palette.textSecondary,
        textAlign: 'center'
    }
});