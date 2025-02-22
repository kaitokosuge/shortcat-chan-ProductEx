export default function Header() {
	return (
		<header>
			<div className="w-[85%] md:w-[80%] mx-auto pb-4 pt-10 md:py-10 font-mono text-[#4e4e4e]">
				<h1 className="text-xl font-bold ">
					<div className="flex items-center">
						<img src="/logo.svg" className="w-[20px]" />
						<p className="ml-2">ショートカットちゃん</p>
					</div>
					<span className="text-xs block mt-2"> Product Description</span>
				</h1>
			</div>
		</header>
	);
}
