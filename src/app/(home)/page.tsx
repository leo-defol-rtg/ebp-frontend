import { ProtectedComponent } from "ebp/auth/_components/protectedComponent";
import { PrivateHome } from "ebp/commons/app/_components/home/privateHome";
import { PublicHome } from "ebp/commons/app/_components/home/publicHome";

export default function page() {
    return <ProtectedComponent
        fallback={<PublicHome />}>
        <PrivateHome />
    </ProtectedComponent>
}