/**
 * JWTBody class represents the structure of a JSON Web Token(JWT).
 * It contains three optional properties:
 * - header: a string representing the JWT header, which is base64 encoded.
 * - payload a generic type representing the JWT payload, which is parsed from the base64 encoded string.
 * - verifySignature: a string representing the signature of the JWT, which is also base64 encoded.
 */
export class JWTBody<TypePayload> {
    header?: string;
    payload?: TypePayload;
    verifySignature?: string;
}