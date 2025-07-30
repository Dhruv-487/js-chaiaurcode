const User={
    _email:'abc@gmail.com',
    _pass:"abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }
}


const tea=Object.create(User)
console.log(tea.email)

// in actual jab hm _email ya _pass likhte hai means ki mai inko prinvate props ki tarah define kr rha hu,but jaisse hi mne get or set use kia to ab vo _ ka koi meaning ni rha ab vo dekhega ki apke pas koi props hai email y kch or to jo class ka object create hua usse uske pas ye .email hai yhi getter or setter special methods hai jo mai prop ke upr rkhra hu jisse memory se leke or deke are hai main -lana or chodkr ana 
 
//setter ke liye email ek prop hai