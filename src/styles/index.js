import styled from 'styled-components/native'


export const Container = styled.View`
    background-color: ${({ bg }) => bg ?? 'white'};
    width: 100%;
    margin-bottom: 20px;
    box-shadow: 8px 4px 4px lightgrey;
    border-radius: 15px;
`

export const Layer = styled.View`
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
    height: 100px;
    width: 98%;
    padding: 5%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`

export const Input = styled.TextInput`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 8px 4px 4px lightgrey;
    margin: 5%;
`

export const Position = styled.View`
    justify-content: ${({ justify }) => justify ?? 'center'};
    align-items: ${({ align }) => align ?? 'center'};
    height: 100%;
`
export const FilterIcon = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    height: 100%;
    padding: 8%;
`

export const Title = styled.Text`
    font-size: ${({ size }) => size ?? `18`}px;
    color: ${({ color }) => color ?? 'black'};
    font-weight: ${({ bold, boldness }) => bold ? 'bold' : `300`};
    text-transform: ${({ uppercase, transform = 'none' }) => uppercase ? `uppercase` : transform};
    padding-vertical: 3px;
`

export const Row = styled.View`
    flex-direction: row;
`


export const List = styled.View`
    padding: 5%;
    flex-direction: ${({ column }) => column ? 'column' : 'row'};
    justify-content: ${({ justify = 'center' }) => justify};
    align-items:${({ align = 'center' }) => align};
    width: 100%;
    border-bottom-width: 0.5px;
    border-bottom-color: lightgrey;

`
