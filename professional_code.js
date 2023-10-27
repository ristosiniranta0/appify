/* 
  File name: professional_code.js
  Description: This code demonstrates a complex application that simulates an event management system.
  It includes handling event creation, registration, attendance tracking, and generating reports.
*/

// Define Event class
class Event {
  constructor(name, date, location) {
    this.name = name;
    this.date = date;
    this.location = location;
    this.attendees = [];
  }

  registerAttendee(attendee) {
    this.attendees.push(attendee);
  }

  getAttendeeCount() {
    return this.attendees.length;
  }
}

// Define Attendee class
class Attendee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// Create events
const event1 = new Event('Conference A', '2022-10-01', 'Venue A');
const event2 = new Event('Workshop B', '2022-11-15', 'Venue B');
const event3 = new Event('Seminar C', '2022-12-10', 'Venue C');

// Create attendees
const attendee1 = new Attendee('John Doe', 'john@example.com');
const attendee2 = new Attendee('Jane Smith', 'jane@example.com');
const attendee3 = new Attendee('David Johnson', 'david@example.com');

// Register attendees for events
event1.registerAttendee(attendee1);
event1.registerAttendee(attendee2);
event2.registerAttendee(attendee2);
event2.registerAttendee(attendee3);
event3.registerAttendee(attendee1);
event3.registerAttendee(attendee3);

// Generate report
console.log('Event Report:');
console.log(`Event: ${event1.name}, Date: ${event1.date}`);
console.log(`Location: ${event1.location}`);
console.log(`Attendee Count: ${event1.getAttendeeCount()}`);
console.log('Attendees:');
event1.attendees.forEach((attendee) => {
  console.log(`- ${attendee.name} (${attendee.email})`);
});
console.log('-------------------------');
console.log(`Event: ${event2.name}, Date: ${event2.date}`);
console.log(`Location: ${event2.location}`);
console.log(`Attendee Count: ${event2.getAttendeeCount()}`);
console.log('Attendees:');
event2.attendees.forEach((attendee) => {
  console.log(`- ${attendee.name} (${attendee.email})`);
});
console.log('-------------------------');
console.log(`Event: ${event3.name}, Date: ${event3.date}`);
console.log(`Location: ${event3.location}`);
console.log(`Attendee Count: ${event3.getAttendeeCount()}`);
console.log('Attendees:');
event3.attendees.forEach((attendee) => {
  console.log(`- ${attendee.name} (${attendee.email})`);
});

// ... Additional event management and reporting functionality can be added ...
// ... This is just a simplified example demonstrating the core concepts.