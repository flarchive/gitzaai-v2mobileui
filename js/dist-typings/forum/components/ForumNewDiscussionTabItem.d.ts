import type { Children } from 'mithril';
import MobileTabComponent from '../../common/components/MobileTabComponent';
export default class ForumNewDiscussionTabItem extends MobileTabComponent {
    view(): Children;
    openComposer: () => Promise<void> | undefined;
}
