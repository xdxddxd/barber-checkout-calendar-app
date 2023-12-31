import { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export default function SignUpScreen() {
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const [showConfPassword, setShowConfPassword] = useState<boolean>(true);

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>
            <Animatable.View animation="fadeInUp" delay={500} style={styles.containerForm}>
                <View style={styles.containerInput}>
                    <Text style={styles.textInput}>Nome Completo</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu nome"
                        placeholderTextColor="#a1a1a1"
                    />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.textInput}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu email"
                        placeholderTextColor="#a1a1a1"
                    />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.textInput}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="********"
                        placeholderTextColor="#a1a1a1"
                        secureTextEntry={showPassword}
                    />
                    <TouchableOpacity
                        style={styles.showPasswordButton}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Feather name={showPassword ? "eye-off" : "eye"} size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.textInput}>Confirmar Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="********"
                        placeholderTextColor="#a1a1a1"
                        secureTextEntry={showConfPassword}
                    />
                    <TouchableOpacity
                        style={styles.showPasswordButton}
                        onPress={() => setShowConfPassword(!showConfPassword)}
                    >
                        <Feather name={showConfPassword ? "eye-off" : "eye"} size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsView}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.textLoginButton}>Cadastrar</Text>
                    </TouchableOpacity>
                    <View style={styles.moreButtonsView}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignIn')}
                            style={styles.moreButton}
                        >
                            <Text style={styles.textMoreButton}>Fazer Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>
        </View>
    );
}