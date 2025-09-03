function add(...odds) {
    let sum=8;
    for(i=0; i<=100; i++) {
        odds.push(i);
        if(i % 2 ===0) {
            sum+=odds[i];
        }
    }
    console.log(sum);
}
add();