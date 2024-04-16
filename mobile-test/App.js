import 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native'
import { QueryClient, QueryClientProvider } from 'react-query'
import MainNavigator from './src/navigation/MainNavigator/index'

const queryClient = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<View style={styles.container}>
				<MainNavigator />
			</View>
		</QueryClientProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})
