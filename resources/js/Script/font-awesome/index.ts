import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { VueConstructor } from 'vue';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import {
  faLock,
  faUnlock,
  faCog,
  faBars,
  faSignInAlt,
  faSignOutAlt,
  faTachometerAlt,
  faBook,
  faCogs,
  faTrash,
  faTrashRestore,
  faPen,
  faSave,
  faAlignJustify,
  faGripLines,
  faThList,
  faUsersCog,
  faHome,
  faAngleLeft,
  faAngleDown,
  faCaretDown,
  faExternalLinkAlt,
  faPlus,
  faUndo,
  faMinus,
  faTimes,
  faInfo,
  faCheck,
  faExclamation,
  faBuilding,
  faBriefcase,
  faSpinner,
  faAt,
  faLink,
  faWrench,
  faUser,
  faMoon,
  faSun,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faLock,
  faUnlock,
  faCog,
  faBars,
  faSignInAlt,
  faSignOutAlt,
  faTachometerAlt,
  faBook,
  faCogs,
  faTrash,
  faTrashRestore,
  faPen,
  faSave,
  faAlignJustify,
  faGripLines,
  faThList,
  faUsersCog,
  faHome,
  faAngleLeft,
  faAngleDown,
  faCaretDown,
  faExternalLinkAlt,
  faPlus,
  faUndo,
  faMinus,
  faTimes,
  faInfo,
  faCheck,
  faExclamation,
  faBuilding,
  faBriefcase,
  faSpinner,
  faAt,
  faLink,
  faWrench,
  faUser,
  faMoon,
  faSun,
  faAdjust,
);

export default function(Vue: VueConstructor) {
  Vue.component('font-awesome-icon', FontAwesomeIcon);
  Vue.component('font-awesome-layers', FontAwesomeLayers);
  Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

  dom.watch();
}