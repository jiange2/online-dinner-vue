Date.prototype.format = function(format)
{
  let o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(),    //day
    "h+" : this.getHours(),   //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
    "S" : this.getMilliseconds() //millisecond
  }
  if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
    (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(let k in o)if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,
      RegExp.$1.length==1 ? o[k] :
        ("00"+ o[k]).substr((""+ o[k]).length));
  return format;
};

export default class util {
  static mergeObject(source,target,cover = false){
    console.log(target);
    for(let key in target){
      if(!source[key] || cover){
        source[key] = target[key];
      }
    }
  }

  static castToUrlParam(data){
    let params = new URLSearchParams();
    for (let key in data){
      params.append(key,data[key]);
    }
    return params;
  }
}

