<template>
    <div class="page-container">
        <header>
            <a @click="back()" class="go-back"></a>
            <p class="header-title">添加身份证</p>
            <div class="other"></div>
        </header>
        <div class="page-content">
            <p class="warn">
                请将身份证正面放入扫描框内，如下图
            </p>
            <div class="scan">
                <div class="scan-container">
                    <span class="horizontal-line"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    export default{
        name:"addCertificate",
        data(){
            return {

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
    @import "../assets/style/add-certificate.css";
</style>
