// console.log('button clicked file added');

//document.getElementById('id').addEventListener('click',function(){});
// search: form submit reloading the page

// step 1: set event handler

// document.getElementById('button-login').addEventListener('click',function(event){
//     // step 2: prevent default behavior(prevent reloading browser)
//     event.preventDefault();  // <----vejal to beginners
//     console.log('log in button clicked');

//     // step 3: get the phone number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber,pinNumber);

//     // step 4: validate phone and Pin
//     // this is temporary. You should not do like this
//     if(phoneNumber==='5' && pinNumber==='1234'){
//         console.log('you are logged in');
//         // step 5: allow the user to use the website
//     }
//     else{
//         alert('Wrong number or pin');
//     }
// })

document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();

    // get phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    //  console.log(phoneNumber,pinNumber);

    // bad way to validate
    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    else {
        alert('Wrong number or pin');
    }
});
