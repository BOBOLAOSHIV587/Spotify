// @generated by protobuf-ts 2.9.1 with parameter long_type_string,output_javascript,generate_dependencies
// @generated from protobuf file "Spotify.extended-metadata.response.proto" (syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.1 with parameter long_type_string,output_javascript,generate_dependencies
// @generated from protobuf file "Spotify.extended-metadata.response.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "./google/protobuf/any";
// @generated message type with reflection information, may provide speed optimized methods
class BatchedExtensionResponse$Type extends MessageType {
    constructor() {
        super("BatchedExtensionResponse", [
            { no: 1, name: "header", kind: "message", T: () => BatchedExtensionResponseHeader },
            { no: 2, name: "extended_metadata", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => EntityExtensionDataArray }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message BatchedExtensionResponse
 */
export const BatchedExtensionResponse = new BatchedExtensionResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BatchedExtensionResponseHeader$Type extends MessageType {
    constructor() {
        super("BatchedExtensionResponseHeader", []);
    }
}
/**
 * @generated MessageType for protobuf message BatchedExtensionResponseHeader
 */
export const BatchedExtensionResponseHeader = new BatchedExtensionResponseHeader$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityExtensionDataArrayHeader$Type extends MessageType {
    constructor() {
        super("EntityExtensionDataArrayHeader", [
            { no: 1, name: "provider_error_status", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "cache_ttl_in_seconds", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 3, name: "offline_ttl_in_seconds", kind: "scalar", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message EntityExtensionDataArrayHeader
 */
export const EntityExtensionDataArrayHeader = new EntityExtensionDataArrayHeader$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityExtensionDataArray$Type extends MessageType {
    constructor() {
        super("EntityExtensionDataArray", [
            { no: 1, name: "header", kind: "message", T: () => EntityExtensionDataArrayHeader },
            { no: 3, name: "extension_data", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => EntityExtensionData }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message EntityExtensionDataArray
 */
export const EntityExtensionDataArray = new EntityExtensionDataArray$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityExtensionData$Type extends MessageType {
    constructor() {
        super("EntityExtensionData", [
            { no: 1, name: "header", kind: "message", T: () => EntityExtensionDataHeader },
            { no: 2, name: "entity_uri", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "extension_data", kind: "message", T: () => Any }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message EntityExtensionData
 */
export const EntityExtensionData = new EntityExtensionData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityExtensionDataHeader$Type extends MessageType {
    constructor() {
        super("EntityExtensionDataHeader", [
            { no: 1, name: "status_code", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "etag", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "locale", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "cache_ttl_in_seconds", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 5, name: "offline_ttl_in_seconds", kind: "scalar", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message EntityExtensionDataHeader
 */
export const EntityExtensionDataHeader = new EntityExtensionDataHeader$Type();