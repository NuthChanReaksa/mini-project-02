export default function FooterComponent() {
    return (
        <footer className="px-3 pt-4 bg-cyan-700 lg:px-9 border-t-2 text-center sm:text-center md:text-center">
            <div className="container mx-auto grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="ml-4">
                    <a href="index.html" className="flex items-center">
                        <img
                            src="https://istad.co/resources/img/CSTAD_120.png"
                            alt="logo"
                            className="cstadlogo"
                        />
                        <span className="ml-2 text-lg font-bold tracking-wide text-white">
              Start your IT career with CSTAD
            </span>
                    </a>
                    <p className="mt-4 text-sm text-white text-justify">
                        CSTAD is a leading e-commerce and technology hub in Cambodia. At CSTAD, we empower Cambodian students with advanced e-commerce knowledge and skills, equipping them to excel in the digital marketplace. Our comprehensive e-commerce programs and hands-on training enable our graduates.
                    </p>
                </div>
                <div className="flex flex-col gap-2 text-lg text-white">
                    <p className="text-base font-bold tracking-wide">LEARN MORE</p>
                    <a href="./course/course.html">E-Course</a>
                    <a href="./announcement/itnews.html">E-IT News</a>
                    <a href="./announcement/AnnounmnetJob.html">E-Job Opportunity</a>
                    <a href="./policy/privacy.html">E-Privacy Policy</a>
                    <a href="./policy/faq.html">E-FAQ</a>
                </div>
                <div className="flex flex-col gap-2 text-lg text-white">
                    <p className="text-base font-bold tracking-wide">POPULAR COURSE</p>
                    <a href="./course/course.html">E-Web Design</a>
                    <a href="./course/course.html">E-Flutter Mobile Development</a>
                    <a href="./course/course.html">E-Spring framework</a>
                    <a href="./course/course.html">E-Java Programming</a>
                </div>
                <div className="mt-3">
                    <p className="text-base font-bold tracking-wide text-white">
                        CSTAD IS ALSO AVAILABLE ON
                    </p>

                    <div className="gap-1 pt-5 pb-6 flex">
                        <a
                            href="https://apps.apple.com/kh/app/cstad-mobile/id6463835798"
                            className="w-full min-w-xl flex justify-end"
                        >
                            <img
                                src="https://social.webestica.com/assets/images/app-store.svg"
                                alt="Appstore Button"
                                className="h-10"
                            />
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=co.istad.mobile.istad_moblie&pcampaignid=web_share"
                            className="w-full min-w-xl"
                        >
                            <img
                                src="https://social.webestica.com/assets/images/google-play.svg"
                                alt="Playstore Button"
                                className="h-10"
                            />
                        </a>
                    </div>

                    <p className="text-base font-bold tracking-wide text-white">
                        Contacts
                    </p>
                    <div className="text-white">
                        <span className="mr-1">Email:</span>
                        <a href="mailto:info.istad@gmail.com" title="send email">
                            info.istad@gmail.com
                        </a>
                    </div>
                    <p className="text-white">
                        <a href="tel:+85595990910">(+855) 95-990-910</a>
                        <br />
                        <a href="tel:+85593990910">(+855) 93-990-910</a>
                    </p>
                    <div className="justify-start space-x-3 text-white text-2xl">
                        <a href="https://www.facebook.com/istad.co/?ref=embed_page">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.youtube.com/@istad7665">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="https://t.me/istadkh">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center pt-5 pb-10 border-t lg:flex-row">
                <p className="text-base text-white">
                    © 2023 Center of Science and Technology Advanced Development | All
                    Rights Reserved
                </p>
            </div>
        </footer>
    );
}
