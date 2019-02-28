import React from 'react';
import {Alert, View, Text} from 'react-native';
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
            minutes:  '',
            id: '',
            on : false
        });
    }

    onFormSubmit = (event) => {
        const hr = this.state.hours
        const min = this.state.minutes
        const act = this.state.activity

        if (act.length <= 0)
        {
            Alert.alert(
            'Error',
            'Activity is required.')
        }
        else if (isNaN(hr))
        {
            Alert.alert(
            'Error',
            'Hours must be a number.')
        }
        else if (isNaN(min))
        {
            Alert.alert(
            'Error',
            'Minutes must be a number.')
        }
        else if (min == 0 && hr == 0)
        {
            Alert.alert(
            'Error',
            'Hours and Minutes are empty.'
            )
        }
        else if (hr > 23)
        {
            Alert.alert(
            'Error',
            'Hours cannot be greater than 23'
            )
        }
        else if (min > 59)
        {
            Alert.alert(
            'Error',
            'Minutes cannot be greater than 59'
            )
        }
        else
        {
            this.props.onSubmit(this.state);
            this.resetForm();
        }
    }

    setID = () => {
        this.setState({
            id: this.state.activity + this.state.hours + this.state.minutes
        });
    }

    activityForm = () => {
        return(
            <View style = {styles.viewStyle}>
                        <Input
                            label = "How do you spend your time?"
                            labelStyle = {styles.propsLabelStyle}
                            inputStyle = {styles.propsInputStyle} 
                            viewStyle = {styles.propsViewStyle}
                            placeholder = "activity"
                            onChangeText = {(activity) => 
                                {   this.setState({activity}); 
                                    this.setID();
                                }}
                            value = {this.state.activity}
                        />
                        <View style = {styles.propsViewStyle4}>
                        <Text style = {styles.propsLabelStyle2}> How much time? </Text>
                        </View>
                        <View style = {styles.propsViewStyle3}>
                        <Input 
                            inputStyle = {styles.propsInputStyle}
                            viewStyle = {styles.propsViewStyle}
                            placeholder = "hours"
                            onChangeText = {(hours) => 
                                {   this.setState({hours});
                                    this.setID();
                                }}
                            value = {this.state.hours}
                        />
                        <Input 
                            inputStyle = {styles.propsInputStyle}
                            viewStyle = {styles.propsViewStyle}
                            placeholder = "minutes"
                            onChangeText = {(minutes) => 
                                {   this.setState({minutes});
                                    this.setID();   
                                }}
                            value = {this.state.minutes}
                        />
                        </View>
                        <Button
                                labelStyle = {styles.propsLabelStyle3}
                                viewStyle = {styles.propsViewStyle2} 
                                buttonStyle = {styles.propsButtonStyle}
                                onPress = {() => {
                                                this.onFormSubmit();
                                            }}
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
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    propsInputStyle: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        marginRight: 5,
        marginLeft: 5,
    },
    propsCardStyle: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBotton: 5,
        borderColor: "black",
        borderWidth: 3,
        minHeight: 250,
        maxHeight: 250,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    propsViewStyle: {
        flex:4,
        //borderColor: "orange",
        //borderWidth: 2,
    },
    propsViewStyle2:{
        flex:3,
        justifyContent: 'flex-end',
        //borderWidth: 2,
        //borderColor: "red"
    },
    propsViewStyle3: {
        flex:2,
        flexDirection: 'row',
        //borderColor: "green",
        //borderWidth: 2,
        paddingLeft: 40,
        paddingRight: 40,
    },
    propsViewStyle4:{
        flex:1.5,
        justifyContent: 'center',
        alignItems: 'center',
        //borderWidth: 2,
        //borderColor: "red"
    },
    propsLabelStyle:{
        flex: 2,
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    propsLabelStyle2:{
        flex: 2,
        alignItems: 'center',
        fontSize: 23,
        fontWeight:'bold'
    },
    propsLabelStyle3:{
        fontSize:17
    },
    propsButtonStyle:{
        borderWidth: 1.4,
        borderRadius: 5,
        marginLeft: 100,
        marginRight: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderColor: "black",
    }
}

export default ActivityForm;