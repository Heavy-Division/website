# Heavy Division Website Contributing Guide

Thank you for your interest in contributing to the Heavy Division website.

Our site is built using the [React](https://beta.reactjs.org/) library and the [NextJS](https://nextjs.org/docs) framework.

1. To get started with contributing, fork this repository into a personal one. 

2. Once you're done, clone your personal fork into an IDE of your choice.
>Recommended IDEs: Visual Studio Code, WebStorm

3. Once you have cloned the repo, open the terminal and run `npm install` to install the necessary packages to run the website.

4. In the terminal type `git branch <your branch name> staging`. Then use your IDE to make sure you checkout the branch.

> Be specific with your branch names. Large PRs have a higher chance of being rejected so work on a reasonable amount of content per branch.

5. Be sure to add your changes to the CHANGELOG.md in the .github directory

6. Test the site using `npm run dev` or `npm run prod`.

>Note: Dynamic routes using NextJS router will be slow when running on the dev server, this is normal behavior and not present in the production build.

>If adding new front-end styling changes, test on desktop AND mobile to ensure responsive design. You can test on mobile by typing `npx next -H <your ipv4adress>` in the terminal and typing the link into your phone's browser
> 
7. When ready to submit, push your code to your personal branch and open up a Pull Request to merge into the Heavy Division `staging` branch.



## Guidelines 
The site is written in Typescript, and there are some standard practices to apply when working on our site.

❌ DO NOT: Assign the "any" type to your props or any other data
```
navBarProps = {
    link: any,
    children: any,
}
```

✅ DO: Be specific when assigning types
```
navBarProps = {
    link: string,
    title: ReactNode,
}
```

<br><br>
❌ DO NOT: Use Class Components or pure functions to create a new component
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function NavBar() {
    return <h1>Hello World</h1>
};
```

✅ DO: Use Arrow Syntax to create new components
```
export const NavBar = () => {
    return (
        <h1>Hello World</h1>
```

<br><br>
❌ DO NOT: Use next/link to link to external URLs
```jsx
export const NavBar = () => {
    return (
        <Link href={"www.github.com/heavy-division"}>
            Our Github Page
        </Link>
```
✅ DO: Use next/link to link to internal URLs
```jsx
export const NavBar = () => {
    return (
        <Link href={"/news"}>Our News Page</Link>
```

>Hint: For a quick overview of code styling errors, run `npm run lint` in the terminal. To automatically fix them run `npm run lint -- --fix`

Ping HowNowBrownCrow#2591 in the [Website Development](https://discord.com/channels/808476259016769546/978702926388285454) channel if you have any questions about contributing.
