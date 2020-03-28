<template>
<div>

    <v-toolbar dark color="red darken-3" class="toolbar-fixed">
        <v-toolbar-title>Pesan Masuk</v-toolbar-title>
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
                            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                            <v-list-item v-else :key="item.title" avatar ripple @click="pesan = true">
                                <v-list-item-avatar>
                                    <img :src="item.avatar">
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title v-html="item.title"></v-list-item-title>
                                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-list-item-action-text>{{ item.action }}</v-list-item-action-text>
                                    <!-- <v-icon color="grey lighten-1">star_border</v-icon> -->
                                </v-list-item-action>
                            </v-list-item>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
        <br>
        <br>
    </v-container>

    <v-dialog v-model="pesan" fullscreen hide-overlay>
        <v-toolbar dark color="red darken-3" class="toolbar-fixed">
            <v-btn icon dark @click="pesan = false">
                <v-icon>close</v-icon>
            </v-btn>
            <v-chip color="red darken-3">
                <v-avatar class="mr-3">
                    <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">
                </v-avatar>
                Trevor Hansen
            </v-chip>
        </v-toolbar>
        <v-card block flat class="noradius pt-12" style="position: relative">

            <div class="chat-container">
                <div>
                    <div class="message">
                        <div style="margin-top: 5px;"></div>
                        <div class="content">
                            <div>asd asda </div>
                            <!---->
                        </div>
                    </div>
                    <div class="message">
                        <!---->
                        <!---->
                        <div style="margin-top: 5px;"></div>
                        <div class="content">
                            <div>adas</div>
                            <!---->
                        </div>
                    </div>
                    <div class="message">
                        <!---->
                        <!---->
                        <div style="margin-top: 5px;"></div>
                        <div class="content">
                            <div>a das</div>
                            <!---->
                        </div>
                    </div>
                    <div class="message">
                        <!---->
                        <!---->
                        <div style="margin-top: 5px;"></div>
                        <div class="content">
                            <div>d sad</div>
                            <!---->
                        </div>
                    </div>
                    <div class="message">
                        <!---->
                        <!---->
                        <div style="margin-top: 5px;"></div>
                        <div class="content">
                            <div> asd</div>
                            <!---->
                        </div>
                    </div>
                    <div class="message">
                        <!---->
                        <!---->
                        <div style="margin-top: 5px;"></div>
                        <div class="content">
                            <div>as</div>
                            <!---->
                        </div>
                    </div>
                    <div class="message">
                        <!---->
                        <!---->
                        <div style="margin-top: 5px;"></div>
                        <div class="content">
                            <div>dsa</div>
                            <!---->
                        </div>
                    </div>
                    <div class="message">
                        <!---->
                        <!---->
                        <div style="margin-top: 5px;"></div>
                        <div class="content">
                            <div>dsa</div>
                            <!---->
                        </div>
                    </div>
                    <div class="message">
                        <div style="margin-top: 5px;"></div>
                        <div class="content">
                            <div>hey</div>
                            <!---->
                        </div>
                    </div>
                    <div class="message own">
                        <!---->
                        <div style="margin-top: 5px;"></div>
                        <div class="content">
                            <div>ajsh</div>
                            <!---->
                        </div>
                    </div>
                </div>
            </div>
            <div class="typer">
                <!-- <input type="text" placeholder="Tulis pesan..."> -->
                <v-text-field v-validate="'required'" v-model="email" label="Tulis pesan..." data-vv-name="email" required></v-text-field>
                <!-- <button type="button" class="blue--text emoji-panel v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default">
    <span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate mdi mdi-emoticon-outline theme--light"></i></span>
    </button> -->
                <v-btn class="indigo--text btnc-send">
                    Kirim
                    <v-icon small class="ml-2">mdi-send</v-icon>
                </v-btn>
            </div>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    methods: {
        backHome() {
            this.$router.push('/')
        },
        focusSearch(){
            this.$nextTick(() => this.$refs.searchVal.focus())
        }        
    },
    data() {
        return {
            search: false,
            searchVal: '',            
            notifications: '1',
            sound: true,
            pesan: false,
            items: [{
                    header: 'Today'
                },
                {
                    avatar: 'https://v1.vuetifyjs.com/static/doc-images/lists/1.jpg',
                    action: '15 min',
                    title: 'Ali Connors',
                    subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                },
                {
                    divider: true,
                    inset: true
                },
                {
                    avatar: 'https://v1.vuetifyjs.com/static/doc-images/lists/1.jpg',
                    action: '15 min',
                    title: 'Alex',
                    subtitle: "Wish I could come, but I'm out of town this weekend."
                },
                {
                    divider: true,
                    inset: true
                },
                {
                    action: '15 min',
                    avatar: 'https://v1.vuetifyjs.com/static/doc-images/lists/2.jpg',
                    title: 'Sandra Adams',
                    subtitle: "Do you have Paris recommendations? Have you ever been?"
                },
                {
                    divider: true,
                    inset: true
                },
                {
                    avatar: 'https://v1.vuetifyjs.com/static/doc-images/lists/2.jpg',
                    action: '15 min',
                    title: 'Birthday gift',
                    subtitle: "Have any ideas about what we should get Heidi for her birthday?"
                },
                {
                    divider: true,
                    inset: true
                },
                {
                    avatar: 'https://v1.vuetifyjs.com/static/doc-images/lists/2.jpg',
                    action: '15 min',
                    title: 'Sarah',
                    subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
                },
                {
                    header: 'Kemarin'
                },
                {
                    avatar: 'https://v1.vuetifyjs.com/static/doc-images/lists/1.jpg',
                    action: '15 min',
                    title: 'Ali Connors',
                    subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                },
                {
                    divider: true,
                    inset: true
                },
                {
                    avatar: 'https://v1.vuetifyjs.com/static/doc-images/lists/1.jpg',
                    action: '15 min',
                    title: 'Alex',
                    subtitle: "Wish I could come, but I'm out of town this weekend."
                },
                {
                    divider: true,
                    inset: true
                },
                {
                    action: '15 min',
                    avatar: 'https://v1.vuetifyjs.com/static/doc-images/lists/2.jpg',
                    title: 'Sandra Adams',
                    subtitle: "Do you have Paris recommendations? Have you ever been?"
                },
                {
                    divider: true,
                    inset: true
                },
                {
                    avatar: 'https://v1.vuetifyjs.com/static/doc-images/lists/2.jpg',
                    action: '15 min',
                    title: 'Birthday gift',
                    subtitle: "Have any ideas about what we should get Heidi for her birthday?"
                },
                {
                    divider: true,
                    inset: true
                },
                {
                    avatar: 'https://v1.vuetifyjs.com/static/doc-images/lists/2.jpg',
                    action: '15 min',
                    title: 'Sarah',
                    subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
                }
            ]
        }
    }
}
</script>

<style scoped>
.chat-container {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: calc(100vh - 9.5rem);
    overflow-y: auto;
    padding: 10px;
    background-color: #e9e9e9;
}

.message {
    margin-bottom: 3px;
}

.chat-container .username {
    font-size: 18px;
    font-weight: 700;
}

.chat-container .content {
    padding: 8px;
    background-color: #90ee90;
    border-radius: 10px;
    display: inline-block;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
    max-width: 50%;
    word-wrap: break-word;
}

.message.own {
    text-align: right;
}

.message.own .content {
    background-color: #87cefa;
}

.typer {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    bottom: 0;
    height: 4.9rem;
    width: 100%;
    background-color: #fff;
    -webkit-box-shadow: 0 -5px 10px -5px rgba(0, 0, 0, .2);
    box-shadow: 0 -5px 10px -5px rgba(0, 0, 0, .2);
}

.typer input[type=text] {
    position: absolute;
    left: 0;
    padding: 1rem;
    width: 77%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.15rem;
}

.btnc-send {
    position: absolute;
    right: 20px;
}

.typer .v-input {
    width: 65%;
    position: absolute;
    left: 11px;
}
</style>
