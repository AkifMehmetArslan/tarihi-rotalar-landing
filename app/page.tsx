import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
            <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <div className="text-center lg:text-left">
                            {/* Title */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Tarihi Rotalar
                            </h1>

                            {/* Subtitle */}
                            <p className="text-xl sm:text-2xl text-gray-700 mb-6 sm:mb-8 text-balance">
                                Türkiye&apos;nin tarihi sokaklarında, kendi rehberinizle geziyormuş gibi dolaşın.
                            </p>

                            {/* Description */}
                            <div className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 space-y-3 max-w-2xl mx-auto lg:mx-0">
                                <p>
                                    Tarihi Rotalar, Türkiye&apos;nin öne çıkan tarihi bölgelerinde özenle hazırlanmış yürüyüş rotaları sunar. Her rota; harita üzerinde takip edebileceğiniz güzergâhlar ile sesli ve videolu anlatımlarla zenginleştirilmiştir.
                                </p>
                                <p>
                                    Turu dilediğiniz zaman başlatabilir, yürürken tarihi hikâyeleri dinleyerek önemli yapılar ve mekânlar hakkında ayrıntılı bilgiler edinebilirsiniz. Böylece klasik turlardan bağımsız, kendi temponuzda gezme özgürlüğüne sahip olursunuz.
                                </p>
                            </div>

                            {/* Platform Badge */}
                            <div className="mb-4">
                                <p className="text-sm font-semibold text-gray-700 text-center lg:text-left">
                                    iOS ve Android cihazlar için geliştirildi.
                                </p>
                            </div>

                            {/* Download Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                                {/* App Store Button */}
                                <a
                                    href="https://apps.apple.com/app/id6754540728"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center justify-center gap-3 px-6 py-4 bg-black text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                                >
                                    <svg
                                        className="w-8 h-8"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs opacity-90">İndir</div>
                                        <div className="text-base font-bold">App Store</div>
                                    </div>
                                </a>

                                {/* Google Play Button */}
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.ubutsoft.tarihirotalar&hl=tr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                                >
                                    <svg
                                        className="w-8 h-8"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs opacity-90">İndir</div>
                                        <div className="text-base font-bold">Google Play</div>
                                    </div>
                                </a>
                            </div>

                            {/* Footer Text */}
                            <p className="text-sm text-gray-500 text-center lg:text-left">
                                Dünya genelinde App Store ve Google Play&apos;den indirilebilir.
                            </p>
                        </div>

                        {/* Right Column - Phone Mockup */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-sm">
                                {/* Phone Frame */}
                                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>

                                    {/* Screen */}
                                    <div className="relative bg-white rounded-[2.5rem] aspect-[9/19] overflow-hidden">
                                        {/* Screen Content - Real Screenshot */}
                                        <Image
                                            src="/app-screenshot.png"
                                            alt="Tarihi Rotalar App Screenshot"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20 blur-2xl"></div>
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-400 rounded-full opacity-20 blur-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
