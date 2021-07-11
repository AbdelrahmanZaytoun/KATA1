
    const urlDecode = (url) => {
        decodeObject = {};
        urlArr = url.split('&');
        urlArr.forEach((u,i) => {
          urlArr[i] = u.split('=');
          Object.defineProperty(decodeObject, urlArr[i][0], {value: urlArr[i][1], enumerable: true, writable: true});
          for (let p in decodeObject){
            let value = decodeObject[p];
            Object.defineProperty(decodeObject, p, {value: value.replace(/%20/g, ' '), enumerable: true});
          }
        });
      
        return decodeObject;
      
      }
      
      
      
      
      console.log(urlDecode("duck=rubber"));
      console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
      console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
      console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
      
      