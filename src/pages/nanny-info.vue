<template>
    <div class="page-container">
        <header>
            <a @click="back()" class="go-back"></a>
            <p class="header-title">保姆信息</p>
            <div class="other"></div>
        </header>
        <div class="header-background-part"></div>
        <div class="page-content">
            <div class="nanny-name-serial-salary">
                <p class="name-serial">
                    <span class="name">张瑞丽</span>
                    <span class="serial">编号:404925</span>
                </p>
                <p class="salary">
                    <span class="salary">8000～9000/月</span>
                </p>
                <div class="nanny-pic">
                    <img src="../assets/images/pic.png" alt="">
                </div>
            </div>
            <div class="person-tags">
                <div class="person-tags-container">
                    <p class="content-title">个人标签：</p>
                    <ul class="person-tags-list">
                        <li class="person-tags-list-item strong">
                            <span>育婴师</span>
                        </li>
                        <li class="person-tags-list-item strong">
                            <span>住家</span>
                        </li>
                        <li class="person-tags-list-item strong">
                            <span>福建漳州</span>
                        </li>
                        <li class="person-tags-list-item strong">
                            <span>41岁</span>
                        </li>
                        <li class="person-tags-list-item">
                            <span>属马</span>
                        </li>
                        <li class="person-tags-list-item">
                            <span>已婚</span>
                        </li>
                        <li class="person-tags-list-item">
                            <span>10年工作经验</span>
                        </li>
                        <li class="person-tags-list-item">
                            <span>普通话；闽南话</span>
                        </li>
                        <li class="person-tags-list-item">
                            <span>初中</span>
                        </li>
                        <li class="person-tags-list-item">
                            <span>健康证</span>
                        </li>
                        <li class="person-tags-list-item">
                            <span>做饭；做卫生；接送小孩</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="detail">
                <div class="detail-container">
                    <div class="content-title">详细资料：</div>
                    <div class="detail-item">
                        <div class="detail-item-title">
                            <span class="title-icon"><img src="../assets/images/job_type_icon.png" alt=""></span>工作类型
                        </div>
                        <div class="detail-item-content">
                            住家阿姨；中餐；晚餐；
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-title">
                            <span class="title-icon"><img src="../assets/images/job_experience.png" alt=""></span>工作经历
                        </div>
                        <div class="detail-item-content">
                            1994-2000年做家政，做饭，卫生80平米，照顾自理老人，半自理老人。2001-2008做小工，2009-2011带孩子，五个一月到三岁，巴基斯坦人。
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-title">
                            <span class="title-icon"><img src="../assets/images/job_skill.png" alt=""></span>工作技能
                        </div>
                        <div class="detail-item-content">
                            会收纳整理折叠烫衣服，卫生整洁，爱干净，擅长打扫
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-title">
                            <span class="title-icon"><img src="../assets/images/cook_skill.png" alt=""></span>烹饪技巧
                        </div>
                        <div class="detail-item-content">
                            做饭能力良好,擅长煲汤，家常菜，家乡菜，南方菜。
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-title">
                            <span class="title-icon"><img src="../assets/images/family_state.png" alt=""></span>家庭情况
                        </div>
                        <div class="detail-item-content">
                            老公在泉州工作，女儿在厦门思明做家教
                        </div>
                    </div>
                </div>
            </div>
            <div class="buttons-part">
                <button type="button" class="tel-appointment">电话预约</button>
                <button type="button" class="message-appointment">留言预约</button>
                <button type="button" class="gzgzh">关注公众号</button>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    export default {
        name:"nannyInfo",
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
    @import "../assets/style/nanny-info.css";
</style>
