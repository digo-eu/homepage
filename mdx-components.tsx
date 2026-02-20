import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 
const components = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl font-bold">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl">{children}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => <p className="text-lg">{children}</p>,
  li: ({ children }: { children: React.ReactNode }) => <li className="list-disc ml-4">{children}</li>,
  a: ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <a
      className="text-blue-500 hover:text-blue-600 visited:text-purple-600"
      href={href}
    >
      {children}
    </a>
  ),
  img: (props: ImageProps) => (
    <Image
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      {...(props as ImageProps)}
    />
  ),
} satisfies MDXComponents
 
export function useMDXComponents(): MDXComponents {
  return components
}