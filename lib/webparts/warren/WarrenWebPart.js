var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField, } from '@microsoft/sp-webpart-base';
import EventCalendar from './components/EventCalendar'; // Import your EventCalendar component
var EventCalendarWebPart = /** @class */ (function (_super) {
    __extends(EventCalendarWebPart, _super);
    function EventCalendarWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventCalendarWebPart.prototype.render = function () {
        var element = React.createElement(EventCalendar, {
            context: this.context,
            // Add any other props you need to pass to your EventCalendar component
        });
        ReactDom.render(element, this.domElement);
    };
    EventCalendarWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(EventCalendarWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    EventCalendarWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return EventCalendarWebPart;
}(BaseClientSideWebPart));
export default EventCalendarWebPart;
//# sourceMappingURL=WarrenWebPart.js.map