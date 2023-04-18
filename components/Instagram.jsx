import React from 'react';
import igImage1 from '../public/igImage1.jpg';
import igImage2 from '../public/igImage2.jpg';
import igImage3 from '../public/igImage3.jpg';
import igImage4 from '../public/igImage4.jpg';
import igImage5 from '../public/igImage5.jpg';
import igImage6 from '../public/igImage6.jpg';
import InstagramImg from './InstagramImg';

const Instagram = () => {
	return (
		<div className=' max-w-[1240px] mx-auto my-auto text-center py-24 '>
			<p className='text-2xl font-bold'>Follow me on Instagram</p>
			<p className='pb-4'>@Capture</p>
			<div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4  '>
				<InstagramImg socialImg={igImage1} />
				<InstagramImg socialImg={igImage2} />
				<InstagramImg socialImg={igImage3} />
				<InstagramImg socialImg={igImage4} />
				<InstagramImg socialImg={igImage5} />
				<InstagramImg socialImg={igImage6} />
			</div>
		</div>
	);
};

export default Instagram;
