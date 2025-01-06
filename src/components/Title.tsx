export default function Title({ title }: { title: string }) {
	return (
		<>
			<h2 className="md:text-4xl text-2xl font-bold w-fit mx-auto font-mono">
				<img src="/logo.svg" className="w-[30px] mx-auto pb-2" />
				{title}
			</h2>
			<div className="md:w-[80px] w-[40px] h-[1px] bg-black mx-auto mt-5"></div>
		</>
	);
}
