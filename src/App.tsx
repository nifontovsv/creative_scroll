import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './App.css';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
	const galleryLeftRef = useRef<HTMLDivElement>(null);
	const galleryRightRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const tl = gsap.timeline();

		gsap.fromTo(
			'.hero-section',
			{ opacity: 1 },
			{
				opacity: 0,
				scrollTrigger: {
					trigger: '.hero-section',
					start: 'center',
					end: '820',
					scrub: true,
				},
			}
		);

		// Анимация левой галереи
		if (galleryLeftRef.current) {
			let itemsL = gsap.utils.toArray(
				galleryLeftRef.current.children
			) as HTMLElement[];

			itemsL.forEach((item) => {
				tl.fromTo(
					item,
					{ opacity: 0, x: -150 },
					{
						opacity: 1,
						x: 0,
						scrollTrigger: {
							trigger: item,
							start: 'top 80%',
							end: 'bottom 20%',
							scrub: true,
						},
					}
				);
			});
		}

		// Анимация правой галереи
		if (galleryRightRef.current) {
			let itemsR = gsap.utils.toArray(
				galleryRightRef.current.children
			) as HTMLElement[];

			itemsR.forEach((item) => {
				tl.fromTo(
					item,
					{ opacity: 0, x: 150 },
					{
						opacity: 1,
						x: 0,
						scrollTrigger: {
							trigger: item,
							start: 'top 80%',
							end: 'bottom 20%',
							scrub: true,
						},
					}
				);
			});
		}
	}, []);

	return (
		<div className='wrapper'>
			<div className='content'>
				<header className='hero-section'>
					<img
						data-speed='.6'
						className='hero'
						src='assets/hero.png'
						alt='Alt'
					/>
					<div className='container'>
						<div data-speed='.75' className='main-header'>
							<h1 className='main-title'>creative scroll</h1>
						</div>
					</div>
				</header>

				<div className='portfolio'>
					<div className='container'>
						<main className='gallery'>
							<div
								ref={galleryLeftRef}
								data-speed='.9'
								className='gallery__left'
							>
								<img className='gallery__item' src='assets/1.jpg' alt='Alt' />
								<img className='gallery__item' src='assets/2.jpg' alt='Alt' />

								<div className='text-block gallery__item'>
									<h2 className='text-block__h'>
										Creative floating scroll with amazing parallax effect
									</h2>
									<p className='text-block__p'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor amount scrolling.
									</p>
								</div>

								<img className='gallery__item' src='assets/6.jpg' alt='Alt' />
							</div>

							<div
								ref={galleryRightRef}
								data-speed='1.1'
								className='gallery__right'
							>
								<div className='text-block gallery__item'>
									<h2 className='text-block__h'>
										Creative floating scroll with amazing parallax effect
									</h2>
									<p className='text-block__p'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor amount scrolling.
									</p>
								</div>

								<img className='gallery__item' src='assets/4.jpg' alt='Alt' />
								<img className='gallery__item' src='assets/5.jpg' alt='Alt' />
								<img className='gallery__item' src='assets/3.jpg' alt='Alt' />
							</div>
						</main>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
