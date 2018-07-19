import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const headers = (props) => {
    return(
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>{props.name}</Text>
        </View>
    )
};
  
const styles = StyleSheet.create({
    viewStyle : {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5
    },
   textStyle: {
        fontSize: 20
   },

});

export default headers;