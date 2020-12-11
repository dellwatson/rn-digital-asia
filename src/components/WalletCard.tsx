import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import Card, { CARD_HEIGHT as DEFAULT_CARD_HEIGHT } from "./Card";

export const MARGIN = 0;
export const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 2;

const { height: wHeight } = Dimensions.get("window");

const height = wHeight - 64;

const styles = StyleSheet.create({
    card: {
        marginVertical: MARGIN,
        alignSelf: "center",
    },
});

interface WalletCardProps {
    y: Animated.Value;
    index: number;
    item: object;
}

export default ({ item, y, index }: WalletCardProps) => {
    const position = Animated.subtract(index * CARD_HEIGHT, y);
    // for top distance appearance
    const isDisappearing = -CARD_HEIGHT;
    const isTop = 0;
    const isBottom = height - CARD_HEIGHT;
    // for bottom distance appearance
    const isAppearing = height;

    const translateY = Animated.add(
        Animated.add(
            y,
            y.interpolate({
                inputRange: [0, 0.00001 + index * CARD_HEIGHT],
                outputRange: [0, -index * CARD_HEIGHT],
                extrapolateRight: "clamp",
            })
        ),
        position.interpolate({
            inputRange: [isBottom, isAppearing],
            outputRange: [0, -CARD_HEIGHT / 4],
            extrapolate: "clamp",
        })
    );

    const scale = position.interpolate({
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
        extrapolate: "clamp",
    });

    const opacity = position.interpolate({
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
    });

    return (
        <Animated.View
            style={[styles.card, { opacity, transform: [{ translateY }, { scale }] }]}
            key={index}
        >
            <Card {...{ item }} />
        </Animated.View>
    );
};
