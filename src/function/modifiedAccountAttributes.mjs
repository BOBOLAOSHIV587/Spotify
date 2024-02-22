export default function modifiedAccountAttributes(accountAttributes) {
	accountAttributes["has-audiobooks-subscription"] = { "boolValue": true }; // false
	accountAttributes["player-license"] = { "stringValue": "premium" }; // "mft"
	//accountAttributes["country_code"] = { "stringValue": Settings.Country };
	accountAttributes["mobile"] = { "boolValue": true }; // false
	accountAttributes["financial-product"] = { "stringValue": "pr:premium,tc:0" }; // "pr:free,tc:0"
	accountAttributes["premium-mini"] = { "boolValue": true }; // false
	accountAttributes["streaming-rules"] = { "stringValue": "" }; // "shuffle-mode"
	accountAttributes["license-acceptance-grace-days"] = { "longValue": "30" }; // "0"
	accountAttributes["name"] = { "stringValue": "Spotify Premium" }; // "Spotify Free"
	accountAttributes["mobile-login"] = { "boolValue": true }; // false
	accountAttributes["hifi-optin-intent"] = { "boolValue": true }; // false
	accountAttributes["pick-and-shuffle"] = { "boolValue": false }; // true
	accountAttributes["on-demand"] = { "boolValue": true }; // false
	accountAttributes["ads"] = { "boolValue": false }; // true
	accountAttributes["catalogue"] = { "stringValue": "premium" }; // "free"
	accountAttributes["high-bitrate"] = { "boolValue": true }; // false
	accountAttributes["libspotify"] = { "boolValue": true }; // false
	accountAttributes["nft-disabled"] = { "stringValue": "1" }; // "0"
	accountAttributes["shuffle"] = { "boolValue": false }; // true
	accountAttributes["audio-quality"] = { "stringValue": "1" }; // "0"
	accountAttributes["offline"] = { "boolValue": true }; // false
	accountAttributes["hifi-eligible"] = { "boolValue": true }; // false
	accountAttributes["pause-after"] = { "longValue": "0" }; // "18000"
	accountAttributes["addon-hifi"] = { "boolValue": true }; // false
	accountAttributes["can_use_superbird"] = { "boolValue": true }; // false
	accountAttributes["type"] = { "stringValue": "premium" }; // "free"
	accountAttributes["loudness-levels"] = { "stringValue": "1:-9.0,0.0,3.0:-2.0" };
	accountAttributes["payments-initial-campaign"] = { "stringValue": "web" };
	accountAttributes["shuffle-eligible"] = { "boolValue": true };
	accountAttributes["unrestricted"] = { "boolValue": true };
	accountAttributes["com.spotify.madprops.use.ucs.product.state"] = { "boolValue": true };
	return accountAttributes;
};