import FormSection from './components/FormSection'
import InfoSection from './components/InfoSection'
import MapSection from './components/MapSection'
import css from './ContactsPage.module.scss'

function Contacts() {
	return (
		<main>
			<div className={css.container}>
				<InfoSection />
				<FormSection />
			</div>
			<MapSection />
		</main>
	)
}

export default Contacts
