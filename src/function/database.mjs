export default {
	Default: {
		Settings: {
			Switch: true,
			Type: "Translate",
			Types: ["Official", "Translate"],
			Languages: ["EN", "ZH"],
			CacheSize: 50,
		},
		Configs: {
			breakLine: {
				"text/xml": "&#x000A;",
				"application/xml": "&#x000A;",
				"text/vtt": "\n",
				"application/vtt": "\n",
				"text/json": "\n",
				"application/json": "\n",
			},
		},
	},
	Spotify: {
		Settings: {
			Switch: true,
			CountryCode: "US",
			Types: ["Translate", "External"],
			Languages: ["AUTO", "ZH"],
		},
	},
};
