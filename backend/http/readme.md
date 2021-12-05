# Notebook

## HTTP
 - Hypertext Transfer Protocol is a protocol used to transfer texts documents;
 - Use client-server model most likely client is the browser;
 - It can be used in web where can be used to transfer images, html, css and javascript files from server to client;
 - Stateless, this means that http requests don't save data in cache;
  
## HTTPS
 - HTTPS is a more secure version of HTTP;
 - It is a combination of HTTP with SSL or Secure Sockets Layer;
 - The securiy is made by private and public keys;
 - Client has the public key and encrypt the message with it;
 - Server has the private key to unencrypt the message;
 - Sites now have to buy the digital certificate to garant https security;
 - Companies that sell these digital certificates are trusted in browers, so as well your site that have this certificate
 
## URL structure
     protocol://www.domain:<port number>/resource/?parameters
     https://www.site-domain:80/resource/?parameters
     
## Status code
 - Generally we can say when status code are:
    - 2xx => Succeful response;
    - 3xx => Redirection messages;
    - 4xx => Client error response;
    - 5xx => Server error response;
    
## HTTP Methods
 - GET is used to recive some information;
 - GET has parameters represented by ```?```, if has more paramenter can use ```&``` and are used in URL;
 - POST is used to send information;
 - POST has parameters where you can pass any data you want, like a form data and are used in body request;
 - PUT is used usually when we want to change everthing;
 - DELETE is used to delete;
 
## API REST
 - It's a model where follows http principles;
 - Resoureces (URI);
 - Representation (XML, JSON);
 - Operations (GET, POST, PUT, DELETE);
 
 ## HTTP 2
  - Newer version of HTTP;
  - Header body is ziped using g-zip to decrease request size;
  - Request and response are recived/send in binnary;
  - H-Pack is used to zip the binnary request;
  - Security layer is default in HTTP 2;
  - Has Header Stateful, you don't need to send all headers in each request;
  - Has server-push. HTTP 2 send data that browser doesn't need to request like styles and scripts;
  - Multiplexing- request and response are parallel
 
