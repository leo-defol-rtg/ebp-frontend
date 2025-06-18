import { PropsWithChildren, ReactNode } from "react";

export interface PrivateLayoutProps extends PropsWithChildren {
    readonly navbar?: ReactNode;
    readonly sidebar?: ReactNode;
}
export function PrivateLayout({children, navbar, sidebar}: PrivateLayoutProps) {
    return (<>
        {sidebar}
        <main className="container mx-auto">
            {navbar}
            {children}
        </main>
    </>)
}