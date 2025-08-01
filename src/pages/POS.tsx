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
  IonToast
} from '@ionic/react';
import { useState } from 'react';
import './POS.css';

const POS: React.FC = () => {
  const [cash, setCash] = useState<number | undefined>();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleAccept = () => {
    if (!cash || cash <= 0) {
      setToastMessage('Ingrese una cantidad válida mayor a 0.');
      setShowToast(true);
    } else {
      console.log('Cash accepted:', cash);
      setToastMessage(`Efectivo aceptado: $${cash.toFixed(2)}`);
      setShowToast(true);
      // Aquí puedes continuar con la lógica del POS
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Punto de Venta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="cash-form-container">
          <IonItem className="cash-item" lines="none">
            <IonLabel position="floating" className="cash-label">Ingrese el efectivo</IonLabel>
            <br />
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

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
          color={cash && cash > 0 ? 'success' : 'danger'}
        />
      </IonContent>
    </IonPage>
  );
};

export default POS;
