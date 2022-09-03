import { FaBars, FaSearch } from 'react-icons/fa'
import styles from '../styles/Topbar.module.css'

export default function Topbar() {
	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<input type='text' autoComplete='on' name='search' placeholder='Pesquisar ...' maxLength={20} ></input >
				<button> <FaSearch /> </button>
			</div>
			<button><FaBars /></button>
			<div className={styles.title}>
				<h1> <span>BaldFit</span></h1>
				<h3>O maior blog de carecas do mundo</h3>
			</div>
			<div className={styles.categories}>
				<ul className={styles.categories_list}>
					<li>Musculação</li>
					<li>Nutrição</li>
					<li>Saúde</li>
				</ul>
			</div>

		</div>
	)
}