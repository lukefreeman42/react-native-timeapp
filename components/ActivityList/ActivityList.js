import React from 'react';
import Button from '../common/Button';
import Timer from './Timer/Timer'
import Card from './../common/Card'
import {View} from 'react-native';

class ActivityList extends React.Component {
    render(){
        if (this.props.admin)
        {
            return (
                <View style = {styles.viewStyle}>
                        {this.props.list.map((elem, key) => {
                            return (<Activity key = {key}
                                              elem = {elem}
                                              admin = {this.props.admin}
                                              killCom = {this.props.killCom}
                                              delAct = {this.props.delAct}
                                    />
                                );
                        })}
                </View>
            );
        }
        else
        {
            return (
                <View style = {styles.viewStyle3}>
                        {this.props.list.map((elem, key) => {
                            return (<Activity key = {key}
                                              elem = {elem}
                                              admin = {this.props.admin}
                                              killCom = {this.props.killCom}
                                              delAct = {this.props.delAct}
                                    />
                                );
                        })}
                </View>
            );
        }
    }
}

class Activity extends React.Component {

    delAct = () =>
    {
        this.props.delAct(this.props.elem.id)
    }
    render (){
        if (this.props.admin)
        {
            return (
              <View style = {styles.viewStyle2}>
                  <Timer
                          elem = {this.props.elem}
                          admin = {this.props.admin}
                          killCom = {this.props.killCom}
                   />
                  <Button
                          labelStyle = {styles.propsLabelStyle}
                          buttonStyle = {styles.propsButtonStyle}
                          viewStyle = {styles.propsViewStyle}
                          label = "delete"
                          onPress = {this.delAct}
                   />
              </View>
            )
        }
        else
        {
            return (
                <View style = {styles.viewStyle4}>
                    <Timer
                          elem = {this.props.elem}
                          admin = {this.props.admin}
                          killCom = {this.props.killCom}
                   />
                </View>
              ) 
        }
    }
}

const styles = {
    viewStyle: {
        flex: 20,
        borderColor: "red",
        borderWidth: 1,
        marginTop: 1,
        marginRight: 15,
        marginLeft: 15,
    },
    viewStyle2: {
        flex:1,
        flexDirection: 'row',
       // borderColor: "red",
       // borderWidth: 2,
        maxHeight: 50,
    },
    viewStyle3: {
        flex: 20,
        borderColor: "red",
        borderWidth: 1,
        marginTop: 1,
    },
    viewStyle4: {
        flex:1,
        flexDirection: 'row',
       // borderColor: "red",
       // borderWidth: 2,
        maxHeight: 80,
    },
    propsViewStyle: {
        flex: 1,
        borderColor:"black",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    propsButtonStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderColor: "black",
    },
    propsLabelStyle:{
        fontSize: 17,
        fontWeight: 'bold',
    },
}
export default ActivityList;