/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        // get emails that are valid
        const regex_valid_email = /^[a-z0-9_]+@(.+\.)*northeastern.edu$/
            // 1 or more alphanumeric before @ ^[a-z0-9_]+@
            // 0 or more occurences of  ( ... )*
                // 1 or more occurences of any char .+
                // has to be the actual dot character \.
            // end with northeastern.edu
        if (email.match(regex_valid_email)) {
            // to display in browser, create list item
            const listItem = document.createElement('li');
            const local = email.slice(0, email.indexOf('@')); // up until @
            const local_starrred = local.replace(/./g, '*'); // replace all with *
            const domain = email.slice(email.indexOf('@')); // @ ... northeastern.edu
            listItem.textContent = local_starrred + domain;
            list.appendChild(listItem);
        }


        // const beginningValid = email.match(/^[a-z|_0-9]/)
        // const domainValid = email.match(/$[northeastern.edu]/) 
        // // up to index, replace with *
        // console.log(domainValid);
    }
}

// function isValidEmail(email) {
//     const start_tag_valid = /^([a-zA-z0-9_]+\@)/ // a-z (upper or lowercase) or _ or 0-9, one or more occurences
//     const end_tag_valid = /$[northeastern.edu]/ // ends with valid domain name
//     return 
// }