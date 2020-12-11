import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";

import RadioForm from 'react-native-simple-radio-button';


const radio_props = [
    { label: 'Nama A-Z', value: 'beneficiary_name' },
    { label: 'Nama Z-A', value: 'beneficiary_name#reverse' },
    { label: 'Tanggal Terbaru', value: 'created_at' },
    { label: 'Tanggal Terlama', value: 'created_at#reverse' },
];

interface ModalFilter {
    modalVisible: boolean;
    filter: string | null;
    setModalVisible: any;
    setFilter: any;
}

export default ({
    modalVisible = false,
    filter,
    setModalVisible,
    setFilter
}: ModalFilter) => (
        <Modal
            animationType="fade"
            transparent={true}
            // presentationStyle='formSheet'
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <TouchableWithoutFeedback
                onPress={_ => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <TouchableWithoutFeedback onPress={_ => null}>
                        <View style={styles.modalView}>
                            <RadioForm
                                radio_props={radio_props}
                                // load lastest position when closes modal
                                initial={filter.lastPosition ?? -1}
                                formHorizontal={false}
                                labelHorizontal={true}
                                animation={true}
                                onPress={(value, lastPosition) =>
                                    setFilter({ value, lastPosition })}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `rgba(0, 0, 0, 0.5)`
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: '5%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '90%'
    },
});
