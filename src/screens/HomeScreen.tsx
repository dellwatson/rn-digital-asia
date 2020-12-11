import React, { useContext, useState } from 'react'
import useFetch from '../hooks/useFetch'
import Modal from '../components/modal'
import Search from '../components/search'
import { sortir, filterObj } from '../utils'
import Wallet from '../components/Wallet'
import BottomSheet from 'reanimated-bottom-sheet';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import { setToggle } from '../store/action'
import { connect } from 'react-redux'



export default (props: any) => {
    // use hooks for simply fetch data
    const { data, isLoading, refresh } = useFetch('/frontend-test')
    const [query, setQuery] = useState('')

    const [modalVisible, setModalVisible] = useState(false);
    const [filter, setFilter] = useState({
        value: '',
        lastPosition: null,
    })

    // format data to array for easier
    const formattedData = Object.keys(data).map(k => data[k])

    // this will search the entire property value on object
    // since i the objective is not clearly about the search input
    // like, what kind of name ? every name ? 
    // so i just search whatever matches with property value, 
    // better more than less :3
    const searchInput = filterObj(formattedData, query)
    // const searchInput = filterObjLimited(formattedData, query)

    // check has filter input from modal
    const result = !!filter.value ?
        sortir(filter.value.split('#')[0], searchInput) : searchInput

    // check if it's reversed or not
    const finalResult = !!filter.value.split('#')[1] ? result.reverse() : result

    const fall = new Animated.Value(1)

    return (
        <Animated.View
            style={{ opacity: Animated.add(0.1, Animated.multiply(fall, 0.9)) }}
        >
            <Bottom />
            {/* <Modal {...{ modalVisible, setModalVisible, setFilter, filter }} /> */}
            {/* <Search {...{ setQuery, query, setModalVisible, isLoading }} /> */}
            <Wallet data={finalResult} {...{ isLoading, refresh }} {...props} />

        </Animated.View>
    )
}


const mapStateToProps = state => {
    return {
        toggle: state.test.toggle
    }
}

const Bottom = connect(mapStateToProps, { setToggle })((props) => {
    const sheetRef = React.useRef(null);

    React.useEffect(() => {
        if (!!props.toggle) {
            sheetRef.current.snapTo(1)
        } else {
            sheetRef.current.snapTo(0)
        }
    }, [props.toggle])

    return (
        <BottomSheet
            ref={sheetRef}
            initialSnap={0}
            snapPoints={[0, 300]}
            borderRadius={20}
            renderContent={renderContent}
            onCloseEnd={() => props.setToggle(false)}
        />
    )
})


const renderContent = () => (
    <View
        style={{
            backgroundColor: 'white',
            padding: '5%',
            paddingBottom: 100,
            height: 300,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 5,
            shadowOpacity: 0.4,
            elevation: 5,
            justifyContent: 'space-around',
            alignItems: 'center',
            borderWidth: 1, borderRadius: 20,
            borderColor: 'lightgrey'
        }}
    >

        <Text style={{ fontWeight: 'bold' }}>Ubah</Text>
        <Text style={{ fontWeight: 'bold' }}>Hapus</Text>
        <Text style={{ fontWeight: 'bold' }}>Tandai</Text>
    </View>
);