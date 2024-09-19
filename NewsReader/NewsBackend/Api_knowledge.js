//sample url at news org 
url :https://newsapi.org/v2/everything?q=tesla&from=2024-08-14&sortBy=publishedAt&apiKey=a0507de64f0c463d9dc01d4c13245062
//BREAKDOWN OF API 
//https://newsapi.org/v2/everything : TILL THIS represent endpoint 
//? it repesent that now query is added , ans each query is key_value pair 
// & =rep seprator of the query
//?q=tesla : query parameter
var response=
{
    "status": "ok",
    "totalResults": 8894,
    "articles": [
      {
        "source": {
          "id": null,
          "name": "CleanTechnica"
        },
        "author": "Zachary Shahan",
        "title": "EU Tariffs On China-Made Tesla EVs To Be Lowered Further",
        "description": "I thought a month ago that we had received the final figures for EU-imposed tariffs on electric vehicles made in China. Yes, those figures still needed to be approved by the European Union member states, but after a lengthy process and the tariffs being adjus…",
        "url": "https://cleantechnica.com/2024/09/12/eu-tariffs-on-china-made-tesla-evs-to-be-lowered-further/",
        "urlToImage": "https://cleantechnica.com/wp-content/uploads/2023/12/2022.04-Tesla-Model-Y-Barcelona-Spain-EU-Europe-urban-KYLE-CleanTechnica-logo.jpg",
        "publishedAt": "2024-09-13T03:27:16Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nI thought a month ago that we had received the final figures for EU-imposed tariffs on electric vehicles made… [+1906 chars]"
      }
    ]
    }


https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=a0507de64f0c463d9dc01d4c13245062
var re=
{
    "status": "ok",
    "sources": [
      {
        "id": "argaam",
        "name": "Argaam",
        "description": "ارقام موقع متخصص في متابعة سوق الأسهم السعودي تداول - تاسي - مع تغطيه معمقة لشركات واسعار ومنتجات البتروكيماويات , تقارير مالية الاكتتابات الجديده ",
        "url": "https://www.argaam.com",
        "category": "business",
        "language": "ar",
        "country": "sa"
      }
    ]
    
}
             https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a0507de64f0c463d9dc01d4c13245062
             // this api fatch of contary name in which genery no news by api 
             https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a0507de64f0c463d9dc01d4c13245062
const url = `https://newsapi.org/v2/top-headlines?category=general&apiKey=a0507de64f0c463d9dc01d4c13245062`
const res={
    "status": "ok",
    "totalResults": 0,
    "articles": [ ]
  }