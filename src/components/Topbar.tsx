export default function Topbar() {
	return (
		<div>
			<input type='text'autoComplete='on' name='search' placeholder='Pesquisar ...' maxLength={20}></input>
			<button>Menu</button>
		</div>
	)
}