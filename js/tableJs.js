let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]

$(document).ready(function(){
	var data=getData('','');
	tableRender(data);
});

function changeProduct(){
	var vs = $('#product').val(); 
	 console.log(vs);
	//tableRender(getData(vs,''));
}
function changeRegion(){
	var vs = $('#Region  option:selected').val();  
	tableRender(getData('',vs));
}
function tableRender(list){
	$('#tbody').html('');
	sourceData = list;
	for(x in sourceData){
		var str = '<tr>';
		str += '<td>'+sourceData[x].product+'</td>';
		str += '<td>'+sourceData[x].region+'</td>';
		 for(var i =0;i<12;i++){
			 str += '<td>'+sourceData[x].sale[i]+'</td>';
			}
		str += '</tr>'
		$('#tbody').append(str);
	}
}

function getData(device,region){
	lists = [];
	if(device == ''&& region !=''){
		for(x in sourceData){
			if(sourceData[x].region == region){
				lists.push(sourceData[x]);
			}
		}
	}
	else if(device != ''&& region !=''){
		for(x in sourceData){
			if(sourceData[x].product == device){
				lists.push(sourceData[x]);
			}
		}
		var temp = [];
		for(v in lists){
			if(lists[v].region == region){
				temp.push(list[v]);
			}
		}
		lists = temp;
	}
	else if(device != ''&& region ==''){
		for(x in sourceData){
			if(sourceData[x].product == device){
				lists.push(sourceData[x]);
			}
		}
	}
	else if(device == ''&& region ==''){
		lists = sourceData;
	}
	return lists;
}