import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/Logo.png';

import user from '../assets/user.png';
import userd from '../assets/user-d.png';
import lock from '../assets/lock.png';
import lockd from '../assets/lock-d.png';
import eyeSlash from '../assets/eye-slash.png';
import eyeSlashd from '../assets/eye-slash-2.png';

import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import isSelectedA from '../assets/isSelectedA.png';
import isSelected from '../assets/isSelected.png';

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleCheckboxClick = () => {
    setRememberMe(!rememberMe);
  };

  const handleUsernameFocus = () => {
    setUsernameFocused(true);
  };

  const handleUsernameBlur = () => {
    setUsernameFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  return (
    <View style={styles.container}>
      {/* Container el logo */}
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>

      {/* Contiene el texto de Login*/}
      <View style={styles.loginText}>
        <Text style={styles.loginTextTitulo}>Login</Text>
        <Text style={styles.loginTextSubTitulo}>Please login to find your dream job</Text>
      </View>

      {/* Contiene el formulario*/}
      <View>
        <View style={styles.contenedorInputs}>
          {/* Input Username */}
          <View style={[styles.contenedorInput, usernameFocused && styles.inputFocused]}>
            <View style={styles.userImgInput}>
              <Image source={!usernameFocused ? user : userd} style={styles.userImg} />
            </View>
            <TextInput
              style={styles.input}
              value={null}
              onChangeText={null}
              placeholder="Username"
              onFocus={handleUsernameFocus}
              onBlur={handleUsernameBlur}
            />
          </View>

          {/* Input Password */}
          <View style={[styles.contenedorInput, passwordFocused && styles.inputFocused]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={styles.null}>
                <Image source={!passwordFocused ? lock : lockd} style={styles.userImg} />
              </View>
              <TextInput
                style={styles.input}
                value={null}
                onChangeText={null}
                placeholder="Password"
                secureTextEntry={true}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
              <View style={styles.userPassInput}>
                <Image source={!passwordFocused ? eyeSlash : eyeSlashd} style={styles.userImg} />
              </View>
            </View>
          </View>
        </View>

        {/* Contiene el checkbox y el link de "Forgot Password?" */}
        <View style={styles.remember}>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <TouchableOpacity onPress={handleCheckboxClick}>
              <Image source={rememberMe ? isSelectedA : isSelected} />
            </TouchableOpacity>
            <Text>Remember me</Text>
          </View>
          <View><Text style={{ color: '#3366FF' }}>Forgot Password?</Text></View>
        </View>

        {/* Contiene el boton de login*/}
        <View>
          <View style={styles.contenedorTextDont}>
            <Text style={{ color: '#9CA3AF' }}>Dont’t have an account? <Text style={{ color: '#3366FF' }}>Register</Text></Text>
          </View>
          <TouchableOpacity onPress={null}>
            <View style={styles.loginButton}>
              <Text style={styles.loginTextButton}>Login</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.linea}>
            <View style={{ width: '20%', height: 1, backgroundColor: '#D1D5DB' }}></View>
            <Text style={{ color: '#6B7280' }}>Or Login With Account</Text>
            <View style={{ width: '20%', height: 1, backgroundColor: '#D1D5DB' }}></View>
          </View>
        </View>

        {/* Btn Google y Facebook */}
        <View style={styles.containerRedes}>
          <View>
            <Image source={google} alt='' />
          </View>
          <View>
            <Image source={facebook} alt='' />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 25
  },
  header: {
    width: '100%',
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginLeft: '77.5%'
  },
  loginText: {
    display: 'flex',
    width: '100%',
    height: 120,
    alignItems: 'left',
    justifyContent: 'center',
  },
  loginTextTitulo: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#111827'
  },
  loginTextSubTitulo: {
    color: '#6B7280',
    fontSize: 16,
    marginTop: 7
  },
  contenedorInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    marginTop: 17
  },
  contenedorInputs: {
    display: 'flex',
    flexDirection: 'column'
  },
  remember: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 21
  },
  CheckBox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 3
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#3366FF',
    borderRadius: 50,
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 18,
    marginTop: 29,
    marginBottom: 29
  },
  loginTextButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contenedorTextDont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 167
  },
  linea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  containerRedes: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
    marginTop: 28
  },
  input: {
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 12,
  },
  inputFocused: {
    borderColor: '#1E90FF',  // Color azul cuando está activo
    borderWidth: 2,
  },
  userPassInput: {
    marginLeft:300,
    position:'absolute'
  }
});
