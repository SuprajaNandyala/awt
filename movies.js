async function movies(){
    const url="https://imdb-api.com/API/AdvancedSearch/k_44e3n05w/?title_type=tv_movie&genres=comedy&user_rating=8.1,10&release_date=2010-01-01,2010-05-01&languages=en";
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
var table ='<table id= "mytable">';
table+='<tr><th>Name</th><th>Rating</th></tr>';
    let { results } = data;
    results.forEach(element => {
        let{title,imDbRating}=element;
        table+='<tr>';
        table+='<td>'+title+'</td>';
        table+='<td>'+imDbRating+'</td>';
        table+='</tr>';
    })
    table+='</table>';
    document.getElementById("id").innerHTML=table;

}