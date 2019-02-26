import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

class Button extends React.Component{
    render(){
        if (!this.props.option)
        {
            return(
                <View
                    style = {this.props.viewStyle}
                >
                    <TouchableOpacity 
                        style = {this.props.buttonStyle}
                        onPress = {this.props.onPress}
                    >
                        <Text 
                            style = {this.props.labelStyle}
                        > 
                            {this.props.label} 
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else
        {
            return(
                <View
                    style = {this.props.viewStyle}
                >
                    <TouchableOpacity 
                        style = {this.props.buttonStyle}
                        onPress = {this.props.onPress}
                    >
                        <Text 
                            style = {this.props.labelStyle}
                        > 
                            {this.props.labelfalse} 
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

export default Button;