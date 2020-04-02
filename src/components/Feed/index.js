import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

import feed from '../../feed.json';

import like from '../../assets/like.png';
import send from '../../assets/send.png';
import comment from '../../assets/comment.png';
import save from '../../assets/save.png';

export default function Feed() {
    return (
        <View style={styles.container}>
            <FlatList
            showsHorizontalScrollIndicator={false}
            data={feed}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
                <View style={{ marginVertical: 8 }}>
                    <View style={styles.postHeader}>
                        <Image
                        style={styles.profile}
                        source={{ uri: item.imgProfile_url }}
                        />
                        <Text style={styles.username}>{item.name}</Text>
                    </View>

                    <View>
                        <Image
                        style={styles.post}
                        source={{ uri: item.imgPost_url }}
                        />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles.likeArea}>
                                <TouchableOpacity>
                                    <Image
                                    style={styles.icons}
                                    source={like}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image
                                    style={styles.icons}
                                    source={comment}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image
                                    style={styles.icons}
                                    source={send}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View>
                               <TouchableOpacity>
                                    <Image
                                    style={styles.icons}
                                    source={save}
                                    />
                               </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.textArea}>
                            <Text style={styles.username}>{item.name}</Text>
                            <Text style={styles.postDescription}>{item.description}</Text>
                        </View>
                    </View>
                </View>
            )}
            />
        </View>
    );
}