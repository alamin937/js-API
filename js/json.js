 const product = {
     name:'laptop',
     price:40000,
     color:'black',
     owner:{
        name: 'anik',
        position: 'ceo'
     },
 };

 const stringify = JSON.stringify(product);
 console.log(stringify);

 const convert = JSON.parse(stringify);
 console.log(convert);