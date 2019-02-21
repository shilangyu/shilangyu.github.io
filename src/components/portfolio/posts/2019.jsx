import React, { Fragment } from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import Link from '@material-ui/core/Link'

const I = props => <CardMedia component="img" src={props.src} />

export default [
	{
		title: 'praktyki w IBM',
		posts: [
			{
				title: 'Opis',
				content: `Na końcu trzeciej klasy liceum szkoła pomogła nam z dostaniem praktyk w IBM warszawa. Był to staż studencki trwający 3 miesiące (od lipca do września).`
			},
			{
				title: 'Webdev',
				content: `Zostaliśmy przyjęci jako web deweloperzy, gdyż znaliśmy języki i narzędzia które są potrzebne do tworzenia stron internetowych. Zadaniem było stworzenie PoC micro-frontendów.`
			},
			{
				title: 'React+redux',
				content: `Technologia w której pisaliśmy to React z użyciem reduxa. Wtedy właśnie zakochałem sie w React-cie i przepisałem wiele moich projektów (jak na przykład tą stronę) na tą technologie.`
			},
			{
				title: 'Microfrontends',
				content: `Po zakończeniu pisania podstron do naszego PoC mój partner został dodany do innego projektu a ja zostałem by nauczyć sie jak złączyć nasze podstrony w sposób który spełnia architekturę micro-services. Nauczyłem się wtedy bardzo wiele o różnych sposobach rozwiązywania tego problemu. Zostałem poproszony o zrobienie prezentacji o owych sposobach które uważam za najlepsze by potem wspólnie grupą podjąć decyzje który wybieramy. Zdecydowaliśmy sie na technologie która jest podtrzymywana przez Zalando który jest przodownikiem i promotorem micro-frontendów.`
			},
			{
				title: 'Życie w korporacji',
				content: `Dzięki praktykom nauczyłem się wiele o życiu w korporacji. Prowadzenie projektów w bardzo systematyczny sposób (SCRUM&AGILE), częste spotkania, wypady poza pracowe i dużo pracy grupowej.`
			}
		]
	},
	{
		title: 'digit recognition',
		posts: [
			{
				title: 'Opis',
				content: `Był to mój personalny projekt, który dotyczył stworzenia algorytmu nauczy się rozpoznawać ręcznie pisane cyfry. Podzadaniem, które sobie stworzyłem to napisanie każdej części pogramu w innym języku programowania.`
			},
			{
				title: 'Dane',
				content: <Fragment>
					<I src={'/assets/pics/portfolio/2019/DR-dataset.png'} />Dane, na których mój algorytm się uczył, były wzięte ze sławnej bazy 'mnist'; baza tysiący ręcznię narysowanych cyfr. Dane te były zamieniane w pliki tekstowe, gdzie każdy piksel został zapisany jako pozycja i jasność.<I src={'/assets/pics/portfolio/2019/DR-mnist.png'} /></Fragment>
			},
			{
				title: 'Serwer',
				content: <Fragment>
					<I src={'/assets/pics/portfolio/2019/DR-server.png'} />Serwer był napisany w <Link href="https://golang.org/">Golang</Link>. Służył on do przetwarzenia danych o treningowych i testowych cyfrach wcześniej przygotowanych. Jak skończył był gotowy na przyjmowanie żądań które prosiły o owe dane. Potrafił on też komunikować się z algorytmem by 'zgadywać' narysowane cyfry.</Fragment>
			},
			{
				title: 'Trener',
				content: <Fragment>
					<I src={'/assets/pics/portfolio/2019/DR-trainer.png'} />Trener był napisany w <Link href="https://www.python.org/">Python</Link>. Odpowiadał on za uczenie algorytmu. Najpierw zbierał dane treningowe i testowe. Potem trenował algorytm, a na końcu testował by ocenić jego skuteczność.</Fragment>
			},
			{
				title: 'Zgadywacz',
				content: `Zgadywacz był napisany w c++. Korzystał on z nauczonego algorytmu by zgadywać jaka cyfra została narysowana.`
			},
			{
				title: 'Interakcja',
				content: <Fragment>
					<I src={'/assets/pics/portfolio/2019/DR-interaction.png'} />Interakcja była napisana w JavaScript. Tutaj można przetestować nasz wytrenowany algorytm. Rysuje sie cyfre w wyznaczonym polu, po czym wysyła sie zapytanie do serwera jaka cyfra została narysowana. Zgadnięcie algorytmu jest wyświetlane pod narysowaną liczbą.</Fragment>
			},
			{
				title: 'Wizualizacja',
				content: <Fragment>
					<I src={'/assets/pics/portfolio/2019/DR-visualisation.png'} />Wizualizacja danych była napisana w <Link href="https://processing.org/">Processing</Link> (Java). Ona służyła pokazywania jak algorytm sie uczył z czasem.</Fragment>
			}
		]
	},
	{
		title: 'Kółko ML',
		posts: [
			{
				title: 'Opis',
				content: `W poniedziałki od 16:00 do 19:00 prowadze kółko/zajęcia z AI. Omawiam z uczniami różne podstawowe techniki 'machine learning' i pomagam im je zaprogramować.`
			},
			{
				title: 'Zrozumienie',
				content: <Fragment>
					<I src={'/assets/pics/portfolio/2019/lessons-GA.png'} />Główną ideą jest skupienie się na zrozumieniu czemu jakiś algorytm działa a nie wyłącznie na sposobie jego zakodowania.
				</Fragment>
			},
			{
				title: 'Wyrównanie poziomu',
				content: `Uczniowie są z różnich roczników więc staram sie nie używać zaawansowanych terminologii matematycznych by wszyscy mieli równe szanse zrozumienia. Dzięki temu widzę jak czasami osoba młodsza rozumie równie dobrze matematyke algorytmu jak i starsza.`
			},
			{
				title: 'Projekty',
				content: <Fragment>
					<I src={'/assets/pics/portfolio/2019/lessons-perceptron.jpg'} />Wiekszość czasu spędziliśmy na teorię i zrozumienie. Ale zrobiliśmy też małe projekty. Z użyciem genetycznego algorytmu napisaliśmy znajdywacz a, b i c funkcji kwadratowej. Symulacje funkcji OR napisaliśmy dzięki jedno-warstwowej sieci: perceptron. Następnym planem jest napisanie snake-AI z neuro-ewolucją.
				</Fragment>
			}
		]
	}
]
