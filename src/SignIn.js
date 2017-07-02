import React from 'react';
import {View,Dimensions,Image,Text} from 'react-native';
import {Form,Item,Label,Input,Button} from 'native-base';

var myBackground = require('../assets/icons/landing.jpg');
var {height, width} = Dimensions.get('window');

class SignIn extends React.Component{
	state = {
		email: "",
		password: ""
	}
	logIn = () =>{
		const {email, password} = this.state;
		this.props.signIn(email,password);
	}
	render(){
		return(
			<View style={{flex: 1}}>
				<Image source={myBackground} style={styles.backgroundImage}>
					<View style={styles.viewStyle}>
						<Form>
		                    <Item floatingLabel>
		                        <Label>Email</Label>
		                        <Input 
		                        	onChangeText={(email) => this.setState({email})}
		                            style={styles.inputStyle}
		                            autoCorrect={false}
		                        />
		                    </Item>
		                    <Item floatingLabel last>
		                        <Label>Password</Label>
		                        <Input 
		                        	onChangeText={(password) => this.setState({password})}
		                            style={styles.inputStyle}
		                            autoCorrect={false}
		                            secureTextEntry
		                        />
		                    </Item>
		                </Form>
		                <View style={{marginTop: 10}}/>
		                <Button primary block onPress={this.logIn}>
	                        <Text style={{color: "white"}}>Sign Up/Sign In</Text>
	                    </Button>
					</View>
				</Image>
			</View>
		)
	}
}

const styles = {
	viewStyle: {
		flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin:10
    },
	backgroundImage: {
	    flex: 1,
	    resizeMode: 'cover',
	    width: width,
	    height: height
	},
	titleStyle: {
		fontSize: 30,
		color: "blue",
		alignItems: 'center'
	},
	buttonStyle: {
		margin: 10
	},
	buttonText: {
		color: 'white'
	}
}

export default SignIn;