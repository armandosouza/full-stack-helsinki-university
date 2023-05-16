sequenceDiagram
	participant client
	participant server

	client->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
	activate server
	server->>client: HTML page
	deactivate server

	client->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
	activate server
	server->>client: the css file
	deactivate server

	client->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
	activate server
	server->>client: the javascript file
	deactivate server

	Note right of client: The browser runs the javascript file and searches for json file

	client->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
	activate server
	server->>client: json file
	deactivate server

	Note right of client: The browser runs callback function, that render notes on the page