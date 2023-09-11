export const getJsonCircularReplacer = () => {
	// Note: cache should not be re-used by repeated calls to JSON.stringify.
	var cache = [];
	
	return {
		Replacer: (key, value) => {
			if (typeof value === 'object' && value !== null) {
				// Duplicate reference found, discard key
				if (cache.includes(value)) return;

				// Store value in our collection
				cache.push(value);
			}

			return value;
		},

		Dispose: () => {
			cache = null; // Enable garbage collection
		}
	}
}
