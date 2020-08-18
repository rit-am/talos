const dateFns = require('date-fns')
const format = 'yyyy-MM-dd'
const newsapikey = 'sadasd';
const nodeFetch = require('node-fetch')
const BOT_TOKEN = '1260rBF19Zg'
const { Telegraf } = require('telegraf')
const bot = new Telegraf(BOT_TOKEN)
const bodyParser = require('body-parser')
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('b9b7316e735');

// Start Coding
bot.start((ctx) => ctx.reply('Hello, Program!'))

bot.command('about', (ctx) => {ctx.reply("Service Bot for Saints Inc created by  @ritam_mukherjee \n " +
                                "\n\n For added value ads Connect with Dev!"   )})

bot.command('help', (ctx) => {ctx.reply(`Supported Commands - Prefix with / \n \nabout \nckol \ncatlanta \ncthane \nnewsin \nnewsus`)})


bot.command('newsus', (ctx) => { 
    // To query /v2/top-headlines
    // All options passed to topHeadlines are optional, but you need to include at least one of them
    newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us'
    }).then(response => {
    //console.log(response);
    //ctx.reply("Description : " + response.articles[0].description)

    for (i = 0; i <= response.totalResults; i++) {
        /*
        ctx.reply("Description : " + response.articles[i].description + "\n" +
                    "Title : " + response.articles[i].title + "\n");
        */
        ctx.reply(response.articles[i].title + "\n");
        }

    });
})  



bot.command('newsin', (ctx) => { 
        // To query /v2/top-headlines
        // All options passed to topHeadlines are optional, but you need to include at least one of them
        newsapi.v2.topHeadlines({
        language: 'en',
        country: 'in'
        }).then(response => {
        //console.log(response);
        //ctx.reply("Description : " + response.articles[0].description)

        for (i = 0; i <= response.totalResults; i++) {
            /*
            ctx.reply("Description : " + response.articles[i].description + "\n" +
                        "Title : " + response.articles[i].title + "\n");
            */
            ctx.reply(response.articles[i].title + "\n");
            }

        });
})  



bot.command('ckol', (ctx) => { 
    require('http').get('http://api.openweathermap.org/data/2.5/weather?lat=22.572645&lon=88.363892&appid=3f6', (res) => {
        res.setEncoding('utf8');
        res.on('data', function (body) {
            console.log(body);
           var jsonParsed = JSON.parse(body);
           ctx.reply("Weather : " + jsonParsed.name + "," + jsonParsed.sys.country + 
                        "\nWeather : " + jsonParsed.weather[0].main +
                        "\nTemperature : " + (jsonParsed.main.temp-273.15) +
                        "\nFeels Like : " + (jsonParsed.main.temp-273.15) + 
                        "\nMax : " + (jsonParsed.main.temp_max-273.15) + "   ::    Min : " + (jsonParsed.main.temp_min-273.15) +
                        "\nPreassure : " + jsonParsed.main.preassure +
                        "\nHumidity : " + jsonParsed.main.humidity +
                        "\nWind Speed : " + jsonParsed.wind.speed  + "   ::    Direction : " + jsonParsed.wind.deg +
                        "\nClouds : " + jsonParsed.clouds.all);
        });                
    });
})

bot.command('catlanta', (ctx) => { 
    require('http').get('http://api.openweathermap.org/data/2.5/weather?zip=30092,us&appid=3f6', (res) => {
        res.setEncoding('utf8');
        res.on('data', function (body) {
            console.log(body);
           var jsonParsed = JSON.parse(body);
           ctx.reply("Weather : " + jsonParsed.name + "," + jsonParsed.sys.country + 
                        "\nWeather : " + jsonParsed.weather[0].main +
                        "\nTemperature : " + (jsonParsed.main.temp-273.15) +
                        "\nFeels Like : " + (jsonParsed.main.temp-273.15) + 
                        "\nMax : " + (jsonParsed.main.temp_max-273.15) + "   ::    Min : " + (jsonParsed.main.temp_min-273.15) +
                        "\nPreassure : " + jsonParsed.main.preassure +
                        "\nHumidity : " + jsonParsed.main.humidity +
                        "\nWind Speed : " + jsonParsed.wind.speed  + "   ::    Direction : " + jsonParsed.wind.deg +
                        "\nClouds : " + jsonParsed.clouds.all);
        });                
    });
})
bot.command('cthane', (ctx) => { 
    require('http').get('http://api.openweathermap.org/data/2.5/weather?lat=19.2266605&lon=72.9838366&appid=3f6', (res) => {
        res.setEncoding('utf8');
        res.on('data', function (body) {
            console.log(body);
           var jsonParsed = JSON.parse(body);
           ctx.reply("Weather : " + jsonParsed.name + "," + jsonParsed.sys.country + 
                        "\nWeather : " + jsonParsed.weather[0].main +
                        "\nTemperature : " + (jsonParsed.main.temp-273.15) +
                        "\nFeels Like : " + (jsonParsed.main.temp-273.15) + 
                        "\nMax : " + (jsonParsed.main.temp_max-273.15) + "   ::    Min : " + (jsonParsed.main.temp_min-273.15) +
                        "\nPreassure : " + jsonParsed.main.pressure +
                        "\nHumidity : " + jsonParsed.main.humidity +
                        "\nWind Speed : " + jsonParsed.wind.speed  + "   ::    Direction : " + jsonParsed.wind.deg +
                        "\nClouds : " + jsonParsed.clouds.all);
        });                
    });
})



bot.launch()
console.log('telegram bot start')
