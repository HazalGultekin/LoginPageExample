const form = document.getElementById('form');
const email = document.getElementById('email');

/* addEventListener : kullanıcı sayfada herhangi bir işlem yaptığında(click vb.) istediğimiz aksiyonları alabilmemizi sağlar. */
/* event.preventDefault() : link tıklandığında bu eylemin engellenmesi gerekiyor ise event.preventDefault(); metodu kullanılabilir.*/
form.addEventListener('submit', e => {
    e.preventDefault();
    const emailVal = email.value;

    // Check if  it is a valid email or not
    if(!validateEmail(emailVal)) {
        form.classList.add('error');
    }
    else{
        form.classList.remove('error');
        document.body.innerHTML = '<div style="display:flex; align-items:center; justify-content: center;"><h1>Thank you!</h1></div>';
    }
});

/* email yazımının nasıl olmasını belirttiğimiz kısım, bunun dışındaki yazımda error yazısı çıkar. */
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}