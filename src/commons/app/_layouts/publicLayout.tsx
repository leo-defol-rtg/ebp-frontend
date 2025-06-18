import { PropsWithChildren, ReactNode } from "react";

export interface PublicLayoutProps extends PropsWithChildren {
}
export function PublicLayout({children}: PublicLayoutProps) {
    return (<>
        <main className="container mx-auto">
            {children}
        </main>
    </>)
}