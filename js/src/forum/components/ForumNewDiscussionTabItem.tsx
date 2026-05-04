import Button from 'flarum/common/components/Button';
import app from 'flarum/forum/app';
import type { Children } from 'mithril';
import MobileTabComponent from '../../common/components/MobileTabComponent';

export default class ForumNewDiscussionTabItem extends MobileTabComponent {
  view(): Children {
    const { icon, label } = this.attrs.definition;

    return (
      <Button className="Button Button--link MobileTab-item" icon={icon} onclick={this.openComposer}>
        {label}
      </Button>
    );
  }

  openComposer = () => {
    if (!app.session.user) {
      return;
    }

    return app.composer.load(() => import('flarum/forum/components/DiscussionComposer'), { user: app.session.user }).then(() => app.composer.show());
  };
}
