<template>
<div>
    <v-toolbar dense dark color="red darken-3" v-if="toolbarTop">
        <v-btn icon dark>
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
        </v-toolbar-items>
    </v-toolbar>

    <v-content class="grey lighten-4">
        <slot></slot>
    </v-content>

    <v-bottom-navigation :value="activeBtn" grow color="red" fixed>
        <router-link :to="{path:'/'}" v-slot="{ href, route, navigate, isActive, isExactActive }">
            <a v-ripple :href="href" class="v-btn v-btn--active v-btn--flat v-btn--router theme--light grey--text" :class="[isActive && 'is-active', isExactActive && 'active']" @click="navigate">
                <div class="v-btn__content"><span class="">Beranda</span>
                    <v-icon class="">home</v-icon>
                </div>
            </a>
        </router-link>
        <router-link :to="{path:'/pesan'}" v-slot="{ href, route, navigate, isActive, isExactActive }">
            <a v-ripple :href="href" class="v-btn v-btn--active v-btn--flat v-btn--router theme--light grey--text" :class="[isActive && 'is-active', isExactActive && 'active']" @click="navigate">
                <div class="v-btn__content"><span class="">Pesan</span>
                    <v-icon class="">mdi-comment-outline</v-icon>
                </div>
            </a>
        </router-link>
        <div v-ripple @click="menuPlus = true" class="v-btn v-btn--active v-btn--flat v-btn--router theme--light grey--text">
            <div class="v-btn__content btnc-plus">
                <v-icon class="">add_box</v-icon>
            </div>
        </div>
        <router-link :to="{path:'/notif'}" v-slot="{ href, route, navigate, isActive, isExactActive }">
            <a v-ripple :href="href" class="v-btn v-btn--active v-btn--flat v-btn--router theme--light grey--text" :class="[isActive && 'is-active', isExactActive && 'active']" @click="navigate">
                <div class="v-btn__content"><span class="">Notifikasi</span>
                    <v-icon class="">mdi-bell-outline</v-icon>
                </div>
            </a>
        </router-link>
        <div v-ripple @click="drawer = true" class="v-btn v-btn--active v-btn--flat v-btn--router theme--light grey--text">
            <div class="v-btn__content">
                <span class="">Akun</span>
                <v-icon class="">mdi-account-circle</v-icon>
            </div>
        </div>
    </v-bottom-navigation>

    <v-navigation-drawer v-model="drawer" fixed temporary class="mx-auto" :right="true" enable-resize-watcher>
        <v-list-item>
            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{fullname}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-account-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Lihat Profil Saya</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <template v-slot:append>
            <div class="pa-2">
                <v-btn block @click="doLogout()">
                    Keluar</v-btn>
            </div>
        </template>
    </v-navigation-drawer>

    <v-dialog v-model="dialogAdd" persistent max-width="500px">
        <v-card>
            <v-card-title>
                <span class="headline">Tambah Dokumen</span>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-form v-model="valid">
                        <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                                <div class="upload">
                                    <ul>
                                        <li v-for="(file) in files" :key="file.id">
                                            <span>{{file.name}}</span> -
                                            <span>{{file.size | formatSize}}</span> -
                                            <span v-if="file.error">{{file.error}}</span>
                                            <span v-else-if="file.success">success</span>
                                            <span v-else-if="file.active">active</span>
                                            <span v-else-if="file.active">active</span>
                                            <span v-else></span>
                                        </li>
                                    </ul>
                                    <div class="example-btn">
                                        <file-upload class="white--text v-btn v-btn--contained theme--light v-size--default blue darken-1" post-action="/upload/post" extensions="gif,jpg,jpeg,png,webp" accept="image/png,image/gif,image/jpeg,image/webp" :multiple="true" :size="1024 * 1024 * 10" v-model="files" @input-filter="inputFilter" @input-file="inputFile" ref="upload">
                                            <i class="ik ik-upload-cloud"></i>
                                            Upload berkas
                                        </file-upload>
                                    </div>
                                </div>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field label="Nama dokumen" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field label="No Dokumen" hint="contoh : XI/2019/F2/002" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-select :items="['Masuk', 'Keluar']" label="Kategori Dokumen" required></v-select>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-select :items="['Biasa', 'Rahasia', 'Sangat Rahasia']" label="Klasifikasi Dokumen" required></v-select>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-select :items="['Joni', 'Budi', 'Ranee', 'Maung', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']" label="Tandai orang lain" multiple autocomplete chips></v-select>
                            </v-flex>
                        </v-layout>
                    </v-form>
                </v-container>
                <!-- <small>*wajib diisi</small> -->
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" class="white--text" text @click.native="dialogAdd = false">Tutup</v-btn>
                <v-btn color="blue darken-1" class="white--text" text @click.native="dialogAdd = false">Simpan</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-bottom-sheet v-model="menuPlus">
        <v-list>
            <v-subheader>Tambahkan</v-subheader>
            <v-list-item v-for="tile in tiles" :key="tile.title" @click="menuPlus = false, dialogAdd = true">
                <v-list-item-avatar>
                    <v-avatar size="32px" tile>
                        <v-icon color="blue">{{tile.img}}</v-icon>
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-title>{{ tile.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-bottom-sheet>
</div>
</template>

<script>
// import FileUpload from 'vue-upload-component'

import {
    createNamespacedHelpers,
    mapState,
    mapGetters
} from 'vuex'

export default {
    mounted() {},
    components: {
        // Header,
        // FileUpload,            
        // Navbar,
        // RightSidebar,
        // ChatPanel,
        // Footer,

    },
    name: "Layout",
    data() {
        return {
            dialogAdd: false,
            sheet: false,
            menuPlus: false,
            dialog2: false,
            notifications: false,
            sound: true,
            widgets: false,
            activeBtn: true,
            drawer: false,
            toolbarTop: false,
            valid: true,
            tiles: [{
                    img: 'insert_drive_file',
                    title: 'Dokumen'
                },
                {
                    img: 'attachment',
                    title: 'Lampiran'
                },
            ],
            items: [{
                    title: 'Dashboard',
                    icon: 'dashboard'
                },
                {
                    title: 'Account',
                    icon: 'account_box'
                },
                {
                    title: 'Admin',
                    icon: 'gavel'
                },
            ],
            files: [],

            group: null,
        }
    },
    watch: {
        group() {
            this.drawer = false
        },
    },
    methods: {
        inputFilter(newFile, oldFile, prevent) {
            if (newFile && !oldFile) {
                // Before adding a file
                // 添加文件前
                // Filter system files or hide files
                // 过滤系统文件 和隐藏文件
                if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
                    return prevent()
                }
                // Filter php html js file
                // 过滤 php html js 文件
                if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
                    return prevent()
                }
            }
        },
        inputFile(newFile, oldFile) {
            if (newFile && !oldFile) {
                // add
                console.log('add', newFile)
            }
            if (newFile && oldFile) {
                // update
                console.log('update', newFile)
            }
            if (!newFile && oldFile) {
                // remove
                console.log('remove', oldFile)
            }
        },
        doLogout() {
            this.$store.dispatch('auth/logout').then(res => {
                // console.log(res)
            })
        },
        backHome() {
            this.$router.push('/')
        }
    },
    computed: {
        ...mapState('auth', {
            token: 'token',
            fullname: 'fullname',
        }),
    }
};

// require('@/assets/css/style.css');
</script>

<style>
.theme--light.v-bottom-navigation .v-btn.active {
    color: #d72929 !important;
}

.v-btn:not(.v-btn--text):not(.v-btn--outlined):hover:before {
    opacity: 0 !important;
}

.example-btn span {
    line-height: 2.2rem;
}
</style>
