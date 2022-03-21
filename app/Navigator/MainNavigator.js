import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';


const Stack = createStackNavigator();

export default MainNavigator = () => (
    <Stack.Navigator screenOptions={
        {
            headerShown:false
        }
    }>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
)