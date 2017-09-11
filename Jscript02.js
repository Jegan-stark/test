/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function check(){
    var user=document.log.t1.value;
    var pass=document.log.t2.value;
    var ruser=/^\w{10,15}$/;
    var rpass=/^\w{8}$/;
    if(!ruser.test(user))
        alert("Invalid Username");
    else if(!rpass.test(pass))
        alert("invalid Password");
    else
        alert("details are correct");
}


