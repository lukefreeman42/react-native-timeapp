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
                            buttonStyle = {styles.buttonStyle}
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
                            buttonStyle = {styles.buttonStyle}
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
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
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
        justifyContent: 'flex-end',
        marginBottom: 3
    },
}
export default ActivityPage