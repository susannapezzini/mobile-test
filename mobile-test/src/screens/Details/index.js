import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Details = ({ navigation, route }) => {
	const user = route?.params?.user
	const { name = '', interest = [], headline = '' } = user

	const renderText = (item, index) => (
		<Text key={index} style={styles.regular}>
			- {item}
		</Text>
	)
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{name}'s Details</Text>
			<View style={styles.contentContainer}>
				{headline ? <Text style={styles.headline}>"{headline}"</Text> : null}
				{interest.length ? (
					<View>
						<Text style={styles.bold}>Interests:</Text>
						{interest.map(renderText)}
					</View>
				) : (
					<Text style={styles.bold}>No interests found.</Text>
				)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: 'white' },
	title: { textAlign: 'center', marginVertical: 24, fontSize: 24, fontWeight: 600 },
	contentContainer: { margin: 18 },
	bold: { fontWeight: 600, fontSize: 18 },
	regular: { fontSize: 18, color: 'darkgrey' },
	headline: { fontSize: 18, color: 'darkgrey', textAlign: 'center', marginBottom: 12 },
})

export default Details
