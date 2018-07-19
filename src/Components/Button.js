import React, {Component} from 'react';
import { Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
    let {buttonStyle,textStyle} = styles;
    return(
        <TouchableOpacity
            onPress = {onPress}
            style={ buttonStyle}
        >
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle : {
        flex : 1,
        borderRadius : 5,
        backgroundColor : '#fff',
        borderColor: '#007aaf',
        borderWidth : 1,
        marginLeft:5,
        marginRight:5,
        alignSelf: 'stretch'
    },
    textStyle : {
        alignSelf: 'center',
        color: '#007aaf',
        paddingTop:10,
        paddingBottom:10,
        fontSize:16,
        fontWeight: '600'

    }
};
export default Button
