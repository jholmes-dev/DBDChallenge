import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { ItemType, SurvivorType } from '../types.js';

export const useLoadoutStore = defineStore('loadout', () => {
    const survivor = ref<SurvivorType | null>(null);
    const perks = ref<Array<ItemType>>([]);
    const item = ref<ItemType>();
    const addons = ref<Array<ItemType>>([]);
    const offering = ref<ItemType>();

    const getSurvivorDetails = computed<SurvivorType>(() => {
        if (survivor.value == null) {
            return {
                id: 'default',
                name: 'No survivor selected',
                role: 'null',
                image: 'https://placehold.co/512x512',
            }
        } else {
            return survivor.value;
        }
    });

    function selectSurvivor(newSurvivor: SurvivorType) {
        if (!newSurvivor.disabled) survivor.value = newSurvivor;
    }

    function getPerkDetails(index: number) {
        if (typeof(perks[index]) === 'undefined') {
            return {
                name: 'No perk selected',
                image: 'https://placehold.co/150x150',
                type: 'perk'
            }
        } else {
            return perks[index];
        }
    }

    return { survivor, perks, item, addons, offering, getSurvivorDetails, selectSurvivor, getPerkDetails };
});