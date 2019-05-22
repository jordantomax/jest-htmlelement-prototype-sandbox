# Overriding HTMLElement prototype sandbox

This is an example of inability to access `this` when inside overriding `offsetTop` method.

simply `yarn install` and `yarn test` to see that the value of `this` inside `offsetTop` getter is undefined. Any help hugely appreciated!
