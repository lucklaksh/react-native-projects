// common UI elements in a screen
import { Stack } from 'expo-router';

export default function RootLayout () {
    return (
        <Stack  screenOptions={{}}>
            <Stack.Screen name="index" Options={{ title: 'Advent Calender'}} />
        </Stack>
    );
};
