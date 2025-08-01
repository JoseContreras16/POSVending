import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonAlert
} from '@ionic/react';
import { useState } from 'react';
import './POS.css';

const POS: React.FC = () => {
  const [cash, setCash] = useState<number | undefined>();
  const [showAlert, setShowAlert] = useState(false);

  const handleAccept = () => {
    if (!cash || cash <= 0) {
      setShowAlert(true);
    } else {
      console.log('Cash accepted:', cash);
      // Aquí puedes continuar con la lógica del POS
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>POS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="cash-form-container">
          <IonItem className="cash-item">
            <IonLabel position="floating" className="cash-label">Ingrese el efectivo</IonLabel>
            <br></br>
            <IonInput
              type="number"
              value={cash}
              onIonChange={(e) => setCash(parseFloat(e.detail.value!))}
              placeholder="Ej. 100.00"
              className="cash-input"
              
            />
          </IonItem>
          <IonButton expand="block" onClick={handleAccept}>
            Aceptar Dinero
          </IonButton>
        </div>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Error"
          message="Ingrese una cantidad válida mayor a 0."
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default POS;
