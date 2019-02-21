import React from 'react';
import {View, Text} from 'react-native';
import Input from './common/Input';
import Button from './common/Button';
import Card from './common/Card';

class ActivityForm extends React.Component{
    state = {
        activity: '',
        id:       '',
        hours:    '',
        minutes:  '',
        on:       false
    };

    resetForm = () => {
        this.setState({
            activity: '',
            hours:    '',
            minutes:  ''
        });
    }

    onFormSubmit = (event) => {
        this.setState({
            id : this.state.activity + this.state.hours + this.state.minutes
        });
        this.props.onSubmit(this.state);
        this.resetForm();
    }

    activityForm = () => {
        return(
            <View style = {styles.viewStyle}>
                        <Input
                            label = "this" 
                            viewStyle = {styles.propsViewStyle}
                            placeholder = "activity"
                            onChangeText = {activity => this.setState({activity})}
                            value = {this.state.activity}
                        />
                        <Input 
                            label = "that"
                            inputStyle = {styles.propsInputStyle}
                            viewStyle = {styles.propsViewStyle}
                            placeholder = "hours"
                            onChangeText = {hours => this.setState({hours})}
                            value = {this.state.hours}
                        />
                        <Input 
                            viewStyle = {styles.propsViewStyle}
                            placeholder = "minutes"
                            onChangeText = {minutes => this.setState({minutes})}
                            value = {this.state.minutes}
                        />
                        <Button
                                viewStyle = {styles.propsViewStyle} 
                                buttonStyle = {styles.propsButtonStyle}
                                onPress = {this.onFormSubmit}
                                label = "submit"
                        />
            </View>
        );
    }

    render() {
        return (
            <Card
                cardStyle = {styles.propsCardStyle}
            >
                {this.activityForm()}
            </Card>
        );
    }
}

const styles = {
    viewStyle:{
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        paddingTop: 20,
        paddingBottom: 10,
        shadowOffset: { width: 5, height: 5},
        shadowOpacity: 0.5
    },
    propsInputStyle: {
        borderColor: "black",
        borderWidth: 2
    },
    propsCardStyle: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        borderColor: "blue",
        borderWidth: 2
    },
    propsViewStyle: {
        borderColor: "orange",
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    propsLabelStyle:{
        fontSize: 20
    },
    propsButtonStyle:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    }
}

export default ActivityForm;