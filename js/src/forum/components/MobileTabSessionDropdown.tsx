import app from 'flarum/common/app';
import Icon from 'flarum/common/components/Icon';
import SessionDropdown from 'flarum/forum/components/SessionDropdown';

export default class MobileTabSessionDropdown extends SessionDropdown {
  getButtonContent() {
    return [
      <Icon name="fas fa-user-cog" className="Button-icon" />,
      ' ',
      // The username can be long, so it is better to display "Profile"
      <span className="Button-label">{app.translator.trans('acpl-mobile-tab.lib.item.profile')}</span>,
    ];
  }
}
