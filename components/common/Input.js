import React from 'react';
import {View, Text, TextInput} from 'react-native';

class Input extends React.Component{
    render(){
        if (this.props.label)
        {
            return (
                <View style = {this.props.viewStyle}
                 >
                    <Text style = {this.props.labelStyle}
                    > 
                        {this.props.label} 
                    </Text>
                    <TextInput
                            style = {this.props.inputStyle}
                            secureTextEntry = {this.props.secureTextEntry}
                            placeholder = {this.props.placeholder}
                            value = {this.props.value}
                            onChangeText = {this.props.onChangeText}
                    />
                </View>
            );
        }
        else{
            return(
                <View style = {this.props.viewStyle}
                >
                   <TextInput
                           style = {this.props.inputStyle}
                           secureTextEntry = {this.props.secureTextEntry}
                           placeholder = {this.props.placeholder}
                           value = {this.props.value}
                           onChangeText = {this.props.onChangeText}
                   />
               </View>     
            )
        }
    }
}

export default Input;