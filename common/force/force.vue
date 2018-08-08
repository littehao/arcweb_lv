<template>
    <div class="force">
      <svg ref="svg" :height="height" :width="width"></svg>
    </div>
</template>

<script>
  // import * as d3 from 'd3';
  //let d3 = require("d3");
  import * as d3 from 'd3'
    export default {
        name: "force",
      props:{
          width:{
            type:[Number],
            default:500
          },
         height:{
           type:[Number],
           default:200
         },
         imgwidth:{
           type:[Number],
           default:100
         },
        radius:{
          type:[Number],
          default:40
        },
        linecolor:{
          type:[String],
          default:'#CCCCCC'
        },
        nodes:{
          type:[Array],
          default:()=>[]
        },
        edges:{
          type:[Array],
          default:()=>[]
        },
        imageKeys:{
          type:[String],
          default:'img'
        },
        marge:{
          type:[Object],
          default:()=>({top:10,bottom:10,left:10,right:10})
        }
      },
      data(){
          return {

          }
      },
      methods:{

        init(){
          let marge = this.marge,
            radius=this.radius,
            img_w=this.imgwidth,
            img_h=this.imgwidth,
            linecolor=this.linecolor,
            imageKeys=this.imageKeys,
            nodes=this.nodes,
            edges=this.edges;
            //  let nodes=[
            //     {name:"湖南邵阳",'img':require('../../assets/images/avatar/tx_3.png')},
            //     {name:"山东莱州",'img':require('../../assets/images/avatar/tx_3.png')},
            //     {name:"广东阳江",'img':require('../../assets/images/avatar/tx_3.png')},
            //     {name:"山东枣庄",'img':require('../../assets/images/avatar/tx_3.png')},
            //     {name:"泽",'img':require('../../assets/images/avatar/tx_3.png')},
            //     {name:"恒",'img':require('../../assets/images/avatar/tx_3.png')},
            //     {name:"鑫",'img':require('../../assets/images/avatar/tx_3.png')},
            //     {name:"明山",'img':require('../../assets/images/avatar/tx_3.png')},
            //     {name:"班长",'img':require('../../assets/images/avatar/tx_3.png')}
            //   ],
            //    edges=[
            //      {source:0,target:4,relation:"籍贯",value:1.3},
            //      {source:4,target:5,relation:"舍友",value:1},
            //      {source:4,target:6,relation:"舍友",value:1},
            //      {source:4,target:7,relation:"舍友",value:1},
            //      {source:1,target:6,relation:"籍贯",value:2},
            //      {source:2,target:5,relation:"籍贯",value:0.9},
            //      {source:3,target:7,relation:"籍贯",value:1},
            //      {source:5,target:6,relation:"同学",value:1.6},
            //      {source:6,target:7,relation:"朋友",value:0.7},
            //      {source:6,target:8,relation:"职责",value:2}
            //    ]

          let svg = d3.select("svg")
          let width = svg.attr("width")
          let height = svg.attr("height")
          let g = svg.append("g").attr("transform","translate("+marge.top+","+marge.left+")");
          console.log(width,height)
          //准备数据
          //新建一个力导向图
          var forceSimulation = d3.forceSimulation()
            .force("link",d3.forceLink())
            .force('collide', d3.forceCollide())
            .force("charge",d3.forceManyBody().strength(-400))
            .force("center",d3.forceCenter());;

          //初始化力导向图，也就是传入数据
          //生成节点数据
          forceSimulation.nodes(nodes)
            .on("tick",ticked);//这个函数很重要，后面给出具体实现和说明
          //生成边数据
          forceSimulation.force("link")
            .links(edges)
            .distance(function(d){//每一边的长度
              return d.value*150;
            })
          //设置图形的中心位置
          forceSimulation.force("center")
            .x(width/2)
            .y(height/2);
          //有了节点和边的数据后，我们开始绘制
          //绘制边
          var links = g.append("g")
            .selectAll("line")
            .data(edges)
            .enter()
            .append("line")
            .attr("stroke",function(d,i){
              return linecolor
            })
            .attr("stroke-width",1);

          //绘制节点
          var gs = g.selectAll("image")
            .data(nodes)
            .enter()
            .append("circle")
            .attr("class", "circleImg")
            .attr("r", radius)
            .attr("fill", function(d, i){
              //创建圆形图片
              var defs = svg.append("defs").attr("id", "imgdefs")

              var catpattern = defs.append("pattern")
                .attr("id", "catpattern" + i)
                .attr("height", 1)
                .attr("width", 1)
              catpattern.append("image")
                .attr("x", - (img_w / 2 - radius))
                .attr("y", - (img_h / 2 - radius))
                .attr("width", img_w)
                .attr("height", img_h)
                .attr("xlink:href", d[imageKeys])
              return "url(#catpattern" + i + ")";

            }).call(d3.drag()
              .on("start",started)
              .on("drag",dragged)
              .on("end",ended)
            );
          function ticked(){
            links.attr("x1",function(d){return d.source.x;})
              .attr("y1",function(d){return d.source.y;})
              .attr("x2",function(d){return d.target.x;})
              .attr("y2",function(d){return d.target.y;});
            gs.attr("transform",function(d) { return "translate(" + d.x + "," + d.y + ")"; });
          }
          function started(d){
            if(!d3.event.active){
              forceSimulation.alphaTarget(.8).restart();
            }
            d.fx = d.x;
            d.fy = d.y;
          }
          function dragged(d){
            d.fx = d3.event.x;
            d.fy = d3.event.y;
          }
          function ended(d){
            if(!d3.event.active){
              forceSimulation.alphaTarget(0);
            }
            d.fx = null;
            d.fy = null;
          }

        }
      },
      mounted(){
         //if (this.edges.leading>0&&this.nodes.length>0){
           //this.init()
         //}
      },
      created(){

      },
      watch:{
          'edges':function () {
            this.init()
            console.log('--------',this.edges,this.nodes)
          }
      },
      beforeDestroy(){

      }
    }

</script>

<style  lang="scss">
.force{
  width: 100%;
  margin: 0 auto;
  nodetext {
    font-size: 12px ;
    font-family: SimSun;
    fill:#000000;
  }

  .linetext {
    font-size: 12px ;
    font-family: SimSun;
    fill:#1f77b4;
    fill-opacity:0.0;
  }

  .circleImg {
    //stroke: #ff7f0e;
    stroke-width: 1.5px;
  }
}
</style>
