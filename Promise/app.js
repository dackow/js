function loadImageAsync(url){
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.addEventListener("load", event => resolve(img));
        img.addEventListener("error", event => reject(new Error('Faile to load ${url}')));
        img.src = url;
    });
}

loadImageAsync("https://edmullen.net/test/rc.jpg")
    .then(img => document.getElementById("image").appendChild(img))
    .catch(reason => console.log(reason));
