<template>
    <div class="page-container">
        <header>
            <a @click="back()" class="go-back"></a>
            <p class="header-title">我的保姆</p>
            <div class="other"></div>
        </header>
        <div class="page-content">
            <van-tabs v-model="active" class="nav-tabs"  line-width="0" animated swipeable>
                <van-tab :disabled="choosed">
                    <div slot="title" id="all" @click="choosed=false">
                        全部
                    </div>
                    <div class="tab-content all">
                        <img src="../assets/images/empty.png" alt="" class="warn-empty-img">
                        <p class="warn">您还没有自己的保姆哦</p>
                    </div>
                </van-tab>
                <van-tab :disabled="choosed">
                    <div slot="title" id="job-experience" @click="choosed=false">
                        工作经验
                        <span @click="changeSerial('experience')" :class="['title-icon',active==1?'active':'',experience_aesc?'choose':'']"></span>
                    </div>
                    <div class="tab-content experience">
                        <ul class="nanny-list">
                            <li class="nanny">
                                <div class="nanny-info-container">
                                    <div class="nanny-info-name-salary-tags">
                                        <div class="left-part">
                                            <img src="../assets/images/pic.png" alt="">
                                        </div>
                                        <div class="right-part">
                                            <div class="name-position">
                                                <p class="name">张瑞丽</p>
                                                <p class="position">育儿嫂</p>
                                            </div>
                                            <p class="salary">8000～9000/月</p>
                                            <ul class="person-tags-list">
                                                <li class="person-tags-list-item">
                                                    <span>育婴师</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>住家</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>福建漳州</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="nanny-detail">
                                        <ul class="nanny-detail-list">
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作经历】</p>
                                                <p class="detail-content">1994-2000年做家政，做饭，卫生80平米，照顾自理老人，半自理老人。2001-2008做小工，2009-2011带孩子，五个一月到三岁，巴基斯坦人。</p>
                                            </li>
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作技能】</p>
                                                <p class="detail-content">会收纳整理折叠烫衣服，卫生整洁，爱干净，擅长打扫</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="nanny">
                                <div class="nanny-info-container">
                                    <div class="nanny-info-name-salary-tags">
                                        <div class="left-part">
                                            <img src="../assets/images/pic.png" alt="">
                                        </div>
                                        <div class="right-part">
                                            <div class="name-position">
                                                <p class="name">张瑞丽</p>
                                                <p class="position">育儿嫂</p>
                                            </div>
                                            <p class="salary">8000～9000/月</p>
                                            <ul class="person-tags-list">
                                                <li class="person-tags-list-item">
                                                    <span>育婴师</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>住家</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>福建漳州</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="nanny-detail">
                                        <ul class="nanny-detail-list">
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作经历】</p>
                                                <p class="detail-content">1994-2000年做家政，做饭，卫生80平米，照顾自理老人，半自理老人。2001-2008做小工，2009-2011带孩子，五个一月到三岁，巴基斯坦人。</p>
                                            </li>
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作技能】</p>
                                                <p class="detail-content">会收纳整理折叠烫衣服，卫生整洁，爱干净，擅长打扫</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="nanny">
                                <div class="nanny-info-container">
                                    <div class="nanny-info-name-salary-tags">
                                        <div class="left-part">
                                            <img src="../assets/images/pic.png" alt="">
                                        </div>
                                        <div class="right-part">
                                            <div class="name-position">
                                                <p class="name">张瑞丽</p>
                                                <p class="position">育儿嫂</p>
                                            </div>
                                            <p class="salary">8000～9000/月</p>
                                            <ul class="person-tags-list">
                                                <li class="person-tags-list-item">
                                                    <span>育婴师</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>住家</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>福建漳州</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="nanny-detail">
                                        <ul class="nanny-detail-list">
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作经历】</p>
                                                <p class="detail-content">1994-2000年做家政，做饭，卫生80平米，照顾自理老人，半自理老人。2001-2008做小工，2009-2011带孩子，五个一月到三岁，巴基斯坦人。</p>
                                            </li>
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作技能】</p>
                                                <p class="detail-content">会收纳整理折叠烫衣服，卫生整洁，爱干净，擅长打扫</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="nanny">
                                <div class="nanny-info-container">
                                    <div class="nanny-info-name-salary-tags">
                                        <div class="left-part">
                                            <img src="../assets/images/pic.png" alt="">
                                        </div>
                                        <div class="right-part">
                                            <div class="name-position">
                                                <p class="name">张瑞丽</p>
                                                <p class="position">育儿嫂</p>
                                            </div>
                                            <p class="salary">8000～9000/月</p>
                                            <ul class="person-tags-list">
                                                <li class="person-tags-list-item">
                                                    <span>育婴师</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>住家</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>福建漳州</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="nanny-detail">
                                        <ul class="nanny-detail-list">
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作经历】</p>
                                                <p class="detail-content">1994-2000年做家政，做饭，卫生80平米，照顾自理老人，半自理老人。2001-2008做小工，2009-2011带孩子，五个一月到三岁，巴基斯坦人。</p>
                                            </li>
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作技能】</p>
                                                <p class="detail-content">会收纳整理折叠烫衣服，卫生整洁，爱干净，擅长打扫</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="nanny">
                                <div class="nanny-info-container">
                                    <div class="nanny-info-name-salary-tags">
                                        <div class="left-part">
                                            <img src="../assets/images/pic.png" alt="">
                                        </div>
                                        <div class="right-part">
                                            <div class="name-position">
                                                <p class="name">张瑞丽</p>
                                                <p class="position">育儿嫂</p>
                                            </div>
                                            <p class="salary">8000～9000/月</p>
                                            <ul class="person-tags-list">
                                                <li class="person-tags-list-item">
                                                    <span>育婴师</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>住家</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>福建漳州</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="nanny-detail">
                                        <ul class="nanny-detail-list">
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作经历】</p>
                                                <p class="detail-content">1994-2000年做家政，做饭，卫生80平米，照顾自理老人，半自理老人。2001-2008做小工，2009-2011带孩子，五个一月到三岁，巴基斯坦人。</p>
                                            </li>
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作技能】</p>
                                                <p class="detail-content">会收纳整理折叠烫衣服，卫生整洁，爱干净，擅长打扫</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="nanny">
                                <div class="nanny-info-container">
                                    <div class="nanny-info-name-salary-tags">
                                        <div class="left-part">
                                            <img src="../assets/images/pic.png" alt="">
                                        </div>
                                        <div class="right-part">
                                            <div class="name-position">
                                                <p class="name">张瑞丽</p>
                                                <p class="position">育儿嫂</p>
                                            </div>
                                            <p class="salary">8000～9000/月</p>
                                            <ul class="person-tags-list">
                                                <li class="person-tags-list-item">
                                                    <span>育婴师</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>住家</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>福建漳州</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="nanny-detail">
                                        <ul class="nanny-detail-list">
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作经历】</p>
                                                <p class="detail-content">1994-2000年做家政，做饭，卫生80平米，照顾自理老人，半自理老人。2001-2008做小工，2009-2011带孩子，五个一月到三岁，巴基斯坦人。</p>
                                            </li>
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作技能】</p>
                                                <p class="detail-content">会收纳整理折叠烫衣服，卫生整洁，爱干净，擅长打扫</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="nanny">
                                <div class="nanny-info-container">
                                    <div class="nanny-info-name-salary-tags">
                                        <div class="left-part">
                                            <img src="../assets/images/pic.png" alt="">
                                        </div>
                                        <div class="right-part">
                                            <div class="name-position">
                                                <p class="name">张瑞丽</p>
                                                <p class="position">育儿嫂</p>
                                            </div>
                                            <p class="salary">8000～9000/月</p>
                                            <ul class="person-tags-list">
                                                <li class="person-tags-list-item">
                                                    <span>育婴师</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>住家</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>福建漳州</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="nanny-detail">
                                        <ul class="nanny-detail-list">
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作经历】</p>
                                                <p class="detail-content">1994-2000年做家政，做饭，卫生80平米，照顾自理老人，半自理老人。2001-2008做小工，2009-2011带孩子，五个一月到三岁，巴基斯坦人。</p>
                                            </li>
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作技能】</p>
                                                <p class="detail-content">会收纳整理折叠烫衣服，卫生整洁，爱干净，擅长打扫</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="nanny">
                                <div class="nanny-info-container">
                                    <div class="nanny-info-name-salary-tags">
                                        <div class="left-part">
                                            <img src="../assets/images/pic.png" alt="">
                                        </div>
                                        <div class="right-part">
                                            <div class="name-position">
                                                <p class="name">张瑞丽</p>
                                                <p class="position">育儿嫂</p>
                                            </div>
                                            <p class="salary">8000～9000/月</p>
                                            <ul class="person-tags-list">
                                                <li class="person-tags-list-item">
                                                    <span>育婴师</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>住家</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>福建漳州</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="nanny-detail">
                                        <ul class="nanny-detail-list">
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作经历】</p>
                                                <p class="detail-content">1994-2000年做家政，做饭，卫生80平米，照顾自理老人，半自理老人。2001-2008做小工，2009-2011带孩子，五个一月到三岁，巴基斯坦人。</p>
                                            </li>
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作技能】</p>
                                                <p class="detail-content">会收纳整理折叠烫衣服，卫生整洁，爱干净，擅长打扫</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="nanny">
                                <div class="nanny-info-container">
                                    <div class="nanny-info-name-salary-tags">
                                        <div class="left-part">
                                            <img src="../assets/images/pic.png" alt="">
                                        </div>
                                        <div class="right-part">
                                            <div class="name-position">
                                                <p class="name">张瑞丽</p>
                                                <p class="position">育儿嫂</p>
                                            </div>
                                            <p class="salary">8000～9000/月</p>
                                            <ul class="person-tags-list">
                                                <li class="person-tags-list-item">
                                                    <span>育婴师</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>住家</span>
                                                </li>
                                                <li class="person-tags-list-item">
                                                    <span>福建漳州</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="nanny-detail">
                                        <ul class="nanny-detail-list">
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作经历】</p>
                                                <p class="detail-content">1994-2000年做家政，做饭，卫生80平米，照顾自理老人，半自理老人。2001-2008做小工，2009-2011带孩子，五个一月到三岁，巴基斯坦人。</p>
                                            </li>
                                            <li class="nanny-detail-item">
                                                <p class="title">【工作技能】</p>
                                                <p class="detail-content">会收纳整理折叠烫衣服，卫生整洁，爱干净，擅长打扫</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="pagination-part">
                            <van-row>
                                <van-col span="4" class="page-first">
                                    <button type="button">首页</button>
                                </van-col>
                                <van-col span="16">
                                    <van-pagination
                                            prev-text="<"
                                            next-text=">"
                                            v-model="currentPage"
                                            :total-items="125"
                                            :show-page-size="3"
                                            force-ellipses
                                    />
                                </van-col>
                                <van-col span="4" class="page-last">
                                    <button type="button">尾页</button>
                                </van-col>
                            </van-row>
                        </div>
                    </div>
                </van-tab>
                <van-tab :disabled="choosed">
                    <div slot="title" id="salary" @click="choosed=false">
                         薪资
                        <span @click="changeSerial('salary')" :class="['title-icon',active==2?'active':'',salary_aesc?'choose':'']"></span>
                    </div>
                    <div class="tab-content salary">
                        薪资
                    </div>
                </van-tab>
                <van-tab disabled>
                    <div slot="title" id="choose" :class="[choosed?'active':'']" @click="showConditions()">
                        筛选
                        <span class="title-icon"></span>
                    </div>
                </van-tab>
            </van-tabs>
            <!--遮罩层-->
            <van-overlay
                    :show="choosed"
                    @click="choosed = false"
                    class="overlay-position"
                    z-index="1"
            />
            <!--筛选条件-->
            <div class="choose-condition" v-show="choosed">
                <div class="choose-condition-container">
                    <!--工作区域-->
                    <div class="choose-condition-item">
                        <p class="title">工作区域</p>
                        <div class="choose-condition-item-list">
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.job_area == '0'}">
                                    同安区
                                    <input type="radio" name="job-area" value="0" v-model="form.job_area">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.job_area == '1'}">
                                    思明区
                                    <input type="radio" name="job-area" value="1" v-model="form.job_area">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.job_area == '2'}">
                                    集美区
                                    <input type="radio" name="job-area" value="2" v-model="form.job_area">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.job_area == '3'}">
                                    海沧区
                                    <input type="radio" name="job-area" value="3" v-model="form.job_area">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.job_area == '4'}">
                                    翔安区
                                    <input type="radio" name="job-area" value="4" v-model="form.job_area">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.job_area == '5'}">
                                    湖里区
                                    <input type="radio" name="job-area" value="5" v-model="form.job_area">
                                </label>
                            </div>

                        </div>
                    </div>
                    <!--保姆类型-->
                    <div class="choose-condition-item">
                        <p class="title">保姆类型</p>
                        <div class="choose-condition-item-list">
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.nanny_type == '0'}">
                                    住家
                                    <input type="radio" name="nanny_type" value="0" v-model="form.nanny_type">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.nanny_type == '1'}">
                                    不住家
                                    <input type="radio" name="nanny_type" value="1" v-model="form.nanny_type">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.nanny_type == '2'}">
                                    单餐
                                    <input type="radio" name="nanny_type" value="2" v-model="form.nanny_type">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.nanny_type == '3'}">
                                    育儿嫂
                                    <input type="radio" name="nanny_type" value="3" v-model="form.nanny_type">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.nanny_type == '4'}">
                                    家务保姆
                                    <input type="radio" name="nanny_type" value="4" v-model="form.nanny_type">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.nanny_type == '5'}">
                                    钟点工
                                    <input type="radio" name="nanny_type" value="5" v-model="form.nanny_type">
                                </label>
                            </div>

                        </div>
                    </div>
                    <!--年龄-->
                    <div class="choose-condition-item">
                        <p class="title">年龄</p>
                        <div class="choose-condition-item-list">
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.age == '0'}">
                                    住家
                                    <input type="radio" name="age" value="0" v-model="form.age">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.age == '1'}">
                                    不住家
                                    <input type="radio" name="age" value="1" v-model="form.age">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.age == '2'}">
                                    单餐
                                    <input type="radio" name="age" value="2" v-model="form.age">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.age == '3'}">
                                    育儿嫂
                                    <input type="radio" name="age" value="3" v-model="form.age">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.age == '4'}">
                                    家务保姆
                                    <input type="radio" name="age" value="4" v-model="form.age">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.age == '5'}">
                                    钟点工
                                    <input type="radio" name="age" value="5" v-model="form.age">
                                </label>
                            </div>
                        </div>
                    </div>
                    <!--婚姻状况-->
                    <div class="choose-condition-item">
                        <p class="title">婚姻状况</p>
                        <div class="choose-condition-item-list">
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.marry == '0'}">
                                    未婚
                                    <input type="radio" name="marry" value="0" v-model="form.marry">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.marry == '1'}">
                                    已婚
                                    <input type="radio" name="marry" value="1" v-model="form.marry">
                                </label>
                            </div>
                        </div>
                    </div>
                    <!--籍贯-->
                    <div class="choose-condition-item">
                        <p class="title">籍贯</p>
                        <div class="choose-condition-item-list">
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.jg == '0'}">
                                    全部
                                    <input type="radio" name="jg" value="0" v-model="form.jg">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.jg == '1'}">
                                    本地
                                    <input type="radio" name="jg" value="1" v-model="form.jg">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.jg == '2'}">
                                    外地
                                    <input type="radio" name="jg" value="2" v-model="form.jg">
                                </label>
                            </div>
                        </div>
                    </div>
                    <!--学历-->
                    <div class="choose-condition-item">
                        <p class="title">学历</p>
                        <div class="choose-condition-item-list">
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.xl == '0'}">
                                    初中及以下
                                    <input type="radio" name="xl" value="0" v-model="form.xl">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.xl == '1'}">
                                    中专
                                    <input type="radio" name="xl" value="1" v-model="form.xl">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.xl == '2'}">
                                    高中
                                    <input type="radio" name="xl" value="2" v-model="form.xl">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.xl == '3'}">
                                    大专
                                    <input type="radio" name="xl" value="3" v-model="form.xl">
                                </label>
                            </div>
                            <div class="choose-condition-item-list-item">
                                <label :class="{checked:form.xl == '4'}">
                                    本科
                                    <input type="radio" name="xl" value="4" v-model="form.xl">
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button-part">
                    <button type="button" class="reset" @click="reset()">重置</button>
                    <button type="button" class="submit" @click="submit()">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Tab,Tabs,Pagination,Row,Col,Overlay } from 'vant';

    Vue.use(Tab).use(Tabs).use(Pagination).use(Row).use(Col).use(Overlay);

    export default {
        name:"myNanny",
        data(){
            return {
                active:0,
                experience_aesc:false,
                salary_aesc:false,
                choosed:false,
                currentPage:1,
                form:{
                    job_area:'',
                    nanny_type:'',
                    age:'',
                    marry:'',
                    jg:'',
                    xl:''
                }
            }
        },
        methods:{
          back(){
            this.$router.go(-1);
          },
            changeSerial(tag){
                switch(this.active){//工作经验，薪资升降序排列
                    case 1:
                        if(tag == 'experience'){
                            this.experience_aesc = !this.experience_aesc;
                            alert("升")
                        }
                        break;
                    case 2:
                        if(tag == 'salary'){
                            this.salary_aesc = !this.salary_aesc;
                            alert("升")
                        }
                        break;
                }
                switch(tag){
                    case'experience':
                        this.salary_aesc=false;
                        break;
                    case'salary':
                        this. experience_aesc=false;
                        break;

                }
            },
            showConditions(){
                this.choosed = !this.choosed;
            },
            reset(){
                this.form = {
                    job_area:'',
                    nanny_type:'',
                    age:'',
                    marry:'',
                    jg:'',
                    xl:''
                }
            },
            submit(){
                this.choosed = false;
            }
        },
        created(){

        }
    }
</script>
<style>
    @import "../assets/style/my-nanny.css";
</style>
