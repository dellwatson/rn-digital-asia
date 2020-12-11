import React from 'react'
import { View, Image, TouchableOpacity, Button, Platform } from 'react-native'
import { Title, Row, List } from '../styles'
import { formatPrice, formatDate, } from '../utils'
import { defaultImg } from '../components/card'
import Icon from '../components/Icon'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from "react-native-push-notification";

export default ({ route: { params }, navigation }) => {
    navigation.setOptions({ title: `#${params.id}` });

    React.useEffect(() => {
        // PushNotificationIOS.checkPermissions(res => console.log(res, 'res permissions'))

        // Platform.OS === 'ios' ?? PushNotificationIOS.requestPermissions()
    }, [])

    return (
        <>
            <ScrollView style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
                <Image source={{ uri: params.buildingImage }}
                    style={{ minHeight: 260, width: '100%' }}
                />
                <View style={{
                    paddingHorizontal: '5%',
                    borderBottomEndRadius: 20,
                    borderBottomLeftRadius: 20,
                    backgroundColor: 'white'
                }}>
                    <View style={{ paddingVertical: '5%', borderBottomWidth: 1, borderColor: '#eee' }}>
                        <Title style={{ marginRight: 10 }}>{paramsx.title}</Title>
                        <Title size={26} style={{ fontWeight: '800' }}>Rp {formatPrice(params.amount)}</Title>
                    </View>
                    <Row style={{ paddingVertical: '5%', justifyContent: 'space-between' }}>
                        <View>
                            <Title >{paramsx.desc}</Title>
                            <Title size={13} transform='capitalize' color='#838383'>{paramsx.location}</Title>
                        </View>
                        <Icon />
                    </Row>
                </View>
            </ScrollView>
            <TouchableOpacity
                onPress={() => {
                    // PushNotificationIOS.addNotificationRequest({
                    //     id: 'as',
                    //     title: "Promosikan Listing",
                    //     body: "Listing properti anda berhasil dibagikan!",
                    // })
                    PushNotification.localNotification({
                        title: "Promosikan Listing", // (optional)
                        message: "Listing properti anda berhasil dibagikan!", // (required)
                    });
                }}
                style={{
                    backgroundColor: '#242426', margin: '5%', padding: '3%',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 30
                }}>
                <Title color='white' bold>Promosikan</Title>
            </TouchableOpacity>
        </>
    )
}

//dummy params replace with navigation
const paramsx = {
    title: 'B residence abcasda 21dadaw 2dawdawdaw d2122',
    price: 'Rp 4.000.000 / Bulan',
    type: 'apartement',
    location: 'Jl. cemara 123, tangerang selatan',
    desc: 'Rumah untuk dijual'
}





