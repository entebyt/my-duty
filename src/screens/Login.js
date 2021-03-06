import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button/ThemeButton';
import Container from '../components/Container';
import Input from '../components/Input';
import colors from '../constants/colors';
import globalStyles from '../styles/globalStyles';
import themeInputStyles from '../styles/themeInputStyles';
import EmailIcon from '../assets/icons/email.svg';
import PasswordIcon from '../assets/icons/password.svg';
import SocialIcons from '../components/SocialIcons';
import { loginUser } from '../actions/auth';
import {
	TouchableOpacity,
	TouchableWithoutFeedback
} from 'react-native-gesture-handler';
const Login = ({ params }) => {
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const { loginData } = useSelector(state => state.auth);
	console.log('login api call', loginData);
	const loginSubmit = () => {
		if (email === '' && password === '') {
			alert('Email and password cannot be empty');
			return;
		} else if (email === '') {
			alert('Please enter Email');
			return;
		} else if (password === '') {
			alert('please enter  password');
			return;
		}
		dispatch(loginUser(email, phone, password)).then(isAuthenticated => {
			if (isAuthenticated) {
				navigation.navigate('Location');
			}
		});
	};
	const onChangeEmailText = val => {
		setEmail(val);
	};

	const onChangePasswordText = val => {
		setPassword(val);
	};
	return (
		<Container
			scroll
			showHeader
			contentContainerStyle={[globalStyles.p0, { paddingBottom: 16 }]}
			style={{ marginTop: -80 }}
			headerProps={{ headerStyle: styles.headerStyle }}
		>
			<View style={styles.backgroundContainer}>
				<ImageBackground
					style={styles.background}
					source={require('../assets/images/login.png')}
				>
					<Text style={styles.title}>Application Name</Text>
				</ImageBackground>
				<View
					style={[
						globalStyles.selfCenter,
						globalStyles.alignCenter,
						styles.loginTextContainer
					]}
				>
					<Text
						style={[
							globalStyles.label,
							globalStyles.bold,
							{ fontSize: 18, color: colors.textQuarter }
						]}
					>
						Log In
					</Text>
					<Text style={[globalStyles.label, { color: colors.textQuarter }]}>
						to Continue
					</Text>
				</View>
			</View>

			<View style={[globalStyles.px40, globalStyles.mt40]}>
				<Input
					label='Email/Mobile Number'
					icon={EmailIcon}
					customlabelStyle={themeInputStyles.inputLabel}
					showLabel
					style={[globalStyles.ml16, globalStyles.flex1]}
					onChangeText={e => onChangeEmailText(e)}
				/>
				<View style={globalStyles.mt40}>
					<Input
						label='Password'
						secureTextEntry
						icon={PasswordIcon}
						customlabelStyle={themeInputStyles.inputLabel}
						showLabel
						style={[globalStyles.ml16, globalStyles.flex1]}
						onChangeText={e => onChangePasswordText(e)}
					/>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
					<Text style={[globalStyles.label, { alignSelf: 'flex-end' }]}>
						Forget Password
					</Text>
				</TouchableOpacity>
				<View style={globalStyles.mt16}>
					<Button onPress={loginSubmit} title={'Login'} />
				</View>
				<Text style={styles.small}>or Sign in with</Text>
				<View style={[globalStyles.selfCenter, globalStyles.my16]}>
					<SocialIcons />
				</View>
				<TouchableWithoutFeedback onPress={() => navigation.navigate('Signup')}>
					<Text style={[globalStyles.label, styles.link]}>
						Create an account
					</Text>
				</TouchableWithoutFeedback>
			</View>
		</Container>
	);
};

const styles = StyleSheet.create({
	small: { color: colors.textsecondary, marginTop: 16, alignSelf: 'center' },
	link: {
		color: colors.textprimary,
		alignSelf: 'center',
		borderBottomWidth: 1
	},
	loginTextContainer: {
		backgroundColor: colors.white,
		paddingVertical: 16,
		paddingHorizontal: 80
	},
	headerStyle: { backgroundColor: null },
	background: { position: 'absolute', top: 0, width: '100%', height: 380 },
	backgroundContainer: {
		height: 380,
		justifyContent: 'flex-end'
	},
	title: {
		fontSize: 28,
		marginTop: 120,
		marginLeft: 50,
		width: '50%',
		color: colors.white
	}
});
export default Login;
