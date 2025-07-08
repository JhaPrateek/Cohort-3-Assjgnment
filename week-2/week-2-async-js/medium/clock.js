// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


setInterval(clock,1000);

//  - HH:MM::SS (Eg. 13:45:23)
// function clock(){
//     const date=new Date();
//     console.clear();
//     const h=date.getHours();
//     const m=date.getMinutes();
//     const s=date.getSeconds();

//     const time=`${h}:${m}::${s}`
//     console.log(time);
    
// }


//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function clock(){
    const date=new Date();
    console.clear();
    let h=date.getHours();
    const m=date.getMinutes();
    const s=date.getSeconds();

    let am=true;
    if(h>12){
        h=h%12;
        am=false;
    }

    const time=`${h}:${m}::${s}${am?"AM":"PM"}`
    console.log(time);  
}