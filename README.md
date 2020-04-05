# NodeExpressHandlebars
Node Express Handlebars

This website keeps track of what burgers have been submitted and which of those have been eaten. The user can submit a burger by typing into an input field the type of burger they want to eat. The burger is then placed in a list on the left. Each burger has a button created with it to eat the burger. Once the user presses the devour button the burger is then place in the right hand list for eaten burgers. 

The most difficult part of this project was making all the components work together. When ever there is a bug it must be traced backword to the file that caused it. What also made it difficult was that all the components had to be in place at once, so it was hard to test one part at a time.  

Another problem was working with the ajax calls. I forgot that you can't use the arrow funcions if you want to use the 'this' object. Also the .then function after the ajax call, that has the 'location.reload()' funcion, never gets called and I never figured out why. So when the user clicks the devour button the page needs to be reloaded to see the change. 

Technologies:
    mysql, express, heroku, express-handlebars, html, css, javascript, jquery, node.js.