import React from 'react'
import {View, Text} from 'react-native'
import BackgroundTimer from 'react-native-background-timer'
import Button from '../../common/Button'

class Timer extends React.Component{
    state = {
        seconds: 0,
        minutes: this.props.elem.minutes,
        hours: this.props.elem.hours,
        on: this.props.elem.on,
    }

    componentDidMount(){
        this.secondsRemaining = this.state.seconds + this.state.minutes * 60 + this.state.hours * 3600;
        this.count();
    }  

    formatting = (hr, min, sec) => {
        if (sec < 10){
            this.setState({
                seconds: "0" + this.state.seconds,
            })
        }
        if (min < 10) {
            this.setState({
                minutes: "0" + this.state.minutes,
            })
        }
        if (hr < 10) {
            this.setState({
                hours: "0" + this.state.hours,
                })
        }
    }
    count = () => {
        var hr = Math.floor(this.secondsRemaining / 3600);
        var min = Math.floor((this.secondsRemaining - hr * 3600) / 60);
        var sec = this.secondsRemaining - (hr * 3600) - (min * 60);
        
        this.setState({
          hours: hr,
          minutes: min,
          seconds: sec,
          on: this.props.elem.on
        })
        this.formatting(hr, min, sec);
        if (!this.state.on) {
            BackgroundTimer.stopBackgroundTimer(this.intervalHandle);
        }
        if (hr <= 0 && min <= 0 && sec <= 0){
            BackgroundTimer.stopBackgroundTimer(this.intervalHandle)
        }
        else{
        this.secondsRemaining--
        }
}

startCountDown = () => {
        if (this.props.elem.on === false)
        {
           console.log(this.props.elem.id)
           this.props.killCom(this.props.elem.id);
           BackgroundTimer.stopBackgroundTimer(this.intervalHandle);
           this.intervalHandle = BackgroundTimer.runBackgroundTimer(this.count, 1000);
        }
    }

componentWillUnmount = () => {
    BackgroundTimer.stopBackgroundTimer(this.intervalHandle);
    this.props.killCom();
}

    render() {
        if (!this.props.admin)
        {
            return(
                <View style = {styles.viewStyle}>
                    <View style = {styles.viewStyle3}>
                        <Text style = {styles.textStyle4}> 
                            {this.props.elem.activity}
                        </Text>
                    </View>
                    <View style = {styles.viewStyle2}>
                        <Text style = {styles.textStyle3}>
                        {this.state.hours} : {this.state.minutes} : {this.state.seconds}
                        </Text>
                    </View>
                    <Button option = {this.props.elem.on}
                            buttonStyle = {styles.propsButtonStyle}
                            labelStyle = {styles.propsLabelStyle}
                            viewStyle = {styles.propsViewStyle}
                            onPress = {this.startCountDown}
                            label = "Start"
                            labelfalse = ""
                    />
                </View>
            );
        }
        else
        {
            return(
                <View style = {styles.viewStyle}>
                    <View style = {styles.viewStyle3}>
                        <Text style = {styles.textStyle2}> 
                            {this.props.elem.activity}
                        </Text>
                    </View>
                    <View style = {styles.viewStyle2}>
                        <Text style = {styles.textStyle}>
                        {this.state.hours} : {this.state.minutes} : {this.state.seconds}
                        </Text>
                    </View>
                </View>
            );
        }
    }
}

const styles = {
    viewStyle :{
        flex: 5,
        flexDirection: 'row',
    },
    textStyle:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    textStyle2:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    textStyle3:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    textStyle4:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    propsViewStyle:{
        flex:1,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: 'center',
    },
    viewStyle2:{
        flex:2.5,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewStyle3:{
        flex:2.5,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: 'center'
    }, 
    propsButtonStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderColor: "black",
    },
    propsLabelStyle:{
        fontSize: 23,
        fontWeight: 'bold'
    },
}
export default Timer;