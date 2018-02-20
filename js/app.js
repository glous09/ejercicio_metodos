/*1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:*/

function miForEach(arreglo, callback){
		// completa aqui
		for(i=0; i<arreglo.length; i++){
		}
		return arreglo;
	}
	miForEach([1,2,3], function(){
	  console.log(arreglo);
	})

//===============================================================================
//2) Crea tu propia función map que funcione igual a Array.map. Algo asi:

function miMap(arreglo, callback){
 newArr = [];
 for(i = 0; i < arreglo.length; i++){
   newArr.push(arreglo[i]);
 }
 return newArr;
	}

miMap([1,2,3], function(){
	  console.log(newArr);
	})

//==============================================================================

//3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:
function miFilter(arreglo, filter){

	}


function miFilter(arreglo, filter){
  for(i=0; i < arreglo.length; i++){
     var newArr=[];
     if(arreglo % 2 !== 0){
       newArr.push(arreglo[i]);
    }
     return newArr;
	}
}

	miFilter([1,2,3], function(){
	  console.log(newArr);
	})

//=========================================================================

//4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:


function miReduce(arreglo, reduce){

  for(i = 0; i < arreglo.length; i+= 0){

    return  arreglo[i]+[i];
    }
	}

	miReduce([1,2,3], function(){
	  console.log(arreglo);
	})
