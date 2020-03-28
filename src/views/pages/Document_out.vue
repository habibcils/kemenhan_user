<template>
<div>
    <v-toolbar dark color="red darken-3" class="toolbar-fixed">
        <v-btn icon dark @click="backHome()">
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title>Dokumen Masuk (biasa)</v-toolbar-title>
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
        <div class="text-center mx-3">
            <v-row>
                <v-btn small rounded color="light-green ma-1 col col-sm-4" dark>Biasa</v-btn>
                <v-btn small rounded color="amber ma-1 col col-sm-4" dark>Rahasia</v-btn>
                <v-btn small rounded color="deep-orange ma-1 col col-sm-4" dark>Sangat Rahasia</v-btn>
            </v-row>
        </div>
        <div class="text-center">
        </div>
        <div class="text-center">
        </div>

        <v-card :loading="false" class="mx-auto my-6" max-width="474">
            <v-list-item>
                <v-list-item-avatar color="grey">
                    <v-img src="https://randomuser.me/api/portraits/men/35.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">Jendral Bactiar</v-list-item-title>
                    <v-list-item-subtitle>
                        <v-icon small>mdi-account-circle</v-icon> username
                    </v-list-item-subtitle>
                </v-list-item-content>

                <v-menu origin="left left" nudge-left transition="scale-transition" bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" slot="activator" color="black lighten-2" class="pad-r-0" text>
                            <v-icon right>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-action>Favotritkan</v-list-item-action>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-action>Unduh dokumen</v-list-item-action>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-action>Verifikasi dokumen</v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-menu>

            </v-list-item>

            <v-img height="250" @click="showDetail = true" src="https://support.joinhandshake.com/hc/article_attachments/115026121948/mceclip4.png"></v-img>
            <v-card-title class="pb-2" @click="showDetail = true">Laporan hasil meeting tahunan</v-card-title>
            <div class="grey--text text--darken-2 ml-4 caption">
                <v-icon>mdi-heart-outline</v-icon> (413)
                <v-icon>mdi-comment-outline</v-icon> (4)
            </div>

            <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" class="ma-2 mt-0 mb-0" column>
                <v-chip class="ma-1 mr-0" small>
                    Joko
                </v-chip>
                <v-chip class="ma-1 mr-0" small>
                    Ranee
                </v-chip>
                <v-chip class="ma-1 mr-0" small>
                    Mira
                </v-chip>
            </v-chip-group>
            <span class="clock-post">2 jam lalu</span>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions class="py-0">
                <v-btn color="grey darken-2" text @click="showDetail = true">
                    <v-icon class="mr-2">mdi-comment-multiple-outline</v-icon>
                    <span>komentar</span>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="grey darken-2" text @click="reserve">
                    <v-icon class="mr-2">mdi-share-variant</v-icon>
                    <span>bagikan</span>
                </v-btn>
                <v-spacer></v-spacer>
                <v-list-item class="max-wid-145 px-0">
                    <v-list-item-avatar small color="white" class="mr-1">
                        <v-icon>mdi-information-outline</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="caption">Diterima</v-list-item-title>
                        <v-list-item-subtitle>
                            Dirjen Pertahanan
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card-actions>
        </v-card>

        <v-card :loading="false" class="mx-auto my-6" max-width="474">
            <v-list-item>
                <v-list-item-avatar color="grey">
                    <v-img src="https://randomuser.me/api/portraits/men/35.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">Jendral Bactiar</v-list-item-title>
                    <v-list-item-subtitle>
                        <v-icon small>mdi-account-circle</v-icon> username
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-menu origin="left left" nudge-left transition="scale-transition" bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" slot="activator" color="black lighten-2" class="pad-r-0" text>
                            <v-icon right>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-action>Favotritkan</v-list-item-action>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-action>Unduh dokumen</v-list-item-action>

                        </v-list-item>
                        <v-list-item>
                            <v-list-item-action>Verifikasi dokumen</v-list-item-action>

                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-list-item>

            <v-img height="250" src="https://support.joinhandshake.com/hc/article_attachments/115026121948/mceclip4.png"></v-img>
            <v-card-title class="pb-2">Laporan hasil meeting tahunan</v-card-title>
            <div class="grey--text text--darken-2 ml-4 caption">
                <v-icon>mdi-heart-outline</v-icon> (413)
                <v-icon>mdi-comment-outline</v-icon> (4)
            </div>

            <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" class="ma-2 mt-0 mb-0" column>
                <v-chip class="ma-1 mr-0" small>
                    Joko
                </v-chip>
                <v-chip class="ma-1 mr-0" small>
                    Ranee
                </v-chip>
                <v-chip class="ma-1 mr-0" small>
                    Mira
                </v-chip>
            </v-chip-group>
            <span class="clock-post">2 jam lalu</span>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions class="py-0">
                <v-btn color="grey darken-2" text @click="reserve">
                    <v-icon class="mr-2">mdi-comment-multiple-outline</v-icon>
                    <span>komentar</span>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="grey darken-2" text @click="reserve">
                    <v-icon class="mr-2">mdi-share-variant</v-icon>
                    <span>bagikan</span>
                </v-btn>
                <v-spacer></v-spacer>
                <v-list-item class="max-wid-145 px-0">
                    <v-list-item-avatar small color="white" class="mr-1">
                        <v-icon>mdi-information-outline</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="caption">Diterima</v-list-item-title>
                        <v-list-item-subtitle>
                            Dirjen Pertahanan
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card-actions>
        </v-card>
        <br>
        <br>
    </v-container>

    <v-dialog v-model="showDetail" fullscreen hide-overlay>
        <v-toolbar dark color="red darken-3" class="toolbar-fixed">
            <v-btn icon dark @click="showDetail = false">
                <v-icon>close</v-icon>
            </v-btn>
            <v-chip color="red darken-3">
                Dokumen : Laporan meeting tahunan
            </v-chip>
        </v-toolbar>
        <v-card block flat class="noradius pt-12">
            <v-list-item>
                <v-list-item-avatar color="grey">
                    <v-img src="https://randomuser.me/api/portraits/men/35.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">Jendral Bactiar</v-list-item-title>
                    <v-list-item-subtitle>
                        <v-icon small>mdi-account-circle</v-icon> username
                    </v-list-item-subtitle>
                </v-list-item-content>

                <v-menu origin="left left" nudge-left transition="scale-transition" bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" slot="activator" color="black lighten-2" class="pad-r-0" text>
                            <v-icon right>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-action>Favotritkan</v-list-item-action>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-action>Unduh dokumen</v-list-item-action>

                        </v-list-item>
                        <v-list-item>
                            <v-list-item-action>Verifikasi dokumen</v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-list-item>

            <v-img height="250" src="https://support.joinhandshake.com/hc/article_attachments/115026121948/mceclip4.png"></v-img>
            <v-card-title class="pb-2" @click="showDetail = true">Laporan hasil meeting tahunan</v-card-title>
            <div class="grey--text text--darken-2 ml-4 caption">
                <v-icon>mdi-heart-outline</v-icon> (413)
                <v-icon>mdi-comment-outline</v-icon> (4)
            </div>

            <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" class="ma-2 mt-0 mb-0" column>
                <v-chip class="ma-1 mr-0" small>
                    Joko
                </v-chip>
                <v-chip class="ma-1 mr-0" small>
                    Ranee
                </v-chip>
                <v-chip class="ma-1 mr-0" small>
                    Mira
                </v-chip>
            </v-chip-group>
            <span class="clock-post">2 jam lalu</span>
            <v-divider class="mx-4"></v-divider>

            <v-card-actions class="py-0">
                <v-btn color="grey darken-2" text @click="reserve">
                    <v-icon class="mr-2">mdi-comment-multiple-outline</v-icon>
                    <span>komentar</span>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="grey darken-2" text @click="reserve">
                    <v-icon class="mr-2">mdi-share-variant</v-icon>
                    <span>bagikan</span>
                </v-btn>
                <v-spacer></v-spacer>
                <v-list-item class="max-wid-145 px-0">
                    <v-list-item-avatar small color="white" class="mr-1">
                        <v-icon>mdi-information-outline</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="caption">Diterima</v-list-item-title>
                        <v-list-item-subtitle>
                            Dirjen Pertahanan
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card-actions>
            <v-divider class="mx-4"></v-divider>
            <v-list two-line>
                <template>
                    <v-list-item avatar ripple>
                        <v-list-item-content class="py-0">
                            <p class="caption mb-0"><strong>Jack</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut porro, explicabo at cupiditate facere eligendi! Veniam omnis labore accusantium!</p>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item avatar ripple>
                        <v-list-item-content class="py-0">
                            <p class="caption mb-0"><strong>Jack</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut porro, explicabo at cupiditate facere eligendi! Veniam omnis labore accusantium!</p>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
            <v-card-actions class="ml-3">
                <v-layout align-center>
                    <v-text-field class="mt-2 mr-2" label="beri komentar"></v-text-field>
                    <v-btn color="grey grey-2" outlined="" text class="mr-2 white--text">
                        <span>kirim</span>
                    </v-btn>
                </v-layout>
            </v-card-actions>
        </v-card>
    </v-dialog>

</div>
</template>

<script>
import qs from 'qs'
import {
    apiBase
} from "@/helpers"
export default {
    components: {

    },
    created() {
        // this.getDatatable()
        // this.getUserGroup()
    },
    data() {

        return {
            search: false,
            searchVal: '',               
            showDetail: false,
            selection: true,
            prefixApi: '/user',
            dataModal: [],
            UG_id: [],
            titleModal: '',
            userGroup: [],
            modeModal: null,
            modal: false,
            addModal: false,
            projects: [],
        }
    },
    methods: {
        focusSearch(){
            this.$nextTick(() => this.$refs.searchVal.focus())
        },        
        reserve() {

        },
        backHome() {
            this.$router.push('/')
        }
    }
};
</script>

<style>
.pad-r-0 {
    padding-right: 0 !important;
}

.clock-post {
    margin: 0 20px 7px 20px;
    font-size: 12px;
    display: block;
}

.v-application .caption {
    font-size: .8rem !important;
}

.max-wid-145 {
    max-width: 170px
}
</style>
