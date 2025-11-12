// Agora no DOM:
console.log('✅ renderer carregado')

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

// let con = true
let time = 500
    
let interval = setInterval(()=>{
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
        // console.log(nums.length);

        
    },time)


