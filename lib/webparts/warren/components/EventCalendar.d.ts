import * as React from 'react';
export interface IEvent {
    title: string;
    start: Date;
    end: Date;
}
export interface IEventCalendarProps {
    context: any;
}
export default class EventCalendar extends React.Component<IEventCalendarProps> {
    private calendarRef;
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
//# sourceMappingURL=EventCalendar.d.ts.map