const apiHost = 'https://bakesaleforgood.com';

export default {
	async fetchInitialDeals() {
		// fetch is built in of react-native => not need to import
		// https://facebook.github.io/react-native/docs/network
		try {
			const response = await fetch(apiHost + '/api/deals');
			const responseJson = await response.json();
			return responseJson;
		}
		catch (error) {
			console.error(error);
		}
	},
	async fetchDealDetail(dealId) {
		try {
			const response = await fetch(apiHost + '/api/deals/' + dealId);
			const responseJson = await response.json();
			return responseJson;
		}
		catch (error) {
			console.error(error);
		}
	},
	async fetchDealsSearchResults(searchTerm) {
		try {
			const response = await fetch(apiHost + '/api/deals?searchTerm=' + searchTerm);
			const responseJson = await response.json();
			return responseJson;
		}
		catch (error) {
			console.error(error);
		}
	}
};
