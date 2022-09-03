import styles from '../styles/Footer.module.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
	return (
		<div className={styles.container_footer_height}>
			<div className={styles.container_footer}>
				<hr />
				<ul className={styles.footer}>
					<li> <FaFacebook /> </li>
					<li> <FaInstagram /> </li>
					<li> <FaTwitter /> </li>
				</ul>
				<p>Todos os direitos reservados <span>&copy; 2022</span></p>
			</div>
		</div>
	)
}