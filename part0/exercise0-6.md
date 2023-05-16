sequenceDiagram
	participant client
	participant server

	client->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
	activate server
	server->>client: {"message": "note created"}
	deactivate server

	Note right of client: A new note is rendered, only 1 request is made.