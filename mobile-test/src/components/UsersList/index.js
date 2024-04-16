import React from 'react'
import { ScrollView, TouchableOpacity, View, Text, Dimensions, StyleSheet } from 'react-native'

const UserItem = ({ user, index, onPress }) => {
	const renderText = ({ label, value }) => (
		<Text style={{ fontSize: 16, color: 'darkgrey' }}>
			{label}:<Text style={{ fontWeight: 600 }}> {value}</Text>
		</Text>
	)

	const { name, city = '', position = '', id, schoolName } = user

	return (
		<TouchableOpacity
			key={index}
			style={{
				flex: 1,
				borderColor: 'lightgrey',
				borderWidth: 1,
				borderRadius: 8,
				padding: 12,
				marginBottom: 12,
			}}
			activeOpacity={0.75}
			onPress={onPress}
		>
			{renderText({ label: 'Name', value: name })}
			{city ? renderText({ label: 'City', value: city }) : null}
			{position ? renderText({ label: 'Position', value: position }) : null}
			{schoolName ? renderText({ label: 'School', value: position }) : null}
		</TouchableOpacity>
	)
}

const UsersList = ({ users, navigation }) => {
	const renderUserItem = (user, index) => {
		const handleOnPress = () => {
			navigation.navigate('Details', { user })
		}
		return <UserItem user={user} key={index} onPress={handleOnPress} />
	}
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Users</Text>
			<ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
				{users.map(renderUserItem)}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: 'white' },
	title: {
		textAlign: 'center',
		width: Dimensions.get('screen').width,
		marginVertical: 24,
		fontSize: 24,
		fontWeight: 600,
	},
	contentContainer: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: 48,
	},
})

export default UsersList
