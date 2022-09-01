export interface sidebarItem {
    text:string;
    link:string | null;
    collapsible: boolean,
    children:string[];
}