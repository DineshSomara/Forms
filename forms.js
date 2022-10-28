fetch("https://632583f24cd1a2834c3f5cc3.mockapi.io/api/forms/data")
    .then(res => res.json())
    .then((data) => {
        let fetchedData = data;
        let i = 0;
        fetchedData.map((ele) => {
            let Heading = document.querySelectorAll(".form-heading");
            do{
                Heading[i].innerHTML=ele.title;
                i=i+1;
            }while(1 != 1);
        });
        let j = 0;
        fetchedData.map((ele) => {
            let Description = document.querySelectorAll(".form-para");
            do{
                Description[j].innerHTML=ele.desc;
                j=j+1;
            }while(1 != 1);
        });
        let k = 0;
        fetchedData.map((ele) => {
            let Options = document.querySelectorAll(".form-options");
            do{
                Options[k].innerHTML=ele.title;
                k=k+1;
            }while(1 != 1);
        });
    });
document.addEventListener('DOMContentLoaded',() => {
    document
    .getElementById('Forms')
    .addEventListener('input', handleSelect);
});
function handleSelect(ev) {
    let select = ev.target;
    console.log(select.value);
    let displayThisCard = document.querySelectorAll('.form-card-identity');
    for (let i = 0;  i<=14;i++){
        if (displayThisCard[i].id == select.value) {
            displayThisCard[i].style.display = "block";
        } 
        else if (select.value=="Filter Forms by Title"){
            displayThisCard[i].style.display = "block";
        }
        else {
            displayThisCard[i].style.display = "none";
        }
    }
}