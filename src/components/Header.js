import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { DropDown } from '@/components/DropDown'
import { Expandable } from '@/components/Expandable'
import iconTodo from '@/images/icons/icon-todo.svg'
import iconCalendar from '@/images/icons/icon-calendar.svg'
import iconPlanning from '@/images/icons/icon-planning.svg'
import iconReminders from '@/images/icons/icon-reminders.svg'

const features = [
  { name: 'Todo List', image: iconTodo },
  { name: 'Calendar', image: iconCalendar  },
  { name: 'Reminders', image: iconPlanning  },
  { name: 'Planning', image: iconReminders  },
]

const company = [
  { name: 'History' },
  { name: 'Our Team' },
  { name: 'Blog' },
]

const navigation = [
  {
    name: 'Features',
    current: false,
    children: [
      { name: 'Todo List', image: iconTodo },
      { name: 'Calendar', image: iconCalendar  },
      { name: 'Reminders', image: iconPlanning  },
      { name: 'Planning', image: iconReminders  },
    ],
  },
  {
    name: 'Company',
    current: false,
    children: [
      { name: 'History' },
      { name: 'Our Team' },
      { name: 'Blog' },
    ],
  },
  {
    name: 'Careers',
    current: false,
  },
  {
    name: 'About',
    current: false,
  }
]

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0 hidden"
        )}
      />
      {/* <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      /> */}
    </svg>
  )
}

function VersionOneMobile() {
  return (
    <>
      <Popover>
        <Popover.Button
          className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {({ open }) => <MobileNavIcon open={open} />}
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              as="div"
              className="absolute right-0 flex flex-col bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 h-screen"
            >
              <MobileNavLink href="#features">Features</MobileNavLink>
              <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
              <MobileNavLink href="#pricing">Pricing</MobileNavLink>
              <hr className="m-2 border-slate-300/40" />
              <MobileNavLink href="/login">Sign in</MobileNavLink>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    </>
  )
}

function VersionTwoMobile() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <svg
          aria-hidden="true"
          className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
          fill="none"
          strokeWidth={2}
          strokeLinecap="round">
          <path
            d="M0 1H14M0 7H14M0 13H14"
            className="origin-center transition" />
        </svg>
      </div>
      <nav className={clsx(
        "fixed top-0 right-0 w-3/5 h-full bg-white translate-x-full transition-transform duration-300 z-20",
        isOpen && 'translate-x-0')}>
        <div className="mt-8 flex justify-end">
          <a className="mr-2" onClick={() => setIsOpen(false)}>
            <svg
              aria-hidden="true"
              className="h-5 w-5 overflow-visible stroke-slate-700"
              fill="none"
              width="20"
              height="20"
              strokeWidth={2}
              strokeLinecap="round">
              <path
                d="M2 2L12 12M12 2L2 12"
                className="origin-center transition" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col ml-3">
          <Expandable list={navigation} />
          <div className="flex justify-center">
            <NavLink href="/login">Sign in</NavLink>
          </div>
          <div className="flex justify-center mt-2">
            <Button variant="outline" href="/register">
              Register
            </Button>
          </div>
        </div>
      </nav>
      <div className={clsx(
        "fixed top-0 right-0 w-full h-full z-10 transition-opacity overlay opacity-0 pointer-events-none",
        isOpen ? "opacity-100 pointer-events-auto" : "pointer-events-none")} onClick={() => setIsOpen(false)}>
      </div>
      <style jsx>{`
        .overlay {
          background-color: rgba(0,0,0,0.5);
        }
      `}</style>
    </>
  )
}

function MobileNavigation() {
  return (
    <VersionTwoMobile />
  )
}

export function Header() {
  return (
    <header className="py-4 md:py-8">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo className="h-12 w-auto flex pt-3" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <DropDown title='Features' list={features} />
              <DropDown title='Company' list={company}/>
              <NavLink href="">Careers</NavLink>
              <NavLink href="">About</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">Sign in</NavLink>
            </div>
            <div className="hidden md:block">
              <Button variant="outline" href="/register">
                Register
              </Button>
            </div>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
