import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const{ width, height } = Dimensions.get("window");

export default class Todo extends Component{
state = {
    isEditing: false,
    isCompleted: false
};

    render() {
        const {isCompleted} = this.state;
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this._toggleComplete}>
                    <View style={[
                        styles.radio,
                        isCompleted ? styles.completedRadio : styles.uncompletedRadio]} />
                </TouchableOpacity>
                <Text style={styles.text}>todo no.1</Text>
            </View>
        );
    }

    _toggleComplete = () => {
        this.setState(prevState => {
            return {
                isCompleted: !prevState.isCompleted
            };
        });
    };
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    radio: {
        width: 24,
        height: 24,
        borderRadius: 12,   // radius는 항상 절반이어야 함
        borderColor: "#709fb0",
        borderWidth: 3,
        marginRight: 15
    },
    completedRadio: {
        borderColor: "#bbb",
    },
    uncompletedRadio: {
        borderColor: "#709fb0"
    },
    text: {
        fontWeight:"600",
        fontSize: 17,
        marginVertical: 20
    },
})