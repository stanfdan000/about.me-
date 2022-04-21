## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
index.html
1 <title>All about me</title>
2<section id="my-info">
3<h1>Hi, Im <span id="name">____</span></h1>
4<p><strong>I use he/him pronouns</strong></p>
5<p><strong>I live in Portland Or.</strong></p>
6<button id="button"> Change Name</button></section>
7<section id="animal-style">
8<p><strong>My Favorite animal is?</strong></p>
9 <div id="animal-div" class="hidden">
10 <img src="https://www.sadanduseless.com/wp-content/uploads/2020/10/funny-trash-pandas6.jpg">
11</div>
12<button id="animal button">Show Animal</button>
13</section>

app.js
1 const Button = document.getElementById('button');
2 const nameEL = document.getElementById('name');
3 const SectionElement = document.getElementById('my-info');
4 const animalDiv = document.getElementById('animal-div');
5 const animalButton = document.getElementById('animal button');
6 Button.addEventListener('click', () => {
7 if (nameEL.textContent === '____') {
8 nameEL.textContent = 'Daniel';
9 } else {
10 nameEL.textContent = '____';
11  }
    SectionElement.classlist.toggle('my-info');
});
12 animalButton.addEventListener('click', () => {
    animalDiv.classList.remove('hidden');
    console.log(animalButton);
});
console.log(animalButton);