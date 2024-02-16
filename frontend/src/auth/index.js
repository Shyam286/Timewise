
export const isLoggedIn = ()=>{
    let data = localStorage.getItem("data");
    if(data==null){
        return false;
    }
    else{
        return true;
    }
};


//doLogin => data=> set to localstorage
export const doLogin = (data,next)=>{
    localStorage.setItem( 'data', JSON.stringify( data ) );
    next()
}



//doLogout => remove from localstorage
export const doLogout = (next)=>{
    localStorage.removeItem("data")
    next()
}

//getCurrentUserDetail => data=> set to localstorage
export const getCurrentUserDetail = ()=>{
    if(isLoggedIn()){
      return JSON.parse(localStorage.getItem('data')); 
    }else{
        return false;
    }
}