import { Drawer, Box, List, Link } from "@mui/material";
import { SidebarItem } from "./sidebarItem";

export function Sidebar() {
    return <Drawer anchor="left" open={true}>
        <Box sx={{ width: 250 }}>
            <List>
                <SidebarItem
                    path="/"
                    title="Hi, Jack"
                />
                <SidebarItem
                    path="/promotion"
                    title="Promotions"
                />
                <SidebarItem
                    path="/notification"
                    title="Notification Manager"
                />
                <SidebarItem
                    path="/preference"
                    title="User Preferences"
                />
                <SidebarItem
                    path="/logout"
                    title="Logout"
                />
            </List>
        </Box>
    </Drawer>
}