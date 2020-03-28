<template>
<div>
    <v-toolbar dark color="red darken-3" class="toolbar-fixed">
        <v-toolbar-title>Notifikasi</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items style="position:relative">
            <input type="text" class="my-search-box" v-model="searchVal" ref="searchVal" :class="{active:search}" placeholder="Cari..">
            <v-icon v-if="search" @click="search = false">mdi-close</v-icon>
            <v-icon v-else @click="search = true, focusSearch()">mdi-magnify </v-icon>
        </v-toolbar-items>
    </v-toolbar>
    <v-container fluid>
        <br>
        <br>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card class="noradius mx-auto my-4" max-width="454">

                    <v-list two-line>
                        <template v-for="(item, index) in items">
                            <v-list-item :key="index" avatar ripple>
                                <v-list-item-content>
                                    <v-list-item-subtitle><strong>{{ item.title }}</strong> menandai anda {{ item.subtitle }}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-list-item-action-text>{{ item.action }}</v-list-item-action-text>
                                </v-list-item-action>
                            </v-list-item>
                            <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
        <br>
        <br>
    </v-container>
</div>
</template>

<script>
export default {
    methods:{
        focusSearch(){
            this.$nextTick(() => this.$refs.searchVal.focus())
        }
    },
    data() {
        return {
            search: false,
            searchVal: '',
            items: [{
                    action: '15 min',
                    headline: 'Brunch this weekend?',
                    title: 'Ali Connors',
                    subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                },
                {
                    action: '2 hr',
                    headline: 'Summer BBQ',
                    title: 'me, Scrott, Jennifer',
                    subtitle: "Wish I could come, but I'm out of town this weekend."
                },
                {
                    action: '6 hr',
                    headline: 'Oui oui',
                    title: 'Sandra Adams',
                    subtitle: 'Do you have Paris recommendations? Have you ever been?'
                },
                {
                    action: '12 hr',
                    headline: 'Birthday gift',
                    title: 'Trevor Hansen',
                    subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
                },
                {
                    action: '18hr',
                    headline: 'Recipe to try',
                    title: 'Britta Holt',
                    subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
                }
            ]
        }
    }
}
</script>
