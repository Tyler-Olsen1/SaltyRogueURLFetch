var rp = require('request-promise');
var cheerio = require('cheerio');




rp('https://www.utahcounty.gov/LandRecords/Property.asp?av_serial=')
    .then(html)=> {
        let $ =cheerio.load(html);
        console.log(html;
            $('span.comhead').each(function (i,element){
                var a = $(this).prev();
                console.log
            })
    }