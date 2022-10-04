import {
	db
} from "../../firebase.js";

import {
	collection,
	doc,
	getDocs,
	where,
	orderBy,
	limit,
	query,
} from "firebase/firestore";
import LoadingComp from './../LoadingComp.vue'
export default {
	name: 'mainmenu',
	data: () => ({
		menu: [],
		loading: true,
	}),
	async mounted() {
		try {
			this.loading = true;
			await this.getAll();
		} catch (e) {
			console.log(e);
			this.loading = false;
		} finally {
			this.loading = false;
		}

	},

	methods: {
		async getAll() {
			try {
				//TODO-->pagination
				const menuRef = collection(db, "menu") //refrence the collection
				const q = await getDocs(menuRef) //get all docs in collection
				q.forEach((doc) => {
					this.menu = [...this.menu, doc.data(), ] //push to menu array
				});
			} catch (e) {
				console.log(e);
			}
		}
	},

	components: {
		LoadingComp,
	}

}