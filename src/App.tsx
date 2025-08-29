import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cash, settings, barChart, shirt, qrCode } from 'ionicons/icons';
import POS from './pages/POS';
import Setting from './pages/Setting';
import Sells from './pages/Sells';
import Laundry from './pages/Laundry'; // 👈 Importamos tu nueva página
import ScannerQR from './pages/ScannerQR';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/POS">
            <POS />
          </Route>
          <Route exact path="/Setting">
            <Setting />
          </Route>
          <Route path="/Sells">
            <Sells />
          </Route>
          <Route path="/Laundry">
            <Laundry />
          </Route>
          <Route path="/ScannerQR">
            <ScannerQR />
          </Route>
          <Route exact path="/">
            <Redirect to="/POS" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        <IonTabButton tab="Laundry" href="/Laundry">
              <IonIcon aria-hidden="true" icon={shirt} />
              <IonLabel>Laundri</IonLabel>
        </IonTabButton>
        <IonTabButton tab="ScannerQR" href="/ScannerQR">
              <IonIcon aria-hidden="true" icon={qrCode} />
              <IonLabel>Lector QR</IonLabel>
        </IonTabButton>
          <IonTabButton tab="Setting" href="/Setting">
            <IonIcon aria-hidden="true" icon={settings} />
            <IonLabel>Setting</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Sells" href="/Sells">
            <IonIcon aria-hidden="true" icon={barChart} />
            <IonLabel>Sells</IonLabel>
          </IonTabButton>
          <IonTabButton tab="POS" href="/POS">
            <IonIcon aria-hidden="true" icon={cash} />
            <IonLabel>Vending POS</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
