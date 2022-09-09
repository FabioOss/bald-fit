import { FaBars, FaSearch } from 'react-icons/fa'
import styles from './Topbar.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Topbar() {

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
		<>
			<div className={styles.container}>
				<div className={styles.sidebar}>
					<button>Menu <FaBars /></button>
				</div>
				<div className={styles.title}>
					<h1> <Link href='/'><a>BaldFit</a></Link></h1>
					<h3>O maior blog de carecas do mundo</h3>
				</div>
				<div className={styles.search}>
					<input className={styles.search_box} type='text' autoComplete='on' name='search' placeholder=' Pesquisar ...' value={busca} onChange={(ev) => setBusca(ev.target.value)} q maxLength={20} ></input >
					<ul className={styles.search_list}>
						{articleFilter.map((article) => (
							<li key={article}>{article}</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.categories}>
				<ul className={styles.categories_list}>
					<li>
						<Link href='/musculacao'><a>Musculacao</a></Link>
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