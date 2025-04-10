import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { getMember, Member, accept } from '../api/adminApi';
import { Text } from 'react-native-gesture-handler';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(()=>{
        const setting = async() => {
            const response = await getMember();
            setMembers(response);
        };

        setting();
    }, []);

    const acceptAuthenticate = async(id: string) => {
        setIsLoading(true);
        accept(id).finally(()=>{
            setIsLoading(false);
        });
    };

    return(
        <View style={styles.container}>
            {members.map((member) => {
                return (
                    <View key={member.id} style={styles.item}>
                        <View>
                            <Text>{'이름 : ' + member.nickname}</Text>
                            <Text>{'학교 : ' + member.university}</Text>
                        </View>
                        <Button title="수락" onPress={()=>acceptAuthenticate(member.id)} disabled={isLoading}/>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'lightgray',
    },
    item: {
        width: '100%',
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

});

export default Home;
