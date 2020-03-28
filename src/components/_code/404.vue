<template>
<div>
    <v-toolbar dense dark color="red darken-3">
        <v-btn icon dark @click="backHome()">
            <v-icon>arrow_back</v-icon>
        </v-btn>        
        <v-toolbar-title>Halaman tidak ditemukan</v-toolbar-title>
        <!-- <v-spacer></v-spacer> -->
        <!-- <v-toolbar-items> -->
            <!-- <v-icon>mdi-magnify</v-icon> -->
        <!-- </v-toolbar-items> -->
    </v-toolbar>
    <v-container fluid="">
        <v-row>
            <v-col cols='12'>
                <h2>404 </h2>
                <p>Halaman tidak ditemukan</p>
            </v-col>
        </v-row>
        
    </v-container>
</div>
</template>

<script>
    export default {
        components:{
            // Layout
        },
        methods:{
        backHome() {
            this.$router.push('/')
        },            
        }
    }
</script>

<style scoped>

</style>
