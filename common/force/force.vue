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
          default:()=>({top:60,bottom:80,left:60,right:80})
        }
      },
      data(){
          return {

          }
      },
      methods:{
        random(){
          return Number((Math.random()*0).toFixed(1))
        },
        test(){
          let edges=[
            { source:0,target:1,value:this.random()},
            { source:0,target:2,value:this.random()},
            { source:1,target:2,value:this.random()},
            // { source:2,target:3,value:this.random()},
            { source:1,target:3,value:this.random()},
            { source:1,target:5,value:this.random()},
            { source:2,target:4,value:this.random()},
            { source:2,target:5,value:this.random()},
            { source:4,target:5,value:this.random()},
            { source:3,target:5,value:this.random()},
            { source:3,target:8,value:this.random()},
            { source:3,target:10,value:this.random()},
            // { source:3,target:11,value:this.random()},
            // { source:5,target:6,value:this.random()},
            // { source:5,target:8,value:this.random()},
            // { source:4,target:6,value:this.random()},
            // { source:6,target:7,value:this.random()},
            // { source:6,target:8,value:this.random()},
            // { source:6,target:9,value:this.random()},

            // { source:7,target:8,value:this.random()},
            // { source:7,target:9,value:this.random()},
            // { source:7,target:10,value:this.random()},
            // { source:8,target:11,value:this.random()},
            // { source:8,target:12,value:this.random()},
            // { source:8,target:13,value:this.random()},
            // { source:12,target:13,value:this.random()},
            // { source:12,target:7,value:this.random()},

          ];

          // for (let i=22;i>0;i--){
          //   var source = Math.round((i - 1) * Math.random());
          //   var target = Math.round((i - 1) * Math.random());
          //   if (source !== target) {
          //     edges.push({
          //       source: source,
          //       target: target,
          //       value:Math.round(2 * Math.random())
          //     });
          //   }
          // }
           return edges
          //console.log(edges)
        },
        init(){
          let marge = this.marge,
            radius=this.radius,
            img_w=this.imgwidth,
            img_h=this.imgwidth,
            linecolor=this.linecolor,
            imageKeys=this.imageKeys;
            //nodes=this.nodes
            //edges=this.edges;
             let nodes=[{"img":"https://cdn.testfordemo.com/style/avatar/294/1001297_20180727154314_origin.jpg","index":0},{"img":"https://cdn.testfordemo.com/style/default_avatar/ink7.jpeg","index":1},{"img":"https://cdn.testfordemo.com//style/avatar/3cd/100059_20180515210325_origin.jpg","index":2},{"img":"https://cdn.testfordemo.com/style/images/fangxing/sebao.png","index":3},{"img":"https://cdn.testfordemo.com/style/images/fangxing/baijiale.png","index":4},{"img":"https://cdn.testfordemo.com/style/images/fangxing/jinshayinsha.png","index":5},{"img":"https://cdn.testfordemo.com/style/images/fangxing/benchibaoma.png","index":6},{"img":"https://cdn.testfordemo.com/style/images/fangxing/longhu.png","index":7},{"img":"https://cdn.testfordemo.com/style/default_avatar/ink2.jpeg","index":8},{"img":"https://cdn.testfordemo.com/style/default_avatar/ink9.jpeg","index":9},{"img":"https://cdn.testfordemo.com/style/default_avatar/ink10.jpeg","index":10},{"img":"https://cdn.testfordemo.com/style/default_avatar/ink17.jpeg","index":11},{"img":"https://cdn.testfordemo.com/style/default_avatar/ink9.jpeg","index":12},{"img":"https://cdn.testfordemo.com/style/default_avatar/ink5.jpeg","index":13},{"img":"https://cdn.testfordemo.com/style/default_avatar/ink13.jpeg","index":14},{"img":"https://cdn.testfordemo.com/style/default_avatar/ink11.jpeg","index":15},{"img":"https://cdn.testfordemo.com/style/default_avatar/ink12.jpeg","index":16},{"img":"https://cdn.testfordemo.com/style/default_avatar/ink5.jpeg","index":17},{"img":"https://cdn.testfordemo.com/style/default_avatar/ink10.jpeg","index":18},{"img":"https://cdn.testfordemo.com/style/default_avatar/ink10.jpeg","index":19}]
            let edges=this.test()
              //[
              //    {source:0,target:1,relation:"籍贯",value:1.3},
              //    {source:1,target:2,relation:"舍友",value:1},
              //    {source:2,target:3,relation:"舍友",value:1},
              //    {source:1,target:4,relation:"舍友",value:1},
              //    {source:1,target:5,relation:"籍贯",value:2},
              //    {source:0,target:6,relation:"籍贯",value:0.9},
              //    {source:6,target:7,relation:"籍贯",value:1},
              //    {source:5,target:8,relation:"同学",value:1.6},
              //    {source:0,target:9,relation:"朋友",value:0.7},
              //    {source:0,target:10,relation:"职责",value:2},
              //   {source:4,target:11,relation:"籍贯",value:2},
              //   {source:0,target:12,relation:"籍贯",value:0.9},
              //   {source:0,target:13,relation:"籍贯",value:1},
              //   {source:0,target:14,relation:"同学",value:1.6},
              //   {source:0,target:15,relation:"籍贯",value:1},
              //   {source:0,target:16,relation:"同学",value:1.6},
              //
              //   {source:0,target:17,relation:"籍贯",value:1.3},
              //   {source:0,target:18,relation:"舍友",value:1},
              //   {source:0,target:19,relation:"舍友",value:1},
              //   {source:8,target:0,relation:"舍友",value:1},
              //  ]
              //

          let svg = d3.select("svg")
          let width = svg.attr("width")
          let height = svg.attr("height")

          let g = svg.append("g").attr("transform","translate("+marge.top+","+marge.left+")");
        //  console.log(width,height)
          //准备数据
          //新建一个力导向图
          var forceSimulation = d3.forceSimulation()
            .force("link",d3.forceLink())
            .force('collide',d3.forceCollide())
            .force("charge",d3.forceManyBody().strength(-500))
            .force("center",d3.forceCenter());

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
          // //设置图形的中心位置
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
              forceSimulation.alphaTarget(0.5).restart();
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
           //console.log(this.test())
         //}
      },
      created(){

      },
      watch:{
          'edges':function () {
            //this.init()
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
