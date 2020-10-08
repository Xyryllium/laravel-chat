/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Axios from 'axios';
import Echo from 'laravel-echo';
import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'

//for scroll
Vue.use(VueChatScroll)
//for notifications
Vue.use(Toaster, {
    timeout: 5000
})

Vue.component('message', require('./components/Message.vue').default);


const app = new Vue({
    el: '#app',
    data: {
        message: '',
        chat: {
            message: [],
            user: [],
            color: [],
            time: []
        },
        typing: '',
        numberOfUsers: 0
    },
    watch: {
        message() {
            window.Echo.private('chat')
                .whisper('typing', {
                    name: this.message
                });
        }
    },
    methods: {
        send() {
            if (this.message.length != 0) {
                this.chat.message.push(this.message);
                this.chat.user.push('You');
                this.chat.color.push('success');
                this.chat.time.push(this.getTime());
                axios.post('/send', {
                        message: this.message,
                        chat: this.chat
                    })
                    .then(response => {
                        console.log(response)
                        this.message = ''
                    })
                    .catch(error => {
                        console.log(error)
                    });
            }

        },
        getTime() {
            let time = new Date();
            return time.getHours() + ':' + time.getMinutes();
        },
        getOldMessages() {
            axios.post('/getOldMessage')
                .then(response => {
                    console.log(response);

                    if (response.data != '')
                        this.chat = response.data;
                })
                .catch(error => {
                    console.log(error)
                });
        }
    },
    mounted() {
        this.getOldMessages();
        window.Echo.private('chat')
            .listen('ChatEvent', (e) => {
                this.chat.message.push(e.message);
                this.chat.user.push(e.user);
                this.chat.color.push('warning');
                this.chat.time.push(this.getTime());
                axios.post('/saveToSession', {
                        chat: this.chat
                    })
                    .then(response => {})
                    .catch(error => {
                        console.log(error)
                    });
            })
            .listenForWhisper('typing', (e) => {
                e.name != '' ? this.typing = 'Typing...' : this.typing = '';

            });
        window.Echo.join(`chat`)
            .here((users) => {
                this.numberOfUsers = users.length;
            })
            .joining((user) => {
                this.numberOfUsers += 1;
                this.$toaster.success(user.name + ' has joined the chat room');
            })
            .leaving((user) => {
                this.numberOfUsers -= 1;
                this.$toaster.warning(user.name + ' has leaved the chat room');
            });
    }
});
