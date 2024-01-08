import Image from "next/image"


const socialNetworks = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
        icon: '/icons/facebook.svg',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/?lang=es',
        icon: '/icons/simple-icons_x.svg',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        icon: '/icons/mdi_instagram.svg',
    },
    {
        name: 'TikTok',
        url: 'https://www.tiktok.com/es/',
        icon: '/icons/ic_baseline-tiktok.svg',
    },
]


export default function SocialNetworks({customClass}) {
    
    return(
        <div className={`${customClass} md:flex flex-row`}>
            {
                socialNetworks.map((network) => (
                <a key={network.name} href={network.url} target="_blank" className="p-3">
                    <Image 
                    src={network.icon}
                    alt= {`${network.name} Icon`}
                    width={24}
                    height={24}
                    />
                </a>
                ))
            }
            
        </div>
    )
}