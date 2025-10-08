# Setting Focus on Page Load

In typical web documents (as opposed to *applications*), setting keyboard focus on page load creates more disadvantages than advantages for users of assistive technology.

You **must not** set focus on page load without strong justification that it does not create a barrier for users of assistive technology.

### Disadvantages

* creates an inconsistency in navigation within the site/subsite since most pages do not set focus on page load
* sighted keyboard users that rely on keyboard shortcuts for navigation (Page Down/Spacebar, End, etc.) will need to leave the context of the text input in order to navigate
* screen reader users that rely on shortcuts for navigation will either need to leave the context of the input or exit "forms" mode in order to navigate

### Advantages

* mouse users are saved one click
* can bring users attention to a **critical** error message

### Exceptions

Specific MIND Patterns, such as [Page Notice](https://ebay.gitbook.io/mindpatterns/messaging/page-notice), may direct you to set focus on page load for critical error cases.
