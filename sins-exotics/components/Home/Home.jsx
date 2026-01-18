import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home(){
	return(
		<div>
			<div className="intro">
				<h1>Welcome to Sin's Exotics Car Rentals</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia quas dicta esse adipisci. Amet temporibus dolorem atque harum fugit labore, laborum, in, aspernatur placeat blanditiis fugiat quis obcaecati est.
				Corporis, alias? Sequi odit, quidem praesentium eveniet quae fugiat aliquid suscipit unde quod repudiandae recusandae blanditiis ullam sapiente eligendi tenetur. Reprehenderit delectus fugit explicabo eum quasi quis officia? Quidem, qui?
				Odit, architecto enim! Minus vero ab totam recusandae culpa adipisci perferendis ducimus, perspiciatis tempore quos praesentium dolores quis dolorum doloribus optio, amet sint sed iusto nulla. Dicta minus possimus molestias?
				Quod alias, excepturi eum ipsam facilis adipisci velit nam et quasi officia recusandae enim ab, doloribus distinctio quaerat tenetur. Maxime quae accusantium facilis totam dolores culpa praesentium quis ex nam?
				Sunt, nam! Quo commodi aut cupiditate, nisi ipsa tempore at hic ut qui optio ducimus tenetur. Similique, veritatis atque, explicabo reprehenderit eligendi ducimus molestiae debitis doloremque odio eum, quam nulla?
				Veniam quo at ex sint est reiciendis aliquam assumenda quae, eveniet maxime quibusdam tempore aperiam dolore, fugiat ipsa molestiae debitis. Itaque est corrupti ipsa quam totam hic voluptates veritatis natus?
				Officiis delectus sequi at praesentium, cum ullam explicabo nam ut doloribus adipisci corrupti impedit et corporis rem eius voluptate quasi quo voluptatibus aut illum cumque. Labore corrupti sint reiciendis praesentium!
				Recusandae laudantium illum sint ipsum iste at, voluptate quis neque quo unde qui. Nulla debitis fugit voluptate at, nisi quam non facere eos itaque dolores. Placeat quisquam quidem excepturi voluptates!
				Dolor assumenda quis aspernatur velit recusandae dolores esse magnam rerum unde consequuntur laborum architecto mollitia corrupti facilis nisi, accusamus tempore harum, temporibus accusantium nemo! Quos maiores aperiam culpa repellat molestias?
				Sed quo recusandae nobis soluta enim rem aperiam obcaecati nihil delectus! Deserunt reprehenderit expedita enim ratione illo dicta beatae, a inventore. Ipsa officia cupiditate temporibus doloribus laudantium magni at quia.
				Quisquam reiciendis aliquam possimus quod voluptate ratione obcaecati eveniet! Explicabo nobis maiores fugiat, enim eligendi illo omnis neque consequatur id laudantium quod assumenda ut est ipsum necessitatibus, provident odit culpa.
				Nobis, reprehenderit asperiores facilis non sit molestias ducimus libero, cum provident veritatis praesentium mollitia hic, magnam illum reiciendis culpa expedita nemo quis iusto beatae aliquid. Ullam repellendus quo quisquam perspiciatis?
				Magnam vero dicta quo iure nemo corrupti, assumenda vel et qui ducimus odio repellat quia voluptate sed aliquid veritatis. Repellendus accusantium blanditiis illo qui delectus sint temporibus soluta ipsum cumque.
				Cumque iste repudiandae ea nobis. Quis repellat asperiores facilis ad provident perferendis architecto porro error fuga fugit mollitia dicta nisi iusto rem voluptatem cupiditate debitis, non doloribus libero. Dolorem, adipisci.
				Nisi labore deleniti neque minus, eum voluptate? Dolor quaerat ex ullam obcaecati temporibus fugit? Atque, itaque voluptatibus? Corrupti illo cum tempore voluptates veniam rerum explicabo numquam, nam beatae nulla. Odio!
				Voluptates voluptatem reprehenderit mollitia. Perferendis magnam quasi saepe possimus, pariatur placeat quisquam optio. Sint fuga doloremque, minima voluptates iste enim vitae sequi maxime est excepturi laborum odit mollitia ad illum?
				Praesentium, impedit enim fugiat error facilis quis eligendi nobis quibusdam eveniet sapiente, nihil commodi earum maiores maxime. Sint pariatur nostrum ratione nihil corporis aliquid, omnis iste quisquam cupiditate maxime modi!
				Corrupti tenetur officia at illo voluptate totam nostrum ipsam quo, blanditiis perferendis alias animi vero in quisquam laborum, commodi hic soluta ex iusto aspernatur. Modi similique id asperiores voluptatibus ea.
				Est accusamus aliquid odit quasi libero nemo animi odio veniam cupiditate impedit, nam a, consectetur omnis eius error facilis! Dolorem id eum porro? Quisquam, temporibus suscipit. Cum distinctio neque iusto.
				Fugit eligendi magnam dolore expedita, cumque dolorum modi hic minus perspiciatis in quia molestias voluptatum quas eos consectetur iste, esse illum est inventore. Quas fugit unde dignissimos sapiente deleniti aperiam?
				Dolor rem at possimus harum? Dolores doloribus nobis, culpa assumenda quisquam ab, hic repudiandae tempore vel quis harum sint natus explicabo magnam, pariatur sit omnis. Cum modi molestiae vero eligendi!</p>

				<div className="cars">
					<h1>Our Most Popular</h1>
					<div className="pics">
					<img src="/src/assets/gwag1.png" alt="" className="car-pics" />
					<img src="/src/assets/25m11.png" alt="" className="car-pics" />
					<img src="/src/assets/urusperformante1.png" alt="" className="car-pics" />
					</div>
					<Link to="/cars">Check out our Full Collection!</Link>
				</div>
			</div>
		</div>
	)
}

export default Home;