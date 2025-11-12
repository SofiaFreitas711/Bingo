// Agora no DOM:
// console.log('✅ renderer carregado')

window.addEventListener("DOMContentLoaded",()=>{
    let theme = document.querySelector("select").value
    let select = document.querySelector("select")
    select.addEventListener("change", ()=>{
        theme = document.querySelector("select").value
        console.log(theme);
        
    })

    console.log(theme)

    let nums = []
    let numsOut = []
    for(let i=1; i<100;i++){
        nums.push(i)
    }
    console.log(nums);


    let interval
    let time = 2000

    // function for bingo run
    function intervalFun(){
            let len = nums.length
            // console.log(len);
            
            let selected = Math.floor(Math.random() * len)
            // console.log(selected)
            let num = nums[selected]
            // console.log(num);
            numsOut.unshift(num)
            console.log(numsOut);
            
            nums = nums.filter((a)=>a != num)
            if(nums.length == 0){
                // console.log("entrei aqui");
                
                clearInterval(interval)
            }

    }

    // stop bingo
    function stop(){
        clearInterval(interval)
        console.log("parou");
        

    }

    // start bingo
    function start(){
        interval = setInterval(intervalFun,time)
        console.log("começou");
    }

    function restart(){
        nums = []
        numsOut = []
        for(let i=1; i<100;i++){
            nums.push(i)
        }
    }
    

    let startBtn = document.querySelector("#start")
    startBtn.addEventListener("click", start)
    let stopBtn = document.querySelector("#stop")
    stopBtn.addEventListener("click",stop)
    let restartBtn = document.querySelector("#restart")
    restartBtn.addEventListener("click",restart)
})

