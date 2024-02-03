let findTetrahydralSides = (input)=>{

    let totalNumSide =0

    for(let i=1 ; i<=input ;i++){
        for(let j=1 ; j<=i ;j++){
            totalNumSide +=j
        }
    }
return totalNumSide
}

findTetrahydralSides(2)
