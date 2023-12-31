export interface ItemType {
    rarity: string,
    name: string,
    image: string,
    type: string,
    modifier: string,
    quantity?: number,
}

export interface PerkType {
    rarity: string,
    name: string,
    image: string,
    character: string,
    quantity?: number,
}

export interface SurvivorType {
    id: string,
    name: string,
    role: string,
    image: string,
    disabled?: boolean,
}