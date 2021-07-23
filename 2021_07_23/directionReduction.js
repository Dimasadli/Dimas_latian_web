function dirReduc(arr){
  var lastDir;
  var newArr = []
  var popped;
  arr.forEach(function(curDir){
    if(curDir == 'NORTH'){
      if(lastDir == 'SOUTH'){
        popped = newArr.pop()
      } 
    } else if(curDir == 'SOUTH'){
      if(lastDir == 'NORTH'){
        popped = newArr.pop()
      }
    } else if(curDir == 'EAST'){
      if(lastDir == 'WEST'){
        popped = newArr.pop()
      }
    } else if(curDir == 'WEST'){
      if(lastDir == 'EAST'){
        popped = newArr.pop()
      }
    }
    
    if(!popped){
      newArr.push(curDir)
    }
    popped = undefined;
    lastDir = newArr[newArr.length-1]
  })
  return newArr
}