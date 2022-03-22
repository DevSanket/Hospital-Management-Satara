import { createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import Registration from '../Screens/Registration';

const Stack = createStackNavigator();

export default MainNavigator = () => (
    <Stack.Navigator screenOptions={
        {
            headerShown:false
        }
    }>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Register' component={Registration} />
    </Stack.Navigator>
)