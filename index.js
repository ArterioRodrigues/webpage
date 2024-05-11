/* Base colors */
:root {
    --deep-blue: #030637;
    --purple: #3C0753;
    --dark-pink: #720455;
    --light-pink: #910A67;
}

body {
    font-family: Arial, sans-serif;
    background-color: var(--deep-blue);
    color: white;
    margin: 0;
    padding: 0;
}

.webpage {
    margin: 20px;
}

.title h1 {
    color: var(--light-pink);
}

.nav {
    list-style-type: none;
    padding: 0;
}

.nav li {
    display: inline;
    margin-right: 10px;
    background-color: var(--purple);
    padding: 5px 10px;
    border-radius: 5px;
}

.post, .projects, .books {
    background-color: var(--dark-pink);
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
}

.post h2, .projects h2, .books h2 {
    color: var(--light-pink);
}

.project {
    background-color: var(--purple);
    padding: 10px;
    margin-top: 5px;
}

ul {
    margin: 0;
    padding: 0;
}

li {
    list-style-type: none;
    margin-bottom: 10px;
}

p {
    background-color: var(--purple);
    padding: 10px;
    border-radius: 5px;
}

.img {
    width: 100px; /* Set according to the design */
    height: auto;
    border-radius: 5px;
}

/* Additional style for links or interactive elements */
a {
    color: var(--light-pink);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
