<template>
    <div class="page-container">
        <header>
            <a @click="back()" class="go-back"></a>
            <p class="header-title">人脸验证</p>
            <div class="other"></div>
        </header>
        <div class="page-content">
            <p class="warn">
                <span v-if="show_warn">倒计时<strong>14秒</strong></span>
            </p>
            <div class="scan">
                <div class="scan-container ">
                    <img src="../assets/images/Verification_portrait.png" class="default-pic" alt="" v-if="!is_submit">
                    <span :class="['horizontal-line',is_submit == true ? 'animate':'']"></span>
                </div>
            </div>
            <div class="warn_02" v-if="is_submit">
                <p class="warn-content" >{{warn_content}}</p>
                <ul class="warn-serial-num-list">
                    <li v-bind:class="['warn-serial-num-list-item', serial_num == 1 ? 'choose':'']">1</li>
                    <li v-bind:class="['warn-serial-num-list-item', serial_num == 2 ? 'choose':'']">2</li>
                    <li v-bind:class="['warn-serial-num-list-item', serial_num == 3 ? 'choose':'']" >3</li>
                </ul>
            </div>
            <div  v-if="!is_submit" class="attention">
                <div class="attention-container">
                    <p class="attention-title">
                        注意事项：
                    </p>
                    <ul class="attention-content-list">
                        <li class="attention-content-item">
                            1.请小羽佳本人亲自完成
                        </li>
                        <li class="attention-content-item">
                            2.请将脸部置于提示框内，并按提示完成动作
                        </li>
                        <li class="attention-content-item">
                            <ul class="sub-attention-content-list">
                                <li class="sub-attention-content-list-item">
                                    <p><span class="sub-attenton-icon wrong"></span>不要戴眼镜</p>
                                </li>
                                <li class="sub-attention-content-list-item">
                                    <p><span class="sub-attenton-icon right"></span>保持光线充足</p>
                                </li>
                                <li class="sub-attention-content-list-item">
                                    <p><span class="sub-attenton-icon wrong"></span>不要戴帽子</p>
                                </li>
                                <li class="sub-attention-content-list-item">
                                    <p><span class="sub-attenton-icon right"></span>正对手机</p>
                                </li>
                                <li class="sub-attention-content-list-item">
                                    <p><span class="sub-attenton-icon wrong"></span>不能遮挡脸部</p>
                                </li>
                                <li class="sub-attention-content-list-item">
                                    <p><span class="sub-attenton-icon right"></span>放慢动作</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <button type="button" class="submit" v-if="!is_submit" @click="is_submit = !is_submit">开始人脸验证</button>
        </div>
        <van-overlay
                :show="showOverlay"
                z-index="1"
        />
        <div class="message" v-if="showOverlay">
            <div class="message-container">
                <div class="message-header">
                    <img src="../assets/images/Verification_background.png" alt="">
                </div>
                <img v-if="message_status" src="../assets/images/Verification_Success_icon.png" alt="" class="message-icon">
                <img v-if="!message_status" src="../assets/images/Verification_fail_icon.png" alt="" class="message-icon">
                <p v-if="message_status" class="message-warn">验证成功</p>
                <p v-if="!message_status" class="message-warn">验证失败</p>
                <p class="message-sub-warn">系统已成功审核您的人脸认证</p>
                <button type="button" class="ensure">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Overlay } from 'vant';
    Vue.use(Overlay);
    export default {
        name:"faceVerification",
        data(){
            return {
                show_warn:true,
                show_default_pic:true,
                is_submit:true,
                serial_num:1,
                warn_content:"拿起手机，点点头",
                showOverlay:true,
                message_status:true
            }
        },
        methods:{
          back(){
            this.$router.go(-1);
          }
        },
        created(){

        }
    }
</script>
<style scoped>
    @import '../assets/style/face-verification.css';
</style>
