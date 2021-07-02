
let info = "My name is Taylor Goldman, and I am a sophomore computer science student at Rose-Hulman Institute of Technology. I am very passionate about computer science, specifically cybersecurity and software development, and I really enjoy creating new things from what I learn. At school I am involved on the women's tennis team, Society of Women Engineers, and Cybersecurity Club. I am hoping to gain some more experience in the field of computer science with an internship. Feel free to check out some of my recent projects on my portfolio page, or my resume that you can also find on this website."



// async function type(words, tagName, delay = 100) {
//     const letters = words;
//     let i = 0;
//     while(i < letters.length) {
//         await waitForMs(delay);
//         $(tagName).append(letters[i]);
//     }
//     return;
// }

// function waitForMs(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// $(document).ready(async function () {
//     await type(info, "#aboutMe");
// })

var app = document.getElementById("aboutMe");

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString(info);

