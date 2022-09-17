/* eslint-disable react/jsx-key */
import styles from './Card.module.css'

export interface ICardProps {
	articles?: Object[],
  }

export default function Card(props: ICardProps): JSX.Element {

	return (
		<div>
			{props.articles ? props.articles.map((article) => {
				return (
				<div className={styles.container_card}>
					
					<div>
						<h1 >{(article as Record<string, string>).title}</h1>
						<p>{(article as Record<string, string>).subtitle}</p>
					</div>
				</div>	
				)
			}) : <h1>Nenhuma publicação</h1>}
		</div>	
	)
}	