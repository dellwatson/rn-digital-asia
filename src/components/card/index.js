import React from 'react'
import { View, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Container, Title, Row } from "../../styles";
import IconProfile from '../IconProfile'
import { formatPrice, formatDate, } from '../../utils'
import Icon from '../Icon'
import BottomSheet from 'reanimated-bottom-sheet';
import { connect } from 'react-redux'
import { setToggle } from '../../store/action'

const borderColor = '#eee'

const dummyImg = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-l889V8_Nv64SYZECELEBUzvWgmgxdlAow&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyd68u1UNQ6o1bC0MgRsbmOb8D59s7qxYfbg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsjMZRq5tDcW-zaTDcZL01NOCrDYLglPqfQ&usqp=CAU'
]

const dummyBuilding = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf88jwne7EheKzfNv1lQh3oTWcqQzii_EPJA&usqp=CAU',
    'https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/12/29/keppel_bay_tower_1_0.jpg?itok=WZw0q_51&timestamp=1577607835',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1a44tca4jAj9b7-89Cy_-1RoKKGWE8jlwA&usqp=CAU'
]


//komisi, uri, placeInfo: {}, profileInfo: {}
export default connect(null, { setToggle })(({ item, ...props }) => {

    const isFavourite = props.route.name === 'Favourite'

    const buildingImage = dummyBuilding[Math.floor(Math.random() * 2)]

    return (

        <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Detail', { ...item, buildingImage })}
        >
            <Container >
                <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <IconProfile
                        title={`#${item.id}`}
                        imgUrl={dummyImg[Math.floor(Math.random() * 2)]}
                        hori small name={item.beneficiary_name} />
                    {!isFavourite &&
                        <TouchableOpacity
                            // onPress={() => sheetRef.current.snapTo(0)}
                            onPress={_ => props.setToggle(true)}
                        >
                            <Title style={{ marginRight: 20 }}>more</Title>
                        </TouchableOpacity>}
                </Row>
                <ImageCard uri={buildingImage} />
                <PlaceInfo {...item} />
                <Bottom />
            </Container>
        </TouchableWithoutFeedback>
    )
})

const ImageCard = ({
    uri = defaultImg,
    komisi = false
}) => (
        <View style={{ width: '100%', minHeight: 150, backgroundColor: 'black' }}>
            <Image
                style={{ position: 'absolute', width: '100%', height: '100%' }}
                source={{ uri }}
            />
            {!!komisi &&
                <View style={{
                    borderRadius: 5, backgroundColor: '#BEAF87',
                    position: 'absolute',
                    padding: '1%',
                    paddingHorizontal: '3%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: 5,
                    right: 5
                }}>
                    <Title size={14} color='white'>komisi</Title>
                    <Title size={20} bold color='white'>{komisi}%</Title>
                </View>
            }
        </View>
    )

const PlaceInfo = ({
    title = 'B residence abcasda 21dadaw 2dawdawdaw d2122',
    price = 'Rp 4.000.000 / Bulan',
    type = 'apartement',
    location = 'Jl. cemara 123, tangerang selatan',
    ...props
}) => (
        <View style={{ width: '100%', padding: '3%' }}>
            <Row style={{ justifyContent: 'space-between' }}>
                <Title style={{ marginRight: 10 }}>{title.length > 20 ? `${title.substring(0, 24)} ...` : title}</Title>
                <Label textTransform='uppercase' />
            </Row>
            <Title size={26} style={{ fontWeight: '800' }}>Rp {formatPrice(props.amount)} /Bulan</Title>
            <Row >
                <Title style={{ marginRight: 10 }} bold transform='capitalize'>{type}</Title>
                <Label bg='#5497F1' borderRadius={5} title='Di jual' />
            </Row>
            <Row>
                {/* icon */}
                <Title size={13} transform='capitalize' color='#838383'>{location}</Title>
            </Row>

        </View>
    )

const Bottom = () => (
    <View style={{ paddingHorizontal: '3%' }}>
        <Row style={{ borderTopWidth: 0.5, paddingVertical: '2%', borderColor }}>
            <GroupIcon />
            <GroupIcon borderLeft />
            <GroupIcon borderLeft />
        </Row>
    </View>

)

const GroupIcon = ({ borderLeft = false, value = '3+1', valueTitle = 'K.tidur' }) => {
    return (
        <View style={{
            flex: 1, margin: '3%',
            paddingLeft: !borderLeft ? 0 : '3%',
            borderLeftWidth: borderLeft ? 0.5 : 0,
            borderColor
        }}>
            <Row>
                <Icon />
                <Title size={20} style={{ fontWeight: '800', marginLeft: 10 }} >{value}</Title>
            </Row>
            <Title size={13} transform='capitalize' color='#838383'>{valueTitle}</Title>
        </View>
    )
}



const Label = ({ bg = 'black', borderRadius = 10, title = 'private', textTransform = 'capitalize' }) => (
    <View>
        <Text style={{
            color: 'white', backgroundColor: bg, padding: '2%',
            paddingHorizontal: `3%`,
            overflow: 'hidden',
            justifyContent: 'center',
            borderRadius,
            textTransform,
            fontSize: 10
        }}>{title}</Text>
    </View>

)



export const defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf88jwne7EheKzfNv1lQh3oTWcqQzii_EPJA&usqp=CAU'