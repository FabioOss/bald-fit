import Link from 'next/link';
import styles from './Sidebar.module.css'


export interface Toggle{
	switch?: boolean;
}

export default function Sidebar(props: Toggle): JSX.Element  {
	return (
		<div style={{visibility: props.switch ? "visible" : "hidden"}} className={styles.sidebar}>
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