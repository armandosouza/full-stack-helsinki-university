sequenceDiagram
	participant client
	participant server

	client->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
	activate server
	server->>client: Status 302
	deactivate server

	Note right of client: A new post is rendered

	client->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
	activate server
	server->>client: HTML page
	deactivate server

	client->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
	activate server
	server->>client: the css file
	deactivate server

	client->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
	activate server
	server->>client: the javascript file
	deactivate server

	Note right of client: The browser runs the javascript file and searches for json file

	client->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
	activate server
	server->>client: json file
	deactivate server

	Note right of client: The browser runs callback function, that render notes on the page