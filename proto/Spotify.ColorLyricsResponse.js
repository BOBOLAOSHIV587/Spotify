// @generated by protobuf-ts 2.9.1 with parameter long_type_string,output_javascript,generate_dependencies
// @generated from protobuf file "Spotify.ColorLyricsResponse.proto" (package "com.spotify.lyrics.endpointretrofit.proto", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.1 with parameter long_type_string,output_javascript,generate_dependencies
// @generated from protobuf file "Spotify.ColorLyricsResponse.proto" (package "com.spotify.lyrics.endpointretrofit.proto", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf enum com.spotify.lyrics.endpointretrofit.proto.SyncType
 */
export var SyncType;
(function (SyncType) {
    /**
     * @generated from protobuf enum value: UNSYNCED = 0;
     */
    SyncType[SyncType["UNSYNCED"] = 0] = "UNSYNCED";
    /**
     * @generated from protobuf enum value: LINE_SYNCED = 1;
     */
    SyncType[SyncType["LINE_SYNCED"] = 1] = "LINE_SYNCED";
    /**
     * @generated from protobuf enum value: SYLLABLE_SYNCED = 2;
     */
    SyncType[SyncType["SYLLABLE_SYNCED"] = 2] = "SYLLABLE_SYNCED";
})(SyncType || (SyncType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ColorLyricsResponse$Type extends MessageType {
    constructor() {
        super("com.spotify.lyrics.endpointretrofit.proto.ColorLyricsResponse", [
            { no: 1, name: "lyrics", kind: "message", T: () => LyricsResponse },
            { no: 2, name: "colors", kind: "message", T: () => ColorData },
            { no: 3, name: "has_vocal_removal", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "vocal_removal_colors", kind: "message", T: () => ColorData }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.spotify.lyrics.endpointretrofit.proto.ColorLyricsResponse
 */
export const ColorLyricsResponse = new ColorLyricsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LyricsResponse$Type extends MessageType {
    constructor() {
        super("com.spotify.lyrics.endpointretrofit.proto.LyricsResponse", [
            { no: 1, name: "sync_type", kind: "enum", T: () => ["com.spotify.lyrics.endpointretrofit.proto.SyncType", SyncType] },
            { no: 2, name: "lines", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LyricsLine },
            { no: 3, name: "provider", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "provider_lyrics_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "provider_display_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "sync_lyrics_android_intent", kind: "message", T: () => AndroidIntent },
            { no: 7, name: "sync_lyrics_uri", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "is_dense_typeface", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "alternatives", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Alternative },
            { no: 10, name: "lang", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "rtl_lang", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "show_upsell", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.spotify.lyrics.endpointretrofit.proto.LyricsResponse
 */
export const LyricsResponse = new LyricsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LyricsLine$Type extends MessageType {
    constructor() {
        super("com.spotify.lyrics.endpointretrofit.proto.LyricsLine", [
            { no: 1, name: "start_time_ms", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 2, name: "text", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "syllables", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Syllable }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.spotify.lyrics.endpointretrofit.proto.LyricsLine
 */
export const LyricsLine = new LyricsLine$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Syllable$Type extends MessageType {
    constructor() {
        super("com.spotify.lyrics.endpointretrofit.proto.Syllable", [
            { no: 1, name: "start_time_ms", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 2, name: "num_chars", kind: "scalar", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.spotify.lyrics.endpointretrofit.proto.Syllable
 */
export const Syllable = new Syllable$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ColorData$Type extends MessageType {
    constructor() {
        super("com.spotify.lyrics.endpointretrofit.proto.ColorData", [
            { no: 1, name: "background", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "text", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "highlight_text", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.spotify.lyrics.endpointretrofit.proto.ColorData
 */
export const ColorData = new ColorData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AndroidIntent$Type extends MessageType {
    constructor() {
        super("com.spotify.lyrics.endpointretrofit.proto.AndroidIntent", [
            { no: 1, name: "provider", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "provider_android_app_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "action", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "data", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "content_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.spotify.lyrics.endpointretrofit.proto.AndroidIntent
 */
export const AndroidIntent = new AndroidIntent$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Alternative$Type extends MessageType {
    constructor() {
        super("com.spotify.lyrics.endpointretrofit.proto.Alternative", [
            { no: 1, name: "language", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "lines", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.spotify.lyrics.endpointretrofit.proto.Alternative
 */
export const Alternative = new Alternative$Type();