import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import clientAudiophile from '@/images/clients/client-audiophile.svg'
import clientDatabiz from '@/images/clients/client-databiz.svg'
import clientMaker from '@/images/clients/client-maker.svg'
import clientMeet from '@/images/clients/client-meet.svg'
import backgroundImage from '@/images/image-hero-desktop.png'

export function Hero() {
  return (
    <Container className="text-center px-0">
      <div className="flex flex-col-reverse sm:justify-center sm:flex-row">
        <div className="pt-10 lg:pt-20 pr-2 pl-2 sm:pr-12 sm:pl-12">
          <h1 className="flex flex-row justify-center sm:flex-col mx-auto max-w-4xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-4xl lg:text-7xl pb-4">
            <p className="pr-2 sm:pr-0 sm:text-left">Make</p>
            <p className="whitespace-nowrap sm:text-left">remote work</p>
          </h1>
          <div className="flex flex-col items-center sm:items-start">
            <p className="mt-2 sm:mt-1 text-left mx-auto max-w-4xl text-medium lg:text-lg tracking-tight text-slate-700 sm:w-full">
              Get your team in sync, no matter your location.
            </p>
            <p className="mt-2 sm:mt-1 text-left mx-auto max-w-4xl text-medium lg:text-lg tracking-tight text-slate-700 sm:w-full">
              Streamline processes, create team rituals, and
            </p>
            <p className="mt-2 sm:mt-1 text-left mx-auto max-w-4xl text-medium lg:text-lg tracking-tight text-slate-700 sm:w-full">
              watch productivity soar.
            </p>
          </div>
          <div className="mt-10 mx-auto max-w-4xl flex gap-x-6 flex-row justify-center sm:justify-start">
            <Button href="/register">Learn More</Button>
          </div>

          <div className="mt-10 lg:mt-36">
            <ul
              role="list"
              className="mt-8 mb-4 ml-4 mr-4 sm:mb-0 sm:ml-0 sm:mr-0 flex items-center justify-center gap-x-8 sm:flex-row sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
            >
              {[
                [
                  { name: 'Databiz', logo: clientDatabiz },
                  { name: 'Audiophile', logo: clientAudiophile },
                  { name: 'Meet', logo: clientMeet },
                  { name: 'Maker', logo: clientMaker },
                ]
              ].map((group, groupIndex) => (
                <li key={groupIndex}>
                  <ul
                    role="list"
                    className="flex flex-row items-center justify-center gap-y-8 sm:gap-x-12 sm:gap-y-0"
                  >
                    {group.map((company) => (
                      <li key={company.name} className="flex mr-4">
                        <Image src={company.logo} alt={company.name} width={100} unoptimized />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <Image
            src={backgroundImage}
            alt="hero"
            width={480}
            height={660}
            contain
            priority
            unoptimized
          />
        </div>
      </div>
    </Container>
  )
}
