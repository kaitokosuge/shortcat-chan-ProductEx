export default function Footer() {
	return (
		<footer className="mt-20 bg-[#404040] text-white">
			<div className="w-[85%] md:w-[80%] mx-auto pt-4 md:pt-20 pb-10 flex items-center justify-between">
				<h1 className="text-2xl font-bold font-mono">ショートカットちゃん</h1>
				<img src="wlogo.svg" className="w-[200px]" />
			</div>
			<p className="font-mono w-fit mx-auto pb-4 border-t pt-2 border-[#a0a0a0]">
				&copy;ショートカットちゃん
			</p>
		</footer>
	);
}
