import React from "react";
import { Dimensions, Text, StyleSheet } from "react-native";
import { formatPrice, formatDate, } from '../utils'
import { Container, Layer, Position, Title, } from '../styles'
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");
export const CARD_WIDTH = width * 0.9;
export const CARD_HEIGHT = CARD_WIDTH * 0.4;

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
    },
});

export default ({ item, ...props }) => {
    const navigation = useNavigation()
    return (
        <Container
            style={styles.card}
            bg={item?.status === 'SUCCESS' ? 'green' : 'darkorange'}
            onPress={() => navigation.navigate('Detail', { ...item })}
        >
            <Layer>
                <Position align='flex-start'>
                    <Title bold size={18} uppercase>{item.sender_bank} -> {item.beneficiary_bank}</Title>
                    <Title>{item.beneficiary_name}</Title>
                    <Title >
                        <Title size={16}>Rp{formatPrice(item.amount)}</Title>  &nbsp;
                        <Title size={16}>{formatDate(item.created_at)} </Title>
                    </Title>
                </Position>
                <Title size={12}>{item.id}</Title>
            </Layer>
            <Title color='white' bold
                style={{ marginRight: 20 }} >{item?.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}</Title>
        </Container>
    )
}