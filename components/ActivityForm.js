import React from 'react';
import {View} from 'react-native';
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
            <Card>
            <View style = {styles.viewStyle2}>
                        <Input 
                            viewStyle = {styles.viewStyle1}
                            labelStyle = {styles.labelStyle}
                            label = "What do you spend time on?"
                            placeholder = "activity"
                            onChangeText = {activity => this.setState({activity})}
                            value = {this.state.activity}
                        />
                        <Input 
                            viewStyle = {styles.viewStyle1}
                            labelStyle = {styles.labelStyle}
                            placeholder = "hours"
                            label = "How many hours?"
                            onChangeText = {hours => this.setState({hours})}
                            value = {this.state.hours}
                        />
                        <Input 
                            viewStyle = {styles.viewStyle1}
                            labelStyle = {styles.labelStyle}
                            placeholder = "minutes"
                            label = "How many minutes?"
                            onChangeText = {minutes => this.setState({minutes})}
                            value = {this.state.minutes}
                        />
                        <Button 
                                buttonStyle = {styles.buttonStyle}
                                onPress = {this.onFormSubmit}
                                label = "submit"
                        />
            </View>
            </Card>
        );
    }

    render() {
        return (
            <View>
                {this.activityForm()}
            </View>
        );
    }
}

const styles = {
    viewStyle1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewStyle2:{
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        paddingTop: 20,
        paddingBottom: 10,
        shadowOffset: { width: 5, height: 5},
        shadowOpacity: 0.5
    },
    labelStyle:{
        fontSize: 20
    },
    buttonStyle:{
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