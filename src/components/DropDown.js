import Image from 'next/image'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

function Chevron({ open }) {
  return (
    <>
      <ChevronUpIcon
        className={`${
          !open ? 'rotate-180 transform' : ''
        } h-5 w-5`} />
    </>
  )
}

function PanelLogo({ image }) {
  if (image) {
    return (
      <>
        <div>
          <Image src={image} alt={image} unoptimized />
        </div>
      </>
    )
  }
}

export function DropDown({ title, list }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={clsx(
              open ? 'text-gray-900 border-hidden ring-white' : 'text-gray-500',
              'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900'
            )}
          >
            <span>{title}</span>
            <Chevron open={open} />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-1 w-40 max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {list.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 block rounded-md transition duration-150 ease-in-out hover:bg-gray-50"
                    >
                      <div className="flex justify-start items-center">
                        <PanelLogo image={item.image} />
                        <p className="text-base font-medium text-gray-900 ml-4">{item.name}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}