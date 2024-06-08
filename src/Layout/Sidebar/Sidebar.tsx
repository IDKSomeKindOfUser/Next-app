import {SidebarProps} from "@/Layout/Sidebar/Sidebar.props";


export function Sidebar({...props }: SidebarProps) {
    return(
        <aside {...props}>
            Sidebar
        </aside>
    );
}