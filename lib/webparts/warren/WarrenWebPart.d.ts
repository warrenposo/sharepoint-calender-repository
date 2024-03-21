import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IEventCalendarProps } from './components/IEventCalendarProps';
export default class EventCalendarWebPart extends BaseClientSideWebPart<IEventCalendarProps> {
    render(): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=WarrenWebPart.d.ts.map