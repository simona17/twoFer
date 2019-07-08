function twoFer(firstname?: string){
    debugger;
    if(firstname )
        return 'One for '+firstname+', one for me';
    else 
      return 'One for you, one for me';
    
}
let firstname='Simo';
console.log(twoFer(firstname));
export default twoFer;

