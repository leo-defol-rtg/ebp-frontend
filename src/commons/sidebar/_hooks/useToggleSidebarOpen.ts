import { useContext } from "react";
import { SidebarContext } from "../_contexts/sidebarContexts";
import { SidebarActionTypeEnum } from "../_enums/sidebarActionType.enum";

export function useSetSidebarOpen(): (open: boolean) => void {
    const { dispatch, state } = useContext(SidebarContext);
    return (open: boolean): void => {
        if(dispatch) {
            dispatch({
                type: SidebarActionTypeEnum.SET_OPEN,
                payload: { open: !state.open },
            })
        }
    };
}