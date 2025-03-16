function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
	data() {
		return {
			monsterHealth: 100,
			playerHealth: 100,
		}
	},
	computed: {
		monsterBarStyles() {
			return { width: this.monsterHealth + '%' }
		},
		playerBarStyles() {
			return { width: this.playerHealth + '%' }
		},
	},
	methods: {
		attackMonster() {
			const maxDamage = 12
			const minDamage = 5

			this.monsterHealth -= getRandomValue(minDamage, maxDamage)
			this.attackPlayer()
		},
		attackPlayer() {
			const maxDamage = 15
			const minDamage = 8

			this.playerHealth -= getRandomValue(minDamage, maxDamage)
		},
	},
})

app.mount('#game')
