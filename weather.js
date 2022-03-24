async function display(){
    const cityname=document.getElementById("city").value;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=dfef6b97ee0015cf45d417ca0a234a4e";
    const response = await fetch(url);
    var data = await response.json();

    let { main:{temp,temp_min,temp_max}} = data;
    console.log("Temperature is "+temp+"Minimum temperature is"+temp_min+"Maximum temperature is"+temp_max);
    document.getElementById("id").innerHTML=temp;

}