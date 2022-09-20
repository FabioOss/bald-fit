import { FaBars, FaSearch } from 'react-icons/fa'
import { GiMuscleUp } from 'react-icons/Gi'
import styles from './Topbar.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import SearchBox from '../SearchBox/SearchBox'

export default function Topbar() {

	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => setIsOpen(!isOpen)

	return (
		<>
			<div className={styles.container}>
				<div className={styles.sidebar}>
					<FaBars onClick={toggle}/>
					<Sidebar switch={isOpen}/>
				</div>
				<div className={styles.title}>
					<h1><Link href='/'>BaldFit</Link> <Link href='/'><GiMuscleUp /></Link></h1>

					<h3>O maior blog de carecas do mundo</h3>
				</div>
				<SearchBox />
			</div>
			<div className={styles.categories}>
				<ul className={styles.categories_list}>
					<li>
						<Link href='/musculacao'><a>Musculação</a></Link>
					</li>
					<li>
						<Link href='/saude'><a>Saúde</a></Link>
					</li>
					<li>
						<Link href='/nutricao'><a>Nutrição</a></Link>
					</li>
				</ul>
			</div>
		</>

	)
}