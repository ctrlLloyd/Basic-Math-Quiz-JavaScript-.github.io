// get the toggle button
const toggleThemeBtn = document.querySelector('#theme-toggle-button');

// set a flag to track the current theme
let isDarkTheme = false;

// add an event-listener to the button to toggle the theme
toggleThemeBtn.addEventListener('click', ()=>{
    // toggle the flag
    isDarkTheme = !isDarkTheme;

    // update the body class to reflect the current theme
    document.body.classList.toggle('light-theme', !isDarkTheme);
    document.body.classList.toggle('dark-theme', isDarkTheme);

    // just an addition, the input background should reflect to ehe current theme
    // get the input
    const inputAnswer = document.querySelector('#user-answer');
    inputAnswer.classList.toggle('light-theme', !isDarkTheme);
    inputAnswer.classList.toggle('dark-theme', isDarkTheme);

    const themIcon = document.querySelector('#theme-icon');
    themIcon.classList.toggle('bxs-sun', isDarkTheme);

    const start = document.querySelector('#start');
    const modeTxt = document.querySelector('#modeTxt');
    if(modeTxt.innerText === "Dark Mode"){
        modeTxt.innerText = 'Light Mode';
        toggleThemeBtn.classList.remove('btn-outline-dark');
        toggleThemeBtn.classList.add('btn-outline-light');
        start.classList.toggle('btn-outline-light');
         start.classList.remove('btn-outline-dark');
        start.classList.add('btn-outline-light');

        userAnswer.classList.add('text-light');
        userAnswer.classList.remove('text-dark');
    } else{
        modeTxt.innerText = 'Dark Mode';
        toggleThemeBtn.classList.add('btn-outline-dark');
        toggleThemeBtn.classList.remove('btn-outline-light');
        start.classList.add('btn-outline-dark');
        start.classList.remove('btn-outline-light');

        userAnswer.classList.add('text-dark');
        userAnswer.classList.remove('text-light');
    }
});
