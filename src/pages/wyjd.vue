<template>
    <div class="page-container">
        <header>
            <a @click="back()" class="go-back"></a>
            <p class="header-title">我要接单</p>
            <div class="other"></div>
        </header>
        <div class="page-content">
            <div class="user-info">
                <p class="user-info-warn">请填写您的需求信息 经纪人会及时与您联系</p>
                    <van-field
                            class="input-text"
                            clearable
                            label="姓名"
                            placeholder="请输入姓名"
                            input-align="right"
                            label-align="left"
                    />
                    <van-field
                            class="input-text"
                            clearable
                            label="手机号"
                            placeholder="请输入手机号"
                            input-align="right"
                            label-align="left"
                    />
                <van-field
                            class="input-text"
                            clearable
                            label="服务地址"
                            placeholder="请输入服务地址"
                            input-align="right"
                            label-align="left"
                    />
            </div>
            <div class="remark">
                <div class="remarkTitle-wordsNum">
                    <span class="remark-title">备份</span><span class="remark-words-num"><span id="remark-words-num">0</span>/120</span>
                </div>
                <textarea name="remark" id="remark-textarea" cols="30" rows="10" maxlength="120" placeholder="请填写备注详情"></textarea>
            </div>
            <button type="button" class="submit" @click="sendMessage()">提交留言</button>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import {Field,CellGroup} from 'vant';
    Vue.use(Field).use(CellGroup);
    export default {
        name:'wyjd',
        data(){
            return {

            }
        },
        methods:{
          back(){
            this.$router.go(-1);
          },
          sendMessage(){
            this.$router.push({path:'/agent-center'})
          }
        },
        created(){

        }
    }
</script>
<style scoped>
@import '../assets/style/wyjd.css';
</style>
