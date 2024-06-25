import FormSection from './components/FormSection'
import InfoSection from './components/InfoSection'
import css from './ContactsPage.module.scss'

function Contacts() {
	return (
		<main>
			<div className={css.container}>
				<InfoSection />
				<FormSection />
			</div>
		</main>
	)
}

export default Contacts
