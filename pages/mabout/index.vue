<template>
    <div class="m-about">
        <div class="m-banner">
            <h3> {{$t('about.banner.title')}}</h3>
        </div>
        <div class="m-about-intro">
            <h3>{{$t('about.banner.mtitle')}}</h3>
            <div class="info">
              {{$t('about.banner.info1')}}
            </div>
          <div class="info">
            {{$t('about.banner.info2')}}
          </div>
        </div>
        <div class="m-about-group">
            <h3>{{$t('about.bgintro.title')}}</h3>
            <div class="intro">
              {{$t('about.bgintro.info1')}}
              <br/>{{$t('about.bgintro.info2')}}
              <br/>{{$t('about.bgintro.info3')}}
            </div>
            <img class="grop1" src="~assets/images/about/about1.png" alt="">
            <img class="grop2" src="~assets/images/about/about2.png" alt="">
            <img class="grop3" src="~assets/images/about/about3.png" alt="">
        </div>
        <div class="m-about-timeline">
            <div class="time-list">
                <div class="time time1">
                    <div class="top">
                        <div class="text1">{{$t('about.timeline.mintitle')}}</div>
                        <div class="text2">{{$t('about.timeline.maxtitle')}}</div>
                    </div>
                    <div class="center"><span class="year">2018</span><span class="month">.04</span></div>
                    <div class="bottom">{{$t('about.timeline.linetext[10].text11')}}</div>
                </div>
                <div class="time time2" style="margin-top:100px;">
                    <div class="center"><span class="month">2017.12</span></div>
                    <div class="bottom">{{$t('about.timeline.linetext[9].text10')}}</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2017.8</span></div>
                    <div class="bottom">{{$t('about.timeline.linetext[8].text9')}}</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2017.4</span></div>
                    <div class="bottom">{{$t('about.timeline.linetext[7].text8')}}</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2016.6</span></div>
                    <div class="bottom">{{$t('about.timeline.linetext[6].text7')}}</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2015.9</span></div>
                    <div class="bottom">{{$t('about.timeline.linetext[5].text6')}}</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2014.3</span></div>
                    <div class="bottom">{{$t('about.timeline.linetext[4].text5')}}</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2013.8</span></div>
                    <div class="bottom">{{$t('about.timeline.linetext[3].text4')}}</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2012.7</span></div>
                    <div class="bottom">{{$t('about.timeline.linetext[2].text3')}}</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2011.5</span></div>
                    <div class="bottom">{{$t('about.timeline.linetext[1].text2')}}</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2009.8</span></div>
                    <div class="bottom">{{$t('about.timeline.linetext[0].text1')}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        layout (context) {
            return context.userAgent;
        },
        data(){
            return {
                style:{
                    height:0,
                }
            }
        },
        computed:{
            ...mapGetters([
                'getAgent'
            ])
        },
        mounted(){
            if(this.getAgent == 'default'){
                window.location.href = '/'
            }
            this.style.height = document.documentElement.clientHeight + 'px';
        }
    }
</script>

<style lang="scss">
.m-about{
    .m-banner{
        width:100%;
        height:350px;
        background:url(~assets/images/about/gywm_bj_1.png) no-repeat;
        background-size:cover;
        display:flex;
        align-items: center;
        justify-content:center;
        h3{
            font-size:34px;
            color:#fff;
        }
    }
    .m-about-intro{
        width:100%;
        padding:50px 20px;
        background:#1c1c23;
        color:#fff;
        h3{
            font-size:24px;
            margin-bottom:15px;
        }
        .info{
            font-size:14px;
            margin-bottom:15px;
        }
    }
    .m-about-group{
        background:url(~assets/images/about/gywm_bj_2.png) no-repeat;
        background-size:cover;
        padding:30px 15px;
        color:#fff;
        h3{
            font-size:24px;
            text-align: right;
            margin-bottom: 10px;
        }
        .intro{
            font-size:14px;
            margin-bottom: 20px;
        }
        .grop1{
            width:60%;
        }
        .grop2{
            width:50%;
            margin-left:50%;
            margin-top:-12%;
        }
        .grop3{
            width:35%;
            margin-top:-37%;
            margin-left:11%;
        }
    }
    .m-about-timeline{
        width:100%;
        height:374px;
        background:url(~assets/images/about/about4.png) no-repeat center #1c1c23;
        background-size:80%;
        color:#fff;
        position: relative;
        &::before{
            position: absolute;
            top:0;
            left:5%;
            display:block;
            content:'';
            width:2px;
            height:100%;
            background:#FFE95C;
            opacity: 0.2;
        }
        .time-list{
            width:100%;
            height:100%;
            overflow-y:auto;
            padding:50px;
        }
        .time{
            width:100%;
            position: relative;
        }
        .time1{
            height:100%;
            &::before{
                position: absolute;
                top:46%;
                left:-15%;
                display: block;
                content: "";
                width:30px;
                height:30px;
                background:url(~assets/images/about/about_icon.png) no-repeat center;
                background-size:100%;
            }
        }
        .time2{
            margin-top:50px;
            .center{
                margin:0;
            }
            .bottom{
                padding:0;
                font-size:14px;
            }
            &::before{
                position: absolute;
                top:6px;
                left:-14%;
                display: block;
                content: "";
                width:20px;
                height:20px;
                background:url(~assets/images/about/about_icon.png) no-repeat center;
                background-size:100%;
            }
        }
        .top{
            .text1{
                font-size:16px;
                text-align: right;
                padding-right: 90px;
            }
            .text2{
                font-size:24px;
                text-align: right;
                padding-right:40px;
            }
        }
        .center{
            margin: 50px 0;
            .year{
                font-size:40px;
            }
            .month{
                font-size:20px;
            }
        }
        .bottom{
            padding-left:25%;
            font-size:18px;
        }
    }
}
</style>
