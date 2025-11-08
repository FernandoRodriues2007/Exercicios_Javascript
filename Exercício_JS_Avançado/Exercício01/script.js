var l = [1,2,2,5,5,5,4,9,10]
var item = []
var count=0
for (let i = 1; i <9; i++) {
    if(item.includes(l[i]) ) continue;
    count=0
    
    for(let j = 0 ; j<9 ; j++){
        
        if(l[i] == l[j]){
            count ++
        } 
    }    
     console.log(`O número ${l[i]} se repete ${count} vezes`);
     item.push(l[i])
}
