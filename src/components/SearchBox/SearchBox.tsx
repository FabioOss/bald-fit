import { useState } from 'react'
import styles from './SearchBox.module.css'


export default function SearchBox() {

	const toggleList = () => setIsOpenList(!isOpenList)
	const [isOpenList, setIsOpenList] = useState(false)

	const [busca, setBusca] = useState('')
	const articleList = [
		'Musculação',
		'Saúde',
		'Bem-estar',
		'Nutrição',
		'Calvície'
	]

	const lowerBusca = busca.toLowerCase()
	const articleFilter = articleList.filter((article) => article.toLowerCase().includes(lowerBusca))

	return (
		<div className={styles.search}>
			<input className={styles.search_box} type='text' autoComplete='on' name='search' placeholder=' Pesquisar ...' value={busca} onChange={(ev) => setBusca(ev.target.value)} maxLength={20} onMouseOver={toggleList} onMouseOut={toggleList}></input >
			<ul style={{visibility: isOpenList ? "visible" : "hidden"}} className={styles.search_list}>
				{articleFilter.map((article) => (
					<li key={article}>{article}</li>
				))}
			</ul>
		</div >)
}