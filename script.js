const buttons=document.querySelectorAll('.btn');
const boxes=document.querySelectorAll('.box');
const searchbox=document.querySelector('#Search');


// search product by textbox
searchbox.addEventListener('keyup',(e)=>{ //keyup for keyboard  e is a attribute for select a particular element
    searchText=e.target.value.toLowerCase().trim(); // trim to avoid front and back spaces
   
    boxes.forEach((box)=>{
        const data=box.dataset.item; //box item name
        if(data.includes(searchText)){ //if search text match the item
            box.style.display='block';
        }else{                         //else do not display it
            box.style.display='none';
        }
    });
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    buttons[0].classList.add('btn-clicked');
});

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        setactivebtn(e);
        //box filter
        const btnfilter=e.target.dataset.filter;
        boxes.forEach((box=>{
            if(btnfilter=='all'){
                box.style.display="block";
            }else{
                const boxfilter=box.dataset.item;
                if(btnfilter==boxfilter){
                    box.style.display="block";
                }else{
                    box.style.display="none";
                }
            }
        }));

    });
});


function setactivebtn(e){
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');
}