import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5
    },
    post: {
        width: 360,
        height: 360,
    },
    textArea: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 3,
    },
    postDescription: {
        marginLeft: 5,
    },
    likeArea: {
        flexDirection: 'row',
    },
    icons: {
        width: 30,
        height: 30,
        marginTop: 8,
        marginHorizontal: 6
    },
    likesText: {
        fontWeight: 'bold',
        marginLeft: 8
    }
});