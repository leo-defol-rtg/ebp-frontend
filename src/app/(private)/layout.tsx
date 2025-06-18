import { ProtectedComponent } from "ebp/auth/_components/protectedComponent";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
    return <ProtectedComponent>
        {children}
    </ProtectedComponent>
}