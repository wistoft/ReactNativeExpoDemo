
export function rejectPromise(func){
    
    if (func == null){
        
        return Promise.reject("DistantPromiseRejection")
        // .catch(error => {
        // 	console.log("ignored distant");
        // })
        ;

    } else {
        
        return Promise.resolve()
        .then(func)
        ;

    }
    
}