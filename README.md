# Meet App

## Secure Connection to Google Calendar with Serverless Functions

This project utilizes serverless functions to create a secure and robust bridge between your React frontend and the Google Calendar API. These functions handle critical tasks for user interaction and data access:

### User Access Management

Ensures only authorized users can interact with their calendars through the app.

### OAuth2 Token Handling

Securely obtains and refreshes OAuth2 tokens for temporary access to user calendars, without exposing sensitive credentials.

### API Interaction Security

Provides a secure layer for communication between your app and the Google Calendar API.

## Benefits of Serverless Architecture

This project leverages serverless functions for several key advantages:

### Effortless Scalability

Serverless infrastructure automatically scales based on user activity, ensuring smooth operation even during peak meeting scheduling times.

### Efficient Resource Utilization

Pay only for the actual execution time of serverless functions, eliminating the need for constantly running servers with idle resources.

### Cost-Effectiveness

The pay-per-use model of serverless architectures makes it a cost-efficient solution, ideal for web applications.

## In Essence

Serverless functions offer:

- Enhanced security for user access and data interaction with Google Calendar.
- Cost-effective and scalable infrastructure for your meeting app.
- Simplified development by handling user authentication, token management, and API security.

## Objective

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Context

Serverless and PWAs have grown in popularity over the last few years, and they’re both considered to be the future of web development. By combining these two concepts, your app will not only work as a normal web application, but it will also reap the benefits of both serverless architecture and PWAs:

- **Serverless**: No backend maintenance, easy to scale, always available, no cost for idle time.
- **PWAs**: Instant loading, offline support, push notifications, “add to home screen” prompt, responsive design, and cross-platform compatibility.

For this app, you’ll be using a TDD approach, where you write tests before writing the actual functionality for your app in code. Writing tests forces you to focus on the requirements of your application before jumping into the code. TDD relies on the repetition of a very short development cycle, allowing you to get immediate feedback and deliver high-quality code.

Last but not least, you’ll add some graphs to your app, which will make it more visually appealing and allow you to more easily draw conclusions from the data.

## The 5 Ws

1. **Who** — The users of your Meet app. They could be you, your friends, your professional network, or your potential employers.
2. **What** — A progressive web app with the ability to work offline and a serverless backend developed using a TDD technique.
3. **When** — Users of this app will be able to use it whenever they want to view upcoming events for a specific city. Your recruiter will be able to see your code immediately on GitHub.
4. **Where** — The server, in this case, is a serverless function hosted by a cloud provider (e.g., AWS). The application itself is also hosted online to make it shareable and installable. It can be used even when the user is offline. As it’s responsive, it displays well on any device.
5. **Why** — Serverless is the next generation of cloud infrastructure, PWA provides great user experience and performance, and the TDD technique ensures you have quality code and adequate test coverage. All of these skills, together with data visualization, will distinguish you from other web developers.

## Key Features

1. **Filter Events by City**
2. **Show/Hide Event Details**
3. **Specify Number of Events**
4. **Use the App When Offline**
5. **Add an App Shortcut to the Home Screen**
6. **Display Charts Visualizing Event Details**

## Technical Requirements

- The app must be a React application.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
- The app’s code must be hosted in a Git repository on GitHub.
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
- The app must display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
- The app must pass Lighthouse’s PWA checklist.
- The app must work offline or in slow network conditions with the help of a service worker.
- Users must be able to install the app on desktop and add the app to their home screen on mobile.
- The app must be deployed on GitHub Pages.
- The app must implement an alert system using an OOP approach to show information to the user.
- The app must make use of data visualization.
- The app must be covered by tests with a coverage rate >= 90%.
- The app must be monitored using an online performance monitoring tool.

## User Stories

1. **Filter Events by City**

   - As a user,
   - I should be able to filter events by city,
   - So that I can find events happening in a specific location.

2. **Show/Hide Event Details**

   - As a user,
   - I should be able to show or hide event details,
   - So that I can see more or less information about an event.

3. **Specify Number of Events**

   - As a user,
   - I should be able to specify the number of events to display,
   - So that I can see more or fewer events at a time.

4. **Use the App When Offline**

   - As a user,
   - I should be able to use the app when offline,
   - So that I can see my events even without an internet connection.

5. **Add an App Shortcut to the Home Screen**

   - As a user,
   - I should be able to add an app shortcut to my home screen,
   - So that I can quickly access the app.

6. **Display Charts Visualizing Event Details**
   - As a user,
   - I should be able to see charts visualizing event details,
   - So that I can understand the distribution of events and their popularity.

## Scenarios (Gherkin Syntax)

1. **Filter Events by City**
