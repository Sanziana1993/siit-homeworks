const apiUrl = ' http://api.openweathermap.org/data/2.5/weather?q=Brasov,ro&appid=e5f46e3a031471b189651260ccc5ef45';

(function(){
    fetch(apiUrl).then((res)=>res.json())
                .then(temp);
    function temp(data){
        const temperature = data.main.temp- 273.15 ;
        const span = document.querySelector('[data-temperature]');
        span.innerHTML = temperature.toFixed(1) + '&deg;C';

    }
})();

document.addEventListener('change',handleTempChange);

function handleTempChange(e){
    if(e.target.name === 'temp'){
        console.log(e.target.value);

        if(localStorage){
            localStorage.setItem('temperature',e.target.value);

        }else{
            document.cookie = 'temperature=',e.target.value;
        }
    }
}

(function(){
    let temperature;
    if(localStorage){
        temperature = localStorage.getItem('temperature');
    }else{
        document.cookie.split('=')[1];
    }
    if(temperature){
        document.querySelector('#'+ temperature).setAttribute('checked', true)
    }
})();
 
