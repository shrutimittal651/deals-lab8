let request = new XMLHttpRequest();
request.open('GET','https://Shrutimittal651.github.io/deals-lab8/products.json');
request.responseType = 'json';
request.send();


request.onload = function(){
    load(request.response);
};

function load(response)
{
	    let deals = response.topDeals;
		let tag = document.getElementById('deals');
		for (let i = 0; i < deals.length; i++) {
        let article = document.createElement('article');
        let title = document.createElement('h1');
        let image = document.createElement('img');
        let description = document.createElement('p');
        image.setAttribute('src', 'https://Shrutimittal651.github.io/deals-lab8/images/' + deals[i].image);
        title.textContent = deals[i].name;
        description.textContent = 'At $' + deals[i].price + " With "+deals[i].features;
        article.appendChild(image);
        article.appendChild(title);
        article.appendChild(description);
        tag.appendChild(article);
    }
}