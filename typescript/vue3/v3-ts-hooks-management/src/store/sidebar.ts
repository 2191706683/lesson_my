import { ref, Ref } from 'vue';
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', () => {
	const collapse:Ref<boolean> = ref(false)
	const handleCollapse = ()=> {
		collapse.value = !collapse.value;    
	}

	return {
		collapse,
		handleCollapse
	}
});
