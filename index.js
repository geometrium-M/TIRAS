function toggleMobileMenu() {

    let btn = document.querySelector('.icon-menu').classList.toggle('activated');
    let menu = document.querySelector('.nav__body').classList.toggle('activated');
    let container = document.querySelector('.media').classList.toggle('activated');

    let nav = document.querySelector('._white').classList.toggle('activated');

    let main = document.querySelector('.main').classList.toggle('activated');
    let footer = document.querySelector('.footer').classList.toggle('activated');

}



    window.onload = function () {
        document.addEventListener("click", OpenInput);

        function OpenInput(e) {
            const targetElement = e.target;
            let btn = document.querySelector('._magnified');
            let input = document.querySelector('.search__form');

            if (targetElement.closest('._magnified')) {
                input.classList.toggle('activated');
            } else if (!targetElement.closest('.search__form')) {
                input.classList.remove('activated')
            } 
            
            
        }
    }


    let signIn = document.querySelector('._signin').addEventListener("click", openSignIn);
    let form = document.querySelector('.form-popup');

    function openSignIn() {
        form.classList.add('open');
    }

    function closeForm() {
        form.classList.remove('open');

    }

    function closeSocial() {
        let options = document.querySelector('.options');
        options.classList.toggle('activated');
        

    }

