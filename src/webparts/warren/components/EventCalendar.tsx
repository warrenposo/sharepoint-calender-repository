// src/webparts/warren/components/EventCalendar.tsx

import * as React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { sp } from '@pnp/sp';

export interface IEvent {
  title: string;
  start: Date;
  end: Date;
  // Add other event properties as needed
}

export interface IEventCalendarProps {
  context: any; // Replace 'any' with the appropriate type for your SharePoint context
}

export default class EventCalendar extends React.Component<IEventCalendarProps> {
  private calendarRef = React.createRef<FullCalendar>();

  public async componentDidMount() {
    try {
      const eventsResponse = await sp.web.lists.getByTitle('YourCalendarList').items.get();
      const events: IEvent[] = eventsResponse.map((item: any) => ({
        title: item.Title,
        start: new Date(item.EventDate),
        end: new Date(item.EndDate),
        // Add other event properties as needed
      }));

      // Set events in the calendar
      this.calendarRef.current?.getApi().addEventSource(events);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }

  public render() {
    return (
      <div>
        <h2>Event Calendar</h2>
        <FullCalendar
          ref={this.calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, resourceTimelinePlugin]}
          initialView="dayGridMonth"
          events={[]} // Initial empty array, events will be loaded dynamically
        />
        {/* Example 1: Team Meetings Calendar */}
        {/* Fetch team meetings from a specific SharePoint calendar list */}
        {/* Customize the calendar view to show meeting titles, start times, and end times */}

        {/* Example 2: Project Milestones Calendar */}
        {/* Fetch project milestones from another SharePoint calendar list */}
        {/* Use different colors or icons to represent different types of milestones */}
        {/* Enable users to filter by project or milestone type */}

        {/* Example 3: Company Events Calendar */}
        {/* Fetch company-wide events from yet another SharePoint calendar list */}
        {/* Customize the calendar to display event titles, dates, and locations */}
        {/* Allow users to switch between different views (month, week, day) */}
      </div>
    );
  }
}
