import React from 'react';
import Button from './common/Button';
import ActivityForm from './ActivityForm';
import ActivityList from './ActivityList/ActivityList';
import Card from './common/Card';
import {View} from 'react-native';

class ActivityPage extends React.Component{
    state =
    {
        list:[]
    };

    flipAdmin = () => {
            this.killCom();
            this.props.flipAdmin();
    }

    killCom = (id) =>
    {
        const newList = this.state.list.map(elem => {
            if (elem.id !== id)
                elem.on = false;
            else
                elem.on = true;
            return elem;
        });
        this.setState({list : newList});
    }

    delAct = (id) =>
    {
        const newList = this.state.list.filter(elem =>{
            if (elem.id !== id)
                return elem;
        });
        this.setState({list : newList});
    }

    addAct = (elem) =>
    {
        const newList = this.state.list.concat(elem);
        this.setState({list: newList});
    }

    render(){
        if (this.props.admin)
        {
            return(
                <View style = {styles.viewStyle}>
                    <ActivityForm onSubmit = {this.addAct} 
                    />
                    <ActivityList
                                delAct = {this.delAct}
                                list = {this.state.list}
                                admin = {this.props.admin}
                                killCom = {this.killCom}
                    
                    />
                    <Button
                            viewStyle = {styles.propsViewStyle}
                            buttonStyle = {styles.propsButtonStyle}
                            labelStyle = {styles.propsLabelStyle}
                            onPress = {this.props.flipAdmin}
                            label = "save"
                    />
                </View>
            );
        }
        else
        {
            return(
                <View style = {styles.viewStyle}>
                    <ActivityList
                        delAct = {this.delAct}
                        list = {this.state.list}
                        admin = {this.props.admin}
                        killCom = {this.killCom} 
                    />
                    <Button
                            viewStyle = {styles.propsViewStyle} 
                            buttonStyle = {styles.propsButtonStyle}
                            labelStyle = {styles.propsLabelStyle}
                            onPress = {this.props.flipAdmin}
                            label = "edit"
                    />
                </View>
            );
        }
    }
}


const styles = {
    viewStyle: {
        flex: 1,
        //borderColor: "red",
        //borderWidth: 2,
    },
    propsViewStyle:{
        flex: 1,
        //borderColor: "green",
        //borderWidth: 2,
        justifyContent: 'center',
        backgroundColor: '#FFF',
        minHeight: 30
    },
    propsButtonStyle: {
        borderWidth: 3,
        borderRadius: 5,
        marginLeft: 100,
        marginRight: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderColor: "black",
    },
    propsLabelStyle: {
        fontSize: 20
    }
}
export default ActivityPage