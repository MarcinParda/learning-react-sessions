# Naming Conventions in React

## Components

1. Use PascalCase for component names. For example: `UserProfileCard`, not `userProfileCard` or `user-profile-card`.
2. Always try to use a suffix that describes what the component actually is, whether it's a button or a form. For example: `Button`, `SettingsForm`.
3. Use names that accurately describe the purpose of the component or its context. For example: `UserProfileCard`, `CheckoutPaymentForm`, `AdminDashboardHeader`.
4. If the component is reusable, use a general name and then add a modifier indicating the specific use. For example: `Button`, `PrimaryButton`, `ErrorMessage`.
5. Avoid names that repeat the name of the parent. If the `UserProfileCard` component has an `Avatar` component, simply name it `Avatar`, not `UserProfileCardAvatar`. Of course, maintain the proper hierarchy in the file structure.
6. Avoid abbreviations and acronyms unless they are commonly known and understood by the team. Instead of `UPCard`, use `UserProfileCard`.

`UserPrimaryCard` - Example of creating a component name: context (User) + state (Primary) + component type (Card).

## Props

Component props are its API, the interface through which communication with the component happens. Therefore, it's good to have consistent naming conventions for props throughout the component.

Firstly, let's focus on the fact that if we have a child and a parent component, communication can occur in two directions: from parent to child and from child to parent.

### Communication from parent to child is divided into two different types of props:

1. Static/Dynamic props, e.g.,
```tsx
<Person firstname="Jack" lastname="Sparrow" age={age} />
```
These are variables with a specific assigned value (static) or a value that can change (dynamic).
We name them using the present tense.

Sometimes we want to indicate that the variable is a specific structure/type.
- For boolean type variables, use the `is` prefix, e.g., `isEnabled`.
- Use the plural for lists, e.g., `users={["John", "Barbara"]}`
- You can also indicate this by using a suffix, e.g., `userList`, `headerComponent`, `personObject`. However, this practice is becoming less common due to the widespread use of types, allowing us to quickly check the structure of the prop.

2. Commands are reactions to events, so we use them as **values** for props that listen for events, e.g.,
```tsx
<Button onClick={handleSendLoginForm} onHover={handleCheckFormErrors} /> 
<Button onClick={sendLoginForm} onHover={checkFormErrors} />
```

These are functions, for which we use the present tense + optionally the `handle` prefix. We avoid using names like `handleOnClick` because it says little about what the function does. The command name should indicate what will happen when it is called.

### Communication from child to parent uses props referred to as events.

An event handles an action that has already occurred, e.g., a button click. Typically, actions are performed on a DOM element (scrolling the page, moving the mouse, pressing a button). Example events:

```tsx
function Button({onClick}) { 
  return <button onClick={onClick} />; 
}
 
function Button({onClick}) { 
  const handleButtonClick() { 
    // some side effect 
    onClick() 
  }
  return <button onClick={handleButtonClick} />; 
}
```

We name events using the present tense and the `on` prefix. For example, `onClick`, `onHover`, `onSubmit`, `onScroll`. A good practice is to use the event type at the end (`onButtonClick` rather than `onClickButton`).

In summary, use events (`onClick`) when you want to pass information from child to parent. Use commands (`handleSaveForm`) and static/dynamic props (`isEnabled`) when you want to pass information from parent to child.