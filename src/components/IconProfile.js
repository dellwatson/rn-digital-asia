import React from 'react'
import { View, Text, Image } from 'react-native'
import { Title } from '../styles';

export default ({ name = 'name', title = ' Member', imgUrl, hori = false, small = false }) => {

    const sizeImg = small ? 50 : 70
    const sizeFont = small ? 0.8 : 1

    return (
        <View
            style={[hori ? { flexDirection: 'row', padding: '3%', } :
                {
                    justifyContent: 'center',
                    alignItems: 'center'
                },
            ]}
        >
            <View style={{
                borderRadius: 50, height: sizeImg, width: sizeImg, borderWidth: 0.5, padding: 3,
                // marginRight: hori ? 5 : 0
                marginRight: 10,
            }}>
                {!!imgUrl && <Image
                    source={{ uri: imgUrl }}
                    style={{ width: '100%', height: '100%', backgroundColor: 'orange', borderRadius: 50, }} />}
            </View>
            <View style={[hori ? {} : { alignItems: 'center' }]}>
                <Title size={20 * sizeFont} bold>{name}</Title>
                <Title transform='capitalize' size={16 * sizeFont}>{title}</Title>
            </View>
        </View>
    )
}
