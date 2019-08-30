<template>
    <div class="page-container">
        <header>
            <a @click="back()" class="go-back"></a>
            <p class="header-title">家政经纪人</p>
            <div class="other"></div>
        </header>
        <div class="page-content">
            <van-dropdown-menu class="branch-office" active-color="#273346">
                <van-dropdown-item v-model="office"  :options="office_option"/>
            </van-dropdown-menu>
            <ul class="agent-list">
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>
                <li class="agent">
                    <div class="left-part">
                        <img src="../assets/images/pic.png" alt="">
                    </div>
                    <div class="right-part">
                        <div class="name-position">
                            <p class="name">张瑞丽</p>
                            <p class="position"><span class="address-icon"></span>莲花总部</p>
                        </div>
                        <p class="tel-num">1368588289</p>
                        <p class="words">不忘初心，好邦尼（张瑞丽）用心为您服务，以专业眼光为您匹配合适/放心的好阿姨。</p>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DropdownMenu, DropdownItem } from 'vant';
    Vue.use(DropdownMenu).use(DropdownItem);
    export default {
        name:'housekeepingAgent',
        data(){
            return{
                office:0,
                office_option:[
                    {text:'分公司',value:0},
                    {text:'莲花总部',value:1},
                    {text:'海沧公司',value:2},
                    {text:'杏林公司',value:3}
                    ]
            }
        },
        methods:{
            back(){
              this.$router.go(-1);
            },
            addClass(value){
                console.log(value);
            }
        },
        created(){

        }
    }
</script>
<style scoped>
    @import '../assets/style/housekeeping-agent.css';
</style>
