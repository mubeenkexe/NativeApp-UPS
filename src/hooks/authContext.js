// AuthContext.js
import { useEffect, useState, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseUrl } from '../utils/constant';


const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Load user data from storage when the app starts
        const loadUser = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                if (userData) {
                    setUser(JSON.parse(userData));
                }
            } catch (error) {
                console.error('Error loading user data:', error);
            }
        };
        loadUser();
    }, []);

    const login = async (data) => {
        // Implement your login logic here

        try {

            const authData = data.action === 'signin' ?
                { email: data.email, password: data.password, action: 'signin' } :
                { username: data.username, email: data.email, password: data.password, action: data.action };
            const response = await fetch(`${BaseUrl}/api/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(authData)
            });

            const responseData = await response.json();

            if (!responseData.error && responseData.user.id) {
                setUser(responseData.user);

                // Save user data to storage
                AsyncStorage.setItem('userData', JSON.stringify(responseData.user));
            }
        } catch (error) {
            console.error('API request error:', error);
            // Handle other errors as needed
        };
    };

    const logout = () => {
        // Implement your logout logic here
        setUser(null);

        // Clear user data from storage
        AsyncStorage.removeItem('userData');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};