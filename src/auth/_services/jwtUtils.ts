import { JWTBody } from "../_types/jwtBody";
/**
 * JWTUtils class provides utility methods for handling JSON Web Tokens(JWT).
 * It includes a method to resolve a JWT token into its components: header, payload, and signature.
 */
export class JWTUtils {
    static resolveJWTToken<TypePayload>(
        token?: string,
    ): JWTBody<TypePayload> | undefined {
        if (!token) {
            return undefined;
        }
        const splited = token.split('.');
        return {
            header: splited[0]
                ? Buffer.from(splited[0], 'base64').toString('utf8')
                : undefined,
            payload: splited[1]
                ? Buffer.from(splited[1], 'base64').toString('utf8')
                : undefined,
            verifySignature: splited[2]
                ? Buffer.from(splited[2], 'base64').toString('utf8')
                : undefined,
        } as JWTBody<TypePayload>;
    }
}