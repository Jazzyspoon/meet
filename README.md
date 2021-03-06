Objective:
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

Key Features:
● Filter events by city.
● Show/hide event details.
● Specify number of events.
● Use the app when offline.
● Add an app shortcut to the home screen.
● View a chart showing the number of upcoming events by city

<img src="https://github.com/Jazzyspoon/meet/blob/master/meetapp.JPG"></img>

---

--FEATURE 1: FILTER EVENTS BY CITY -
As a user,
I should be able to enter my city's name in a search field
So that i can chose my location

SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

---FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS -
As a User
I should be able to click a button
So that I can see or hide the details of an event.

Scenario 1: An event element is collapsed by default
Given the user has opened the page.
When the user sees the events listed
Then the event should be collapsed and details should be hidden

Scenario 2: User can expand an event to see its details
Given the user has chosen an event from the list
When the user clicks on an event
Then the event will expand and the details will be revealed

Scenario 3: User can collapse an event to hide its details
Given the user has an event expanded
When the user clicks on the event again
Then the event will re-collapse

---FEATURE 3: SPECIFY NUMBER OF EVENTS-
As a user,
I should be able to enter a number (or choose from a list)
So that I can specify the number of events I want listed

Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the user has not specified a certain event
When nothing is chosen
Then the default number of events is 32

Scenario 2: User can change the number of events they want to see
Given the user has specified how many events are to be listed
When the user selects the number of events that they want to see
Then the number of events aligns with the users preference

---FEATURE 4: USE THE APP WHEN OFFLINE-
As a user
I should be able to cache memory
So that I can continue viewing content when offline

Scenario 1: Show cached data when there’s no internet connection
Given the user no longer has an internet connection
When the user chooses an event
Then the event is loaded from the cache

Scenario 2: Show error when user changes the settings (city, time range)
Given the user no longer has an internet connection
When the user changes the settings
Then an error message pops up

---FEATURE 5: DATA VISUALIZATION-
As a user,
I should be able to click a button
So that I can see a chart of upcoming events in my chosen city

Scenario 1: Show a chart with the number of upcoming events in each city
Given the user wants to view the number of upcoming events in each city
When the user clicks on the number of events button
Then the upcoming events are listed in a chart
