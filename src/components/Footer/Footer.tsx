import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
	return (
		<div className={styles.container_footer}>
			<hr />
			<div className={styles.footer}>
				<ul >
					<li> <FaFacebook /> </li>
					<li> <FaInstagram /> </li>
					<li> <FaTwitter /> </li>
				</ul>
			</div>
			<p>Todos os direitos reservados <span>&copy; 2022</span></p>
		</div>
	)
}