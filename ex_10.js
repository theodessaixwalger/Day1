function addsandwiches(){
    let hamsandwiches = 0
    let tunasandwiches = 0
    let vegetariansandwiches = 0
    
    while(breadCount >= 2 && hamCount >= 1){
    hamsandwiches++
    breadCount -= 2
    hamCount -= 1
    }
    
    while(breadCount >= 2 && tunaCount >= 1 && tomatoCount >= 2){
    tunasandwiches++
    breadCount -= 2
    tunaCount -= 1
    tomatoCount -= 2
    }
    
    while(breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2){
    vegetariansandwiches++
    breadCount -= 2
    saladCount -= 1
    tomatoCount -= 2
    }
    
    displayThisText("Number of ham sandwich(es) : " + hamsandwiches)
    displayThisText("Number of tuna sandwich(es) : " + tunasandwiches)
    displayThisText("Number of vegetarian sandwich(es) : " + vegetariansandwiches)
    
    displayIngredients()
    }
    addsandwiches()