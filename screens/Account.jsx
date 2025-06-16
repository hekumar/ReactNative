import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Alert,
} from 'react-native';
import { useAuth } from '../contexts/authContext';
import { useNavigation } from '@react-navigation/native';
import accountStyles from '../styles/accountStyles';
import * as ImagePicker from 'expo-image-picker';
// import CameraDemo from '../demo/CameraDemo';
// import ImagePickerComponent from '../components/ImagePicker';

// You'll need to install react-native-vector-icons or use your preferred icon library
// For this example, I'm using text-based icons, but you can replace with actual icons
const AccountSettings = () => {
    const [image, setImage] = useState(null);
    const { auth, logout } = useAuth();
    const navigation = useNavigation()

    const { user } = auth;

    const handleProfilePress = () => {
        Alert.alert('Profile', 'Navigate to Profile Settings');
    };

    const handleOrderPress = () => {
        Alert.alert('Orders', 'Navigate to My Orders');
    };

    const handleTransactionPress = () => {
        Alert.alert('Transactions', 'Navigate to Transaction History');
    };

    const handleLogoutPress = () => {
        console.log(navigation);
        logout()
        navigation.replace("Login");

        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Logout', style: 'destructive', onPress: () => console.log('User logged out') }
            ]
        );
    };

    const handleEditPhoto = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const MenuButton = ({ icon, title, onPress, isLogout = false, showArrow = true }) => (
        <TouchableOpacity
            style={[accountStyles.menuButton, isLogout && accountStyles.logoutButton]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={accountStyles.menuButtonLeft}>
                <View style={[accountStyles.iconContainer, isLogout && accountStyles.logoutIconContainer]}>
                    <Text style={[accountStyles.iconText, isLogout && accountStyles.logoutIconText]}>{icon}</Text>
                </View>
                <Text style={[accountStyles.menuButtonText, isLogout && accountStyles.logoutText]}>
                    {title}
                </Text>
            </View>
            {showArrow && (
                <Text style={[accountStyles.arrowText, isLogout && accountStyles.logoutArrowText]}>›</Text>
            )}
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={accountStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={accountStyles.header}>
                    <Text style={accountStyles.headerTitle}>Account Settings</Text>
                </View>

                {/* Profile Photo Section */}
                <View style={accountStyles.photoSection}>
                    <View style={accountStyles.photoContainer}>
                        <Image
                            source={{
                                uri: image || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
                            }}
                            style={accountStyles.profilePhoto}
                        />
                        <TouchableOpacity
                            style={accountStyles.editPhotoButton}
                            onPress={handleEditPhoto}
                            activeOpacity={0.8}
                        >
                            <Text style={accountStyles.editPhotoText}>📷</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={accountStyles.userName}>{`${user?.firstName} ${user?.lastName}`}</Text>
                    <Text style={accountStyles.userEmail}>{user?.email}</Text>
                    <View style={accountStyles.membershipBadge}>
                        <Text style={accountStyles.membershipText}>Premium Member</Text>
                    </View>
                </View>

                {/* Menu Buttons Section */}
                <View style={accountStyles.menuSection}>
                    <Text style={accountStyles.sectionTitle}>Account</Text>

                    <View style={accountStyles.menuContainer}>
                        <MenuButton
                            icon="👤"
                            title="Profile Settings"
                            onPress={handleProfilePress}
                        />

                        <View style={accountStyles.separator} />

                        <MenuButton
                            icon="🛍️"
                            title="My Orders"
                            onPress={handleOrderPress}
                        />

                        <View style={accountStyles.separator} />

                        <MenuButton
                            icon="💳"
                            title="Transaction History"
                            onPress={handleTransactionPress}
                        />
                    </View>

                    <View style={accountStyles.logoutSection}>
                        <MenuButton
                            icon="🚪"
                            title="Logout"
                            onPress={handleLogoutPress}
                            isLogout={true}
                            showArrow={false}
                        />
                    </View>
                </View>

                {/* Bottom Spacing */}
                <View style={accountStyles.bottomSpacing} />
            </ScrollView>
        </SafeAreaView>
    );
};



export default AccountSettings;