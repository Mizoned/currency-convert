import { createRouter, createWebHistory } from 'vue-router';
import Currencies from '@/views/Currencies.vue'

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Currencies,
		},
		{
			path: '/converter',
			component: () => import('@/views/Converter.vue'),
		}
	]
})