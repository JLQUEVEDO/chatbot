# Take-home Challenge

### Overview

- Prototype a simple **React**-based messenger (chat) app that fetches and displays a user's conversation history with a given chatbot.
- The messenger should allow the user to type and "send" a message.
	> Note: No real messaging or chat-response functionality is required here. At minimum you just need an endpoint that will allow the user to post a message from the app, and then add any such "sent" messages to the conversation view.
- Build a **NodeJS**-based REST API service to handle these requests.
	> Note: This does not need to be a hosted service. Running locally on your machine would be fine.

### User story (minimum requirements)

- I want to view a simple interface showing my conversation / chat with a (hypothetical) chatbot. 
- I should be able to scroll back to view previous messages between myself and the bot, with timestamps and/or other helpful indicators, as needed.
- I should be able to enter a message and send it to the chatbot, then see my message as part of the conversation once it's sent.

### Evaluation

- We're looking for code that is clean, readable, and maintainable.

### Notes

- Please use **React** for your UI library, and we recommend using **Express** for your API. But otherwise choose any packages/libraries that help you produce the highest quality work in the time available.
  
- You can't do it all. We respect your time, and understand/expect that you will have to make choices and tradeoffs for what is in and out of scope to make this deliverable.
- Start simple, and maybe even _keep_ it simple! Think along the lines of a relatively straightforward web-based SMS/MMS conversation view, rather than something like Slack.
- Don't worry about authentication. Assume a non-authenticated experience to keep things simple.
- A database is not necessary for this project. Feel free to use static data structures in your API code.

### Example conversation structure

- Please refer to the included JSON file
