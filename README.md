# tracker
Sample tracker based on coding with Mosh
https://codewithmosh.com/p/ultimate-nextjs-series

# Need to know 
React
Typescript

# Fundamentals
NextJS - Framework for fast and search engine friendly apps using react.
Libs + Tools + Conventions
Has it's own router, a compiler a CLI and a nodejs runtime.

The nodejs runtime is what will run some backendcode, we try to push as much as possible into the backend and render components on the server. (SSR - Server side rendering)
This allows us to be fullstack on the same language.

This also allow us to pre-render a page that is mostly static just once and serve it the same all the time. This makes the page/component smaller and more light weight.
This is called Static Site Generation.

The commands for create the project, launching it, compiling it etc are cristalized on the makefile.

# Dev environment
NodeJS 18+ (Using 21 at the time of build)
React 18
NextJS 13.4 (v14 already came out at this time, but keeping the tuturial version)

VSCode as editor. 
Recomended vscdode extensions

Name: ES7+ React/Redux/React-Native snippets
Id: dsznajder.es7-react-js-snippets
Description: Extensions for React, React-Native and Redux in JS/TS with ES7+ syntax. Customizable. Built-in integration with prettier.
Version: 4.4.3
Publisher: dsznajder
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

Name: JavaScript and TypeScript Nightly
Id: ms-vscode.vscode-typescript-next
Description: Enables typescript@next to power VS Code's built-in JavaScript and TypeScript support
Version: 5.5.20240505
Publisher: Microsoft
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next

Name: Tailwind CSS IntelliSense
Id: bradlc.vscode-tailwindcss
Description: Intelligent Tailwind CSS tooling for VS Code
Version: 0.10.5
Publisher: Tailwind Labs
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss


# client side rendering
Large bundles
Resource Intensive
No SEO
Less Secure

# Server side rendering
Smaller bundles
Resource efficient
SEO Friendly 
More secure - API Keys stay at the server for example.

Howver, SSR can't
Listen to browser events
Access Browser APIs
Maintain state
Use Effects.

Due to these downsides we want to use a mix of CSR and SSR.


# Static and Dynamic rendering
Static - We can use nextjs render them once and just serve carched versions of it.
Light on resources, renders at build time.

Dynamic - Renders at request time / runtime.

This is a different concept from client vs server rendering, this is how the behavior works at server side rendering.

Nextjs decides if the page is static or dynamic based on the data being fetched.
Example: If we disable caching on the fetch, nextjs thinks the component will display dinamyc data na will start rendering the page dynamically.

Attention: The behavior might differ from running the app as dev vs building the app for production.
When we build the app the log will show if the routes are being rendered as static or dynamic.

In PRD: If we set a cache revalidation, when the cache revalidates a new version is rerendered and shown. 

We can see this in action, by manipulating the fetch to have (or not) cache, and set something on the HTML that shows the current time in seconds.

 
# Styling the app

## Global styles
Globals.css imports base styles of tailwind, a CSS framework.

:root -> typically used to define custom css props.
Don't define custom css classes on the globals.css

## CSS Modules
Scopes CSS to a component. Avoids overwriting the styles. (Example: having the same css class declared twice on different components.)
Use this by creating a file called XPTO.module.css and import it on the component.
This will be imported as a js object so follow the same rules when naming classes and you would declaring variables. Rule of tumb, use camelcase.

Sample:
Do import styles from './ProductCard.module.css' THEN <div className={styles.cardContainer}>

This auto generates new classnames for modules with postCss and this is the magic that avoids classnames clashes.

This also works with pages.

## Tailwind
Uses css utility classes combined to generate complex layouts.
ex: flex, pt-4, text-center, rotate-90...
p-[number] - padding
px-[number] - padding on x axis, py-[number] - padding on y axis, pt-[number] - padding on top, etc. 
Same for margins, and textJs.
Tailwind also has a color palette we can use with the same concept.

sample using modules and tailwinds:
<div className={'p-5 my-5 text-xl bg-sky-400 text-white hover:bg-sky-600 ' + styles.cardContainer}>

## DaisyUI
Component library for tailwind.
We need to config tailwind to use that plugin.
