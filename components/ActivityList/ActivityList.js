import React from 'react';
import Button from '../common/Button';
import Timer from './Timer/Timer'
import Card from './../common/Card'
import {View} from 'react-native';

class ActivityList extends React.Component {
    render(){
        return (
            <View>
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

class Activity extends React.Component {

    delAct = () =>
    {
        this.props.delAct(this.props.elem.id)
    }
    render (){
        if (this.props.admin)
        {
            return (
              <Card>
                  <Timer
                          elem = {this.props.elem}
                          admin = {this.props.admin}
                          killCom = {this.props.killCom}
                   />
                  <Button
                        buttonStyle = {styles.buttonStyle}
                          label = "delete"
                          onPress = {this.delAct}
                   />
              </Card>
            )
        }
        else
        {
            return (
                <View>
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
    buttonStyle: {
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
export default ActivityList;