import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";

export interface SidebarItemProps {
    path: string;
    title: string;
}
export function SidebarItem({ path, title }: SidebarItemProps) {
    return (
        <ListItem>
            <Link href={path} passHref style={{ width: '100%' }}>
                <ListItemButton>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={title} />
                </ListItemButton>
            </Link>
        </ListItem>)
}