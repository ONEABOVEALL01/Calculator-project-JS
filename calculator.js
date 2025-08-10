
   

let string = "";
let button = document.querySelectorAll("button");
Array.from(button).forEach((button) => {
    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML == '='){
           
            try {
                string = string.replace(/x/g, '*');
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error...";
                string = "";
            }
        }
        else if(e.target.innerHTML == 'Clr'){
            string = "";
         document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.slice(0,-1);
                document.querySelector('input').value = string;
            
        }
        else{
        console.log(e.target)

        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }


    });
}
);
















