import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useQuery } from 'react-query'

import Loader from '../../components/Loader/index'
import UsersList from '../../components/UsersList/index'

const Home = ({ navigation }) => {
	const { isLoading, data } = useQuery('users', () =>
		fetch('https://dev.api.syncremote.co/api/v1/admin/users').then((res) => res.json())
	)
	return (
		<View style={styles.container}>
			{isLoading ? <Loader /> : <UsersList users={data?.users} navigation={navigation} />}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default Home
