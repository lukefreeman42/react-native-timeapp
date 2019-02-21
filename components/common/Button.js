import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

class Button extends React.Component{
    render(){
        return(
            <TouchableOpacity 
                onPress = {this.props.onPress}
                style = {this.props.buttonStyle}
            >
                <Text style = {this.props.labelStyle}> 
                    {this.props.label} 
                </Text>
            </TouchableOpacity>

        );
    }
}

export default Button;