$(function(){
	$.ajax({
		type:"get",
		url:"pyd.json",
		async:true,
		success:function(aa,bb){
			$(".dht div .d1").text(aa[0].dht[0])
			$(".dht div .d2").text(aa[0].dht[1])
			$(".dht div .d3").text(aa[0].dht[2])
			$(".img1").prop({src:aa[0].lan.tup3})
			$(".wb1").text(aa[0].hanbaobaowb.wb1)
			$(".wb-div-2").text(aa[0].lan.wb2)
			$(".wb-div-3").text(aa[0].lan.wb3)
			$(".wb-div-d1-1").text(aa[0].lan.wb4)
			$(".wb-div-d1-2").text(aa[0].lan.wb5)
			$(".wb-div-d2-1").text(aa[0].lan.wb6)
			$(".wb-div-d2-2").text(aa[0].lan.wb7)
			$(".wb-div-d3-1").text(aa[0].lan.wb8)
			$(".wb-div-d3-2").text(aa[0].lan.wb9)
			$(".tu1-1").prop({src:aa[0].lan.tup6})
			$(".tu2-1").prop({src:aa[0].lan.tup5})
			$(".tu3-1").prop({src:aa[0].lan.tup4})
			$(".tu4-1").prop({src:aa[0].lan.tup1})
			$(".tu5-1").prop({src:aa[0].lan.tup2})
			$(".tu6-1").prop({src:aa[0].lan.tup8})
			$(".tu7-1").prop({src:aa[0].lan.tup7})
			$(".tu8-1").text(aa[0].lan.wb10)
			$(".tu9-1").text(aa[0].lan.wb11)
			$(".tu10-1").text(aa[0].lan.wb12)
			$(".xlb-1-1").text(aa[0].jst.w1)
			$(".xlb-1-3").text(aa[0].jst.w2)
			$(".xlb-1-4").text(aa[0].jst.w3)
			$(".xlb-2-1").text(aa[0].jst.w4)
			$(".xlb-2-2").text(aa[0].jst.w5)
			$(".xlb-1-5").text(aa[0].jst.w6)
		}
	})
	$("<div class='zhongjian'></div>").width("1200px").height("6300px").css({margin:"0 auto"}).appendTo(".zhongjiande")
	$("<div class='img1-div'></div>").width("1200px").height("632px").css({margin:"0 auto",paddingTop:"68px"}).appendTo(".zhongjian")
	$("<img class='img1'/>").width("1200px").height("632px").appendTo(".img1-div")
	$("<div class='wb'></div>").width("1000px").height("1000px").css({margin:"100px auto"}).appendTo(".zhongjian")
	$("<span class='wb1'></span>").width("60px").height("30px").appendTo(".wb")
	$("<div class='wb-div'></div>").width("1000px").height("1000px").css({margin:"0 auto",marginTop:"30px"}).appendTo(".wb")
	$("<span class='wb-div-2'></span>").width("900px").height("50px").css({fontSize:"50px"}).appendTo(".wb-div")
	$("</br><span class='wb-div-3'></span>").width("900px").height("10px").css({fontSize:"20px",lineHeight:"50px",color:"#AAB8C1"}).appendTo(".wb-div")
	$("<div class='wb-div-d1'><div>").width("320px").height("670px").css({float:"left",marginTop:"100px"}).appendTo(".wb-div")
	$("<div class='wb-div-d2'><div>").width("320px").height("670px").css({	float:"left",marginLeft:"20px",marginTop:"100px"}).appendTo(".wb-div")
	$("<div class='wb-div-d3'><div>").width("320px").height("670px").css({float:"left",marginLeft:"20px",marginTop:"100px"}).appendTo(".wb-div")
	$("<span class='wb-div-d1-1'></span>").css({fontSize:"1.0em"}).appendTo(".wb-div-d1")
	$("</br><span class='wb-div-d1-2'></span>").css({fontSize:"1.2em",lineHeight:"40px",color:"#83919A"}).appendTo(".wb-div-d1")
	$("<span class='wb-div-d2-1'></span>").css({fontSize:"1.0em"}).appendTo(".wb-div-d2")
	$("</br><span class='wb-div-d2-2'></span>").css({fontSize:"1.2em",lineHeight:"40px",color:"#83919A"}).appendTo(".wb-div-d2")
	$("<span class='wb-div-d3-1'></span>").css({fontSize:"1.0em"}).appendTo(".wb-div-d3")
	$("</br><span class='wb-div-d3-2'></span>").css({fontSize:"1.2em",lineHeight:"40px",color:"#83919A"}).appendTo(".wb-div-d3")
	$("<div class='tu1'></div>").width("1200px").height("632px").css({marginTop:"400px"}).appendTo(".zhongjian")
	$("<img class='tu1-1'/>").width("1200px").height("632px").appendTo(".tu1")
	$("<div class='tu2'></div>").width("585px").height("370px").css({float:"left",marginTop:"30px"}).appendTo(".zhongjian")
	$("<img class='tu2-1'/>").width("585px").height("370px").appendTo(".tu2")
	$("<div class='tu3'></div>").width("585px").height("370px").css({float:"left",marginTop:"30px",marginLeft:"30px"}).appendTo(".zhongjian")
	$("<img class='tu3-1'/>").width("585px").height("370px").appendTo(".tu3")
	$("<div class='tu4'></div>").width("1200px").height("632px").css({float:"left"}).appendTo(".zhongjian")
	$("<img class='tu4-1'/>").width("1200px").height("632px").css({marginTop:"30px"}).appendTo(".tu4")
	$("<div class='tu5'></div>").width("1200px").height("632px").css({float:"left",marginTop:"30px"}).appendTo(".zhongjian")
	$("<img class='tu5-1'/>").width("1200px").height("632px").css({marginTop:"30px"}).appendTo(".tu5")
	$("<div class='tu6'></div>").width("1200px").height("632px").css({float:"left",marginTop:"30px"}).appendTo(".zhongjian")
	$("<img class='tu6-1'/>").width("1200px").height("632px").css({marginTop:"30px"}).appendTo(".tu6")
	$("<div class='tu7'></div>").width("1200px").height("632px").css({float:"left",marginTop:"30px"}).appendTo(".zhongjian")
	$("<img class='tu7-1'/>").width("1200px").height("632px").css({marginTop:"30px"}).appendTo(".tu7")
	$("<div></div>").width("1200px").height("3000px").appendTo(".zhongjian")
	$("<div class='tu8'></div>").width("150px").height("50px").css({margin:"100px auto"}).appendTo(".zhongjian")
	$("<span class='tu8-1'></span>").width("100px").height("30px").css({fontSize:"0.8em",color:"#465863"}).appendTo(".tu8")
	$("<div class='tu9'></div>").width("200px").height("50px").css({margin:"0 auto"}).appendTo(".zhongjian")
	$("<span class='tu9-1'></span>").width("100px").height("30px").css({fontSize:"2.9em",color:"#465863"}).appendTo(".tu9")
	$("<div class='tu10'></div>").width("150px").height("50px").css({margin:"50px auto"}).appendTo(".zhongjian")
	$("<span class='tu10-1'></span>").width("100px").height("30px").css({fontSize:"1.0em",color:"#465863",borderBottom:"2px solid #f8d055"}).appendTo(".tu10")
	$("img").css({cursor:"pointer"})
})
