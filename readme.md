# notes

**navigation syncing**

access to the parent history object is only possible if shell and app1 are served from the same origin.
reverse proxying does NOT count as same origin. subdomains also dont count as same-origin.
we'd have to use `window.postMessage` to push url changes from apps to the shell, which would require a code change in the apps.
