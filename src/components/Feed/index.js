import React from 'react';
import { View, FlatList} from 'react-native';

import feed from '../../feed.json';
import FeedList from '../FeedList';

import styles from './styles';

export default function Feed() {
    return (
        <View style={styles.container}>
            <FlatList
            showsHorizontalScrollIndicator={false}
            data={feed}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <FeedList item={item} />}
            />
        </View>
    );
}