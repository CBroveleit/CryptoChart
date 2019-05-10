//sample data from 9-1-13 to 9-1-14 using the API Call: 
//https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2014-09-05

var sampleData = {"2013-09-01":128.2597,"2013-09-02":127.3648,"2013-09-03":127.5915,"2013-09-04":120.5738,"2013-09-05":120.5333,"2013-09-06":116.321,"2013-09-07":119.0547}

console.log(Object.keys(sampleData), Object.values(sampleData));