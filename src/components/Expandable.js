import Image from 'next/image'
import clsx from 'clsx'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

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

export function Expandable({ list }) {
  return (
    <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-1 pb-4">
      <div className="mt-5 flex flex-grow flex-col">
        <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
          {list.map((item) =>
            !item.children || item.children.length === 0 ? (
              <div key={item.name}>
                <a
                  href="#"
                  className={clsx(
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group w-full flex items-center pl-2 py-1 text-sm font-medium rounded-md'
                  )}
                >
                  {item.name}
                </a>
              </div>
            ) : (
              <Disclosure as="div" key={item.name} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={clsx(
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group w-full flex items-center pl-2 pr-1 py-1 text-left text-sm font-medium rounded-md focus:outline-none'
                      )}
                    >
                      <span className="flex-1">{item.name}</span>
                      <ChevronUpIcon
                        className={`${
                          !open ? 'rotate-180 transform' : ''
                        } h-5 w-5`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as="a"
                          href={subItem.href}
                          className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        >
                          <PanelLogo image={subItem.image} />
                          <p className="text-sm text-gray-900 ml-4">{subItem.name}</p>
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
      </div>
    </div>
  )
}
