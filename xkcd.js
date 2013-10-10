function xkcdfunction(o){
  var xkcd = document.getElementById('xkcd');
  if(xkcd){
    var data = o.results[0];
    console.log(data);
    if(data != undefined){
    	xkcd.innerHTML = data;	
    }
    else
    {
    	var out = document.createElement('img');
    	out.src = "http://imgs.xkcd.com/comics/exploits_of_a_mom.png"
    	xkcd.appendChild(out);
    }
  }
}
