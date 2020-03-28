<template>
    <div>

    </div>
</template>

<script>
const profile = require('@/assets/svg-loaders/profile.svg')

import { createNamespacedHelpers, mapState, mapGetters } from 'vuex'

export default {
    name: 'Profile',
	components:{
		// Layout
    },
    mounted(){

    },
    computed: {
        ...mapState('auth', {
            username : 'username',
            fullname : 'fullname',
            email : 'email',
            groups : 'groups',
            // name : 'name',
            }),
    },
	// name: "Index",
	data() {
		return {
            profile: profile
		};
	}
};
</script>