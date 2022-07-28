function App() {
	return (
		<div className="wrapper clear">
			<div className="overlay">
				<div className="drawer">
					<h2>Корзина</h2>
					<div className="cartItem">
						<img src="/img/sneakers/sneak1.jpg" alt="Sneakers"/>
						<div>
							<p>
								Мужские Кроссовки Nike Air Max 270
							</p>
							<b>12 999 руб.</b>
						</div>
					</div>
				</div>
			</div>
			<header className="d-flex justify-between align-center p-40">
				<div className="d-flex align-center">
					<img width={40} height={40} src="/img/logo.png" alt=""/>
					<div>
						<h3 className="text-uppercase">Sereda Sneakers</h3>
						<p className="opacity-5">Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className="d-flex">
					<li className="mr-30">
						<img width={18} height={18} src="/img/cart.svg" alt="cart"/>
						<span>1205 руб.</span>
					</li>
					<li>
						<img width={18} height={18} src="/img/user.svg" alt="cart"/>
					</li>
				</ul>
			</header>
			<div className="content p-40">
				
				<div className="d-flex align-center mb-40 justify-between">
					<h1>Все кроссовки</h1>
					<div className="search-block d-flex">
						<img src="/img/search.svg" alt="Search"/>
						<input type="text" placeholder="Поиск..."/>
					</div>
				</div>
				<div className="d-flex">
					<div className="card">
						<div className="favorite">
							<img src="/img/heart-unliked.svg" alt=""/>
						</div>
						<img width={133} height={112} src="/img/sneakers/sneak1.jpg" alt=""/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className="button">
								<img width={11} height={11} src="/img/plus.svg" alt="plus"/>
							</button>
						</div>
					</div>
					<div className="card">
						<div className="favorite">
							<img src="/img/heart-unliked.svg" alt=""/>
						</div>
						<img width={133} height={112} src="/img/sneakers/sneak2.jpg" alt=""/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className="button">
								<img width={11} height={11} src="/img/plus.svg" alt="plus"/>
							</button>
						</div>
					</div>
					<div className="card">
						<img width={133} height={112} src="/img/sneakers/sneak3.jpg" alt=""/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className="button">
								<img width={11} height={11} src="/img/plus.svg" alt="plus"/>
							</button>
						</div>
					</div>
					<div className="card">
						<div className="favorite">
							<img src="/img/heart-unliked.svg" alt=""/>
						</div>
						<img width={133} height={112} src="/img/sneakers/sneak4.jpg" alt=""/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className="button">
								<img width={11} height={11} src="/img/plus.svg" alt="plus"/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
