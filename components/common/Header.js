import React from 'react';
import {View, Text} from 'react-native';

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}

class Header extends React.Component{
    render(){
        return(
            <View style = {styles.viewStyle}>
                <Text style = {styles.textStyle}>
                    {this.props.header}
                </Text>
            </View>
        );
    }
}

export default Header;