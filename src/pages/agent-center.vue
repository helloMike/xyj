<template>
    <div class="page-container">
        <header>
            <a @click="back()" class="go-back"></a>
            <p class="header-title">经纪人个人中心</p>
            <div class="other"></div>
        </header>
        <div class="header-background-part"></div>
        <div class="page-content">
            <div class="user-pic-name-position-ercode">
                <div class="left-part">
                    <img src="../assets/images/pic.png" alt="">
                </div>
                <div class="right-part">
                    <div class="user-name-ercode">
                        <div class="user-name">
                            <span class="name">张瑞丽</span>
                            <span class="female"></span>
                            <span class="male"></span>
                        </div>
                        <div class="user-ercode" @click="showErCode()">
                            <img src="../assets/images/ercode.png" alt="">
                        </div>
                    </div>
                    <div class="user-position">
                        家政事业部
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="tel-homePhone">
                <a  class="tel" @click="showCall()">
                    <div class="left-part">
                        <span class="tel-icon"></span>
                        <span>13685988289</span>
                    </div>
                    <span class="phone-icon"></span>
                </a>
                <a  class="homePhone" @click="showCall()">
                    <div class="left-part">
                        <span class="homePhone-icon"></span>
                        <span>0592-5117221</span>
                    </div>
                    <span class="phone-icon"></span>
                </a>
            </div>
            <div class="bm-bm">
                <a  class="my-bm">
                    <div class="left-part">
                        <span class="my-bm-icon"></span>
                        <span>我的保姆</span>
                    </div>
                    <span class="right-arrow-icon"></span>
                </a>
                <a  class="zz-bm">
                    <div class="left-part">
                        <span class="zz-bm-icon"></span>
                        <span>自助报名</span>
                    </div>
                    <span class="right-arrow-icon"></span>
                </a>
            </div>
            <div class="button-part">
                <button type="button" class="more-service">更多服务</button>
                <button type="button" class="message" @click="sendMessage()">给我留言</button>
            </div>

        </div>
        <van-overlay
                z-index=1
                :show="show_over_lay"
                @click="close()"
        />
        <div class="erCode" v-if="show_er_code">
            <div class="erCode-container">
                <div class="erCode-header">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <p class="user-name">张瑞丽</p>
                        <p class="user-position">家政事业部</p>
                    </div>
                </div>
                <img class="erCode-pic" src="../assets/images/erCode_02.png" alt="">
                <p class="erCode-warn">扫一扫二维码，加我微信</p>
            </div>
            <span class="icon-close" @click="close()"></span>
        </div>
        <div class="call" v-if="show_call">
            <div class="call-content">
                <div class="call-content-header">
                </div>
                <div class="call-content-part">
                    <div class="call-num">
                        <p class="call-num-warn">现在拨打电话</p>
                        <p class="call-number">13685988289</p>
                    </div>
                    <a href="#" class="call-link">立即拨打</a>
                </div>
            </div>
            <span class="call-close-icon" @click="close()"></span>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import {Field,CellGroup,Overlay} from 'vant';
    Vue.use(Field).use(CellGroup).use(Overlay);
    export default {
        name:'agentCenter',
        data(){
            return {
                show_over_lay:false,
                show_call:false,
                show_er_code:false
            }
        },
        methods:{
            back(){
              this.$router.go(-1);
            },
            sendMessage(){
              this.$router.push({path:'/housekeepingAgent'})
            },
            close(){
                this.show_over_lay = false;
                this.show_call = false;
                this.show_er_code = false;
            },
            showErCode(){
                this.show_er_code = true;
                this.show_over_lay = true;
            },
            showCall(){
                this.show_call = true;
                this.show_over_lay = true;
            }
        },
        created(){

        }
    }
</script>
<style scoped>
    @import '../assets/style/agent-center.css';
</style>
