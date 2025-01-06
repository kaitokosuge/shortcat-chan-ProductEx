import "./App.css";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import {
	OCarousel,
	OCarouselContent,
	OCarouselItem,
} from "./components/OriginalCarousel";
import Autoplay from "embla-carousel-autoplay";
import Footer from "./components/Footer";
import SubTitle from "./components/SubTitle";

function App() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	React.useEffect(() => {
		if (!api) {
			return;
		}
		setCurrent(api.selectedScrollSnap());

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	);

	const myStack = [
		{
			name: "favorite",
			data: [
				{ app: "vscode", text: "新しいウィンドウでターミナルを開く" },
				{ app: "notion", text: "ページ「自己紹介」に子ページを作成する" },
				{ app: "slack", text: "channel「日報」の未読メッセージを開く" },
				{ app: "chrome", text: "勤怠管理のスプレッドシートを開く" },
				{ app: "github", text: "「blog」リポジトリのプルリクエストを確認する" },
				{ app: "voice", text: "音量を上げる" },
				{ app: "timer", text: "タイマーを開く" },
			],
		},
		{
			name: "vscode",
			data: [
				{ app: "vscode", text: "新しいウィンドウでターミナルを開く" },
				{ app: "vscode", text: "新しいウィンドウでファイルを選択する" },
				{ app: "vscode", text: "新しいウィンドウでフォルダを選択する" },
				{ app: "vscode", text: "新しいウィンドウを開く" },
				{ app: "vscode", text: "setting.jsonファイルを開く" },
			],
		},
		{
			name: "notion",
			data: [
				{ app: "notion", text: "ページ「自己紹介」に子ページを作成する" },
				{ app: "notion", text: "新規ページを作成する" },
				{ app: "notion", text: "「佐藤」で検索をする" },
			],
		},
	];
	return (
		<>
			<Header />
			<section className="flex flex-wrap items-center justify-between md:w-[80%] w-[90%] mx-auto">
				<div className="mt-20 md:mt-0 w-fit mx-auto">
					<h2 className="font-bold md:text-4xl text-[20px]">
						「もう一人の自分」を手に入れよう
						{/* <span className="block w-[50px] h-[1px] bg-[#7b7b7b] ml-3 mt-5"></span> */}
					</h2>
				</div>

				<div className="w-[480px] mt-[120px] md:mt-20 relative mx-auto ">
					<img src="/smart-dev.png" className="absolute top-0 w-full mx-auto" />
					<OCarousel
						plugins={[plugin.current]}
						opts={{
							align: "start",
							loop: true,
						}}>
						<OCarouselContent className="md:w-[85%] w-[95%] mx-auto md:min-h-[750px] min-h-[520px] text-[#1d1d1d] bg-gray-100 md:mt-20 mt-[65px]">
							{myStack.map((item, index) => (
								<OCarouselItem
									key={index}
									className="bg-gray-100 w-full md:pt-10 pt-5">
									<div className="w-[95%] mx-auto grid grid-cols-2 gap-2">
										{item.data.map((child, i) => (
											<button
												key={i}
												className="md:px-3 px-1 block border hover:border-[#1d1d1d] duration-200 text-left border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
												<div className="">
													<img
														src={`/${child.app}.svg`}
														className="w-[30px] mx-auto"
													/>
												</div>
												<p className="text-[10px] md:mt-3 mt-4 w-fit mx-auto">
													{child.text}
												</p>
											</button>
										))}
									</div>
								</OCarouselItem>
							))}
						</OCarouselContent>
					</OCarousel>
				</div>
			</section>
			<section className="md:mt-60 mt-40">
				<Title title="ショートカットちゃんとは" />
				<p className="md:w-fit w-[90%] mx-auto md:mt-10 mt-5">
					スマートフォンからPCを操作する新世代のショートカットアプリケーション.毎日のタスクにもう一人の自分を
				</p>
				<div className="flex flex-wrap items-center justify-between md:w-[80%] w-[90%] mx-auto md:mt-20 mt-10 border rounded-[15px] md:px-10 px-5 md:py-20 py-10">
					<img
						src="/smart-dev04.png"
						className="md:w-[45%] w-[70%] md:mx-0 mx-auto"
					/>
					<div className="md:w-[50%] w-full md:mt-0 mt-10 text-[#4d4d4d]">
						<p className="font-bold text-xl">
							<span className="block text-6xl text-gray-400">1</span>
							PCの煩雑な操作をスマホの "ワンタップ" で実現
						</p>
						<p className="text-[14px] mt-10">
							アプリを起動→目的のコンテンツまで遷移、の流れをワンタップで。チャットツールの未読メッセージ閲覧やメモアプリの新規ページ作成、数多のスプレッドシートから目的のシートへジャンプも思い立ったらすぐに実現可能です
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse flex-wrap items-center justify-between md:w-[80%] w-[90%] mx-auto md:mt-20 mt-10 border rounded-[15px] md:px-10 px-5 md:py-20 py-10">
					<img
						src="/category-dev02.png"
						className="md:w-[45%] w-[100%] md:mx-0 mx-auto"
					/>
					<div className="md:w-[50%] w-full md:mt-0 mt-10 text-[#4d4d4d]">
						<p className="font-bold md:mt-10 mt-5 text-xl">
							<span className="block text-6xl text-gray-400">2</span>
							ショートカットはカスタマイズ可能
						</p>
						<p className="text-[14px] mt-10">
							PCに合わせたキーボード設定やお気に入り設定、ショートカットごとのカテゴリ設定などが可能です。既存ショートカットを足し算し、オリジナルのショートカットを作成できます
						</p>
					</div>
				</div>
				<div className="flex flex-wrap items-center justify-between md:w-[80%] w-[90%] mx-auto md:mt-20 mt-10 border rounded-[15px] md:px-10 px-5 md:py-20 py-10">
					<img
						src="/slack-dev03.png"
						className="md:w-[45%] w-full md:mx-0 mx-auto"
					/>
					<div className="md:w-[50%] w-full md:mt-0 mt-10 text-[#4d4d4d]">
						<p className="font-bold md:mt-10 mt-5 text-xl">
							<span className="block text-6xl text-gray-400">3</span>
							ショートカットパッケージの共有
						</p>
						<p className="text-[14px] mt-10">
							登録済みのお気に入りショートカットは全世界に共有できます。「slackで生産性を上げるショートカット集」、「Chromeでブックマークを使い倒すショートカット集」、「生成AIツールを効率よく使うショートカット集」など自由にパッケージを作成できます
						</p>
					</div>
				</div>
			</section>
			<section className="md:mt-40 mt-10">
				<Title title="ショートカット例" />
				<div className="relative bg-gray-100 lg:w-[calc(100vw-400px)] w-screen py-10 rounded-[20px] mx-auto md:mt-10 mt-5">
					{/* <button className="absolute right-10 border border-emerald-500 rounded-full p-3 text-xs top-7 text-emerald-500 font-bold">
						共有
					</button> */}
					<Carousel
						setApi={setApi}
						opts={{
							align: "start",
							loop: true,
						}}>
						<div className="grid lg:grid-cols-6 grid-cols-3 gap-2 lg:w-[80%] w-[80%] mx-auto">
							{myStack.map((item, index) => (
								<button
									className={
										current === index
											? "text-center flex items-center border px-2 py-2 rounded-[10px] opacity-100 border-[#6c6c6c]"
											: "text-center flex items-center border px-2 py-2 rounded-[10px] opacity-70"
									}
									key={index}
									onClick={() => {
										api?.scrollTo(index);
									}}>
									<img src={`/${item.name}.svg`} className="w-[15px]" />
									<p className="text-[#3e3e3e] ml-1 md:text-xs text-[10px] font-bold">
										{item.name}
									</p>
								</button>
							))}
						</div>

						<CarouselContent className="lg:w-[calc(100vw-400px)] w-screen mx-auto text-[#1d1d1d] bg-gray-100 md:mt-5 mt-10">
							{myStack.map((item, index) => (
								<CarouselItem key={index} className="bg-gray-100 w-full">
									<div className="lg:w-[70%] w-[75%] mx-auto grid md:grid-cols-4 grid-cols-2 gap-2">
										{item.data.map((child, i) => (
											<button
												key={i}
												className="md:px-3 px-1 block border hover:border-[#1d1d1d] duration-200 text-left border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
												<div className="">
													<img
														src={`/${child.app}.svg`}
														className="md:w-[50px] w-[30px] mx-auto"
													/>
												</div>
												<p className="md:text-sm text-[10px] md:mt-3 mt-4 w-fit mx-auto">
													{child.text}
												</p>
											</button>
										))}
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="absolute md:left-10 left-1 text-gray-400 hidden md:flex" />
						<CarouselNext className="absolute md:right-10 right-1 text-gray-400 hidden md:flex" />
					</Carousel>
				</div>
			</section>
			<section className="md:mt-40 mt-20">
				<Title title="スケジュール" />
				<p className="w-fit mt-20 mx-auto text-[20px] font-bold text-[#000000]">
					2025/01/31リリース予定
				</p>
				<div className="grid grid-cols-2 gap-3 w-[70%] mt-4 mx-auto">
					<button className="hover:bg-[#bdbdbd] hover:text-white duration-300 border-[#bdbdbd] border text-[#828282] px-3 py-2 rounded-[10px]">
						ios
					</button>
					<button className="hover:bg-[#bdbdbd] hover:text-white duration-300 border-[#bdbdbd] border text-[#828282] px-3 py-2 rounded-[10px]">
						android
					</button>
					<button className="hover:bg-[#bdbdbd] hover:text-white duration-300 border-[#bdbdbd] border text-[#828282] px-3 py-2 rounded-[10px]">
						mac
					</button>
					<button className="hover:bg-[#bdbdbd] hover:text-white duration-300 border-[#bdbdbd] border text-[#828282] px-3 py-2 rounded-[10px]">
						windows
					</button>
					<button className="hover:bg-[#bdbdbd] hover:text-white duration-300 border-[#bdbdbd] border text-[#828282] px-3 py-2 rounded-[10px]">
						web
					</button>
				</div>
			</section>
			<section className="md:mt-40 mt-20">
				<SubTitle title="ショートカットちゃんの技術スタック" />
				<div className="mx-auto md:w-[20%] w-[70%] mt-10">
					<div className="flex items-center justify-between">
						<p>
							web server: <span className="font-bold">GO</span>
						</p>
						<img src="/go.svg" className="w-[50px] ml-5" />
					</div>
					<div className="flex items-center justify-between mt-10">
						<p>
							web view: <span className="font-bold">React</span>
						</p>
						<img src="/react.svg" className="w-[40px] ml-5" />
					</div>
					<div className="flex items-center justify-between mt-10">
						<p>
							ios/android: <span className="font-bold">React Native</span>
						</p>
						<img src="/react.svg" className="w-[40px] ml-5" />
					</div>
					<div className="flex items-center justify-between mt-10">
						<p>
							mac/windows: <span className="font-bold">Tauri</span>
						</p>
						<img src="/tauri.svg" className="w-[40px] ml-5" />
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default App;
