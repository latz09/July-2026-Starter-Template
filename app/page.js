import { fetchContent as fc } from '@/utils/cms/fetchContent';
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata';
import { FETCH_HOME_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_HOME_PAGE_DATA';

import PageContainer from '@/components/animations/PageContainer';


import SubmitContactForm from '@/components/sections/contact/SubmitContactForm';

import ButtonLink from '@/components/ui/ButtonLink';

import { Typography } from '@/components/design/Typography';
import ButtonPreviews from '@/components/design/ButtonPreviews';
import ColorPalette from '@/components/design/ColorPalette';
import SpacingScale from '@/components/design/SpacingScale';
import SanitySetup from '@/data/set-up/SanitySetup';
import SEOSetup from '@/data/set-up/SEOSetup';
import Link from 'next/link';


export async function generateMetadata() {
  return await BPM({ slug: '/', query: Q })
}



export default async function Home() {
	const data = await fc(Q);

	
	
	return (
		<PageContainer>
			{/* <SanitySetup />
			<SEOSetup /> */}
			<div className='max-w-3xl mx-auto grid place-items-center'>
				<ul className='space-y-0.5'>
					
					<li>
						Choose button type at <Link href="/design/buttons"><code className="text-primary font-black underline">/design/buttons</code></Link>
					</li>
					<li>
						Set color palette in <code>tailwind.config.js</code>
					</li>
				
					<li>
						Choose fonts and update metadata in <code>layout.js</code>
					</li>
					<li>
						Replace logo in <code>/public/images/business-name</code>
					</li>
				
					<li>Test contact form</li>
				</ul>
			</div>
	

			<Typography />
			<ColorPalette />			
			<ButtonPreviews />

			<SubmitContactForm />
		</PageContainer>
	);
}


export const revalidate = 10;