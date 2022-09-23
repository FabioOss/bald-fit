import Link from 'next/link';
import styles from './Sidebar.module.css'



export default function Sidebar()  {
	return (
		<div  className={styles.sidebar}>
			<ul>
				<li>
					<Link href='/musculacao'>Musculação</Link>
				</li>
				<li>
					<Link href='/saude'>Saúde</Link>
				</li>
				<li>
					<Link href='/nutricao'>Nutrição</Link>
				</li>
			</ul>
		</div>
	)
}