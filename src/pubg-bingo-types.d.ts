export interface Room {
    name: string;
    password: string;
    description: string;
    id: string;
}

export interface Tile {
    description: string;
    position?: number[];
    checked: boolean;
    default?: boolean;
}

export interface Board {
    tiles: Tile[];
}