import {
	IonContent,
	IonHeader,
	IonList,
	IonItem,
	IonPage,
	IonTitle,
	IonToolbar,
	IonNote,
	IonButtons,
	IonButton,
	IonIcon,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { useState } from "react";
import { add } from "ionicons/icons";
const Home: React.FC = () => {
	const [state, setstate] = useState([1, 2, 3]);
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Esparragus</IonTitle>
					<IonButtons>
						<IonButton type='button'>
							<IonIcon slot='start' icon={add} size={"small"}></IonIcon>
							Add
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Is delicious</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonList>
					{state.map((item, index) => (
						<IonItem key={index}>
							{item}
							<IonNote slot='end'>{Date.now()}</IonNote>
						</IonItem>
					))}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default Home;
