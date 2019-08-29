<template>
    <div class="page-container">
        <header>
            <a @click="back()" class="go-back"></a>
            <p class="header-title">自助报名</p>
            <div class="other"></div>
        </header>
        <div class="header-background-part"></div>
        <div class="page-content">
            <div class="page-content-item">
                <div class="page-content-item-title">工作类型：</div>
                <div class="item-content">
                    <van-radio-group v-model="job_type" class="radio-btn-group">
                        <van-radio name="1" checked-color="#ffc611" class="radio-btn">保姆</van-radio>
                        <van-radio name="2" checked-color="#ffc611" class="radio-btn">月嫂</van-radio>
                    </van-radio-group>
                </div>
            </div>
            <div class="page-content-item">
                <div class="page-content-item-title">选择哪个公司为您找工作：</div>
                <div class="item-content">
                    <van-radio-group v-model="job_position" class="radio-btn-group">
                        <van-radio name="1" checked-color="#FFB418" class="radio-btn">莲花总部</van-radio>
                    </van-radio-group>
                </div>
            </div>
            <div class="page-content-item">
                <div class="page-content-item-title">必要证件：</div>
                <div class="item-content">
                    <ul class="camera-btn-list needful-certificate">
                        <li class="camera-btn-item">
                            <div class="camera-btn-item-container">
                                <a  class="camera-btn">
                                    <img src="../assets/images/default_pic.png" alt=""/>
                                </a>
                                <span class="camera-btn-name"> 人脸头像 </span>
                            </div>
                        </li>
                        <li class="camera-btn-item">
                            <div class="camera-btn-item-container">
                                <a class="camera-btn">
                                    <img src="../assets/images/default_pic.png" alt=""/>
                                </a>
                                <span class="camera-btn-name"> 身份证(正面)</span>
                            </div>
                        </li>
                        <li class="camera-btn-item">
                            <div class="camera-btn-item-container">
                                <a class="camera-btn">
                                    <img src="../assets/images/default_pic.png" alt=""/>
                                </a>
                                <span class="camera-btn-name"> 身份证(反面)</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="page-content-item">
                <div class="page-content-item-title">基本信息：</div>
                <div class="item-content">
                    <van-cell-group class="base-info">
                        <van-field
                                class="input-text"
                                clearable
                                label="身份证号"
                                placeholder="请输入身份证号"
                                input-align="right"
                                label-align="left"
                        />
                        <van-field
                                class="input-text"
                                clearable
                                label="身份证地址"
                                placeholder="请输入身份证地址"
                                input-align="right"
                                label-align="left"
                        />
                        <van-field
                                class="input-text"
                                clearable
                                label="有效期"
                                placeholder="请输入有效期"
                                input-align="right"
                                label-align="left"
                        />
                        <van-field
                                class="input-text"
                                clearable
                                label="称呼"
                                placeholder="请输入称呼"
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
                        <van-row class="field-row" >
                            <van-col span="16">
                                <van-field
                                        class="input-text"
                                        clearable
                                        label="手机验证码"
                                        placeholder="请输入手机验证码"
                                        input-align="right"
                                        label-align="left"
                                />
                            </van-col>
                            <van-col span="8" class="get-yzm-container">
                                <button type="button" class="get-yzm">获取验证码</button>
                            </van-col>
                        </van-row>
                        <div class="address">
                            <div class="address-container">
                                <p class="address-title">现住地址</p>
                                <textarea name="address" id="address"  cols="45" rows="2" placeholder="请填写详细地址 如XX省XX市XX区XX街道详细门牌号
"></textarea>
                            </div>
                        </div>
                    </van-cell-group>
                </div>
            </div>

            <div class="page-content-item">
                <div class="page-content-item-title">紧急联系人：</div>
                <div class="item-content">
                    <van-cell-group class="base-info">
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
                        <div class="relation">
                            <div class="relation-container">
                                <div class="relation-title">选择关系</div>
                                <van-radio-group v-model="relation_type" class="radio-btn-group">
                                    <van-radio name="1" checked-color="#FFB418" class="radio-btn">夫妻</van-radio>
                                    <van-radio name="2" checked-color="#FFB418" class="radio-btn">子女</van-radio>
                                    <van-radio name="3" checked-color="#FFB418" class="radio-btn">亲戚</van-radio>
                                    <van-radio name="4" checked-color="#FFB418" class="radio-btn">朋友</van-radio>
                                </van-radio-group>
                            </div>
                        </div>
                    </van-cell-group>
                    <div class="state">
                        <p>本人声明：以上所填资料全部真实有效，如有虚假，愿意承担由此引起的一切经济责任和法律责任。同时，本人自愿将个人照片和求职信息在保姆（家政）网上发布。</p>
                    </div>
                </div>
            </div>
            <div class="page-content-item">
                <div class="page-content-item-title">请您签名：</div>
                <div class="item-content">
                    <div class="sign">
                        <div class="sign-container">
                            <div class="sign-area"></div>
                            <div class="button-part">
                                <button type="button" class="reset">重写</button>
                                <button type="button" class="ensure">确认</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-content-item">
                <div class="page-content-item-title">其他证件：</div>
                <div class="item-content">
                    <div class="other-certificate">
                        <div class="other-certificate-container">
                            <ul class="camera-btn-list">
                                <li class="camera-btn-item">
                                    <div class="camera-btn-item-container">
                                        <a  class="camera-btn">
                                            <img src="../assets/images/default_pic.png" alt=""/>
                                        </a>
                                        <span class="camera-btn-name"> 信息表 </span>
                                    </div>
                                </li>
                                <li class="camera-btn-item">
                                    <div class="camera-btn-item-container">
                                        <a class="camera-btn">
                                            <img src="../assets/images/default_pic.png" alt=""/>
                                        </a>
                                        <span class="camera-btn-name"> 健康证</span>
                                    </div>
                                </li>
                                <li class="camera-btn-item">
                                    <div class="camera-btn-item-container">
                                        <a class="camera-btn">
                                            <img src="../assets/images/default_pic.png" alt=""/>
                                        </a>
                                        <span class="camera-btn-name"> 月嫂证 </span>
                                    </div>
                                </li>
                                <li class="camera-btn-item">
                                    <div class="camera-btn-item-container">
                                        <a  class="camera-btn">
                                            <img src="../assets/images/default_pic.png" alt=""/>
                                        </a>
                                        <span class="camera-btn-name"> 育婴师证 </span>
                                    </div>
                                </li>
                                <li class="camera-btn-item">
                                    <div class="camera-btn-item-container">
                                        <a class="camera-btn">
                                            <img src="../assets/images/default_pic.png" alt=""/>
                                        </a>
                                        <span class="camera-btn-name"> 其他1 </span>
                                    </div>
                                </li>
                                <li class="camera-btn-item">
                                    <div class="camera-btn-item-container">
                                        <a class="camera-btn">
                                            <img src="../assets/images/default_pic.png" alt=""/>
                                        </a>
                                        <span class="camera-btn-name"> 其他2 </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="submit">提交报名资料</button>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import {Field,CellGroup,RadioGroup, Radio,Cell,Row, Col } from 'vant';
    Vue.use(RadioGroup).use( Radio).use(Field).use(CellGroup).use(Cell).use(Row).use(Col);
    export default {
        name:'agentCenter',
        data(){
            return {
                job_type: '1',
                job_position:'1',
                relation_type:'1'
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
<style>
    @import '../assets/style/zzbm.css';
</style>
