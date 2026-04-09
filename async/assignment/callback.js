function userLogin(user, callback){
    setTimeout(() => {
        let role
        if(user === 'admin'){
            role = 'admin'
        }else if (user === 'super admin'){
            role = 'super-admin'
        }else{
            role = 'user'
        }
        // let role = user === 'admin' ? 'admin' : 'user';
      callback({
        username: user,
        role: role,
      });
    }, 2000)
}

userLogin('super admin', (data) => {
        if(data.role === 'admin'){
        if(data.role === 'admin'
            
        ){
            console.log(`admin" ${data.username} → return "Welcome Admin`)
        }else if (data.role === 'super-admin'){
            console.log(`App Owner ${data.username}`);
        }
        else {
            console.log(`User ${data.username} is a user - Welcome User`);
        }
});