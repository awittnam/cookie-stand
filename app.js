'use strict';

var firstAndPike = {
  min : 23,
  max : 65,
  avgSale : 6.3,
  saleResults: [],
  totalDay:0,
  hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  cookieSales: function() {
    return Math.round(this.custPerHr() * this.avgSale);
  },
  cookiesPerHour: function() {
    for(var i = 0; i < 16; i++) {
      if (i < 15){
        var cookieSales = this.cookieSales();
        this.totalDay += cookieSales;
        this.saleResults.push(cookieSales);
        var newLi = document.createElement('li');
        var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSales + ' cookies');
        newLi.appendChild(newContent);
        var current = document.getElementById('li1');
        document.body.insertBefore(newLi, current);
      } else {
        var newLiZ = document.createElement('li');
        var newContentZ = document.createTextNode('Total: ' + this.totalDay);
        newLiZ.appendChild(newContentZ);
        var currentZ = document.getElementById('li1');
        document.body.insertBefore(newLiZ, currentZ);
        break;
      }
    }
  },
};
console.log(firstAndPike);
firstAndPike.cookiesPerHour ();



var seaTac = {
  min: 3,
  max: 24,
  avgSale: 1.2,
  saleResults: [],
  totalDay:0,
  hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  cookieSales: function() {
    return Math.round(this.custPerHr() * this.avgSale);
  },
  cookiesPerHour: function() {
    for(var i = 0; i < 16; i++) {
      if (i < 15){
        var cookieSales = this.cookieSales();
        this.totalDay += cookieSales;
        this.saleResults.push(cookieSales);
        var newLi = document.createElement('li');
        var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSales + ' cookies');
        newLi.appendChild(newContent);
        var current = document.getElementById('li2');
        document.body.insertBefore(newLi, current);
      } else {
        var newLiZ = document.createElement('li');
        var newContentZ = document.createTextNode('Total: ' + this.totalDay);
        newLiZ.appendChild(newContentZ);
        var currentZ = document.getElementById('li2');
        document.body.insertBefore(newLiZ, currentZ);
        break;
      }
    }
  },
};
console.log(seaTac);
seaTac.cookiesPerHour ();

var seattleCenter = {
  min: 11,
  max: 38,
  avgSale: 3.7,
  saleResults: [],
  totalDay:0,
  hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  cookieSales: function() {
    return Math.round(this.custPerHr() * this.avgSale);
  },
  cookiesPerHour: function() {
    for(var i = 0; i < 16; i++) {
      if (i < 15){
        var cookieSales = this.cookieSales();
        this.totalDay += cookieSales;
        this.saleResults.push(cookieSales);
        var newLi = document.createElement('li');
        var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSales + ' cookies');
        newLi.appendChild(newContent);
        var current = document.getElementById('li3');
        document.body.insertBefore(newLi, current);
      } else {
        var newLiZ = document.createElement('li');
        var newContentZ = document.createTextNode('Total: ' + this.totalDay);
        newLiZ.appendChild(newContentZ);
        var currentZ = document.getElementById('li3');
        document.body.insertBefore(newLiZ, currentZ);
        break;
      }
    }
  },
};
console.log(seattleCenter);
seattleCenter.cookiesPerHour ();

var capitolHill = {
  min : 20,
  max : 38,
  avgSale : 2.3,
  saleResults: [],
  totalDay:0,
  hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  cookieSales: function() {
    return Math.round(this.custPerHr() * this.avgSale);
  },
  cookiesPerHour: function() {
    for(var i = 0; i < 16; i++) {
      if (i < 15){
        var cookieSales = this.cookieSales();
        this.totalDay += cookieSales;
        this.saleResults.push(cookieSales);
        var newLi = document.createElement('li');
        var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSales + ' cookies');
        newLi.appendChild(newContent);
        var current = document.getElementById('li4');
        document.body.insertBefore(newLi, current);
      } else {
        var newLiZ = document.createElement('li');
        var newContentZ = document.createTextNode('Total: ' + this.totalDay);
        newLiZ.appendChild(newContentZ);
        var currentZ = document.getElementById('li4');
        document.body.insertBefore(newLiZ, currentZ);
        break;
      }
    }
  },
};
console.log(capitolHill);
capitolHill.cookiesPerHour ();

var alki = {
  min: 2,
  max: 16,
  avgSale: 4.6,
  saleResults: [],
  totalDay:0,
  hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  custPerHr: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  cookieSales: function() {
    return Math.round(this.custPerHr() * this.min);
  },
  cookiesPerHour: function() {
    for(var i = 0; i < 16; i++) {
      if (i < 15){
        var cookieSales = this.cookieSales();
        this.totalDay += cookieSales;
        this.saleResults.push(cookieSales);
        var newLi = document.createElement('li');
        var newContent = document.createTextNode(this.hours[i] + ': ' + cookieSales + ' cookies');
        newLi.appendChild(newContent);
        var current = document.getElementById('li5');
        document.body.insertBefore(newLi, current);
      } else {
        var newLiZ = document.createElement('li');
        var newContentZ = document.createTextNode('Total: ' + this.totalDay);
        newLiZ.appendChild(newContentZ);
        var currentZ = document.getElementById('li5');
        document.body.insertBefore(newLiZ, currentZ);
        break;
      }
    }
  },
};
console.log(alki);
alki.cookiesPerHour ();
