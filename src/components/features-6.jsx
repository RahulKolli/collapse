import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'
import { ChartAreaInteractive } from './chart-area-interactive';

export default function FeaturesSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div
                    className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">Empowering Connections for Clients & Talent</h2>
                    <p className="max-w-sm sm:ml-auto">Easily discover, connect, and collaborate with trusted professionals and businesses worldwide.</p>
                </div>
                <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
                    <div className="aspect-88/36 relative">
                        <div
                            className=""></div>
                       < ChartAreaInteractive />
                    </div>
                </div>
                <div
                    className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Instant Messaging</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Communicate in real time with clients or talent to keep projects moving forward.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Smart Matching</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Get matched with the best opportunities or professionals using intelligent algorithms.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Secure Collaboration</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Work together safely with built-in tools for contracts, payments, and feedback.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">Verified Network</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Join a community of verified clients and talent, ensuring quality and trust.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
