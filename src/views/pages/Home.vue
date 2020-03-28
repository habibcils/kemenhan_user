<template>
<v-container fluid="">
    <v-row>
        <v-col cols='12  text-center'>
            <h2>Halo... !</h2>
            <p>{{fullname}}</p>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="6 text-center pr-2 py-2">
            <v-card flat="">
                <router-link :to="{path:'/dokumen_masuk'}" v-slot="{ href, route, navigate, isActive, isExactActive }">
                    <a v-ripple :href="href" class="elevation-0 v-card v-card--hover v-sheet theme--light" :class="[isActive && 'is-active', isExactActive && 'active']" @click="navigate">
                        <div class="v-avatar mt-2 contain-img-home blue">
                            <img :src="come" alt="avatar" class="img-home">
                        </div>
                        <div class="v-card__text pa-1 black--text">Dokumen Masuk</div>
                    </a>
                </router-link>
            </v-card>
        </v-col>
        <v-col cols="6 text-center pl-2 py-2">
            <v-card flat>
                <router-link :to="{path:'/dokumen_keluar'}" v-slot="{ href, route, navigate, isActive, isExactActive }">
                    <a v-ripple :href="href" class="elevation-0 v-card v-card--hover  v-sheet theme--light" :class="[isActive && 'is-active', isExactActive && 'active']" @click="navigate">
                        <div class="v-avatar mt-2 contain-img-home green">
                            <img :src="out" alt="avatar" class="img-home">
                        </div>                        
                        <div class="v-card__text pa-1 black--text">Dokumen Keluar</div>
                    </a>
                </router-link>
            </v-card>

        </v-col>

        <v-col cols="6 text-center pr-2 py-2">
            <v-card flat>

                <router-link :to="{path:'/dokumen_favorit'}" v-slot="{ href, route, navigate, isActive, isExactActive }">
                    <a v-ripple :href="href" class="elevation-0 v-card v-card--hover v-sheet theme--light" :class="[isActive && 'is-active', isExactActive && 'active']" @click="navigate">
                        <div class="v-avatar mt-2 contain-img-home  orange lighten-2">
                            <img :src="fav" alt="avatar" class="img-home">
                        </div>                           
                        <div class="v-card__text pa-1 black--text">Dokumen Favorit</div>
                    </a>
                </router-link>
            </v-card>

        </v-col>
        <v-col cols="6 text-center pl-2 py-2">
            <v-card flat>

                <router-link :to="{path:'/pengaturan'}" v-slot="{ href, route, navigate, isActive, isExactActive }">
                    <a v-ripple :href="href" class="elevation-0 v-card v-card--hover  v-sheet theme--light" :class="[isActive && 'is-active', isExactActive && 'active']" @click="navigate">
                        <div class="v-avatar mt-2 contain-img-home brown">
                            <img :src="set" alt="avatar" class="img-home">
                        </div>                         
                        <div class="v-card__text pa-1 black--text">Pengaturan</div>
                    </a>
                </router-link>
            </v-card>

        </v-col>

    </v-row>
    <v-row>
        <v-col cols="12">
            <!-- <hooper :itemsToSlide="1" :itemsToShow="1.5" :centerMode="true">
                <slide>
                    <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.4"></v-img>
                </slide>
                <slide>
                    <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.4"></v-img>
                </slide>
                <slide>
                    <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
                </slide>
                <slide>
                    <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
                </slide>
                <slide>
                    <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
                </slide>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper> -->
        </v-col>
    </v-row>
	<br>
	<br>
</v-container>
</template>

<script>
const come = require('@/assets/img/icon/003-file-1.png')
const out = require('@/assets/img/icon/002-file.png')
const fav = require('@/assets/img/icon/004-star.png')
const set = require('@/assets/img/icon/001-files.png')
import {
    createNamespacedHelpers,
    mapState,
    mapGetters
} from 'vuex'
import {
    Hooper,
    Slide,
    Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    components: {
        // Layout
        HooperPagination,
        Hooper,
        Slide
    },
    data() {
        return {
            come: come,
            out: out,
            fav: fav,
            set: set,
        }
    },
    computed: {
        ...mapState('auth', {
            token: 'token',
            fullname: 'fullname',
        }),
    }
}
</script>

<style scoped>
.hooper {
    height: 122px !important;
}

.hooper-slide.is-current {
    transform: scale(1.2);
    z-index: 9;
}

.hooper-slide {
    border: 5px solid #fff;
}
img.img-home{
    padding: 15px;
    border-radius: 0;
}
.contain-img-home{
    height: 65px;
    width: 65px;
    border-radius: 50%;
}
div.v-avatar{
    border-radius: 50% !important;
}
</style>
