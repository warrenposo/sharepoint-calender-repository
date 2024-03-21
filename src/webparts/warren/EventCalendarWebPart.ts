import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-webpart-base';
import EventCalendar from './components/EventCalendar'; // Import your EventCalendar component
import { IEventCalendarProps } from './components/IEventCalendarProps'; // Define your props interface

export default class EventCalendarWebPart extends BaseClientSideWebPart<IEventCalendarProps> {
  public render(): void {
    const element: React.ReactElement<IEventCalendarProps> = React.createElement(
      EventCalendar,
      {
        context: this.context,
        // Add any other props you need to pass to your EventCalendar component
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Event Calendar Settings',
          },
          groups: [
            {
              groupName: 'General Settings',
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Description',
                }),
                // Add any other property pane fields you need
              ],
            },
          ],
        },
      ],
    };
  }
}
