# ExternalLinkDirective

This project creates an anchor directive that targets every external link in our template. We’ll see how we can:

1. Target native HTML elements
2. Ex clude elements by use the :not pseudo-class.

## Case Study

If you have ever created an Angular directive before, you probably used the brackets ([]) notation as a selector.

Most of the time it’s the preferred way, but it’s not a requirement. Actually, you can get pretty creative with the selectors used in your directives.

To emphasize this, we’ll create an anchor directive that targets every external link in our template. We’ll see how we can:

1. Target native HTML elements
2. Exclude elements by use the :not pseudo-class.

## Few things to highlight

- You can target more than one selector by separate each selector with a comma
- You can mix targeting HTML elements (like <form>) with HTML attributes (like ngForm)
- You can use the :not pseudo-class to exclude some elements

### Example

@Directive({
selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]',
})

## How to create the External Link Directive

We define the external link as any anchor tag that doesn’t already have the routerLink directive.
The directive should do the following:

1. Open the link in a separate window
2. Add the rel attribute to improve performance and prevent security vulnerabilities

## Sumary

You don’t have to use the attribute selector when working with Angular directives.
We’ve examined the ngForm directive, and used it as an example to implement our own custom external link directive.
