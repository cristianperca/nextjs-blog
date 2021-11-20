// localStorage is defined only on the client
// on the server we set a default value as 'Light Mode'

Warning: Text content did not match.
Server: "Dark Mode"
Client: "Light Mode"

The warning appears when on the client we have the lightMode while on the server the default darkMode.
Add this flag on the button that is setting the light/dark mode :
suppressHydrationWarning

      <button onClick={handleClick} suppressHydrationWarning>
